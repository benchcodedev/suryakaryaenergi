export interface FallbackImage {
  id: number;
  imageUrl: string;
  caption?: string | null;
  sortOrder?: number | null;
}

export interface FallbackProject {
  id: number;
  title: string;
  slug: string;
  category: string;
  location?: string | null;
  client?: string | null;
  capacity?: string | null;
  year?: number | null;
  status: "Perencanaan" | "Berjalan" | "Selesai";
  isFeatured: boolean;
  coverImage?: string | null;
  description?: string | null;
  createdAt: Date;
  updatedAt: Date;
  images: FallbackImage[];
}

export interface FallbackMessage {
  id: number;
  name: string;
  email: string;
  phone?: string | null;
  subject?: string | null;
  message: string;
  isRead: boolean;
  createdAt: Date;
}

export const FALLBACK_PROJECTS: FallbackProject[] = [
  {
    id: 1,
    title: "PLTS Atap Kawasan Industri Cikarang",
    slug: "plts-atap-kawasan-industri-cikarang",
    category: "PLTS / Solar",
    location: "Cikarang, Jawa Barat",
    client: "PT Indotech Mandiri Perkasa",
    capacity: "3.2 MWp",
    year: 2024,
    status: "Selesai",
    isFeatured: true,
    coverImage: "https://images.unsplash.com/photo-1509391365360-2e959784a276?auto=format&fit=crop&w=1200&q=80",
    description: "Pembangunan instalasi Pembangkit Listrik Tenaga Surya (PLTS) Atap skala komersial & industri dengan total kapasitas 3.2 MWp di atap fasilitas manufaktur Cikarang. Menggunakan panel Tier-1 Monocrystalline bifacial dan inverter sentral efisiensi tinggi, terintegrasi mulus dengan jaringan utilitas internal pabrik.",
    createdAt: new Date("2024-03-15"),
    updatedAt: new Date("2024-03-15"),
    images: [
      {
        id: 1,
        imageUrl: "https://images.unsplash.com/photo-1508873696983-2df5293cb32f?auto=format&fit=crop&w=1000&q=80",
        caption: "Inspeksi modul solar panel pada struktur atap pabrik",
        sortOrder: 1,
      },
      {
        id: 2,
        imageUrl: "https://images.unsplash.com/photo-1497440001374-f26997328c1b?auto=format&fit=crop&w=1000&q=80",
        caption: "Ruang inverter dan panel distribusi sinkronisasi tegangan",
        sortOrder: 2,
      },
    ],
  },
  {
    id: 2,
    title: "PLTS Ground-Mounted Karawang Eco Power",
    slug: "plts-ground-mounted-karawang-eco-power",
    category: "PLTS / Solar",
    location: "Karawang, Jawa Barat",
    client: "Konsorsium Surya Nusantara",
    capacity: "15.0 MWp",
    year: 2023,
    status: "Selesai",
    isFeatured: true,
    coverImage: "https://images.unsplash.com/photo-1509391365360-2e959784a276?auto=format&fit=crop&w=1200&q=80",
    description: "Proyek rekayasa, pengadaan, dan konstruksi (EPC) PLTS skala utilitas berkonsep ramah lingkungan di lahan terbuka seluas 18 hektar. Sistem dilengkapi pelacak matahari (single-axis solar tracker) untuk memaksimalkan tangkapan radiasi harian, serta substation tegangan menengah 20 kV terhubung ke gardu transmisi regional.",
    createdAt: new Date("2023-11-10"),
    updatedAt: new Date("2023-11-10"),
    images: [
      {
        id: 3,
        imageUrl: "https://images.unsplash.com/photo-1545208942-e1c9c916524b?auto=format&fit=crop&w=1000&q=80",
        caption: "Bentang solar array ground-mounted dengan solar tracking system",
        sortOrder: 1,
      },
      {
        id: 4,
        imageUrl: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=1000&q=80",
        caption: "Instalasi interkoneksi step-up transformer 20 kV",
        sortOrder: 2,
      },
    ],
  },
  {
    id: 3,
    title: "EPC Gardu Induk & Jaringan Transmisi 150 kV",
    slug: "epc-gardu-induk-dan-transmisi-150kv",
    category: "EPC",
    location: "Subang, Jawa Barat",
    client: "PT Transmisi Energi Nasional",
    capacity: "150 kV / 60 MVA",
    year: 2024,
    status: "Selesai",
    isFeatured: true,
    coverImage: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=1200&q=80",
    description: "Pekerjaan penuh Engineering, Procurement, and Construction untuk Gardu Induk 150 kV dengan trafo tenaga 60 MVA, termasuk jalur transmisi penghubung sepanjang 14 km sirkuit ganda. Dilengkapi sistem proteksi numerik modern dan SCADA automation untuk keandalan penyaluran listrik kawasan industri strategis.",
    createdAt: new Date("2024-06-20"),
    updatedAt: new Date("2024-06-20"),
    images: [
      {
        id: 5,
        imageUrl: "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&w=1000&q=80",
        caption: "Switchyard outdoor 150 kV gardu induk",
        sortOrder: 1,
      },
    ],
  },
  {
    id: 4,
    title: "Sistem PLTS Hibrida Off-Grid Pulau Morotai",
    slug: "plts-hibrida-off-grid-pulau-morotai",
    category: "PLTS / Solar",
    location: "Morotai, Maluku Utara",
    client: "Dinas ESDM Maluku Utara",
    capacity: "1.8 MWp + BESS 2 MWh",
    year: 2025,
    status: "Berjalan",
    isFeatured: false,
    coverImage: "https://images.unsplash.com/photo-1545208942-e1c9c916524b?auto=format&fit=crop&w=1200&q=80",
    description: "Pembangunan PLTS Hibrida mandiri terisolasi (microgrid) yang menggabungkan pembangkit surya fotovoltaik 1.8 MWp dengan Battery Energy Storage System (BESS) 2 MWh lithium-ferro-phosphate dan genset pendukung otomatis. Menyediakan suplai energi hijau 24 jam untuk masyarakat pesisir kepulauan terluar.",
    createdAt: new Date("2025-01-10"),
    updatedAt: new Date("2025-01-10"),
    images: [
      {
        id: 6,
        imageUrl: "https://images.unsplash.com/photo-1509391365360-2e959784a276?auto=format&fit=crop&w=1000&q=80",
        caption: "Instalasi modul fotovoltaik kepulauan Morotai",
        sortOrder: 1,
      },
    ],
  },
  {
    id: 5,
    title: "Operation & Maintenance PLTS Sentralisasi Jawa Timur",
    slug: "operation-and-maintenance-plts-jawa-timur",
    category: "Operation & Maintenance",
    location: "Pasuruan, Jawa Timur",
    client: "PT Multi Surya Prima",
    capacity: "25.0 MWp Total",
    year: 2025,
    status: "Berjalan",
    isFeatured: false,
    coverImage: "https://images.unsplash.com/photo-1508873696983-2df5293cb32f?auto=format&fit=crop&w=1200&q=80",
    description: "Kontrak pemeliharaan preventif, korektif, dan pemantauan performa jarak jauh (Remote Monitoring) 24/7 untuk portofolio pembangkit listrik tenaga surya multi-site sebesar 25 MWp. Meliputi pembersihan robotik modul, thermography drone inspection, pemeliharaan inverter, serta pengujian proteksi berkala.",
    createdAt: new Date("2025-02-01"),
    updatedAt: new Date("2025-02-01"),
    images: [
      {
        id: 7,
        imageUrl: "https://images.unsplash.com/photo-1497440001374-f26997328c1b?auto=format&fit=crop&w=1000&q=80",
        caption: "Pemeriksaan drone thermal imaging untuk deteksi hotspot sel",
        sortOrder: 1,
      },
    ],
  },
  {
    id: 6,
    title: "EPC Pembangkit Listrik Tenaga Minihidro (PLTM)",
    slug: "epc-pembangkit-listrik-tenaga-minihidro",
    category: "EPC",
    location: "Garut, Jawa Barat",
    client: "PT Sumber Daya Terbarukan Nusantara",
    capacity: "4.5 MW",
    year: 2026,
    status: "Perencanaan",
    isFeatured: false,
    coverImage: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&w=1200&q=80",
    description: "Tahap perancangan teknik detail (FEED / Detailed Engineering Design) untuk pembangunan Pembangkit Listrik Tenaga Minihidro tipe run-of-river. Mencakup desain bendung intake, saluran pembawa headrace sepanjang 2.3 km, bak penenang, pipa penstock, serta rumah pembangkit powerhouse berkapasitas 2 x 2.25 MW.",
    createdAt: new Date("2026-01-15"),
    updatedAt: new Date("2026-01-15"),
    images: [],
  },
];

