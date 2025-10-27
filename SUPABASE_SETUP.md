# Supabase Kurulum Rehberi - Capahenas Travel

## Adım 1: Supabase Hesabı Oluşturma

1. **Supabase'e Git**
   - https://supabase.com adresine gidin
   - "Start your project" butonuna tıklayın
   - GitHub hesabınızla giriş yapın (veya email ile kayıt olun)

2. **Yeni Proje Oluştur**
   - "New Project" butonuna tıklayın
   - Organization: Kendiniz için bir organization oluşturun (örn: "Capahenas")
   - Project Name: `capahenas-travel`
   - Database Password: Güçlü bir şifre belirleyin (KAYDET BU ŞİFREYİ!)
   - Region: `Europe (Frankfurt)` seçin (Türkiye'ye en yakın)
   - "Create new project" butonuna tıklayın
   - ⏳ Proje oluşması ~2 dakika sürer

## Adım 2: Database Tablosu Oluşturma

1. **SQL Editor'e Git**
   - Sol menüden "SQL Editor" seçin
   - "New query" butonuna tıklayın

2. **Aşağıdaki SQL Kodunu Çalıştırın:**

```sql
-- Rezervasyonlar tablosu oluştur
CREATE TABLE bookings (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL,
  
  -- Müşteri Bilgileri
  customer_name TEXT NOT NULL,
  customer_email TEXT NOT NULL,
  customer_phone TEXT NOT NULL,
  country_code TEXT NOT NULL,
  
  -- Tur Bilgileri
  tour_type TEXT NOT NULL,
  tour_date DATE NOT NULL,
  persons INTEGER NOT NULL,
  
  -- Ek Bilgiler
  special_requests TEXT,
  status TEXT DEFAULT 'pending' CHECK (status IN ('pending', 'confirmed', 'cancelled')),
  
  -- Notlar (admin için)
  admin_notes TEXT
);

-- Tarihe göre index (hızlı sıralama için)
CREATE INDEX bookings_created_at_idx ON bookings(created_at DESC);

-- Email'e göre index (müşteri arama için)
CREATE INDEX bookings_email_idx ON bookings(customer_email);

-- Row Level Security (RLS) aktif et
ALTER TABLE bookings ENABLE ROW LEVEL SECURITY;

-- Herkes veri ekleyebilir (form gönderimi için)
CREATE POLICY "Anyone can insert bookings"
ON bookings FOR INSERT
TO anon
WITH CHECK (true);

-- Sadece authenticated kullanıcılar okuyabilir (admin için)
CREATE POLICY "Authenticated users can view bookings"
ON bookings FOR SELECT
TO authenticated
USING (true);

-- Sadece authenticated kullanıcılar güncelleyebilir (admin için)
CREATE POLICY "Authenticated users can update bookings"
ON bookings FOR UPDATE
TO authenticated
USING (true);
```

3. **"RUN" butonuna tıklayın** ✅

## Adım 3: API Keys'i Al

1. **Settings > API'ye Git**
   - Sol menüden ⚙️ Settings > API seçin

2. **Şu Bilgileri Kopyalayın:**
   - **Project URL**: `https://xxxxxx.supabase.co`
   - **anon public key**: `eyJhbGci...` (uzun bir string)

## Adım 4: Admin Kullanıcı Oluşturma

1. **Authentication > Users'a Git**
   - Sol menüden 🔐 Authentication > Users seçin

2. **"Add user" > "Create new user"**
   - Email: `admin@capahenastravel.com` (veya istediğiniz email)
   - Password: Güçlü bir şifre belirleyin (admin login için)
   - "Auto Confirm User" işaretli olsun
   - "Create user" butonuna tıklayın

---

## ✅ Supabase Kurulumu Tamamlandı!

### Şimdi elimizde:
- ✅ Supabase projesi
- ✅ Bookings tablosu
- ✅ API keys
- ✅ Admin kullanıcı hesabı

### ⚠️ ÖNEMLI: RLS Policy Düzeltmesi

Eğer "row-level security policy" hatası alıyorsanız, aşağıdaki SQL'i çalıştırın:

**Supabase Dashboard → SQL Editor → New Query**

```sql
-- Mevcut policy'leri sil
DROP POLICY IF EXISTS "Anyone can insert bookings" ON bookings;
DROP POLICY IF EXISTS "Authenticated users can view bookings" ON bookings;
DROP POLICY IF EXISTS "Authenticated users can update bookings" ON bookings;

-- Yeni policy'ler oluştur
-- 1. Herkes veri ekleyebilir (public form için)
CREATE POLICY "Enable insert for anon users"
ON bookings FOR INSERT
TO anon, authenticated
WITH CHECK (true);

-- 2. Sadece authenticated kullanıcılar okuyabilir (admin için)
CREATE POLICY "Enable read for authenticated users only"
ON bookings FOR SELECT
TO authenticated
USING (true);

-- 3. Sadece authenticated kullanıcılar güncelleyebilir (admin için)
CREATE POLICY "Enable update for authenticated users only"
ON bookings FOR UPDATE
TO authenticated
USING (true)
WITH CHECK (true);

-- 4. Sadece authenticated kullanıcılar silebilir (admin için)
CREATE POLICY "Enable delete for authenticated users only"
ON bookings FOR DELETE
TO authenticated
USING (true);
```

**"RUN" butonuna tıklayın** ✅

---

## 🏨 Hotel Field Ekleme (Cappadocia Tours için)

Cappadocia Tours sayfalarında hotel bilgisi var. Bunu database'e ekleyelim:

**Supabase Dashboard → SQL Editor → New Query**

```sql
-- Hotel column ekle
ALTER TABLE bookings
ADD COLUMN hotel_name TEXT;

-- Index ekle (hızlı arama için)
CREATE INDEX bookings_hotel_idx ON bookings(hotel_name);
```

**"RUN" butonuna tıklayın** ✅

---

### Sonraki Adım:
**Web sitesine entegrasyon** - Form gönderimi ve admin paneli kodlaması

---

## 📝 Notlar

**GÜVENLİK:** Bu bilgileri kaydedin:
- Supabase Project URL: `___________________`
- Supabase Anon Key: `___________________`
- Database Password: `___________________`
- Admin Email: `___________________`
- Admin Password: `___________________`
