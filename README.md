ï»¿# PT Surya Karya Energi ? Website & CMS (Laravel 10)

> **"Reliable Power, Sustainable Future"**  
> Website Company Profile dan Content Management System (CMS) resmi **PT Surya Karya Energi** yang dibangun dengan framework **Laravel 10** (PHP 8.1+ & MySQL).

---

## ?? Keunggulan Versi Laravel Ini

1. **100% Kompatibel Shared Hosting (cPanel / Hostinger / Niagahoster / Rumahweb)**
   - **TIDAK memerlukan runtime Node.js di server hosting!**
   - Menggunakan template engine **Blade** dan CSS mandiri yang siap disajikan langsung oleh Apache / Nginx PHP standar.
2. **Identitas Merek Resmi (Brand Identity)**
   - Palet warna *Golden Bronze* (`#C68E3E`), *Dark Bronze* (`#422E17`), dan *Gold Accent* (`#D4A04E`).
   - Logo emblem resmi perusahaan (`public/images/logo-emblem.png` & `public/images/logo.png`).
   - Slogan resmi: *"Reliable Power, Sustainable Future"*.
3. **5 Halaman Publik Responsif & Modern**
   - **Beranda (`/`)**: Hero section dengan banner motto, metrik kapasitas terpasang, 4 solusi utama (PLTS Atap, Ground-Mounted, BESS, O&M), portofolio proyek unggulan, 4 pilar keunggulan, dan Call to Action.
   - **Tentang Kami (`/about-us`)**: Profil perusahaan, visi & misi, 4 nilai inti (Reliability, Sustainability, Integrity, Innovation), serta sertifikasi mutu (ISO 9001, ISO 14001, ISO 45001, SBU ESDM).
   - **Portofolio Proyek (`/project`)**: Katalog proyek lengkap dengan filter kategori, pencarian kata kunci, kartu spesifikasi (kapasitas MWp, klien, lokasi), serta halaman detail proyek (`/project/{slug}`) dengan galeri foto.
   - **Keberlanjutan & ESG (`/sustainability`)**: Kerangka ESG (Environmental, Social, Governance), metrik dekarbonisasi, dan komitmen Net Zero Emission 2060.
   - **Hubungi Kami (`/contact-us`)**: Informasi kantor pusat, peta lokasi, kontak WhatsApp cepat, dan formulir konsultasi interaktif yang tersimpan ke database CMS.
4. **Panel Admin CMS Lengkap (`/admin`)**
   - **Login Aman (`/admin/login`)**: Autentikasi sesi terproteksi dengan enkripsi kata sandi Bcrypt.
   - **Dashboard Ringkasan (`/admin/dashboard`)**: Kartu statistik (Total Proyek, Proyek Unggulan, Pesan Belum Dibaca, Total Pesan), tabel proyek terbaru, dan pesan masuk terbaru.
   - **Kelola Proyek CRUD (`/admin/projects`)**: Tambah, edit, upload foto sampul & galeri foto dokumentasi lapangan, hapus proyek, serta penanda status unggulan (*featured*).
   - **Manajemen Pesan (`/admin/messages`)**: Membaca pertanyaan klien, menandai status dibaca/belum dibaca, membalas langsung ke WhatsApp pengirim (`wa.me`), dan menghapus pesan.
5. **Database Siap Pakai (Seed Data & Dump SQL)**
   - Berisi 6 studi kasus proyek industri nyata beserta galeri foto dan 1 akun administrator.
   - File dump SQL siap import: `database/dump-suryakaryaenergi.sql`.

---

## ?? Kredensial Administrator Default

| Parameter | Keterangan |
| :--- | :--- |
| **URL Login** | `/admin/login` (atau `http://localhost:8000/admin/login`) |
| **Email** | `admin@suryakaryaenergi.com` |
| **Kata Sandi** | `SuryaKarya2026!` |

---

## ?? Panduan Menjalankan di Komputer Lokal (Laragon / XAMPP)

### Persyaratan Sistem:
- PHP 8.1 atau 8.2 (ekstensi: `pdo_mysql`, `mbstring`, `openssl`, `fileinfo`, `curl`)
- MySQL 8.0+ atau MariaDB 10.4+
- Composer 2.x

### Langkah-langkah:
1. **Clone repository:**
   ```bash
   git clone https://github.com/benchcodedev/suryakaryaenergi.git
   cd suryakaryaenergi
   ```

2. **Setup file konfigurasi `.env`:**
   ```bash
   cp .env.example .env
   php artisan key:generate
   ```
   Pastikan pengaturan database di `.env` sesuai dengan MySQL lokal Anda:
   ```env
   DB_CONNECTION=mysql
   DB_HOST=127.0.0.1
   DB_PORT=3306
   DB_DATABASE=suryakaryaenergi
   DB_USERNAME=root
   DB_PASSWORD=
   ```

