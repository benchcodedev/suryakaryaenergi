# PT Surya Karya Energi — Website & CMS

Website profil perusahaan dan Content Management System (CMS) untuk **PT Surya Karya Energi** — kontraktor EPC energi terbarukan terkemuka di Indonesia (Solar PV System, Gardu Induk & Transmisi, Operation & Maintenance).

## 🚀 Fitur Utama
- **5 Halaman Publik**:
  - Beranda (Hero sinematik, layanan EPC, portofolio proyek, keunggulan, ESG spotlight)
  - Profil & Manajemen (`/about-us`)
  - Keberlanjutan & Kerangka ESG (`/sustainability`)
  - Portofolio Proyek & Detail Teknis Proyek (`/project`, `/project/[slug]`)
  - Hubungi Kami & Formulir Konsultasi Proyek (`/contact-us`)
- **Panel Admin CMS**:
  - Login terproteksi JWT (`/admin/login`)
  - Dashboard statistik (`/admin/dashboard`)
  - Manajemen Proyek (CRUD + Upload Foto) (`/admin/projects`)
  - Manajemen Pesan Masuk & Status Tindak Lanjut (`/admin/messages`)
- **Teknologi**:
  - Next.js 14+ (App Router, Server Components & Server Actions)
  - Tailwind CSS + Lucide Icons
  - Prisma ORM + MySQL Database

## ⚙️ Persyaratan
- Node.js 18.17+ / 20+
- MySQL Server (XAMPP / Standalone)

## 🛠️ Instalasi & Menjalankan Lokal

1. Salin file environment:
   ```bash
   cp .env.example .env
   ```
2. Sesuaikan konfigurasi database di `.env`:
   ```env
   DATABASE_URL="mysql://root:@localhost:3306/suryakaryaenergi"
   JWT_SECRET="your_jwt_secret_key"
   NEXT_PUBLIC_SITE_URL="http://localhost:3000"
   ```
3. Install dependensi:
   ```bash
   npm install
   ```
4. Jalankan migrasi Prisma & seed database:
   ```bash
   npx prisma db push
   npx prisma db seed
   ```
5. Jalankan server pengembangan:
   ```bash
   npm run dev
   ```
   Atau build produksi:
   ```bash
   npm run build
   npm start
   ```

Akses website di [http://localhost:3000](http://localhost:3000).
