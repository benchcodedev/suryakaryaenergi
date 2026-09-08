import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { SectionHeading } from "@/components/shared/section-heading";
import { Button } from "@/components/ui/button";
import {
  ChevronRight,
  Leaf,
  Users,
  ShieldCheck,
  Download,
  CheckCircle2,
  HeartHandshake,
  Globe2,
  Check,
  TrendingDown,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Keberlanjutan & ESG – Komitmen Transisi Energi Bersih",
  description: "Inisiatif Environmental, Social, and Governance (ESG) PT Surya Karya Energi dalam mendukung dekarbonisasi industri dan pencapaian target emisi nol bersih.",
};

export default function SustainabilityPage() {
  const esgPillars = [
    {
      title: "Environmental (Lingkungan)",
      desc: "Menghadirkan infrastruktur energi surya yang langsung menggantikan emisi bahan bakar fosil dan menjaga kelestarian ekosistem sekitar tapak instalasi.",
      badge: "Pilar Lingkungan Hidup",
      points: [
        "Pengurangan emisi karbon bersertifikasi melalui instalasi PLTS berkualitas tinggi.",
        "Pengelolaan limbah elektronik dan daur ulang modul surya purna-pakai.",
        "Optimasi desain lahan tapak tanpa merusak ekosistem vegetasi alami sekitar.",
      ],
    },
    {
      title: "Social (Sosial & Komunitas)",
      desc: "Mendorong pemberdayaan tenaga kerja lokal melalui transfer pengetahuan teknis dan program keselamatan kerja komprehensif.",
      badge: "Pilar Sosial & Ketenagakerjaan",
      points: [
        "Prioritas penyerapan teknisi dan tenaga kerja lokal di sekitar lokasi tapak EPC.",
        "Pelatihan sertifikasi instalatur solar PV bekerja sama dengan SMK kejuruan daerah.",
        "Bantuan elektrifikasi solar skala mikro untuk fasilitas kesehatan & pendidikan terpencil.",
      ],
    },
    {
      title: "Governance (Tata Kelola)",
      desc: "Menerapkan standar etika tertinggi, transparansi rantai pasok, dan anti-penyuapan dalam seluruh aktivitas bisnis perusahaan.",
      badge: "Pilar Tata Kelola Transparan",
      points: [
        "Kebijakan ketat anti-korupsi, gratifikasi, dan benturan kepentingan di semua lini.",
        "Audit berkala keselamatan kerja (HSE) independen dan audit kepatuhan laporan keuangan.",
        "Uji tuntas (due diligence) integritas vendor komponen dan mitra subkontraktor.",
      ],
    },
  ];

  const cleanMetrics = [
    {
      value: "85.000+",
      label: "Ton CO₂ / Tahun",
      desc: "Estimasi emisi GRK yang berhasil dicegah",
    },
    {
      value: "120+",
      label: "MWp Total Kapasitas",
      desc: "Instalasi energi bersih terbarukan",
    },
    {
      value: "185.000+",
      label: "MWh Energi Hijau",
      desc: "Dihasilkan per tahun oleh instalasi aktif",
    },
    {
      value: "3,5 Juta+",
      label: "Pohon Setara",
      desc: "Dampak penyerapan karbon ekuivalen",
    },
  ];

  const csrPrograms = [
    {
      title: "Akademi Surya Vokasi",
      desc: "Program beasiswa pelatihan dan sertifikasi kompetensi dasar teknisi fotovoltaik untuk siswa SMK teknik elektro di Jawa Barat dan Maluku.",
      icon: Users,
    },
    {
      title: "Lampu Desa Mandiri Energi",
      desc: "Pemberian dan instalasi sistem penerangan jalan umum (PJU) tenaga surya off-grid untuk desa penyangga proyek pembangkit.",
      icon: HeartHandshake,
    },
    {
      title: "Edukasi Keselamatan Kelistrikan",
      desc: "Penyuluhan keselamatan instalasi listrik rumah tangga dan bahaya korsleting bagi warga komunitas di sekitar area konstruksi gardu induk.",
      icon: ShieldCheck,
    },
  ];

  const hseStandards = [
    "Zero Harm Protocol: Mewajibkan Job Safety Analysis (JSA) sebelum pekerjaan dimulai.",
    "Penggunaan Alat Pelindung Diri (APD) berstandar SNI/EN untuk ketinggian dan tegangan tinggi.",
    "Pelatihan Tanggap Darurat dan simulasi evakuasi berkala di seluruh area site proyek.",
    "Pemeriksaan kesehatan kerja (Medical Check-up) berkala bagi seluruh pekerja lapangan.",
  ];

  const sdgs = [
    {
      num: "SDG 7",
      title: "Energi Bersih & Terjangkau",
      desc: "Mempercepat porsi energi terbarukan dalam bauran energi nasional lewat teknologi PLTS berbiaya terjangkau.",
    },
    {
      num: "SDG 13",
      title: "Penanganan Perubahan Iklim",
      desc: "Aksi mitigasi langsung terhadap pemanasan global dengan mengurangi ketergantungan energi fosil.",
    },
    {
      num: "SDG 8",
      title: "Pekerjaan Layak & Pertumbuhan Ekonomi",
      desc: "Menciptakan lapangan kerja hijau (green jobs) berkualitas dengan jaminan keselamatan kerja penuh.",
    },
  ];

  return (
    <div className="flex flex-col">
      {/* 1. CINEMATIC HERO BANNER */}
      <section className="relative min-h-[50vh] lg:min-h-[55vh] flex items-center justify-center overflow-hidden bg-brown-900 text-white pt-28 pb-16">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&w=2000&q=80"
            alt="Sustainability and ESG"
            fill
            priority
            className="object-cover brightness-[0.68]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brown-950/85 via-emerald-950/60 to-brown-950/80" />
          <div className="absolute inset-0 bg-gradient-to-t from-brown-950/90 via-transparent to-brown-950/40" />
        </div>

        <div className="container relative z-10 text-center max-w-4xl mx-auto space-y-4">
          <nav className="flex items-center justify-center gap-2 text-xs text-white/70 mb-2">
            <Link href="/" className="hover:text-white transition-colors">
              Beranda
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-emerald-400 font-semibold">Keberlanjutan</span>
          </nav>

          <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider px-4 py-1.5 rounded-full bg-sage-600/30 text-emerald-300 border border-emerald-400/40 backdrop-blur-md">
            <Leaf className="w-4 h-4" />
            <span>Environmental, Social, & Governance (ESG) Framework</span>
          </span>

          <h1 className="text-3xl sm:text-5xl font-bold font-heading text-white leading-tight">
            Komitmen Keberlanjutan & Transisi Energi
          </h1>

          <p className="text-base sm:text-lg text-white/85 leading-relaxed max-w-2xl mx-auto font-normal">
            Bagi PT Surya Karya Energi, keberlanjutan bukan sekadar kepatuhan dokumen, melainkan inti dari setiap keputusan rekayasa teknik dan kontribusi sosial kami bagi kelestarian bumi Indonesia.
          </p>
        </div>
      </section>

      {/* 2. ESG FRAMEWORK (3 CARDS DENGAN AKSEN SAGE-600) */}
      <section className="py-20 lg:py-24 bg-white border-b border-brown-200">
        <div className="container">
          <SectionHeading
            badge="Pilar Strategis"
            badgeVariant="sage"
            title="Kerangka Kerja ESG Perusahaan"
            description="Pendekatan terstruktur dalam menyelaraskan pertumbuhan bisnis dengan tanggung jawab pelestarian lingkungan, keselamatan sosial, dan etika tata kelola."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {esgPillars.map((pillar, idx) => (
              <div
                key={idx}
                className="rounded-3xl border border-brown-200/80 bg-surface p-8 sm:p-10 flex flex-col justify-between shadow-card hover-lift"
              >
                <div>
                  <span className="inline-block text-xs font-bold uppercase tracking-wider text-sage-600 bg-[#eef3eb] px-3.5 py-1.5 rounded-full border border-sage-600/30 mb-5">
                    {pillar.badge}
                  </span>
                  <h3 className="text-2xl font-bold font-heading text-brown-900 mb-3.5">
                    {pillar.title}
                  </h3>
                  <p className="text-sm text-brown-600 leading-relaxed mb-6">
                    {pillar.desc}
                  </p>
                </div>

                <div className="pt-6 border-t border-brown-200/60 space-y-3.5">
                  {pillar.points.map((pt, pIdx) => (
                    <div key={pIdx} className="flex items-start gap-3 text-xs sm:text-sm text-brown-700">
                      <div className="w-5 h-5 rounded-full bg-sage-600/20 text-sage-600 flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-3.5 h-3.5" />
                      </div>
                      <span>{pt}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. CLEAN ENERGY IMPACT STATS (RAPAT, RAPI, RESPONSIVE, TIDAK OVERFLOW) */}
      <section className="py-16 sm:py-20 lg:py-24 bg-surface border-b border-brown-200">
        <div className="container">
          <SectionHeading
            align="center"
            badge="Dampak Nyata"
            badgeVariant="sage"
            title="Dampak Terukur Portofolio Energi Bersih"
            description="Akumulasi kontribusi proyek pembangkit listrik tenaga surya terhadap pengurangan emisi karbon industri."
          />

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-6">
            {cleanMetrics.map((met, idx) => (
              <div
                key={idx}
                className="p-4 sm:p-6 lg:p-7 rounded-2xl bg-white border border-brown-200 shadow-card hover-lift flex flex-col justify-between text-center min-h-[175px] sm:min-h-[200px]"
              >
                <div>
                  <p className="font-heading font-extrabold text-xl sm:text-2xl lg:text-3xl text-sage-600 tracking-tight">
                    {met.value}
                  </p>
                  <p className="mt-2 font-heading font-bold text-xs sm:text-sm lg:text-base text-brown-900 leading-snug">
                    {met.label}
                  </p>
                </div>
                <p className="mt-2 text-[11px] sm:text-xs text-brown-500 leading-relaxed">
                  {met.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. CSR & COMMUNITY EMPOWERMENT */}
      <section className="py-20 lg:py-24 bg-white border-b border-brown-200">
        <div className="container">
          <SectionHeading
            badge="Tanggung Jawab Sosial"
            badgeVariant="sage"
            title="Program Pemberdayaan Komunitas (CSR)"
            description="Memberdayakan komunitas masyarakat sekitar area operasional proyek dan mencetak talenta lokal berkeahlian energi terbarukan."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {csrPrograms.map((csr, idx) => {
              const Icon = csr.icon;
              return (
                <div
                  key={idx}
                  className="rounded-2xl border border-brown-200/80 bg-surface p-8 shadow-card hover-lift"
                >
                  <div className="w-14 h-14 rounded-2xl bg-[#eef3eb] text-sage-600 flex items-center justify-center mb-5 border border-sage-600/30 shadow-sm">
                    <Icon className="w-7 h-7" />
                  </div>
                  <h3 className="font-heading font-bold text-xl text-brown-900 mb-3">
                    {csr.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-brown-600 leading-relaxed">
                    {csr.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. HSE SAFETY & PROTOCOL */}
      <section className="py-20 lg:py-24 bg-surface border-b border-brown-200">
        <div className="container">
          <div className="rounded-3xl border border-brown-200/80 bg-white p-8 sm:p-14 shadow-card">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-5 space-y-4">
                <span className="text-xs font-bold uppercase tracking-wider text-brown-700 bg-brown-100 px-3.5 py-1.5 rounded-full border border-brown-200">
                  Health, Safety, & Environment
                </span>
                <h3 className="text-2xl sm:text-4xl font-bold font-heading text-brown-900 leading-tight heading-underline">
                  Protokol Keselamatan Kerja Tanpa Kompromi
                </h3>
                <p className="text-sm sm:text-base text-brown-600 leading-relaxed pt-2">
                  Bekerja di area kelistrikan tegangan tinggi dan atap bangunan industri menuntut disiplin K3 level tertinggi. Kami bangga menjaga rekor Zero Lost Time Injury (LTI) pada proyek kami.
                </p>
              </div>

              <div className="lg:col-span-7 space-y-3.5">
                {hseStandards.map((std, idx) => (
                  <div
                    key={idx}
                    className="p-5 rounded-xl border border-brown-200/80 bg-surface flex items-start gap-3.5 shadow-sm"
                  >
                    <ShieldCheck className="w-6 h-6 text-gold-500 shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm font-semibold text-brown-900">{std}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. UN SDGS ALIGNMENT */}
      <section className="py-20 lg:py-24 bg-white border-b border-brown-200">
        <div className="container">
          <SectionHeading
            align="center"
            badge="Agenda PBB"
            badgeVariant="sage"
            title="Penyelarasan dengan SDGs PBB"
            description="Mendukung secara langsung Agenda Tujuan Pembangunan Berkelanjutan Perserikatan Bangsa-Bangsa."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {sdgs.map((sdg, idx) => (
              <div
                key={idx}
                className="p-8 rounded-2xl border border-brown-200/80 bg-surface shadow-card hover-lift"
              >
                <span className="inline-block text-sm font-extrabold font-heading text-sage-600 bg-[#eef3eb] px-3.5 py-1.5 rounded-full border border-sage-600/30 mb-4">
                  {sdg.num}
                </span>
                <h4 className="font-heading font-bold text-xl text-brown-900 mb-2.5">
                  {sdg.title}
                </h4>
                <p className="text-xs sm:text-sm text-brown-600 leading-relaxed">
                  {sdg.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. DOWNLOAD REPORT CTA */}
      <section className="py-20 bg-brown-900 text-white text-center">
        <div className="container max-w-2xl mx-auto space-y-6">
          <h2 className="text-2xl sm:text-4xl font-bold font-heading text-white">
            Transparansi Kinerja Keberlanjutan
          </h2>
          <p className="text-base text-white/80 leading-relaxed font-normal">
            Unduh dokumen ringkasan komitmen keberlanjutan dan kepatuhan standar lingkungan PT Surya Karya Energi.
          </p>
          <div className="pt-2">
            <Button size="lg" className="bg-gold-500 hover:bg-gold-600 text-white font-bold px-8 py-6 rounded-xl shadow-glow-gold gap-2 text-base">
              <Download className="w-5 h-5" />
              <span>Unduh Ikhtisar Keberlanjutan (PDF)</span>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