3. **Buat database dan import data:**
   - Buat database baru bernama `suryakaryaenergi` di phpMyAdmin / HeidiSQL / MySQL Workbench.
   - Import file: `database/dump-suryakaryaenergi.sql`
   - *Atau* jalankan migrasi & seeder bawaan:
     ```bash
     php artisan migrate --seed
     ```

4. **Jalankan web server Laravel:**
   ```bash
   php artisan serve
   ```
   Buka browser di `http://127.0.0.1:8000`.

---

## ?? Panduan Deploy ke Shared Hosting (cPanel / Hostinger)

Proyek ini telah dikonfigurasi khusus agar **dapat langsung di-upload ke shared hosting** tanpa perlu akses terminal SSH atau Node.js:

### Cara 1: Menggunakan Git Deployment (Disarankan untuk Hostinger / cPanel Git Version Control)
1. Masuk ke cPanel / hPanel Hostinger &rarr; pilih menu **Git Version Control**.
2. Masukkan URL repository: `https://github.com/benchcodedev/suryakaryaenergi.git`
3. Tentukan branch: `main`.
4. Buka **MySQL Databases** di cPanel/hPanel:
   - Buat database baru (contoh: `u123456_suryakarya`).
   - Buat user database dan password baru, lalu beri hak akses *ALL PRIVILEGES*.
   - Buka **phpMyAdmin**, pilih database tersebut, lalu klik tab **Import** dan pilih file `database/dump-suryakaryaenergi.sql`.
5. Sesuaikan file `.env` di File Manager:
   ```env
   APP_NAME="PT Surya Karya Energi"
   APP_ENV=production
   APP_DEBUG=false
   APP_URL=https://suryakaryaenergi.com

   DB_CONNECTION=mysql
   DB_HOST=localhost
   DB_PORT=3306
   DB_DATABASE=nama_database_hosting
   DB_USERNAME=nama_user_hosting
   DB_PASSWORD=password_user_hosting
   ```

### Cara 2: Upload File Manager Manual (ZIP)
1. Buat arsip `.zip` dari folder proyek (pastikan folder `vendor` sudah terikut).
2. Upload dan ekstrak di `public_html` atau direktori akun hosting Anda.
3. Repositori ini sudah dilengkapi file `.htaccess` di root dan `public/.htaccess` yang otomatis mengarahkan pengunjung ke `/public` secara aman.
4. Pastikan permission folder `storage/` dan `bootstrap/cache/` bernilai `755` atau `775` (dapat ditulisi oleh web server).

---

## ?? Struktur Direktori Penting

```
suryakaryaenergi/
??? app/
?   ??? Http/Controllers/
?   ?   ??? PublicController.php       # Beranda, Tentang Kami, ESG, Kontak
?   ?   ??? ProjectController.php      # Katalog & Detail Proyek
?   ?   ??? ContactController.php      # Penyimpanan Pesan Masuk
?   ?   ??? Admin/
?   ?       ??? AuthController.php     # Login & Logout Admin
?   ?       ??? DashboardController.php# Ringkasan Statistik
?   ?       ??? ProjectController.php  # CRUD Portofolio Proyek
?   ?       ??? MessageController.php  # Manajemen Pesan & WhatsApp
?   ??? Models/
?       ??? Project.php
?       ??? ProjectImage.php
?       ??? ContactMessage.php
?       ??? User.php
??? database/
?   ??? dump-suryakaryaenergi.sql      # Dump MySQL lengkap siap import
?   ??? migrations/                    # File migrasi skema tabel
?   ??? seeders/                       # Seeder 6 proyek & admin default
??? public/
?   ??? css/app.css                    # Custom stylesheet
?   ??? images/
?   ?   ??? logo-emblem.png            # Emblem resmi perusahaan
?   ?   ??? logo.png                   # Logo lengkap perusahaan
?   ?   ??? favicon.png                # Favicon browser
?   ??? uploads/                       # Direktori foto unggahan dinamis
??? resources/views/
?   ??? layouts/
?   ?   ??? app.blade.php              # Layout publik (Navbar, Footer, WhatsApp)
?   ?   ??? admin.blade.php            # Layout Admin Portal (Sidebar, Header)
?   ??? pages/                         # Halaman publik
?   ??? admin/                         # Halaman panel kontrol CMS
??? routes/
    ??? web.php                        # 26 rute publik & admin
```

---

## ??? Hak Cipta & Lisensi
Hak Cipta &copy; 2026 **PT Surya Karya Energi**. Seluruh hak cipta dilindungi undang-undang.
