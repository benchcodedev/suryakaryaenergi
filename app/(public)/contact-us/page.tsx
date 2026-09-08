import React, { Suspense } from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ContactForm } from "@/components/sections/contact-form";
import { SectionHeading } from "@/components/shared/section-heading";
import {
  ChevronRight,
  MapPin,
  Phone,
  Mail,
  Clock,
  HelpCircle,
  ShieldCheck,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Hubungi Kami — Konsultasi Rekayasa Energi",
  description: "Hubungi kantor operasional dan tim ahli teknis PT Surya Karya Energi untuk konsultasi proyek PLTS, audit energi, dan kemitraan EPC.",
};

export default function ContactUsPage() {
  const faqs = [
    {
      q: "Berapa lama proses studi kelayakan (Feasibility Study) PLTS Industri?",
      a: "Studi kelayakan teknis awal biasanya memakan waktu 1–2 minggu kerja setelah data tagihan listrik 12 bulan terakhir dan spesifikasi atap fasilitas diterima oleh tim insinyur kami.",
    },
    {
      q: "Bagaimana dengan pengurusan izin interkoneksi ke PLN dan ESDM?",
      a: "Sebagai kontraktor EPC terintegrasi, PT Surya Karya Energi mengurus seluruh proses perizinan mulai dari SLO (Sertifikat Laik Operasi), izin paralel PLN, hingga pelaporan ke Kementerian ESDM.",
    },
    {
      q: "Apakah disediakan jaminan performa (Performance Ratio Guarantee)?",
      a: "Ya, seluruh proyek EPC dan kontrak O&M kami dilengkapi jaminan rasio performa dan garansi sistem untuk memastikan yield energi sesuai simulasi desain teknis.",
    },
  ];

  return (
    <div className="flex flex-col">
      {/* 1. CINEMATIC HERO BANNER */}
      <section className="relative min-h-[50vh] lg:min-h-[55vh] flex items-center justify-center overflow-hidden bg-brown-900 text-white pt-28 pb-16">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1497440001374-f26997328c1b?auto=format&fit=crop&w=2000&q=80"
            alt="Contact Us"
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
            <span className="text-gold-400 font-semibold">Hubungi Kami</span>
          </nav>

          <span className="inline-block text-xs font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full bg-gold-500/20 text-gold-300 border border-gold-500/40 backdrop-blur-md">
            Konsultasi & Kemitraan Rekayasa
          </span>

          <h1 className="text-3xl sm:text-5xl font-bold font-heading text-white leading-tight">
            Hubungi Tim Ahli Energi Kami
          </h1>

          <p className="text-base sm:text-lg text-white/85 leading-relaxed max-w-2xl mx-auto font-normal">
            Diskusikan kebutuhan pembangunan PLTS Atap pabrik, gardu induk industri, atau kerja sama kemitraan strategis bersama insinyur kami.
          </p>
        </div>
      </section>

      {/* 2. FORM & CONTACT INFO (2 COLUMNS) */}
      <section className="py-20 lg:py-24 bg-white border-b border-brown-200/60">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Left: Contact Form Card */}
            <div className="lg:col-span-7 rounded-3xl border border-brown-200/80 bg-white p-8 sm:p-12 shadow-card space-y-6">
              <div>
                <span className="inline-block text-xs font-bold uppercase tracking-wider text-brown-700 bg-brown-100 px-3.5 py-1.5 rounded-full border border-brown-200 mb-3">
                  Formulir Konsultasi Proyek
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold font-heading text-brown-900 heading-underline">
                  Kirimkan Rencana Kebutuhan Anda
                </h2>
                <p className="text-xs sm:text-sm text-brown-500 mt-3 leading-relaxed">
                  Isi formulir di bawah ini, tim insinyur teknis kami akan meninjau dan merespons dalam kurun 1x24 jam kerja.
                </p>
              </div>

              <Suspense fallback={<div className="p-8 text-center text-brown-500">Memuat formulir...</div>}>
                <ContactForm />
              </Suspense>
            </div>

            {/* Right: Office Info & Maps */}
            <div className="lg:col-span-5 space-y-8">
              <div className="rounded-3xl border border-brown-200/80 bg-surface p-8 sm:p-10 space-y-6 shadow-card">
                <h3 className="font-heading font-bold text-xl text-brown-900 pb-3 border-b border-brown-200/60">
                  Kantor & Layanan Operasional
                </h3>

                <div className="space-y-5 text-xs sm:text-sm text-brown-700">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-gold-500/15 text-gold-600 flex items-center justify-center shrink-0 mt-0.5">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <strong className="block text-brown-900 font-bold mb-1 text-sm">Alamat Kantor</strong>
                      <span className="leading-relaxed">Kawasan Bisnis Prima, Menara Energi Lt. 12, Jl. Jenderal Sudirman Kav. 45, Jakarta Selatan 12190</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-gold-500/15 text-gold-600 flex items-center justify-center shrink-0">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <strong className="block text-brown-900 font-bold mb-1 text-sm">Telepon Kantor</strong>
                      <span className="font-semibold">+62 21 5567 8900</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-gold-500/15 text-gold-600 flex items-center justify-center shrink-0">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <strong className="block text-brown-900 font-bold mb-1 text-sm">Surel Resmi</strong>
                      <span className="font-semibold">contact@suryakaryaenergi.com</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 pt-3 border-t border-brown-200/60">
                    <div className="w-10 h-10 rounded-xl bg-gold-500/15 text-gold-600 flex items-center justify-center shrink-0 mt-0.5">
                      <Clock className="w-5 h-5" />
                    </div>
                    <div>
                      <strong className="block text-brown-900 font-bold mb-1 text-sm">Jam Kerja Kantor</strong>
                      <p>Senin — Jumat: 08:30 – 17:30 WIB</p>
                      <p className="text-xs text-brown-500 mt-1">Layanan darurat O&M site beroperasi 24 jam nonstop.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Google Maps Embed Frame */}
              <div className="rounded-3xl overflow-hidden border border-brown-200/80 aspect-[16/10] bg-surface shadow-card">
                <iframe
                  title="Lokasi Kantor PT Surya Karya Energi"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126920.28723933017!2d106.772591!3d-6.2297465!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f3e49fe3ddb3%3A0x73d44976ea5d4e11!2sSudirman%20Central%20Business%20District!5e0!3m2!1sid!2sid!4v1700000000000!5m2!1sid!2sid"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. FAQ SECTION */}
      <section className="py-20 lg:py-24 bg-surface">
        <div className="container max-w-4xl">
          <SectionHeading
            align="center"
            badge="Informasi Penting"
            badgeVariant="gold"
            title="Pertanyaan yang Sering Diajukan"
            description="Informasi seputar durasi studi kelayakan, perizinan regulasi ESDM/PLN, dan jaminan kinerja sistem."
          />

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="rounded-2xl border border-brown-200/80 bg-white p-7 shadow-card hover-lift"
              >
                <h4 className="font-heading font-bold text-lg text-brown-900 flex items-start gap-3">
                  <HelpCircle className="w-5 h-5 text-gold-500 shrink-0 mt-0.5" />
                  <span>{faq.q}</span>
                </h4>
                <p className="mt-3 text-sm text-brown-600 pl-8 leading-relaxed">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}