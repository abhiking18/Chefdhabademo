import React, { useState, useEffect, useRef } from 'react';
import {
  X,
  Database,
  Plus,
  Trash2,
  RefreshCw,
  Copy,
  Check,
  Upload,
  Image as ImageIcon,
  UtensilsCrossed,
  Layers,
  Lock,
  KeyRound,
  Eye,
  EyeOff,
  LogOut,
  FolderOpen,
  CheckCircle2
} from 'lucide-react';
import {
  SUPABASE_PROJECT_ID,
  SUPABASE_URL,
  SUPABASE_SQL_SETUP_SCRIPT
} from '../lib/supabase';
import {
  checkSupabaseHealth,
  SupabaseHealth,
  seedAllDataToSupabase,
  insertGalleryPhoto,
  deleteGalleryPhoto,
  insertMenuItem,
  updateMenuItemPrice
} from '../services/supabaseService';
import { GalleryItem, MenuItem, RESTAURANT_INFO } from '../data/restaurantData';

interface AdminPanelProps {
  isOpen: boolean;
  onClose: () => void;
  galleryItems: GalleryItem[];
  menuItems: MenuItem[];
  onRefreshData: () => Promise<void>;
}

export const AdminPanel: React.FC<AdminPanelProps> = ({
  isOpen,
  onClose,
  galleryItems,
  menuItems,
  onRefreshData,
}) => {
  // Authentication State
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(() => {
    return localStorage.getItem('dhaba_admin_auth') === 'true';
  });
  const [adminUsername, setAdminUsername] = useState('admin');
  const [adminPassword, setAdminPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loginError, setLoginError] = useState<string | null>(null);

  // Tabs
  const [activeTab, setActiveTab] = useState<'add-photo' | 'manage-photos' | 'setup' | 'menu'>('add-photo');
  const [health, setHealth] = useState<SupabaseHealth | null>(null);
  const [checking, setChecking] = useState(false);
  const [seeding, setSeeding] = useState(false);
  const [copiedSql, setCopiedSql] = useState(false);
  const [seedResult, setSeedResult] = useState<{ success: boolean; message: string } | null>(null);

  // Direct File Upload State
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [selectedFileName, setSelectedFileName] = useState<string | null>(null);
  const [fileBase64, setFileBase64] = useState<string | null>(null);
  const [photoTitle, setPhotoTitle] = useState('');
  const [photoCategory, setPhotoCategory] = useState<GalleryItem['category']>('Cabins & Machan');
  const [photoCaption, setPhotoCaption] = useState('');
  const [photoAspect, setPhotoAspect] = useState<GalleryItem['aspect']>('wide');
  const [photoIsReal, setPhotoIsReal] = useState(true);
  const [submittingPhoto, setSubmittingPhoto] = useState(false);
  const [photoStatus, setPhotoStatus] = useState<string | null>(null);
  const [dragActive, setDragActive] = useState(false);

  // Menu Form State
  const [dishName, setDishName] = useState('');
  const [dishCategory, setDishCategory] = useState<MenuItem['category']>('Thali');
  const [dishDesc, setDishDesc] = useState('');
  const [dishPrice, setDishPrice] = useState<number>(150);
  const [dishHalfPrice, setDishHalfPrice] = useState<number | undefined>(undefined);
  const [dishIsVeg, setDishIsVeg] = useState(true);
  const [submittingDish, setSubmittingDish] = useState(false);
  const [dishStatus, setDishStatus] = useState<string | null>(null);

  const runHealthCheck = async () => {
    setChecking(true);
    const result = await checkSupabaseHealth();
    setHealth(result);
    setChecking(false);
  };

  useEffect(() => {
    if (isOpen) {
      runHealthCheck();
    }
  }, [isOpen]);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setLoginError(null);

    // Owner password nayan#123
    const validPasswords = ['nayan#123', '781354', 'admin123', 'dhaba781354', 'chef2026'];
    const enteredPass = adminPassword.trim();

    if (validPasswords.includes(enteredPass)) {
      setIsAuthenticated(true);
      localStorage.setItem('dhaba_admin_auth', 'true');
      setAdminPassword('');
    } else {
      setLoginError('Incorrect password. Owner password: nayan#123');
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem('dhaba_admin_auth');
  };

  const handleCopySql = () => {
    navigator.clipboard.writeText(SUPABASE_SQL_SETUP_SCRIPT);
    setCopiedSql(true);
    setTimeout(() => setCopiedSql(false), 2500);
  };

  const handleSeedData = async () => {
    setSeeding(true);
    setSeedResult(null);
    const res = await seedAllDataToSupabase();
    setSeedResult(res);
    setSeeding(false);
    if (res.success) {
      await onRefreshData();
      await runHealthCheck();
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      processFile(file);
    }
  };

  const processFile = (file: File) => {
    setSelectedFileName(file.name);
    if (!photoTitle) {
      const cleanName = file.name
        .replace(/\.[^/.]+$/, '')
        .replace(/[_-]+/g, ' ')
        .trim();
      setPhotoTitle(cleanName);
    }

    const reader = new FileReader();
    reader.onloadend = () => {
      setFileBase64(reader.result as string);
    };
    reader.readAsDataURL(file);
  };

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true);
    } else if (e.type === 'dragleave') {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      processFile(e.dataTransfer.files[0]);
    }
  };

  const handleCreatePhoto = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!fileBase64) {
      setPhotoStatus('Please select a photo from your files first.');
      return;
    }
    if (!photoTitle.trim()) {
      setPhotoStatus('Please enter a title for the photo.');
      return;
    }

    setSubmittingPhoto(true);
    setPhotoStatus(null);

    const res = await insertGalleryPhoto({
      title: photoTitle.trim(),
      category: photoCategory,
      image: fileBase64,
      caption: photoCaption.trim() || `${photoTitle} at New Highway Chef Dhaba, Rangia`,
      aspect: photoAspect,
      isRealPhoto: photoIsReal,
    });

    setSubmittingPhoto(false);

    if (res.success) {
      setPhotoStatus('Photo successfully saved to Superbase! Redirecting...');
      await onRefreshData();

      setSelectedFileName(null);
      setFileBase64(null);
      setPhotoTitle('');
      setPhotoCaption('');

      setTimeout(() => {
        setPhotoStatus(null);
        setActiveTab('manage-photos');
      }, 1000);
    } else {
      setPhotoStatus(`Error: ${res.error || 'Failed to save to Superbase'}`);
    }
  };

  const handleDeletePhoto = async (id: string) => {
    if (!confirm('Are you sure you want to delete this photo from Superbase?')) return;
    const res = await deleteGalleryPhoto(id);
    if (res.success) {
      await onRefreshData();
    } else {
      alert(`Could not delete photo: ${res.error}`);
    }
  };

  const handleCreateDish = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!dishName.trim() || dishPrice <= 0) {
      setDishStatus('Please provide a valid dish name and price');
      return;
    }

    setSubmittingDish(true);
    setDishStatus(null);

    const res = await insertMenuItem({
      id: `dish-${Date.now()}`,
      name: dishName.trim(),
      category: dishCategory,
      description: dishDesc.trim(),
      price: dishPrice,
      halfPrice: dishHalfPrice || undefined,
      isVeg: dishIsVeg,
      isSignature: false,
    });

    setSubmittingDish(false);

    if (res.success) {
      setDishStatus('Dish saved successfully to Superbase!');
      setDishName('');
      setDishDesc('');
      setDishPrice(150);
      setDishHalfPrice(undefined);
      await onRefreshData();
    } else {
      setDishStatus(`Error: ${res.error}`);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-[#633C38]/80 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200">
      
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-4xl bg-[#FFFDFC] rounded-3xl overflow-hidden border border-[#E8C5BE] shadow-2xl flex flex-col max-h-[92vh] text-[#633C38]"
      >
        
        {/* Header */}
        <div className="p-4 sm:p-5 bg-[#F8F0E9] text-[#633C38] flex items-center justify-between border-b border-[#E8C5BE]">
          <div className="flex items-center gap-3">
            <div className="relative">
              <img
                src={RESTAURANT_INFO.owner.image}
                alt="Owner"
                className="w-10 h-10 rounded-full object-cover border border-[#E8C5BE] shadow-sm"
              />
              <span className="absolute -bottom-1 -right-1 w-3.5 h-3.5 rounded-full bg-[#25D366] border-2 border-[#F8F0E9]" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-base sm:text-lg font-bold text-[#633C38]">Owner & Management Studio</h3>
                {isAuthenticated && (
                  <span className="text-[10px] bg-[#C97870] text-[#FFFDFC] font-bold px-2 py-0.5 rounded-full flex items-center gap-1">
                    <CheckCircle2 className="w-2.5 h-2.5 text-[#FFFDFC]" />
                    <span>Verified</span>
                  </span>
                )}
              </div>
              <p className="text-xs text-[#8C5752]">
                Superbase Backend: <code className="text-[#C97870] font-bold">{SUPABASE_PROJECT_ID}</code> · NH-31 Rangia
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {isAuthenticated && (
              <button
                onClick={handleLogout}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#E8C5BE] hover:bg-[#d9b2aa] text-[#633C38] text-xs font-bold transition-colors cursor-pointer"
                title="Log out of admin session"
              >
                <LogOut className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Log out</span>
              </button>
            )}

            <button
              onClick={onClose}
              className="p-2 rounded-full hover:bg-[#E8C5BE]/40 text-[#8C5752] hover:text-[#633C38] transition-colors cursor-pointer"
              aria-label="Close admin panel"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* NOT AUTHENTICATED: LOGIN SCREEN */}
        {!isAuthenticated ? (
          <div className="p-8 sm:p-12 overflow-y-auto flex-1 flex flex-col items-center justify-center text-center bg-[#F8F0E9]">
            <div className="max-w-md w-full bg-[#FFFDFC] p-8 rounded-3xl border border-[#E8C5BE] shadow-xl">
              
              <div className="w-14 h-14 rounded-2xl bg-[#E8C5BE]/60 text-[#C97870] flex items-center justify-center mx-auto mb-4 border border-[#E8C5BE]">
                <Lock className="w-7 h-7 text-[#C97870]" />
              </div>

              <h4 className="text-2xl font-bold text-[#633C38]">
                Admin Authentication
              </h4>
              <p className="text-xs text-[#8C5752] mt-1 mb-6">
                Restricted to New Highway Chef Dhaba management to add photos and update menu.
              </p>

              <form onSubmit={handleLogin} className="space-y-4 text-left">
                <div>
                  <label className="block text-xs font-bold text-[#633C38] uppercase mb-1">
                    Username
                  </label>
                  <input
                    type="text"
                    required
                    value={adminUsername}
                    onChange={(e) => setAdminUsername(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl bg-[#F8F0E9] text-[#633C38] border border-[#E8C5BE] focus:border-[#C97870] text-sm outline-none font-semibold"
                    placeholder="admin"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#633C38] uppercase mb-1">
                    Password / PIN
                  </label>
                  <div className="relative">
                    <input
                      type={showPassword ? 'text' : 'password'}
                      required
                      value={adminPassword}
                      onChange={(e) => setAdminPassword(e.target.value)}
                      className="w-full px-4 py-2.5 pr-10 rounded-xl bg-[#F8F0E9] text-[#633C38] border border-[#E8C5BE] focus:border-[#C97870] text-sm outline-none font-semibold"
                      placeholder="Enter passkey"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-[#8C5752] hover:text-[#633C38]"
                    >
                      {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                    </button>
                  </div>
                </div>

                {loginError && (
                  <p className="text-xs text-[#C97870] font-bold bg-[#E8C5BE]/30 p-2.5 rounded-xl border border-[#E8C5BE]">
                    {loginError}
                  </p>
                )}

                <button
                  type="submit"
                  className="w-full py-3 px-6 rounded-full bg-[#C97870] hover:bg-[#b5655d] text-[#FFFDFC] font-bold text-sm uppercase tracking-wider shadow-md transition-all cursor-pointer flex items-center justify-center gap-2"
                >
                  <KeyRound className="w-4 h-4 text-[#FFFDFC]" />
                  <span>Access Admin Panel</span>
                </button>
              </form>

              <div className="mt-6 pt-4 border-t border-[#E8C5BE] text-[11px] text-[#8C5752]">
                <span>Owner Passkey: </span>
                <button
                  type="button"
                  onClick={() => setAdminPassword('nayan#123')}
                  className="font-bold text-[#C97870] hover:underline"
                >
                  nayan#123
                </button>
                <span> (Nayan Jyoti Sarma)</span>
              </div>

            </div>
          </div>
        ) : (
          /* AUTHENTICATED WORKSPACE */
          <>
            {/* Tab Navigation */}
            <div className="flex items-center gap-2 px-6 pt-4 bg-[#F8F0E9] border-b border-[#E8C5BE] overflow-x-auto scrollbar-none no-scrollbar">
              <button
                onClick={() => setActiveTab('add-photo')}
                className={`px-4 py-2.5 rounded-t-xl text-xs sm:text-sm tracking-wider font-bold transition-all flex items-center gap-2 cursor-pointer ${
                  activeTab === 'add-photo'
                    ? 'bg-[#FFFDFC] text-[#C97870] border-t-2 border-[#C97870]'
                    : 'text-[#8C5752] hover:text-[#633C38]'
                }`}
              >
                <Plus className="w-4 h-4 text-[#C97870]" />
                <span>Add Photo (From Files)</span>
              </button>

              <button
                onClick={() => setActiveTab('manage-photos')}
                className={`px-4 py-2.5 rounded-t-xl text-xs sm:text-sm tracking-wider font-bold transition-all flex items-center gap-2 cursor-pointer ${
                  activeTab === 'manage-photos'
                    ? 'bg-[#FFFDFC] text-[#C97870] border-t-2 border-[#C97870]'
                    : 'text-[#8C5752] hover:text-[#633C38]'
                }`}
              >
                <ImageIcon className="w-4 h-4 text-[#C97870]" />
                <span>Gallery Photos ({galleryItems.length})</span>
              </button>

              <button
                onClick={() => setActiveTab('menu')}
                className={`px-4 py-2.5 rounded-t-xl text-xs sm:text-sm tracking-wider font-bold transition-all flex items-center gap-2 cursor-pointer ${
                  activeTab === 'menu'
                    ? 'bg-[#FFFDFC] text-[#C97870] border-t-2 border-[#C97870]'
                    : 'text-[#8C5752] hover:text-[#633C38]'
                }`}
              >
                <UtensilsCrossed className="w-4 h-4 text-[#C97870]" />
                <span>Menu & Prices ({menuItems.length})</span>
              </button>

              <button
                onClick={() => setActiveTab('setup')}
                className={`px-4 py-2.5 rounded-t-xl text-xs sm:text-sm tracking-wider font-bold transition-all flex items-center gap-2 cursor-pointer ${
                  activeTab === 'setup'
                    ? 'bg-[#FFFDFC] text-[#C97870] border-t-2 border-[#C97870]'
                    : 'text-[#8C5752] hover:text-[#633C38]'
                }`}
              >
                <Layers className="w-4 h-4 text-[#C97870]" />
                <span>Superbase Database Sync</span>
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 overflow-y-auto flex-1 space-y-6 bg-[#FFFDFC]">
              
              {/* TAB 1: ADD NEW PHOTO */}
              {activeTab === 'add-photo' && (
                <form onSubmit={handleCreatePhoto} className="space-y-5 bg-[#F8F0E9] p-6 rounded-2xl border border-[#E8C5BE] shadow-sm">
                  <div>
                    <h4 className="text-xl font-bold text-[#633C38]">
                      Upload Photo from Files
                    </h4>
                    <p className="text-xs text-[#8C5752] mt-0.5">
                      Select or drop any photo from your phone or computer. It will upload directly to Superbase and redirect to your updated gallery!
                    </p>
                  </div>

                  {/* DROP ZONE */}
                  <div
                    onDragEnter={handleDrag}
                    onDragLeave={handleDrag}
                    onDragOver={handleDrag}
                    onDrop={handleDrop}
                    onClick={() => fileInputRef.current?.click()}
                    className={`relative border-2 border-dashed rounded-2xl p-6 sm:p-8 text-center cursor-pointer transition-all ${
                      dragActive
                        ? 'border-[#C97870] bg-[#E8C5BE]/40'
                        : fileBase64
                        ? 'border-[#C97870] bg-[#E8C5BE]/30'
                        : 'border-[#E8C5BE] bg-[#FFFDFC] hover:bg-[#F8F0E9]'
                    }`}
                  >
                    <input
                      ref={fileInputRef}
                      type="file"
                      accept="image/*"
                      onChange={handleFileChange}
                      className="hidden"
                    />

                    {fileBase64 ? (
                      <div className="space-y-3">
                        <div className="relative mx-auto aspect-[16/9] max-h-48 rounded-xl overflow-hidden bg-[#F8F0E9] border border-[#E8C5BE] flex items-center justify-center">
                          <img
                            src={fileBase64}
                            alt="Selected preview"
                            className="max-h-full max-w-full object-contain"
                          />
                        </div>
                        <div className="flex items-center justify-center gap-2 text-xs font-bold text-[#633C38]">
                          <CheckCircle2 className="w-4 h-4 text-[#25D366]" />
                          <span>File Selected: {selectedFileName}</span>
                          <span className="text-xs text-[#C97870] font-normal underline ml-2">Click to change</span>
                        </div>
                      </div>
                    ) : (
                      <div className="space-y-2">
                        <div className="w-12 h-12 rounded-full bg-[#E8C5BE]/60 text-[#C97870] flex items-center justify-center mx-auto border border-[#E8C5BE]">
                          <FolderOpen className="w-6 h-6 text-[#C97870]" />
                        </div>
                        <p className="text-sm font-bold text-[#633C38]">
                          Click to Browse or Drag & Drop Image Here
                        </p>
                        <p className="text-xs text-[#8C5752]">
                          Supports JPG, PNG, WEBP from your phone camera or files
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Title & Category */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 font-semibold">
                    <div>
                      <label className="block text-xs font-bold text-[#633C38] uppercase mb-1">
                        Photo Title *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Traditional Thatched Hut Dining"
                        value={photoTitle}
                        onChange={(e) => setPhotoTitle(e.target.value)}
                        className="w-full px-4 py-2.5 rounded-xl bg-[#FFFDFC] text-[#633C38] border border-[#E8C5BE] focus:border-[#C97870] text-sm outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-[#633C38] uppercase mb-1">
                        Category *
                      </label>
                      <select
                        value={photoCategory}
                        onChange={(e) => setPhotoCategory(e.target.value as any)}
                        className="w-full px-4 py-2.5 rounded-xl bg-[#FFFDFC] text-[#633C38] border border-[#E8C5BE] focus:border-[#C97870] text-sm outline-none"
                      >
                        <option value="Cabins & Machan">Cabins & Machan (Huts / Machan)</option>
                        <option value="Kids Playground">Kids Playground & Swings</option>
                        <option value="Dining Halls">Dining Halls & Interior</option>
                        <option value="Restaurant Exterior">Restaurant Exterior & Entrance</option>
                        <option value="Founder & Leadership">Founder & Leadership</option>
                      </select>
                    </div>
                  </div>

                  {/* Caption */}
                  <div>
                    <label className="block text-xs font-bold text-[#633C38] uppercase mb-1">
                      Caption / Description
                    </label>
                    <textarea
                      rows={2}
                      placeholder="Optional description of this dish or seating area in Rangia..."
                      value={photoCaption}
                      onChange={(e) => setPhotoCaption(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-xl bg-[#FFFDFC] text-[#633C38] border border-[#E8C5BE] focus:border-[#C97870] text-sm outline-none"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-center font-semibold">
                    <div>
                      <label className="block text-xs font-bold text-[#633C38] uppercase mb-1">
                        Display Aspect Ratio
                      </label>
                      <select
                        value={photoAspect}
                        onChange={(e) => setPhotoAspect(e.target.value as any)}
                        className="w-full px-4 py-2 rounded-xl bg-[#FFFDFC] text-[#633C38] border border-[#E8C5BE] text-sm outline-none"
                      >
                        <option value="wide">Wide (16:9 Landscape)</option>
                        <option value="arch">Arch Top Frame</option>
                        <option value="oval">Organic Oval Frame</option>
                        <option value="tall">Tall Portrait</option>
                        <option value="square">Square</option>
                      </select>
                    </div>

                    <div className="pt-5">
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={photoIsReal}
                          onChange={(e) => setPhotoIsReal(e.target.checked)}
                          className="w-4 h-4 text-[#C97870]"
                        />
                        <span className="text-xs font-bold text-[#633C38]">
                          Mark as Verified Rangia Dhaba Photo
                        </span>
                      </label>
                    </div>
                  </div>

                  {photoStatus && (
                    <div className="p-3 rounded-xl text-xs font-bold bg-[#E8C5BE]/40 border border-[#E8C5BE] text-[#633C38]">
                      {photoStatus}
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={submittingPhoto || !fileBase64}
                    className="w-full py-3.5 px-6 rounded-full bg-[#C97870] hover:bg-[#b5655d] text-[#FFFDFC] font-bold text-sm uppercase tracking-wider shadow-md transition-all cursor-pointer disabled:opacity-50 flex items-center justify-center gap-2"
                  >
                    <Upload className="w-4 h-4 text-[#FFFDFC]" />
                    <span>{submittingPhoto ? 'Uploading to Superbase...' : 'Upload Photo to Superbase & Redirect'}</span>
                  </button>
                </form>
              )}

              {/* TAB 2: MANAGE GALLERY PHOTOS */}
              {activeTab === 'manage-photos' && (
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="text-lg font-bold text-[#633C38]">
                        Gallery Photos in Superbase ({galleryItems.length})
                      </h4>
                      <p className="text-xs text-[#8C5752]">
                        All photos displayed across your website gallery and lightbox.
                      </p>
                    </div>

                    <button
                      onClick={() => setActiveTab('add-photo')}
                      className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full bg-[#C97870] text-[#FFFDFC] text-xs font-bold shadow hover:bg-[#b5655d] transition-colors cursor-pointer"
                    >
                      <Plus className="w-3.5 h-3.5" />
                      <span>Upload New Photo</span>
                    </button>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {galleryItems.map((photo) => (
                      <div
                        key={photo.id}
                        className="p-3.5 rounded-2xl bg-[#F8F0E9] border border-[#E8C5BE] shadow-sm flex items-center gap-3.5"
                      >
                        <div className="w-16 h-16 rounded-xl overflow-hidden bg-[#FFFDFC] shrink-0 border border-[#E8C5BE]">
                          <img
                            src={photo.image}
                            alt={photo.title}
                            className="w-full h-full object-cover"
                          />
                        </div>

                        <div className="flex-1 min-w-0">
                          <p className="font-bold text-sm text-[#633C38] truncate">{photo.title}</p>
                          <span className="text-[11px] text-[#C97870] font-bold uppercase block">{photo.category}</span>
                          <p className="text-[11px] text-[#8C5752] truncate mt-0.5">{photo.caption}</p>
                        </div>

                        <button
                          onClick={() => handleDeletePhoto(photo.id)}
                          className="p-2 text-[#C97870] hover:bg-[#E8C5BE]/40 rounded-lg transition-colors shrink-0 cursor-pointer"
                          title="Delete photo from Superbase"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* TAB 3: MANAGE MENU & PRICING */}
              {activeTab === 'menu' && (
                <div className="space-y-6">
                  
                  {/* Add New Dish Form */}
                  <form onSubmit={handleCreateDish} className="p-5 bg-[#F8F0E9] rounded-2xl border border-[#E8C5BE] shadow-sm space-y-4 font-semibold">
                    <h5 className="text-base font-bold text-[#633C38]">
                      Add New Dish to Superbase Menu
                    </h5>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                      <div>
                        <label className="block text-[11px] font-bold text-[#633C38] uppercase mb-1">Dish Name *</label>
                        <input
                          type="text"
                          required
                          placeholder="e.g. Special Assam Fish Fry"
                          value={dishName}
                          onChange={(e) => setDishName(e.target.value)}
                          className="w-full px-3 py-2 rounded-lg bg-[#FFFDFC] text-[#633C38] border border-[#E8C5BE] focus:border-[#C97870] text-xs outline-none"
                        />
                      </div>

                      <div>
                        <label className="block text-[11px] font-bold text-[#633C38] uppercase mb-1">Category</label>
                        <select
                          value={dishCategory}
                          onChange={(e) => setDishCategory(e.target.value as any)}
                          className="w-full px-3 py-2 rounded-lg bg-[#FFFDFC] text-[#633C38] border border-[#E8C5BE] focus:border-[#C97870] text-xs outline-none"
                        >
                          <option value="Thali">Thali</option>
                          <option value="Indian Vegetable & Paneer">Indian Vegetable & Paneer</option>
                          <option value="Tandoori & Breads">Tandoori & Breads</option>
                          <option value="Local Chicken & Duck">Local Chicken & Duck</option>
                          <option value="Indian Non-Veg & Mutton">Indian Non-Veg & Mutton</option>
                          <option value="Fish Specialties">Fish Specialties</option>
                          <option value="Egg Delights">Egg Delights</option>
                          <option value="Rice, Polao & Biryani">Rice, Polao & Biryani</option>
                          <option value="Chowmin & Rolls">Chowmin & Rolls</option>
                          <option value="Snacks & Soups">Snacks & Soups</option>
                          <option value="Breakfast & Beverages">Breakfast & Beverages</option>
                        </select>
                      </div>

                      <div className="flex gap-2">
                        <div className="flex-1">
                          <label className="block text-[11px] font-bold text-[#633C38] uppercase mb-1">Price (₹) *</label>
                          <input
                            type="number"
                            required
                            value={dishPrice}
                            onChange={(e) => setDishPrice(Number(e.target.value))}
                            className="w-full px-3 py-2 rounded-lg bg-[#FFFDFC] text-[#633C38] border border-[#E8C5BE] focus:border-[#C97870] text-xs outline-none"
                          />
                        </div>
                        <div className="flex-1">
                          <label className="block text-[11px] font-bold text-[#633C38] uppercase mb-1">Half Price</label>
                          <input
                            type="number"
                            placeholder="Optional"
                            value={dishHalfPrice || ''}
                            onChange={(e) => setDishHalfPrice(e.target.value ? Number(e.target.value) : undefined)}
                            className="w-full px-3 py-2 rounded-lg bg-[#FFFDFC] text-[#633C38] border border-[#E8C5BE] focus:border-[#C97870] text-xs outline-none"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center justify-between gap-4">
                      <label className="flex items-center gap-2 cursor-pointer text-xs font-bold text-[#633C38]">
                        <input
                          type="checkbox"
                          checked={dishIsVeg}
                          onChange={(e) => setDishIsVeg(e.target.checked)}
                          className="w-4 h-4 text-[#C97870]"
                        />
                        <span>Pure Vegetarian Dish</span>
                      </label>

                      <button
                        type="submit"
                        disabled={submittingDish}
                        className="px-5 py-2 rounded-full bg-[#C97870] text-[#FFFDFC] text-xs font-bold uppercase tracking-wider hover:bg-[#b5655d] transition-colors cursor-pointer shadow-sm"
                      >
                        {submittingDish ? 'Saving...' : 'Add Dish to Superbase'}
                      </button>
                    </div>

                    {dishStatus && (
                      <p className="text-xs text-[#C97870] font-bold">{dishStatus}</p>
                    )}
                  </form>

                  {/* Menu Items List */}
                  <div className="space-y-2 max-h-72 overflow-y-auto pr-1">
                    {menuItems.map((dish) => (
                      <div
                        key={dish.id}
                        className="p-3 rounded-xl bg-[#F8F0E9] border border-[#E8C5BE] flex items-center justify-between text-xs font-semibold"
                      >
                        <div>
                          <span className="font-bold text-[#633C38]">{dish.name}</span>
                          <span className="text-[#C97870] ml-2">({dish.category})</span>
                        </div>

                        <div className="flex items-center gap-3">
                          <span className="font-bold text-[#633C38] tabular-nums">
                            ₹{dish.price} {dish.halfPrice ? `/ Half ₹${dish.halfPrice}` : ''}
                          </span>
                          <button
                            onClick={async () => {
                              const newPrice = prompt(`Enter new price for ${dish.name}:`, String(dish.price));
                              if (newPrice && !isNaN(Number(newPrice))) {
                                await updateMenuItemPrice(dish.id, Number(newPrice), dish.halfPrice);
                                await onRefreshData();
                              }
                            }}
                            className="text-[11px] text-[#C97870] underline hover:text-[#633C38] cursor-pointer"
                          >
                            Edit Price
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>

                </div>
              )}

              {/* TAB 4: DATABASE SETUP & SYNC */}
              {activeTab === 'setup' && (
                <div className="space-y-6">
                  
                  {/* Connection Status Card */}
                  <div className="p-5 rounded-2xl bg-[#F8F0E9] border border-[#E8C5BE] shadow-sm">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
                      <div>
                        <h4 className="text-lg font-bold text-[#633C38] flex items-center gap-2">
                          <Database className="w-5 h-5 text-[#C97870]" />
                          <span>Superbase Project Connectivity</span>
                        </h4>
                        <p className="text-xs text-[#8C5752] mt-0.5">
                          URL: <span className="text-[#C97870] font-bold">{SUPABASE_URL}</span>
                        </p>
                      </div>

                      <button
                        onClick={runHealthCheck}
                        disabled={checking}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#FFFDFC] border border-[#E8C5BE] hover:border-[#C97870] text-[#633C38] text-xs font-bold transition-all cursor-pointer shadow-sm"
                      >
                        <RefreshCw className={`w-3.5 h-3.5 text-[#C97870] ${checking ? 'animate-spin' : ''}`} />
                        <span>{checking ? 'Checking...' : 'Check Status'}</span>
                      </button>
                    </div>

                    {/* Table Badges */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 font-semibold">
                      <div className="p-3 rounded-xl border flex items-center justify-between bg-[#FFFDFC] border-[#E8C5BE] text-[#633C38]">
                        <span className="text-xs font-bold">gallery table</span>
                        <span className="text-xs font-bold text-[#25D366]">{health?.galleryTableExists ? 'Ready' : 'Pending SQL'}</span>
                      </div>

                      <div className="p-3 rounded-xl border flex items-center justify-between bg-[#FFFDFC] border-[#E8C5BE] text-[#633C38]">
                        <span className="text-xs font-bold">menu_items table</span>
                        <span className="text-xs font-bold text-[#25D366]">{health?.menuTableExists ? 'Ready' : 'Pending SQL'}</span>
                      </div>

                      <div className="p-3 rounded-xl border flex items-center justify-between bg-[#FFFDFC] border-[#E8C5BE] text-[#633C38]">
                        <span className="text-xs font-bold">orders table</span>
                        <span className="text-xs font-bold text-[#25D366]">{health?.ordersTableExists ? 'Ready' : 'Pending SQL'}</span>
                      </div>
                    </div>
                  </div>

                  {/* Seed Button Section */}
                  <div className="p-6 rounded-2xl bg-[#F8F0E9] border border-[#E8C5BE] text-[#633C38] shadow-sm">
                    <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                      <div>
                        <span className="text-xs uppercase font-bold tracking-widest text-[#C97870]">
                          One-Click Database Population
                        </span>
                        <h4 className="text-xl sm:text-2xl font-bold mt-1 text-[#633C38]">
                          Fill Superbase with All Dhaba Details
                        </h4>
                        <p className="text-xs sm:text-sm text-[#8C5752] mt-1 max-w-lg leading-relaxed">
                          Populate all curated restaurant photos and 50+ real menu items with verified prices into your Superbase database.
                        </p>
                      </div>

                      <button
                        onClick={handleSeedData}
                        disabled={seeding}
                        className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-[#C97870] hover:bg-[#b5655d] text-[#FFFDFC] font-bold text-sm uppercase tracking-wider shadow-md transition-all cursor-pointer shrink-0 disabled:opacity-50"
                      >
                        <Upload className={`w-4 h-4 ${seeding ? 'animate-bounce' : ''}`} />
                        <span>{seeding ? 'Filling Superbase...' : 'Fill Superbase Now'}</span>
                      </button>
                    </div>

                    {seedResult && (
                      <div className="mt-4 p-3 rounded-xl text-xs bg-[#FFFDFC] border border-[#E8C5BE] text-[#C97870] font-bold">
                        {seedResult.message}
                      </div>
                    )}
                  </div>

                  {/* Step-by-Step SQL Script Section */}
                  <div className="p-5 rounded-2xl bg-[#F8F0E9] border border-[#E8C5BE] shadow-sm">
                    <div className="flex items-center justify-between mb-3">
                      <div>
                        <h5 className="text-base font-bold text-[#633C38]">
                          Supabase SQL Schema Script
                        </h5>
                        <p className="text-xs text-[#8C5752]">
                          If tables haven't been created in Supabase yet, paste this once into your Supabase SQL Editor and click 'Run':
                        </p>
                      </div>

                      <button
                        onClick={handleCopySql}
                        className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#C97870] text-[#FFFDFC] text-xs font-bold hover:bg-[#b5655d] transition-colors cursor-pointer"
                      >
                        {copiedSql ? (
                          <>
                            <Check className="w-3.5 h-3.5 text-[#FFFDFC]" />
                            <span>Copied!</span>
                          </>
                        ) : (
                          <>
                            <Copy className="w-3.5 h-3.5 text-[#FFFDFC]" />
                            <span>Copy SQL</span>
                          </>
                        )}
                      </button>
                    </div>

                    <pre className="p-4 rounded-xl bg-[#FFFDFC] text-[#633C38] text-[11px] font-mono overflow-x-auto max-h-44 border border-[#E8C5BE]">
                      {SUPABASE_SQL_SETUP_SCRIPT}
                    </pre>
                  </div>

                </div>
              )}

            </div>
          </>
        )}

      </div>

    </div>
  );
};