export const FALLBACK_MESSAGES: FallbackMessage[] = [
  {
    id: 1,
    name: "Bambang Sudarsono",
    email: "bambang.sudarsono@cikarangindustrial.co.id",
    phone: "+62 812-3456-7890",
    subject: "Konsultasi Studi Kelayakan PLTS Atap Pabrik 1.5 MWp",
    message: "Selamat pagi tim PT Surya Karya Energi. Kami berencana memasang PLTS Atap pada 3 gedung manufaktur di Kawasan Industri GIIC Cikarang dengan total luas atap sekitar 12.000 m2. Mohon informasi terkait prosedur audit energi dan penjadwalan survey lokasi.",
    isRead: false,
    createdAt: new Date(),
  },
  {
    id: 2,
    name: "Ratna Kusuma Dewi",
    email: "ratna.kd@greeninfra-nusantara.com",
    phone: "+62 811-9876-5432",
    subject: "Tawaran Kemitraan Konsorsium EPC Tender PLN",
    message: "Dengan hormat, perusahaan kami sedang mempersiapkan proposal tender EPC untuk proyek pembangkit energi terbarukan di Jawa Tengah. Kami tertarik untuk menjalin kerja sama konsorsium dengan PT Surya Karya Energi untuk paket pekerjaan electrical balance of system.",
    isRead: true,
    createdAt: new Date(Date.now() - 86400000),
  },
];
