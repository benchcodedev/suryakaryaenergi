import { PrismaClient, ProjectStatus } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

async function main() {
  console.log("Seeding database suryakaryaenergi...");

  // 1. Seed Admin User
  const adminPasswordHash = await bcrypt.hash("SuryaKarya2026!", 10);
  const adminUser = await prisma.adminUser.upsert({
    where: { email: "admin@suryakaryaenergi.com" },
    update: {
      name: "Administrator SKE",
      passwordHash: adminPasswordHash,
    },
    create: {
      name: "Administrator SKE",
      email: "admin@suryakaryaenergi.com",
      passwordHash: adminPasswordHash,
    },
  });
  console.log(`Admin user ready: ${adminUser.email}`);

  // 2. Clear existing sample projects to ensure fresh consistent data
  await prisma.projectImage.deleteMany();
  await prisma.project.deleteMany();
  await prisma.contactMessage.deleteMany();

  // High resolution energy/solar industrial images (Unsplash industrial/solar)
  // CATATAN: Gambar development di bawah adalah placeholder bertema industri energi & panel surya.
  // Wajib diganti dengan dokumentasi foto asli proyek PT Surya Karya Energi sebelum go-live ke production.
  const projectsData = [
    {
      title: "PLTS Atap Kawasan Industri Cikarang",
      slug: "plts-atap-kawasan-industri-cikarang",
      category: "PLTS / Solar",
      location: "Cikarang, Jawa Barat",
      client: "PT Indotech Mandiri Perkasa",
      capacity: "3.2 MWp",
      year: 2024,
      status: ProjectStatus.Selesai,
      isFeatured: true,
      coverImage: "https://images.unsplash.com/photo-1509391365360-2e959784a276?auto=format&fit=crop&w=1200&q=80",
      description: "Pembangunan instalasi Pembangkit Listrik Tenaga Surya (PLTS) Atap skala komersial & industri dengan total kapasitas 3.2 MWp di atap fasilitas manufaktur Cikarang. Menggunakan panel Tier-1 Monocrystalline bifacial dan inverter sentral efisiensi tinggi, terintegrasi mulus dengan jaringan utilitas internal pabrik.",
      images: [
        {
          imageUrl: "https://images.unsplash.com/photo-1508873696983-2df5293cb32f?auto=format&fit=crop&w=1000&q=80",
          caption: "Inspeksi modul solar panel pada struktur atap pabrik",
          sortOrder: 1,
        },
        {
          imageUrl: "https://images.unsplash.com/photo-1497440001374-f26997328c1b?auto=format&fit=crop&w=1000&q=80",
          caption: "Ruang inverter dan panel distribusi sinkronisasi tegangan",
          sortOrder: 2,
        },
      ],
    },
    {
      title: "PLTS Ground-Mounted Karawang Eco Power",
      slug: "plts-ground-mounted-karawang-eco-power",
      category: "PLTS / Solar",
      location: "Karawang, Jawa Barat",
      client: "Konsorsium Surya Nusantara",
      capacity: "15.0 MWp",
      year: 2023,
      status: ProjectStatus.Selesai,
      isFeatured: true,
      coverImage: "https://images.unsplash.com/photo-1509391365360-2e959784a276?auto=format&fit=crop&w=1200&q=80",
      description: "Proyek rekayasa, pengadaan, dan konstruksi (EPC) PLTS skala utilitas berkonsep ramah lingkungan di lahan terbuka seluas 18 hektar. Sistem dilengkapi pelacak matahari (single-axis solar tracker) untuk memaksimalkan tangkapan radiasi harian, serta substation tegangan menengah 20 kV terhubung ke gardu transmisi regional.",
      images: [
        {
          imageUrl: "https://images.unsplash.com/photo-1545208942-e1c9c916524b?auto=format&fit=crop&w=1000&q=80",
          caption: "Bentang solar array ground-mounted dengan solar tracking system",
          sortOrder: 1,
        },
        {
          imageUrl: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=1000&q=80",
          caption: "Instalasi interkoneksi step-up transformer 20 kV",
          sortOrder: 2,
        },
      ],
    },
    {
      title: "EPC Gardu Induk & Jaringan Transmisi 150 kV",
      slug: "epc-gardu-induk-dan-transmisi-150kv",
      category: "EPC",
      location: "Subang, Jawa Barat",
      client: "PT Transmisi Energi Nasional",
      capacity: "150 kV / 60 MVA",
      year: 2024,
      status: ProjectStatus.Selesai,
      isFeatured: true,
      coverImage: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=1200&q=80",
      description: "Pekerjaan penuh Engineering, Procurement, and Construction untuk Gardu Induk 150 kV dengan trafo tenaga 60 MVA, termasuk jalur transmisi penghubung sepanjang 14 km sirkuit ganda. Dilengkapi sistem proteksi numerik modern dan SCADA automation untuk keandalan penyaluran listrik kawasan industri strategis.",
      images: [
        {
          imageUrl: "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&w=1000&q=80",
          caption: "Switchyard outdoor 150 kV gardu induk",
          sortOrder: 1,
        },
      ],
    },
    {
      title: "Sistem PLTS Hibrida Off-Grid Pulau Morotai",
      slug: "plts-hibrida-off-grid-pulau-morotai",
      category: "PLTS / Solar",
      location: "Morotai, Maluku Utara",
      client: "Dinas ESDM Maluku Utara",
      capacity: "1.8 MWp + BESS 2 MWh",
      year: 2025,
      status: ProjectStatus.Berjalan,
      isFeatured: false,
      coverImage: "https://images.unsplash.com/photo-1545208942-e1c9c916524b?auto=format&fit=crop&w=1200&q=80",
      description: "Pembangunan PLTS Hibrida mandiri terisolasi (microgrid) yang menggabungkan pembangkit surya fotovoltaik 1.8 MWp dengan Battery Energy Storage System (BESS) 2 MWh lithium-ferro-phosphate dan genset pendukung otomatis. Menyediakan suplai energi hijau 24 jam untuk masyarakat pesisir kepulauan terluar.",
      images: [
        {
          imageUrl: "https://images.unsplash.com/photo-1509391365360-2e959784a276?auto=format&fit=crop&w=1000&q=80",
          caption: "Instalasi modul fotovoltaik kepulauan Morotai",
          sortOrder: 1,
        },
      ],
    },
    {
      title: "Operation & Maintenance PLTS Sentralisasi Jawa Timur",
      slug: "operation-and-maintenance-plts-jawa-timur",
      category: "Operation & Maintenance",
      location: "Pasuruan, Jawa Timur",
      client: "PT Multi Surya Prima",
      capacity: "25.0 MWp Total",
      year: 2025,
      status: ProjectStatus.Berjalan,
      isFeatured: false,
      coverImage: "https://images.unsplash.com/photo-1508873696983-2df5293cb32f?auto=format&fit=crop&w=1200&q=80",
      description: "Kontrak pemeliharaan preventif, korektif, dan pemantauan performa jarak jauh (Remote Monitoring) 24/7 untuk portofolio pembangkit listrik tenaga surya multi-site sebesar 25 MWp. Meliputi pembersihan robotik modul, thermography drone inspection, pemeliharaan inverter, serta pengujian proteksi berkala.",
      images: [
        {
          imageUrl: "https://images.unsplash.com/photo-1497440001374-f26997328c1b?auto=format&fit=crop&w=1000&q=80",
          caption: "Pemeriksaan drone thermal imaging untuk deteksi hotspot sel",
          sortOrder: 1,
        },
      ],
    },
    {
      title: "EPC Pembangkit Listrik Tenaga Minihidro (PLTM)",
      slug: "epc-pembangkit-listrik-tenaga-minihidro",
      category: "EPC",
      location: "Garut, Jawa Barat",
      client: "PT Sumber Daya Terbarukan Nusantara",
      capacity: "4.5 MW",
      year: 2026,
      status: ProjectStatus.Perencanaan,
      isFeatured: false,
      coverImage: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&w=1200&q=80",
      description: "Tahap perancangan teknik detail (FEED / Detailed Engineering Design) untuk pembangunan Pembangkit Listrik Tenaga Minihidro tipe run-of-river. Mencakup desain bendung intake, saluran pembawa headrace sepanjang 2.3 km, bak penenang, pipa penstock, serta rumah pembangkit powerhouse berkapasitas 2 x 2.25 MW.",
      images: [],
    },
  ];

  for (const item of projectsData) {
    const { images, ...projectData } = item;
    const project = await prisma.project.create({
      data: {
        ...projectData,
        images: {
          create: images,
        },
      },
    });
    console.log(`Created project: ${project.title} (${project.slug})`);
  }

  // 3. Seed Initial Contact Messages
  await prisma.contactMessage.createMany({
    data: [
      {
        name: "Bambang Sudarsono",
        email: "bambang.sudarsono@cikarangindustrial.co.id",
        phone: "+62 812-3456-7890",
        subject: "Konsultasi Studi Kelayakan PLTS Atap Pabrik 1.5 MWp",
        message: "Selamat pagi tim PT Surya Karya Energi. Kami berencana memasang PLTS Atap pada 3 gedung manufaktur di Kawasan Industri GIIC Cikarang dengan total luas atap sekitar 12.000 m2. Mohon informasi terkait prosedur audit energi dan penjadwalan survey lokasi.",
        isRead: false,
      },
      {
        name: "Ratna Kusuma Dewi",
        email: "ratna.kd@greeninfra-nusantara.com",
        phone: "+62 811-9876-5432",
        subject: "Tawaran Kemitraan Konsorsium EPC Tender PLN",
        message: "Dengan hormat, perusahaan kami sedang mempersiapkan proposal tender EPC untuk proyek pembangkit energi terbarukan di Jawa Tengah. Kami tertarik untuk menjalin kerja sama konsorsium dengan PT Surya Karya Energi untuk paket pekerjaan electrical balance of system.",
        isRead: true,
      },
    ],
  });
  console.log("Seeded sample contact messages.");
  console.log("Seeding finished successfully!");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });