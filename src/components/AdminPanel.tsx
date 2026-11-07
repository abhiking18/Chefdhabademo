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
  ArrowRight,
  ShieldCheck,
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
import { GalleryItem, MenuItem } from '../data/restaurantData';

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

  // Direct File Upload State (NO Image URL text box!)
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [selectedFileName, setSelectedFileName] = useState<string | null>(null);
  const [fileBase64, setFileBase64] = useState<string | null>(null);
  const [photoTitle, setPhotoTitle] = useState('');
  const [photoCategory, setPhotoCategory] = useState<GalleryItem['category']>('Restaurant Ambience');
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

    // Accept Rangia PIN code '781354' or standard credentials 'admin' / 'admin123' or 'chef2026'
    const validPasswords = ['781354', 'admin123', 'dhaba781354', 'chef2026'];
    if (
      (adminUsername.toLowerCase() === 'admin' || adminUsername.toLowerCase() === 'owner') &&
      validPasswords.includes(adminPassword.trim())
    ) {
      setIsAuthenticated(true);
      localStorage.setItem('dhaba_admin_auth', 'true');
      setAdminPassword('');
    } else {
      setLoginError('Incorrect password. Try PIN: 781354 or admin123');
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

  // Direct File Selection from Computer / Phone
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      processFile(file);
    }
  };

  const processFile = (file: File) => {
    setSelectedFileName(file.name);
    if (!photoTitle) {
      // Auto-populate title cleanly from file name
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

  // Upload photo & redirect
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

      // Reset form
      setSelectedFileName(null);
      setFileBase64(null);
      setPhotoTitle('');
      setPhotoCaption('');

      // Auto-redirect to Manage Photos tab
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
    <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200">
      
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-4xl bg-[#FAF4EB] rounded-[36px_16px_36px_16px] overflow-hidden border-2 border-[#D99035] shadow-2xl flex flex-col max-h-[92vh]"
      >
        
        {/* Header */}
        <div className="p-5 sm:p-6 bg-[#541E29] text-[#F5E9D5] flex items-center justify-between border-b border-[#D99035]/30">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#D99035] text-[#34251F] flex items-center justify-center font-bold shadow">
              <Database className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-serif text-xl sm:text-2xl font-bold">Owner & Admin Portal</h3>
                {isAuthenticated && (
                  <span className="text-[11px] bg-[#2E7D32] text-white font-bold px-2.5 py-0.5 rounded-full flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3" />
                    <span>Logged In</span>
                  </span>
                )}
              </div>
              <p className="text-xs text-[#E7D5BB]">
                Superbase Backend: <code className="font-mono text-[#D99035]">{SUPABASE_PROJECT_ID}</code>
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {isAuthenticated && (
              <button
                onClick={handleLogout}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/10 hover:bg-white/20 text-[#F5E9D5] text-xs font-semibold transition-colors cursor-pointer"
                title="Log out of admin session"
              >
                <LogOut className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Log out</span>
              </button>
            )}

            <button
              onClick={onClose}
              className="p-2 rounded-full hover:bg-white/10 text-[#F5E9D5] transition-colors cursor-pointer"
              aria-label="Close admin panel"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* NOT AUTHENTICATED: LOGIN SCREEN */}
        {!isAuthenticated ? (
          <div className="p-8 sm:p-12 overflow-y-auto flex-1 flex flex-col items-center justify-center text-center">
            <div className="max-w-md w-full bg-white p-8 rounded-3xl border border-[#E7D5BB] shadow-xl">
              
              <div className="w-14 h-14 rounded-full bg-[#541E29] text-[#D99035] flex items-center justify-center mx-auto mb-4 shadow">
                <Lock className="w-7 h-7" />
              </div>

              <h4 className="font-serif text-2xl font-bold text-[#541E29]">
                Admin Authentication
              </h4>
              <p className="text-xs text-[#8C4A38] mt-1 mb-6">
                Restricted to New Highway Chef Dhaba management to add photos and update menu.
              </p>

              <form onSubmit={handleLogin} className="space-y-4 text-left">
                <div>
                  <label className="block text-xs font-bold text-[#541E29] uppercase mb-1">
                    Username
                  </label>
                  <input
                    type="text"
                    required
                    value={adminUsername}
                    onChange={(e) => setAdminUsername(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl bg-[#FAF4EB] text-[#34251F] border border-[#E7D5BB] focus:ring-2 focus:ring-[#541E29] text-sm outline-none font-medium"
                    placeholder="admin"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#541E29] uppercase mb-1">
                    Password / PIN
                  </label>
                  <div className="relative">
                    <input
                      type={showPassword ? 'text' : 'password'}
                      required
                      value={adminPassword}
                      onChange={(e) => setAdminPassword(e.target.value)}
                      className="w-full px-4 py-2.5 pr-10 rounded-xl bg-[#FAF4EB] text-[#34251F] border border-[#E7D5BB] focus:ring-2 focus:ring-[#541E29] text-sm outline-none font-medium"
                      placeholder="Enter passkey"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-[#8C4A38] hover:text-[#541E29]"
                    >
                      {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                    </button>
                  </div>
                </div>

                {loginError && (
                  <p className="text-xs text-[#C62828] font-semibold bg-[#FFEBEE] p-2.5 rounded-xl">
                    {loginError}
                  </p>
                )}

                <button
                  type="submit"
                  className="w-full py-3 px-6 rounded-full bg-[#541E29] hover:bg-[#3E161E] text-[#F5E9D5] font-bold text-sm shadow-md transition-all cursor-pointer flex items-center justify-center gap-2"
                >
                  <KeyRound className="w-4 h-4 text-[#D99035]" />
                  <span>Access Admin Panel</span>
                </button>
              </form>

              <div className="mt-6 pt-4 border-t border-[#E7D5BB] text-[11px] text-[#8C4A38]">
                <span>Demo Passkey: </span>
                <button
                  type="button"
                  onClick={() => setAdminPassword('781354')}
                  className="font-bold underline text-[#541E29] hover:text-[#D99035]"
                >
                  781354
                </button>
                <span> (Rangia PIN) or </span>
                <button
                  type="button"
                  onClick={() => setAdminPassword('admin123')}
                  className="font-bold underline text-[#541E29] hover:text-[#D99035]"
                >
                  admin123
                </button>
              </div>

            </div>
          </div>
        ) : (
          /* AUTHENTICATED: ADMIN WORKSPACE */
          <>
            {/* Tab Navigation */}
            <div className="flex items-center gap-2 px-6 pt-4 bg-[#F5E9D5] border-b border-[#E7D5BB] overflow-x-auto no-scrollbar">
              <button
                onClick={() => setActiveTab('add-photo')}
                className={`px-4 py-2.5 rounded-t-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-2 cursor-pointer ${
                  activeTab === 'add-photo'
                    ? 'bg-[#FAF4EB] text-[#541E29] border-t-2 border-[#D99035] shadow-sm'
                    : 'text-[#8C4A38] hover:text-[#541E29]'
                }`}
              >
                <Plus className="w-4 h-4" />
                <span>Add Photo (From Files)</span>
              </button>

              <button
                onClick={() => setActiveTab('manage-photos')}
                className={`px-4 py-2.5 rounded-t-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-2 cursor-pointer ${
                  activeTab === 'manage-photos'
                    ? 'bg-[#FAF4EB] text-[#541E29] border-t-2 border-[#D99035] shadow-sm'
                    : 'text-[#8C4A38] hover:text-[#541E29]'
                }`}
              >
                <ImageIcon className="w-4 h-4" />
                <span>Gallery Photos ({galleryItems.length})</span>
              </button>

              <button
                onClick={() => setActiveTab('menu')}
                className={`px-4 py-2.5 rounded-t-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-2 cursor-pointer ${
                  activeTab === 'menu'
                    ? 'bg-[#FAF4EB] text-[#541E29] border-t-2 border-[#D99035] shadow-sm'
                    : 'text-[#8C4A38] hover:text-[#541E29]'
                }`}
              >
                <UtensilsCrossed className="w-4 h-4" />
                <span>Menu & Prices ({menuItems.length})</span>
              </button>

              <button
                onClick={() => setActiveTab('setup')}
                className={`px-4 py-2.5 rounded-t-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-2 cursor-pointer ${
                  activeTab === 'setup'
                    ? 'bg-[#FAF4EB] text-[#541E29] border-t-2 border-[#D99035] shadow-sm'
                    : 'text-[#8C4A38] hover:text-[#541E29]'
                }`}
              >
                <Layers className="w-4 h-4" />
                <span>Superbase Database Sync</span>
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 overflow-y-auto flex-1 space-y-6">
              
              {/* TAB 1: ADD NEW PHOTO DIRECTLY FROM FILES (NO IMAGE URL!) */}
              {activeTab === 'add-photo' && (
                <form onSubmit={handleCreatePhoto} className="space-y-5 bg-white p-6 rounded-2xl border border-[#E7D5BB] shadow-sm">
                  <div>
                    <h4 className="font-serif text-xl font-bold text-[#541E29]">
                      Upload Photo from Files
                    </h4>
                    <p className="text-xs text-[#8C4A38] mt-0.5">
                      Select or drop any photo from your phone or computer. It will upload directly to Superbase and redirect to your updated gallery!
                    </p>
                  </div>

                  {/* DIRECT FILE PICKER DRAG & DROP ZONE */}
                  <div
                    onDragEnter={handleDrag}
                    onDragLeave={handleDrag}
                    onDragOver={handleDrag}
                    onDrop={handleDrop}
                    onClick={() => fileInputRef.current?.click()}
                    className={`relative border-2 border-dashed rounded-2xl p-6 sm:p-8 text-center cursor-pointer transition-all ${
                      dragActive
                        ? 'border-[#D99035] bg-[#FFF8E1]'
                        : fileBase64
                        ? 'border-[#2E7D32] bg-[#E8F5E9]/40'
                        : 'border-[#D99035]/50 bg-[#FAF4EB] hover:bg-[#F5E9D5]'
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
                        <div className="relative mx-auto aspect-[16/9] max-h-48 rounded-xl overflow-hidden bg-[#34251F] border border-[#E7D5BB] flex items-center justify-center">
                          <img
                            src={fileBase64}
                            alt="Selected preview"
                            className="max-h-full max-w-full object-contain"
                          />
                        </div>
                        <div className="flex items-center justify-center gap-2 text-xs font-bold text-[#2E7D32]">
                          <CheckCircle2 className="w-4 h-4" />
                          <span>File Selected: {selectedFileName}</span>
                          <span className="text-xs text-[#8C4A38] font-normal underline ml-2">Click to change</span>
                        </div>
                      </div>
                    ) : (
                      <div className="space-y-2">
                        <div className="w-12 h-12 rounded-full bg-[#F5E9D5] text-[#541E29] flex items-center justify-center mx-auto shadow-inner">
                          <FolderOpen className="w-6 h-6 text-[#D99035]" />
                        </div>
                        <p className="text-sm font-bold text-[#541E29]">
                          Click to Browse or Drag & Drop Image Here
                        </p>
                        <p className="text-xs text-[#8C4A38]">
                          Supports JPG, PNG, WEBP from your phone camera or files
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Title & Category */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-[#541E29] uppercase mb-1">
                        Photo Title *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Traditional Thatched Hut Dining"
                        value={photoTitle}
                        onChange={(e) => setPhotoTitle(e.target.value)}
                        className="w-full px-4 py-2.5 rounded-xl bg-[#FAF4EB] text-[#34251F] border border-[#E7D5BB] focus:ring-2 focus:ring-[#541E29] text-sm outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-[#541E29] uppercase mb-1">
                        Category *
                      </label>
                      <select
                        value={photoCategory}
                        onChange={(e) => setPhotoCategory(e.target.value as any)}
                        className="w-full px-4 py-2.5 rounded-xl bg-[#FAF4EB] text-[#34251F] border border-[#E7D5BB] focus:ring-2 focus:ring-[#541E29] text-sm outline-none"
                      >
                        <option value="Restaurant Ambience">Restaurant Ambience</option>
                        <option value="Outdoor Dining">Outdoor Dining</option>
                        <option value="Interior & Cabins">Interior & Cabins</option>
                        <option value="Signature Foods">Signature Foods</option>
                        <option value="Kitchen Craft">Kitchen Craft</option>
                      </select>
                    </div>
                  </div>

                  {/* Caption */}
                  <div>
                    <label className="block text-xs font-bold text-[#541E29] uppercase mb-1">
                      Caption / Description
                    </label>
                    <textarea
                      rows={2}
                      placeholder="Optional description of this dish or seating area in Rangia..."
                      value={photoCaption}
                      onChange={(e) => setPhotoCaption(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-xl bg-[#FAF4EB] text-[#34251F] border border-[#E7D5BB] focus:ring-2 focus:ring-[#541E29] text-sm outline-none"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-center">
                    <div>
                      <label className="block text-xs font-bold text-[#541E29] uppercase mb-1">
                        Display Aspect Ratio
                      </label>
                      <select
                        value={photoAspect}
                        onChange={(e) => setPhotoAspect(e.target.value as any)}
                        className="w-full px-4 py-2 rounded-xl bg-[#FAF4EB] text-[#34251F] border border-[#E7D5BB] text-sm outline-none"
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
                          className="w-4 h-4 rounded text-[#541E29]"
                        />
                        <span className="text-xs font-bold text-[#541E29]">
                          Mark as Verified Rangia Dhaba Photo
                        </span>
                      </label>
                    </div>
                  </div>

                  {photoStatus && (
                    <div className={`p-3 rounded-xl text-xs font-medium ${photoStatus.startsWith('Error') ? 'bg-[#FFEBEE] text-[#C62828]' : 'bg-[#E8F5E9] text-[#2E7D32]'}`}>
                      {photoStatus}
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={submittingPhoto || !fileBase64}
                    className="w-full py-3.5 px-6 rounded-full bg-[#541E29] hover:bg-[#3E161E] text-[#F5E9D5] font-bold text-sm shadow-md transition-all cursor-pointer disabled:opacity-50 flex items-center justify-center gap-2"
                  >
                    <Upload className="w-4 h-4 text-[#D99035]" />
                    <span>{submittingPhoto ? 'Uploading to Superbase...' : 'Upload Photo to Superbase & Redirect'}</span>
                  </button>
                </form>
              )}

              {/* TAB 2: MANAGE GALLERY PHOTOS */}
              {activeTab === 'manage-photos' && (
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-serif text-lg font-bold text-[#541E29]">
                        Gallery Photos in Superbase ({galleryItems.length})
                      </h4>
                      <p className="text-xs text-[#8C4A38]">
                        All photos displayed across your website gallery and lightbox.
                      </p>
                    </div>

                    <button
                      onClick={() => setActiveTab('add-photo')}
                      className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full bg-[#D99035] text-[#34251F] text-xs font-bold shadow hover:bg-[#F1A348] transition-colors cursor-pointer"
                    >
                      <Plus className="w-3.5 h-3.5" />
                      <span>Upload New Photo</span>
                    </button>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {galleryItems.map((photo) => (
                      <div
                        key={photo.id}
                        className="p-3.5 rounded-2xl bg-white border border-[#E7D5BB] shadow-sm flex items-center gap-3.5"
                      >
                        <div className="w-16 h-16 rounded-xl overflow-hidden bg-[#34251F] shrink-0">
                          <img
                            src={photo.image}
                            alt={photo.title}
                            className="w-full h-full object-cover"
                          />
                        </div>

                        <div className="flex-1 min-w-0">
                          <p className="font-serif font-bold text-sm text-[#541E29] truncate">{photo.title}</p>
                          <span className="text-[11px] text-[#8C4A38] uppercase font-semibold block">{photo.category}</span>
                          <p className="text-[11px] text-[#4A362D] truncate mt-0.5">{photo.caption}</p>
                        </div>

                        <button
                          onClick={() => handleDeletePhoto(photo.id)}
                          className="p-2 text-[#8C4A38] hover:text-[#C62828] hover:bg-[#FFEBEE] rounded-lg transition-colors shrink-0 cursor-pointer"
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
                  <form onSubmit={handleCreateDish} className="p-5 bg-white rounded-2xl border border-[#E7D5BB] shadow-sm space-y-4">
                    <h5 className="font-serif text-base font-bold text-[#541E29]">
                      Add New Dish to Superbase Menu
                    </h5>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                      <div>
                        <label className="block text-[11px] font-bold text-[#541E29] uppercase mb-1">Dish Name *</label>
                        <input
                          type="text"
                          required
                          placeholder="e.g. Special Assam Fish Fry"
                          value={dishName}
                          onChange={(e) => setDishName(e.target.value)}
                          className="w-full px-3 py-2 rounded-lg bg-[#FAF4EB] border border-[#E7D5BB] text-xs outline-none"
                        />
                      </div>

                      <div>
                        <label className="block text-[11px] font-bold text-[#541E29] uppercase mb-1">Category</label>
                        <select
                          value={dishCategory}
                          onChange={(e) => setDishCategory(e.target.value as any)}
                          className="w-full px-3 py-2 rounded-lg bg-[#FAF4EB] border border-[#E7D5BB] text-xs outline-none"
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
                          <label className="block text-[11px] font-bold text-[#541E29] uppercase mb-1">Price (₹) *</label>
                          <input
                            type="number"
                            required
                            value={dishPrice}
                            onChange={(e) => setDishPrice(Number(e.target.value))}
                            className="w-full px-3 py-2 rounded-lg bg-[#FAF4EB] border border-[#E7D5BB] text-xs outline-none"
                          />
                        </div>
                        <div className="flex-1">
                          <label className="block text-[11px] font-bold text-[#541E29] uppercase mb-1">Half Price</label>
                          <input
                            type="number"
                            placeholder="Optional"
                            value={dishHalfPrice || ''}
                            onChange={(e) => setDishHalfPrice(e.target.value ? Number(e.target.value) : undefined)}
                            className="w-full px-3 py-2 rounded-lg bg-[#FAF4EB] border border-[#E7D5BB] text-xs outline-none"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center justify-between gap-4">
                      <label className="flex items-center gap-2 cursor-pointer text-xs font-semibold text-[#541E29]">
                        <input
                          type="checkbox"
                          checked={dishIsVeg}
                          onChange={(e) => setDishIsVeg(e.target.checked)}
                          className="w-4 h-4 text-[#2E7D32]"
                        />
                        <span>Pure Vegetarian Dish</span>
                      </label>

                      <button
                        type="submit"
                        disabled={submittingDish}
                        className="px-5 py-2 rounded-full bg-[#541E29] text-[#F5E9D5] text-xs font-bold hover:bg-[#3E161E] transition-colors cursor-pointer"
                      >
                        {submittingDish ? 'Saving...' : 'Add Dish to Superbase'}
                      </button>
                    </div>

                    {dishStatus && (
                      <p className="text-xs text-[#2E7D32] font-semibold">{dishStatus}</p>
                    )}
                  </form>

                  {/* Menu Items List with Price Badges */}
                  <div className="space-y-2 max-h-72 overflow-y-auto pr-1">
                    {menuItems.map((dish) => (
                      <div
                        key={dish.id}
                        className="p-3 rounded-xl bg-white border border-[#E7D5BB] flex items-center justify-between text-xs"
                      >
                        <div>
                          <span className="font-bold text-[#541E29]">{dish.name}</span>
                          <span className="text-[#8C4A38] ml-2">({dish.category})</span>
                        </div>

                        <div className="flex items-center gap-3">
                          <span className="font-bold text-[#D99035]">
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
                            className="text-[11px] text-[#541E29] underline hover:text-[#D99035] cursor-pointer"
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
                  <div className="p-5 rounded-2xl bg-white border border-[#E7D5BB] shadow-sm">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
                      <div>
                        <h4 className="font-serif text-lg font-bold text-[#541E29] flex items-center gap-2">
                          <Database className="w-5 h-5 text-[#D99035]" />
                          <span>Superbase Project Connectivity</span>
                        </h4>
                        <p className="text-xs text-[#8C4A38] mt-0.5">
                          URL: <span className="font-mono text-[#34251F]">{SUPABASE_URL}</span>
                        </p>
                      </div>

                      <button
                        onClick={runHealthCheck}
                        disabled={checking}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#F5E9D5] hover:bg-[#E7D5BB] text-[#541E29] text-xs font-semibold transition-all cursor-pointer"
                      >
                        <RefreshCw className={`w-3.5 h-3.5 ${checking ? 'animate-spin' : ''}`} />
                        <span>{checking ? 'Checking...' : 'Check Status'}</span>
                      </button>
                    </div>

                    {/* Table Badges */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                      <div className={`p-3 rounded-xl border flex items-center justify-between ${health?.galleryTableExists ? 'bg-[#E8F5E9] border-[#C8E6C9] text-[#2E7D32]' : 'bg-[#FFF3E0] border-[#FFE0B2] text-[#E65100]'}`}>
                        <span className="text-xs font-bold">gallery table</span>
                        <span className="text-xs font-semibold">{health?.galleryTableExists ? 'Ready' : 'Pending SQL'}</span>
                      </div>

                      <div className={`p-3 rounded-xl border flex items-center justify-between ${health?.menuTableExists ? 'bg-[#E8F5E9] border-[#C8E6C9] text-[#2E7D32]' : 'bg-[#FFF3E0] border-[#FFE0B2] text-[#E65100]'}`}>
                        <span className="text-xs font-bold">menu_items table</span>
                        <span className="text-xs font-semibold">{health?.menuTableExists ? 'Ready' : 'Pending SQL'}</span>
                      </div>

                      <div className={`p-3 rounded-xl border flex items-center justify-between ${health?.ordersTableExists ? 'bg-[#E8F5E9] border-[#C8E6C9] text-[#2E7D32]' : 'bg-[#FFF3E0] border-[#FFE0B2] text-[#E65100]'}`}>
                        <span className="text-xs font-bold">orders table</span>
                        <span className="text-xs font-semibold">{health?.ordersTableExists ? 'Ready' : 'Pending SQL'}</span>
                      </div>
                    </div>
                  </div>

                  {/* Seed Button Section */}
                  <div className="p-6 rounded-2xl bg-gradient-to-r from-[#541E29] to-[#3E161E] text-[#F5E9D5] shadow-lg">
                    <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                      <div>
                        <span className="text-xs uppercase font-bold tracking-widest text-[#D99035]">
                          One-Click Database Population
                        </span>
                        <h4 className="font-serif text-xl sm:text-2xl font-bold mt-1 text-[#F5E9D5]">
                          Fill Superbase with All Dhaba Details
                        </h4>
                        <p className="text-xs sm:text-sm text-[#E7D5BB] mt-1 max-w-lg leading-relaxed">
                          Populate all 10 curated restaurant photos (including the 5 real uploaded photos) and 50+ real menu items with verified prices into your Superbase database.
                        </p>
                      </div>

                      <button
                        onClick={handleSeedData}
                        disabled={seeding}
                        className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-[#D99035] hover:bg-[#F1A348] text-[#34251F] font-bold text-sm shadow-xl transition-all transform hover:scale-105 cursor-pointer shrink-0 disabled:opacity-50"
                      >
                        <Upload className={`w-4 h-4 ${seeding ? 'animate-bounce' : ''}`} />
                        <span>{seeding ? 'Filling Superbase...' : 'Fill Superbase Now'}</span>
                      </button>
                    </div>

                    {seedResult && (
                      <div className={`mt-4 p-3 rounded-xl text-xs font-medium ${seedResult.success ? 'bg-[#2E7D32]/80 text-white' : 'bg-[#C62828]/80 text-white'}`}>
                        {seedResult.message}
                      </div>
                    )}
                  </div>

                  {/* Step-by-Step SQL Script Section */}
                  <div className="p-5 rounded-2xl bg-white border border-[#E7D5BB] shadow-sm">
                    <div className="flex items-center justify-between mb-3">
                      <div>
                        <h5 className="font-serif text-base font-bold text-[#541E29]">
                          Supabase SQL Schema Script
                        </h5>
                        <p className="text-xs text-[#8C4A38]">
                          If tables haven't been created in Supabase yet, paste this once into your Supabase SQL Editor and click 'Run':
                        </p>
                      </div>

                      <button
                        onClick={handleCopySql}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#541E29] text-[#F5E9D5] text-xs font-semibold hover:bg-[#3E161E] transition-colors cursor-pointer"
                      >
                        {copiedSql ? (
                          <>
                            <Check className="w-3.5 h-3.5 text-[#D99035]" />
                            <span>Copied!</span>
                          </>
                        ) : (
                          <>
                            <Copy className="w-3.5 h-3.5 text-[#D99035]" />
                            <span>Copy SQL</span>
                          </>
                        )}
                      </button>
                    </div>

                    <pre className="p-4 rounded-xl bg-[#34251F] text-[#F5E9D5] text-[11px] font-mono overflow-x-auto max-h-44 border border-[#E7D5BB]">
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
