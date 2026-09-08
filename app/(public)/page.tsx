import { FALLBACK_PROJECTS } from "@/lib/fallback-data";
﻿import React from "react";
import Link from "next/link";
import Image from "next/image";
import prisma from "@/lib/prisma";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { SectionHeading } from "@/components/shared/section-heading";
import { ProjectCard, ProjectCardData } from "@/components/shared/project-card";
import {
  Sun,
  Zap,
  Wrench,
  LineChart,
  ShieldCheck,
  Leaf,
  ArrowRight,
  CheckCircle2,
  Building2,
  PhoneCall,
  Award,
  Factory,
  Check,
  Clock,
  TrendingUp,
} from "lucide-react";

export const revalidate = 60; // ISR revalidation

async function getFeaturedProjects() {
  try {
    const projects = await prisma.project.findMany({
      where: { isFeatured: true },
      take: 3,
      orderBy: { year: "desc" },
    });
    if (projects && projects.length > 0) return projects as ProjectCardData[];
    return FALLBACK_PROJECTS.filter((p) => p.isFeatured).slice(0, 3) as ProjectCardData[];
  } catch {
    return FALLBACK_PROJECTS.filter((p) => p.isFeatured).slice(0, 3) as ProjectCardData[];
  }
}

export default async function HomePage() {
  const featuredProjects = await getFeaturedProjects();

  const services = [
    {
      num: "01",
      title: "Solar PV System (PLTS)",
      description:
        "Perancangan dan instalasi sistem PLTS Atap komersial & industri (C&I), sistem ground-mounted skala utilitas, serta solar microgrid mandiri kepulauan.",
      icon: Sun,
      highlights: ["PLTS Atap Pabrik & Pergudangan", "Ground-Mounted Solar Farm", "Integrasi BESS Battery Storage"],
    },
    {
      num: "02",
      title: "EPC Gardu & Transmisi",
      description:
        "Solusi penuh Engineering, Procurement, and Construction untuk gardu induk 20–150 kV, jalur transmisi tegangan tinggi, serta sistem proteksi kelistrikan.",
      icon: Zap,
      highlights: ["Gardu Induk 20–150 kV & Trafo", "Jalur Transmisi & Distribusi", "Sistem Proteksi & SCADA"],
    },
    {
      num: "03",
      title: "Operation & Maintenance",
      description:
        "Layanan pemeliharaan preventif, korektif, dan pemantauan jarak jauh 24/7 untuk menjamin rasio performa (PR) dan ketersediaan pembangkit maksimal.",
      icon: Wrench,
      highlights: ["Monitoring SCADA Realtime 24/7", "Inspeksi Drone Thermography", "SLA Kesiapan Tim Cepat Tanggap"],
    },
    {
      num: "04",
      title: "Audit & Konsultasi Energi",
      description:
        "Studi kelayakan teknis (Feasibility Study), financial modeling LCOE, studi dampak jaringan ke PLN, serta pengurusan perizinan ESDM terintegrasi.",
      icon: LineChart,
      highlights: ["Studi Kelayakan Teknis (FS)", "Grid Interconnection Study ke PLN", "Audit Efisiensi Energi Industri"],
    },
  ];

  const whyChooseUs = [
    {
      num: "01",
      title: "Tenaga Ahli Bersertifikasi",
      desc: "Didukung insinyur teknik elektro dan manajemen proyek tersertifikasi kompetensi ketenagalistrikan ESDM serta K3 umum.",
      icon: Award,
    },
    {
      num: "02",
      title: "Komponen Tier-1 Global",
      desc: "Menggunakan modul surya, inverter, dan peralatan gardu berkualitas Tier-1 dari pabrikan terkemuka dengan garansi resmi 25 tahun.",
      icon: ShieldCheck,
    },
    {
      num: "03",
      title: "Garansi Rasio Performa (PRG)",
      desc: "Setiap pembangkit yang kami bangun dilengkapi Performance Ratio Guarantee untuk kepastian hasil produksi energi dan ROI klien.",
      icon: TrendingUp,
    },
    {
      num: "04",
      title: "Layanan O&M Tanggap 24/7",
      desc: "Pusat pemantauan digital SCADA dan tim reaksi cepat lapangan siaga melayani kendala teknis fasilitas industri secara berkesinambungan.",
      icon: Clock,
    },
  ];

  const industries = [
    { name: "Kawasan Industri & Manufaktur", icon: Factory, desc: "Pabrik otomotif, tekstil, elektronik, dan pengolahan logam." },
    { name: "Pusat Logistik & Pergudangan", icon: Building2, desc: "Atap fasilitas cold storage dan pusat distribusi e-commerce." },
    { name: "Agribisnis & Pabrik Sawit", icon: Leaf, desc: "Sistem energi terbarukan mandiri di area perkebunan terpencil." },
    { name: "Gedung Komersial & Institusi", icon: Building2, desc: "Pusat perbelanjaan, rumah sakit, dan gedung perkantoran." },
  ];

  return (
    <div className="flex flex-col">
      {/* 1. HERO SECTION (CINEMATIC SUNLIT HERO WITH ELEGANT WARM AMBER-BROWN ACCENTS) */}
      <section className="relative min-h-[85vh] lg:min-h-[90vh] flex items-center justify-center overflow-hidden bg-brown-900 text-white pt-28 pb-20 lg:py-32">
        {/* Full-bleed Background Image with warm sunlit clarity */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1509391365360-2e959784a276?auto=format&fit=crop&w=2000&q=85"
            alt="PT Surya Karya Energi Solar Power Facility"
            fill
            priority
            className="object-cover object-center brightness-[0.68] scale-105"
          />
          {/* Warm, radiant amber-brown gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-brown-950/85 via-brown-900/65 to-brown-950/80" />
          <div className="absolute inset-0 bg-gradient-to-t from-brown-950/90 via-transparent to-brown-950/40" />
        </div>

        <div className="container relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-7">
            {/* Top Pill Badge */}
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-amber-400/20 border border-amber-300/40 backdrop-blur-md text-xs font-bold text-amber-200 uppercase tracking-wider shadow-sm">
              <Sun className="w-4 h-4 text-amber-300" />
              <span>Penyedia Utama Solusi EPC & Solar PV Indonesia</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl xl:text-[62px] font-bold font-heading text-white leading-[1.12] tracking-tight">
              Solusi Rekayasa & Energi Terbarukan untuk{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-gold-400 to-yellow-200">
                Industri Indonesia
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg lg:text-xl text-amber-50/90 leading-relaxed max-w-2xl mx-auto font-normal">
              Layanan terintegrasi Engineering, Procurement, and Construction (EPC) untuk pembangkit listrik tenaga surya, gardu transmisi, dan pemeliharaan O&M andal berstandar internasional.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
              <Button
                asChild
                size="lg"
                className="bg-gold-500 hover:bg-gold-600 text-white font-bold px-8 py-6 rounded-xl shadow-glow-gold hover:shadow-glow-gold-lg hover:-translate-y-1 transition-all duration-300 text-base"
              >
                <Link href="/contact-us" className="flex items-center gap-2">
                  <PhoneCall className="w-5 h-5" />
                  <span>Konsultasi Proyek</span>
                </Link>
              </Button>

              <Button
                asChild
                size="lg"
                variant="outline"
                className="bg-white/15 hover:bg-white/25 text-white border-white/35 backdrop-blur-md font-semibold px-8 py-6 rounded-xl hover:-translate-y-1 transition-all duration-300 text-base"
              >
                <Link href="/project" className="flex items-center gap-2">
                  <span>Lihat Portofolio</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
            </div>

            {/* Trust Badges */}
            <div className="pt-6 flex flex-wrap items-center justify-center gap-6 sm:gap-8 text-xs sm:text-sm text-white/80 border-t border-white/15">
              <span className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-gold-400" />
                Sertifikasi ISO 9001, 14001, 45001
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-gold-400" />
                Akreditasi SBU Ketenagalistrikan ESDM
              </span>
              <span className="flex items-center gap-2">
                <Award className="w-4 h-4 text-gold-400" />
                Garansi Rasio Performa (PRG) 25 Tahun
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 1.5. STATS COUNTER STRIP (BRIGHT, CRISP, WARM FLOATING BAR) */}
      <section className="relative z-20 -mt-10 container mb-12 sm:mb-16">
        <div className="bg-white rounded-2xl sm:rounded-3xl border border-brown-200 shadow-xl p-5 sm:p-7 lg:p-8 grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          <div className="flex flex-col sm:flex-row items-center sm:items-center text-center sm:text-left gap-2.5 sm:gap-4">
            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-amber-50 border border-amber-200 text-gold-600 flex items-center justify-center shrink-0">
              <Clock className="w-6 h-6 sm:w-7 sm:h-7" />
            </div>
            <div>
              <div className="text-xl sm:text-2xl lg:text-3xl font-extrabold font-heading text-brown-900 tracking-tight">
                15+ Tahun
              </div>
              <div className="text-xs sm:text-sm text-brown-600 font-medium">
                Pengalaman Rekayasa Energi
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center sm:items-center text-center sm:text-left gap-2.5 sm:gap-4">
            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-amber-50 border border-amber-200 text-gold-600 flex items-center justify-center shrink-0">
              <Zap className="w-6 h-6 sm:w-7 sm:h-7" />
            </div>
            <div>
              <div className="text-xl sm:text-2xl lg:text-3xl font-extrabold font-heading text-brown-900 tracking-tight">
                120+ MWp
              </div>
              <div className="text-xs sm:text-sm text-brown-600 font-medium">
                Total Kapasitas Terpasang
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center sm:items-center text-center sm:text-left gap-2.5 sm:gap-4">
            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-amber-50 border border-amber-200 text-gold-600 flex items-center justify-center shrink-0">
              <ShieldCheck className="w-6 h-6 sm:w-7 sm:h-7" />
            </div>
            <div>
              <div className="text-xl sm:text-2xl lg:text-3xl font-extrabold font-heading text-brown-900 tracking-tight">
                45+ Proyek
              </div>
              <div className="text-xs sm:text-sm text-brown-600 font-medium">
                Instalasi EPC Beroperasi
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center sm:items-center text-center sm:text-left gap-2.5 sm:gap-4">
            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-amber-50 border border-amber-200 text-gold-600 flex items-center justify-center shrink-0">
              <TrendingUp className="w-6 h-6 sm:w-7 sm:h-7" />
            </div>
            <div>
              <div className="text-xl sm:text-2xl lg:text-3xl font-extrabold font-heading text-brown-900 tracking-tight">
                99.4%
              </div>
              <div className="text-xs sm:text-sm text-brown-600 font-medium">
                Tingkat Keandalan Uptime
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. ABOUT SECTION (WHAT IS SURYA KARYA ENERGI) */}
      <section className="py-16 lg:py-24 bg-white border-b border-brown-200">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Visual with frame */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-brown-200 aspect-[4/3] sm:aspect-[16/12]">
                <Image
                  src="https://images.unsplash.com/photo-1508873696983-2df5293cb32f?auto=format&fit=crop&w=1000&q=80"
                  alt="Instalasi Panel Surya Atap Industri"
                  fill
                  sizes="(max-width: 1024px) 100vw, 45vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brown-950/70 via-transparent to-transparent" />
                <div className="absolute bottom-5 left-5 right-5 glass-card p-4 rounded-xl text-brown-900">
                  <p className="font-heading font-bold text-sm">Standar Mutu Tier-1 Internasional</p>
                  <p className="text-xs text-brown-600 mt-0.5">Presisi teknik tinggi untuk hasil energi optimal.</p>
                </div>
              </div>
              {/* Decorative accent element */}
              <div className="hidden sm:block absolute -bottom-5 -right-5 w-28 h-28 bg-gold-500/15 rounded-3xl -z-10 border border-gold-500/30" />
            </div>

            {/* Text Description */}
            <div className="lg:col-span-7 space-y-6">
              <span className="inline-block text-xs font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full border bg-brown-100 text-brown-900 border-brown-200">
                Tentang PT Surya Karya Energi
              </span>

              <h2 className="text-3xl sm:text-4xl font-bold font-heading text-brown-900 leading-tight heading-underline">
                Mitra Strategis Rekayasa Energi Terbarukan
              </h2>

              <p className="text-base sm:text-lg text-brown-600 leading-relaxed pt-3">
                PT Surya Karya Energi adalah perusahaan kontraktor EPC ketenagalistrikan yang berdedikasi memajukan pemanfaatan energi bersih bagi sektor industri dan komersial di Indonesia. Kami mengintegrasikan keahlian teknis tingkat lanjut dengan kepatuhan regulasi ketat.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
                {[
                  "Perancangan sistem solar PV presisi bergaransi rasio performa",
                  "Konstruksi gardu induk & jaringan transmisi tegangan menengah/tinggi",
                  "Pengurusan izin operasi lengkap (SLO, IUPTLS, dan paralel PLN)",
                  "Pemantauan performa digital SCADA dan pemeliharaan tanggap 24/7",
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-brown-800">
                    <div className="w-5 h-5 rounded-full bg-gold-500/20 text-gold-600 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5" />
                    </div>
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4">
                <Button asChild variant="outline" size="lg" className="rounded-xl border-brown-400 text-brown-900 hover:bg-brown-100">
                  <Link href="/about-us" className="flex items-center gap-2">
                    <span>Pelajari Profil Lengkap Perusahaan</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. LAYANAN EPC UTAMA */}
      <section className="py-20 lg:py-28 bg-surface border-b border-brown-200">
        <div className="container">
          <SectionHeading
            align="center"
            badge="Kompetensi Rekayasa"
            badgeVariant="gold"
            title="Layanan Terintegrasi EPC & O&M"
            description="Solusi end-to-end dari studi kelayakan teknis, pengadaan material berspesifikasi tinggi, konstruksi presisi, hingga jaminan performa pembangkit."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((svc) => {
              const Icon = svc.icon;
              return (
                <div
                  key={svc.num}
                  className="rounded-2xl border border-brown-200 bg-white p-7 sm:p-8 flex flex-col justify-between shadow-card hover-lift relative overflow-hidden group"
                >
                  <div className="absolute top-4 right-5 text-4xl font-bold font-heading text-brown-900/5 select-none pointer-events-none group-hover:text-gold-500/15 transition-colors">
                    {svc.num}
                  </div>

                  <div>
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-amber-50 to-amber-100 border border-amber-200 text-brown-700 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-gold-500 group-hover:text-white transition-all duration-300 shadow-sm">
                      <Icon className="w-7 h-7" />
                    </div>
                    <h3 className="font-heading font-bold text-xl text-brown-900 mb-3 group-hover:text-gold-600 transition-colors">
                      {svc.title}
                    </h3>
                    <p className="text-sm text-brown-600 leading-relaxed mb-6">
                      {svc.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-brown-200 space-y-2">
                    {svc.highlights.map((h, hIdx) => (
                      <div key={hIdx} className="flex items-center gap-2 text-xs text-brown-700 font-medium">
                        <Check className="w-3.5 h-3.5 text-gold-500 shrink-0" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. PORTOFOLIO PROYEK UNGGULAN */}
      <section className="py-20 lg:py-28 bg-white border-b border-brown-200">
        <div className="container">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-6">
            <SectionHeading
              align="left"
              badge="Rekam Jejak"
              badgeVariant="default"
              title="Portofolio Proyek Unggulan"
              description="Instalasi pembangkit listrik tenaga surya dan gardu transmisi beroperasi dengan performa tinggi di berbagai fasilitas industri."
              className="mb-0 max-w-2xl"
            />
            <Button asChild variant="outline" size="lg" className="rounded-xl border-brown-400 text-brown-900 hover:bg-brown-100 shrink-0">
              <Link href="/project" className="flex items-center gap-2">
                <span>Lihat Semua Proyek</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </div>

          {featuredProjects.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          ) : (
            <div className="rounded-2xl border border-brown-200 p-12 text-center bg-paper text-brown-600">
              <p>Belum ada data proyek unggulan yang tersedia saat ini.</p>
            </div>
          )}
        </div>
      </section>

      {/* 5. KEUNGGULAN KOMPETITIF (WHY CHOOSE US) */}
      <section className="py-20 lg:py-28 bg-surface border-b border-brown-200">
        <div className="container">
          <SectionHeading
            align="center"
            badge="Diferensiasi Nilai"
            badgeVariant="gold"
            title="Mengapa Memilih PT Surya Karya Energi"
            description="Komitmen kami terhadap mutu teknis, kepatuhan keselamatan kerja, dan jaminan kinerja operasional jangka panjang."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyChooseUs.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.num}
                  className="rounded-2xl border border-brown-200 bg-white p-7 sm:p-8 flex flex-col justify-between shadow-card hover-lift relative overflow-hidden"
                >
                  <div className="absolute top-4 right-5 text-4xl font-bold font-heading text-brown-900/5 select-none pointer-events-none">
                    {item.num}
                  </div>

                  <div>
                    <div className="w-13 h-13 rounded-xl bg-brown-100 text-brown-700 flex items-center justify-center mb-5">
                      <Icon className="w-6 h-6 text-gold-600" />
                    </div>
                    <h3 className="font-heading font-bold text-lg text-brown-900 mb-2.5">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-brown-600 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 6. BANNER KEBERLANJUTAN (ESG SPOTLIGHT) */}
      <section className="py-20 lg:py-28 bg-white border-b border-brown-200">
        <div className="container">
          <div className="rounded-3xl border border-sage-600/30 bg-gradient-to-br from-[#1b2b1b] via-[#243824] to-[#162316] text-white p-8 sm:p-14 overflow-hidden relative shadow-2xl">
            {/* Background decoration */}
            <div className="absolute -right-20 -bottom-20 w-80 h-80 rounded-full bg-sage-500/10 blur-3xl pointer-events-none" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative z-10">
              <div className="lg:col-span-8 space-y-5">
                <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full bg-sage-600/30 text-emerald-300 border border-emerald-400/30">
                  <Leaf className="w-4 h-4 text-emerald-400" />
                  Prinsip Environmental, Social, & Governance (ESG)
                </span>

                <h3 className="text-3xl sm:text-4xl font-bold font-heading text-white leading-tight">
                  Komitmen Nyata Pengurangan Emisi Karbon Nasional
                </h3>

                <p className="text-sm sm:text-base text-white/80 leading-relaxed max-w-2xl">
                  Setiap megawatt energi surya yang kami bangun berkontribusi langsung pada dekarbonisasi industri Indonesia dan pencapaian target Net Zero Emission 2060. Didukung tata kelola transparan dan keselamatan kerja tanpa kompromi.
                </p>

                <div className="pt-2">
                  <Button asChild className="bg-sage-600 hover:bg-sage-500 text-white font-bold rounded-xl px-7 py-5 shadow-lg">
                    <Link href="/sustainability" className="flex items-center gap-2">
                      <span>Pelajari Kerangka Keberlanjutan Kami</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </Button>
                </div>
              </div>

              <div className="lg:col-span-4 grid grid-cols-2 gap-4">
                <div className="p-6 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 text-center">
                  <p className="font-heading font-extrabold text-3xl sm:text-4xl text-emerald-400">85.000+</p>
                  <p className="text-xs text-white/80 font-medium mt-1.5">Ton CO₂ Dihindari / Tahun</p>
                </div>

                <div className="p-6 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 text-center">
                  <p className="font-heading font-extrabold text-3xl sm:text-4xl text-emerald-400">100%</p>
                  <p className="text-xs text-white/80 font-medium mt-1.5">Standar HSE Zero Harm</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. SEKTOR INDUSTRI YANG DILAYANI */}
      <section className="py-20 lg:py-24 bg-surface border-b border-brown-200">
        <div className="container">
          <SectionHeading
            align="center"
            badge="Target Sektor"
            badgeVariant="default"
            title="Sektor Industri yang Kami Layani"
            description="Solusi energi surya dan infrastruktur listrik terintegrasi untuk berbagai sektor industri dan komersial strategis."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {industries.map((ind, idx) => {
              const Icon = ind.icon;
              return (
                <div
                  key={idx}
                  className="p-7 rounded-2xl border border-brown-200 bg-white shadow-card hover-lift flex flex-col items-center text-center space-y-3"
                >
                  <div className="w-14 h-14 rounded-2xl bg-brown-100 text-brown-700 flex items-center justify-center">
                    <Icon className="w-7 h-7 text-gold-600" />
                  </div>
                  <h4 className="font-heading font-bold text-base text-brown-900">
                    {ind.name}
                  </h4>
                  <p className="text-xs text-brown-600 leading-relaxed">
                    {ind.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 8. CLOSING ENGAGEMENT CTA (WARM BRIGHT AMBER-BROWN) */}
      <section className="relative py-20 lg:py-28 bg-brown-900 text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=1800&q=80"
            alt="Electrical Infrastructure"
            fill
            className="object-cover brightness-[0.55]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brown-900/95 via-brown-800/85 to-brown-900/95" />
        </div>

        <div className="container relative z-10 text-center max-w-3xl mx-auto space-y-6">
          <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full bg-gold-500/20 text-gold-300 border border-gold-500/40 backdrop-blur-md">
            Mulai Dekarbonisasi Fasilitas Anda
          </span>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-heading text-white leading-tight">
            Konsultasikan Rencana Pembangunan Energi Bersih Bersama Kami
          </h2>

          <p className="text-base sm:text-lg text-white/90 leading-relaxed font-normal">
            Tim insinyur kami siap melakukan audit energi awal, studi kelayakan teknis, dan simulasi potensi penghematan listrik di fasilitas Anda.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <Button asChild size="lg" className="bg-gold-500 hover:bg-gold-600 text-white font-bold px-8 py-6 rounded-xl shadow-glow-gold hover:shadow-glow-gold-lg text-base">
              <Link href="/contact-us" className="flex items-center gap-2">
                <PhoneCall className="w-5 h-5" />
                <span>Jadwalkan Konsultasi Teknis</span>
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="bg-white/15 hover:bg-white/25 text-white border-white/35 backdrop-blur-md font-semibold px-8 py-6 rounded-xl text-base">
              <Link href="/project">Eksplorasi Proyek Terdahulu</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
