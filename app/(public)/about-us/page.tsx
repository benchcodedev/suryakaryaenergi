import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { SectionHeading } from "@/components/shared/section-heading";
import { Button } from "@/components/ui/button";
import {
  ChevronRight,
  ShieldCheck,
  Zap,
  Target,
  Users2,
  Award,
  Compass,
  CheckCircle,
  Lightbulb,
  PhoneCall,
  Check,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Tentang Kami — Profil Perusahaan & Manajemen",
  description: "Mengenal visi, misi, rekam jejak rekayasa teknik, dan tim kepemimpinan profesional PT Surya Karya Energi dalam industri energi terbarukan Indonesia.",
};

export default function AboutUsPage() {
  const milestones = [
    {
      year: "2012",
      title: "Pendirian Perusahaan",
      desc: "Berdiri sebagai biro konsultan rekayasa teknik elektro dan mekanikal khusus fasilitas industri di wilayah Jabodetabek.",
    },
    {
      year: "2016",
      title: "Ekspansi ke Kontraktor EPC Listrik",
      desc: "Memperluas kapabilitas ke pekerjaan konstruksi gardu induk 20–150 kV dan jaringan distribusi tegangan menengah.",
    },
    {
      year: "2019",
      title: "Pionir PLTS Atap Skala Industri",
      desc: "Menyelesaikan proyek PLTS Atap komersial & industri pertama berkapasitas 1 MWp di kawasan industri Cikarang.",
    },
    {
      year: "2023",
      title: "Portofolio Melampaui 100 MWp",
      desc: "Mencatatkan akumulasi instalasi dan kontrak O&M energi surya serta transmisi di atas 100 MWp di berbagai wilayah Indonesia.",
    },
  ];

  const coreValues = [
    {
      title: "Integritas & Transparansi",
      desc: "Menjunjung tinggi kejujuran teknis, transparansi kontrak pengadaan, dan etika bisnis dalam setiap tahapan proyek.",
      icon: ShieldCheck,
    },
    {
      title: "Keselamatan Kerja (HSE First)",
      desc: "Nol insiden (Zero Harm) adalah komitmen mutlak melalui penerapan SOP K3 berstandar internasional di ketinggian dan tegangan tinggi.",
      icon: Target,
    },
    {
      title: "Presisi & Inovasi Teknik",
      desc: "Mengadopsi pemodelan numerik sudut radiasi matahari dan teknologi PV terkini untuk efisiensi yield energi maksimal.",
      icon: Lightbulb,
    },
    {
      title: "Keberlanjutan Lingkungan",
      desc: "Membangun infrastruktur energi yang berkontribusi nyata pada penurunan emisi gas rumah kaca untuk masa depan Indonesia.",
      icon: Compass,
    },
  ];

  const leaders = [
    {
      name: "Ir. Bambang Trihatmojo, M.T.",
      role: "Direktur Utama / Chief Executive Officer",
      bio: "Praktisi rekayasa ketenagalistrikan dengan pengalaman lebih dari 22 tahun memimpin pengembangan proyek EPC pembangkit dan transmisi nasional.",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=600&q=80",
    },
    {
      name: "Ir. Hendra Kusuma, IPM.",
      role: "Direktur Teknik & Operasional",
      bio: "Insinyur profesional bersertifikat IPM yang membawahi rancang bangun sistem, kepatuhan HSE, dan interkoneksi jaringan kelistrikan ke PLN.",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80",
    },
    {
      name: "Drs. Arif Wicaksono, M.B.A.",
      role: "Direktur Keuangan & Kemitraan Strategis",
      bio: "Berpengalaman dalam pendanaan infrastruktur energi terbarukan, financial modeling LCOE, dan kerja sama konsorsium proyek utilitas.",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=600&q=80",
    },
  ];

  const certifications = [
    { name: "ISO 9001:2015", desc: "Sistem Manajemen Mutu Internasional" },
    { name: "ISO 14001:2015", desc: "Sistem Manajemen Lingkungan Hidup" },
    { name: "ISO 45001:2018", desc: "Sistem Manajemen Keselamatan & Kesehatan Kerja" },
    { name: "SMK3 Kemenaker RI", desc: "Sertifikasi K3 Nasional Tingkat Lanjutan" },
    { name: "SBU Jasa Pelaksana Konstruksi", desc: "Instalasi Pembangkit Tenaga Listrik & Jaringan" },
  ];

  return (
    <div className="flex flex-col">
      {/* 1. CINEMATIC HERO BANNER */}
      <section className="relative min-h-[50vh] lg:min-h-[55vh] flex items-center justify-center overflow-hidden bg-brown-900 text-white pt-28 pb-16">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1508873696983-2df5293cb32f?auto=format&fit=crop&w=2000&q=80"
            alt="About PT Surya Karya Energi"
            fill
            priority
            className="object-cover brightness-[0.68]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brown-950/85 via-brown-900/65 to-brown-950/80" />
          <div className="absolute inset-0 bg-gradient-to-t from-brown-950/90 via-transparent to-brown-950/40" />
        </div>

        <div className="container relative z-10 text-center max-w-4xl mx-auto space-y-4">
          <nav className="flex items-center justify-center gap-2 text-xs text-white/70 mb-2">
            <Link href="/" className="hover:text-white transition-colors">
              Beranda
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-gold-400 font-semibold">Tentang Kami</span>
          </nav>

          <span className="inline-block text-xs font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full bg-gold-500/20 text-gold-300 border border-gold-500/40 backdrop-blur-md">
            Profil & Integritas Perusahaan
          </span>

          <h1 className="text-3xl sm:text-5xl font-bold font-heading text-white leading-tight">
            Dedikasi Rekayasa untuk Kemandirian Energi
          </h1>

          <p className="text-base sm:text-lg text-white/85 leading-relaxed max-w-2xl mx-auto font-normal">
            Mengenal komitmen, standar keselamatan kerja, dan integritas profesional tim ahli PT Surya Karya Energi dalam memajukan infrastruktur energi bersih Indonesia.
          </p>
        </div>
      </section>

      {/* 2. VISI & MISI (DUAL ENTERPRISE CARDS) */}
      <section className="py-20 lg:py-24 bg-white border-b border-brown-200/60">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="rounded-3xl border border-brown-200/80 bg-surface p-8 sm:p-12 space-y-5 shadow-card hover-lift">
              <div className="w-14 h-14 rounded-2xl bg-gold-500 text-white flex items-center justify-center shadow-glow-gold">
                <Target className="w-7 h-7" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold font-heading text-brown-900 heading-underline">
                Visi Perusahaan
              </h2>
              <p className="text-base text-brown-600 leading-relaxed pt-2">
                Menjadi perusahaan rekayasa ketenagalistrikan dan EPC energi terbarukan terdepan di Indonesia yang terpercaya atas keunggulan mutu teknis, inovasi berkelanjutan, dan kontribusi nyata dalam percepatan transisi energi bersih nasional.
              </p>
            </div>

            <div className="rounded-3xl border border-brown-200/80 bg-surface p-8 sm:p-12 space-y-5 shadow-card hover-lift">
              <div className="w-14 h-14 rounded-2xl bg-brown-700 text-gold-400 flex items-center justify-center shadow-sm">
                <Zap className="w-7 h-7" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold font-heading text-brown-900 heading-underline">
                Misi Perusahaan
              </h2>
              <ul className="space-y-3.5 text-sm text-brown-600 leading-relaxed pt-2">
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-gold-500/20 text-gold-600 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <span>Menghasilkan sistem pembangkit dan infrastruktur transmisi dengan rasio performa dan keselamatan optimal.</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-gold-500/20 text-gold-600 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <span>Memberikan nilai tambah finansial nyata bagi klien korporat dan industri lewat penghematan biaya listrik.</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-gold-500/20 text-gold-600 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <span>Mencetak insinyur lokal yang kompeten dan berintegritas tinggi di bidang energi baru terbarukan.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 3. SEJARAH & MILESTONE TIMELINE */}
      <section className="py-20 lg:py-24 bg-surface border-b border-brown-200/60">
        <div className="container">
          <SectionHeading
            badge="Rekam Jejak"
            badgeVariant="gold"
            title="Perjalanan Membangun Kepercayaan"
            description="Lebih dari satu dekade berkarya menghadirkan instalasi kelistrikan yang andal dan aman di seluruh penjuru tanah air."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {milestones.map((m, idx) => (
              <div
                key={idx}
                className="rounded-2xl border border-brown-200/80 bg-white p-8 shadow-card hover-lift relative"
              >
                <div className="text-3xl font-extrabold font-heading text-gold-500 mb-2">
                  {m.year}
                </div>
                <h3 className="font-heading font-bold text-lg text-brown-900 mb-2.5">
                  {m.title}
                </h3>
                <p className="text-xs sm:text-sm text-brown-500 leading-relaxed">
                  {m.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. NILAI-NILAI UTAMA (CORE VALUES) */}
      <section className="py-20 lg:py-24 bg-white border-b border-brown-200/60">
        <div className="container">
          <SectionHeading
            badge="Budaya Perusahaan"
            badgeVariant="default"
            title="Nilai Utama yang Memandu Kami"
            description="Fondasi integritas yang melandasi setiap interaksi klien, keputusan rekayasa, dan pelaksanaan proyek di lapangan."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreValues.map((val, idx) => {
              const Icon = val.icon;
              return (
                <div
                  key={idx}
                  className="rounded-2xl border border-brown-200/80 bg-white p-8 shadow-card hover-lift"
                >
                  <div className="w-13 h-13 rounded-xl bg-brown-100 text-brown-700 flex items-center justify-center mb-5">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-heading font-bold text-lg text-brown-900 mb-2.5">
                    {val.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-brown-500 leading-relaxed">
                    {val.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. TIM KEPEMIMPINAN (LEADERSHIP TEAM) */}
      <section className="py-20 lg:py-24 bg-surface border-b border-brown-200/60">
        <div className="container">
          <SectionHeading
            badge="Manajemen Eksekutif"
            badgeVariant="gold"
            title="Dewan Direksi & Manajemen Rekayasa"
            description="Dipimpin para profesional berpengalaman luas dalam industri kelistrikan, konstruksi gardu transmisi, dan kepatuhan K3."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {leaders.map((lead, idx) => (
              <div
                key={idx}
                className="rounded-2xl border border-brown-200/80 bg-white overflow-hidden shadow-card hover-lift flex flex-col"
              >
                <div className="relative aspect-[4/3] w-full bg-brown-900">
                  <Image
                    src={lead.image}
                    alt={lead.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                </div>
                <div className="p-7 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <h3 className="font-heading font-bold text-lg text-brown-900">
                      {lead.name}
                    </h3>
                    <p className="text-xs font-bold text-gold-600 uppercase tracking-wider mt-1 mb-3">
                      {lead.role}
                    </p>
                    <p className="text-xs sm:text-sm text-brown-600 leading-relaxed">
                      {lead.bio}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. LEGALITAS & SERTIFIKASI RESMI */}
      <section className="py-20 lg:py-24 bg-white border-b border-brown-200/60">
        <div className="container">
          <SectionHeading
            align="center"
            badge="Standar Kepatuhan"
            badgeVariant="default"
            title="Legalitas & Standarisasi Resmi"
            description="Kepatuhan menyeluruh terhadap sertifikasi manajemen mutu internasional dan izin badan usaha ketenagalistrikan."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {certifications.map((cert, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl border border-brown-200/80 bg-surface shadow-sm hover-lift flex items-start gap-4"
              >
                <div className="w-12 h-12 rounded-xl bg-gold-500/15 text-gold-600 flex items-center justify-center shrink-0">
                  <Award className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-base text-brown-900">
                    {cert.name}
                  </h4>
                  <p className="text-xs text-brown-500 mt-1 leading-relaxed">
                    {cert.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. CLOSING CTA */}
      <section className="py-20 bg-brown-900 text-white text-center">
        <div className="container max-w-3xl mx-auto space-y-6">
          <h2 className="text-2xl sm:text-4xl font-bold font-heading text-white">
            Siap Membangun Kemitraan Energi Bersih Bersama Kami?
          </h2>
          <p className="text-base text-white/80 leading-relaxed">
            Hubungi tim direksi dan teknis kami untuk pembahasan kerja sama EPC, penjadwalan presentasi, atau studi kelayakan fasilitas Anda.
          </p>
          <div className="pt-2">
            <Button asChild size="lg" className="bg-gold-500 hover:bg-gold-600 text-white font-bold px-8 py-6 rounded-xl shadow-glow-gold text-base">
              <Link href="/contact-us">Hubungi Kantor Operasional</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}