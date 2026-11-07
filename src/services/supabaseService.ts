import { supabase, SUPABASE_PROJECT_ID, SUPABASE_URL } from '../lib/supabase';
import { GalleryItem, MenuItem, GALLERY_ITEMS, INITIAL_MENU_ITEMS } from '../data/restaurantData';

export interface SupabaseHealth {
  connected: boolean;
  galleryTableExists: boolean;
  menuTableExists: boolean;
  ordersTableExists: boolean;
  galleryCount: number;
  menuCount: number;
  ordersCount: number;
  error?: string;
}

export const checkSupabaseHealth = async (): Promise<SupabaseHealth> => {
  const health: SupabaseHealth = {
    connected: false,
    galleryTableExists: false,
    menuTableExists: false,
    ordersTableExists: false,
    galleryCount: 0,
    menuCount: 0,
    ordersCount: 0,
  };

  try {
    // 1. Check Gallery Table
    const { data: gData, error: gError, count: gCount } = await supabase
      .from('gallery')
      .select('*', { count: 'exact', head: true });

    if (!gError) {
      health.connected = true;
      health.galleryTableExists = true;
      health.galleryCount = gCount ?? 0;
    }

    // 2. Check Menu Table
    const { error: mError, count: mCount } = await supabase
      .from('menu_items')
      .select('*', { count: 'exact', head: true });

    if (!mError) {
      health.connected = true;
      health.menuTableExists = true;
      health.menuCount = mCount ?? 0;
    }

    // 3. Check Orders Table
    const { error: oError, count: oCount } = await supabase
      .from('orders')
      .select('*', { count: 'exact', head: true });

    if (!oError) {
      health.connected = true;
      health.ordersTableExists = true;
      health.ordersCount = oCount ?? 0;
    }

    if (!health.galleryTableExists && gError) {
      health.error = gError.message;
    }
  } catch (err: any) {
    health.error = err?.message || 'Failed to connect to Supabase';
  }

  return health;
};

// Fetch Gallery Photos from Supabase (or fallback to defaults)
export const fetchGalleryPhotos = async (): Promise<{ items: GalleryItem[]; isLive: boolean }> => {
  try {
    const { data, error } = await supabase
      .from('gallery')
      .select('*')
      .order('created_at', { ascending: false });

    if (!error && data && data.length > 0) {
      const mapped: GalleryItem[] = data.map((row: any) => ({
        id: row.id,
        title: row.title,
        category: row.category,
        image: row.image,
        caption: row.caption || '',
        aspect: row.aspect || 'wide',
        isRealPhoto: Boolean(row.is_real_photo),
      }));
      return { items: mapped, isLive: true };
    }
  } catch (err) {
    console.warn('Could not fetch gallery from Supabase, using local defaults', err);
  }

  return { items: GALLERY_ITEMS, isLive: false };
};

// Insert a new Photo into Supabase
export const insertGalleryPhoto = async (photo: Omit<GalleryItem, 'id'> & { id?: string }): Promise<{ success: boolean; item?: GalleryItem; error?: string }> => {
  const newId = photo.id || `photo-${Date.now()}`;
  const payload = {
    id: newId,
    title: photo.title,
    category: photo.category,
    image: photo.image,
    caption: photo.caption,
    aspect: photo.aspect,
    is_real_photo: photo.isRealPhoto ?? true,
  };

  try {
    const { data, error } = await supabase
      .from('gallery')
      .insert([payload])
      .select()
      .single();

    if (error) {
      return { success: false, error: error.message };
    }

    return {
      success: true,
      item: {
        id: data.id,
        title: data.title,
        category: data.category,
        image: data.image,
        caption: data.caption,
        aspect: data.aspect,
        isRealPhoto: data.is_real_photo,
      },
    };
  } catch (err: any) {
    return { success: false, error: err?.message || 'Error inserting photo' };
  }
};

// Delete a photo from Supabase
export const deleteGalleryPhoto = async (id: string): Promise<{ success: boolean; error?: string }> => {
  try {
    const { error } = await supabase.from('gallery').delete().eq('id', id);
    if (error) return { success: false, error: error.message };
    return { success: true };
  } catch (err: any) {
    return { success: false, error: err?.message || 'Error deleting photo' };
  }
};

// Fetch Menu Items from Supabase (or fallback to defaults)
export const fetchMenuItems = async (): Promise<{ items: MenuItem[]; isLive: boolean }> => {
  try {
    const { data, error } = await supabase
      .from('menu_items')
      .select('*')
      .order('price', { ascending: true });

    if (!error && data && data.length > 0) {
      const mapped: MenuItem[] = data.map((row: any) => ({
        id: row.id,
        name: row.name,
        category: row.category,
        description: row.description || '',
        price: Number(row.price),
        halfPrice: row.half_price ? Number(row.half_price) : undefined,
        isVeg: Boolean(row.is_veg),
        isSignature: Boolean(row.is_signature),
        image: row.image || undefined,
        tag: row.tag || undefined,
      }));
      return { items: mapped, isLive: true };
    }
  } catch (err) {
    console.warn('Could not fetch menu from Supabase, using local defaults', err);
  }

  return { items: INITIAL_MENU_ITEMS, isLive: false };
};

// Insert a new Menu Dish into Supabase
export const insertMenuItem = async (item: MenuItem): Promise<{ success: boolean; error?: string }> => {
  const payload = {
    id: item.id,
    name: item.name,
    category: item.category,
    description: item.description,
    price: item.price,
    half_price: item.halfPrice || null,
    is_veg: item.isVeg,
    is_signature: item.isSignature || false,
    image: item.image || null,
    tag: item.tag || null,
  };

  try {
    const { error } = await supabase.from('menu_items').insert([payload]);
    if (error) return { success: false, error: error.message };
    return { success: true };
  } catch (err: any) {
    return { success: false, error: err?.message || 'Error inserting menu item' };
  }
};

// Update an existing dish price in Supabase
export const updateMenuItemPrice = async (id: string, price: number, halfPrice?: number): Promise<{ success: boolean; error?: string }> => {
  try {
    const { error } = await supabase
      .from('menu_items')
      .update({ price, half_price: halfPrice || null })
      .eq('id', id);

    if (error) return { success: false, error: error.message };
    return { success: true };
  } catch (err: any) {
    return { success: false, error: err?.message || 'Error updating price' };
  }
};

// Delete a menu dish
export const deleteMenuItem = async (id: string): Promise<{ success: boolean; error?: string }> => {
  try {
    const { error } = await supabase.from('menu_items').delete().eq('id', id);
    if (error) return { success: false, error: error.message };
    return { success: true };
  } catch (err: any) {
    return { success: false, error: err?.message || 'Error deleting dish' };
  }
};

// Seed all initial Dhaba Photos & Menu into Supabase
export const seedAllDataToSupabase = async (): Promise<{ success: boolean; message: string; photosCount: number; menuCount: number }> => {
  let photosCount = 0;
  let menuCount = 0;

  try {
    // 1. Seed Gallery
    const galleryPayload = GALLERY_ITEMS.map((item) => ({
      id: item.id,
      title: item.title,
      category: item.category,
      image: item.image,
      caption: item.caption,
      aspect: item.aspect,
      is_real_photo: item.isRealPhoto ?? true,
    }));

    const { error: gErr } = await supabase
      .from('gallery')
      .upsert(galleryPayload, { onConflict: 'id' });

    if (gErr) throw new Error(`Gallery seed error: ${gErr.message}`);
    photosCount = galleryPayload.length;

    // 2. Seed Menu Items
    const menuPayload = INITIAL_MENU_ITEMS.map((item) => ({
      id: item.id,
      name: item.name,
      category: item.category,
      description: item.description,
      price: item.price,
      half_price: item.halfPrice || null,
      is_veg: item.isVeg,
      is_signature: item.isSignature || false,
      image: item.image || null,
      tag: item.tag || null,
    }));

    const { error: mErr } = await supabase
      .from('menu_items')
      .upsert(menuPayload, { onConflict: 'id' });

    if (mErr) throw new Error(`Menu seed error: ${mErr.message}`);
    menuCount = menuPayload.length;

    return {
      success: true,
      message: `Successfully populated Supabase with ${photosCount} photos (including all real photos) and ${menuCount} dishes with exact prices!`,
      photosCount,
      menuCount,
    };
  } catch (err: any) {
    return {
      success: false,
      message: err?.message || 'Failed to seed data into Supabase',
      photosCount,
      menuCount,
    };
  }
};

// Log customer order into Supabase
export const logCustomerOrder = async (order: {
  id: string;
  customerName?: string;
  phone?: string;
  items: any[];
  totalAmount: number;
  notes?: string;
}): Promise<boolean> => {
  try {
    await supabase.from('orders').insert([
      {
        id: order.id,
        customer_name: order.customerName || 'Highway Customer',
        phone: order.phone || 'WhatsApp Direct',
        items: order.items,
        total_amount: order.totalAmount,
        notes: order.notes || '',
        status: 'received',
      },
    ]);
    return true;
  } catch (err) {
    console.warn('Could not log order to Supabase', err);
    return false;
  }
};
