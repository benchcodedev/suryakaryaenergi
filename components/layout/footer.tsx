import React from "react";
import Link from "next/link";
import { SunMedium, MapPin, Phone, Mail, Clock, ShieldCheck, ArrowUpRight } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brown-900 text-white border-t border-gold-500/30 pt-16 pb-12">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-10 pb-16 border-b border-white/10">
          {/* Col 1: Brand & Profile */}
          <div className="space-y-5">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-xl bg-gold-500 text-white flex items-center justify-center font-bold shadow-glow-gold">
                <SunMedium className="w-6 h-6" />
              </div>
              <div className="flex flex-col">
                <span className="font-heading font-extrabold text-lg tracking-tight text-white">
                  SURYA KARYA ENERGI
                </span>
                <span className="text-[10px] text-amber-300 tracking-wider uppercase font-semibold">
                  EPC & Clean Energy Solutions
                </span>
              </div>
            </div>
            <p className="text-xs sm:text-sm text-white/80 leading-relaxed">
              Mitra terpercaya rekayasa teknik (EPC) pembangkit listrik tenaga surya, infrastruktur transmisi tegangan tinggi, dan operasional energi terbarukan di Indonesia.
            </p>
            <div className="pt-1">
              <span className="inline-flex items-center gap-2 text-xs text-gold-400 font-semibold bg-white/5 border border-white/10 px-3 py-1.5 rounded-lg">
                <ShieldCheck className="w-4 h-4" />
                Standar Mutu ISO & K3 Nasional
              </span>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="space-y-4">
            <h4 className="font-heading font-bold text-base text-white tracking-wide">
              Navigasi Perusahaan
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-white/80">
              <li>
                <Link href="/" className="hover:text-gold-400 transition-colors flex items-center gap-1.5">
                  <span>Beranda</span>
                </Link>
              </li>
              <li>
                <Link href="/about-us" className="hover:text-gold-400 transition-colors flex items-center gap-1.5">
                  <span>Profil & Manajemen</span>
                </Link>
              </li>
              <li>
                <Link href="/sustainability" className="hover:text-gold-400 transition-colors flex items-center gap-1.5">
                  <span>Komitmen Keberlanjutan (ESG)</span>
                </Link>
              </li>
              <li>
                <Link href="/project" className="hover:text-gold-400 transition-colors flex items-center gap-1.5">
                  <span>Portofolio Proyek</span>
                </Link>
              </li>
              <li>
                <Link href="/contact-us" className="hover:text-gold-400 transition-colors flex items-center gap-1.5">
                  <span>Kontak & Konsultasi</span>
                </Link>
              </li>
              <li className="pt-1">
                <Link href="/admin/login" className="text-xs text-white/60 hover:text-gold-400 transition-colors flex items-center gap-1">
                  <span>Portal Administrator CMS</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Contact Info */}
          <div className="space-y-4">
            <h4 className="font-heading font-bold text-base text-white tracking-wide">
              Kantor Operasional
            </h4>
            <div className="space-y-3.5 text-xs sm:text-sm text-white/80">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-gold-400 shrink-0 mt-1" />
                <span className="leading-relaxed">
                  Kawasan Bisnis Prima, Menara Energi Lt. 12, Jl. Jenderal Sudirman Kav. 45, Jakarta Selatan 12190
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-gold-400 shrink-0" />
                <span>+62 21 5567 8900</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-gold-400 shrink-0" />
                <span>contact@suryakaryaenergi.com</span>
              </div>
            </div>
          </div>

          {/* Col 4: Operations & Standards */}
          <div className="space-y-4">
            <h4 className="font-heading font-bold text-base text-white tracking-wide">
              Jam Layanan & Akreditasi
            </h4>
            <div className="space-y-3 text-xs sm:text-sm text-white/80">
              <div className="flex items-start gap-3">
                <Clock className="w-4 h-4 text-gold-400 shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-white">Senin – Jumat</p>
                  <p className="text-xs text-white/70">08:30 – 17:30 WIB</p>
                  <p className="text-xs text-gold-400 mt-1 font-medium">Layanan O&M darurat siaga 24 jam.</p>
                </div>
              </div>
              <div className="pt-2 border-t border-white/10 text-xs text-white/70 space-y-1">
                <p>• ISO 9001:2015 Manajemen Mutu</p>
                <p>• ISO 14001:2015 Lingkungan Hidup</p>
                <p>• ISO 45001:2018 & SMK3 Kemenaker</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-white/60 gap-4">
          <p>© {currentYear} PT Surya Karya Energi. Seluruh Hak Cipta Dilindungi Undang-Undang.</p>
          <div className="flex items-center gap-6">
            <span>Domain: suryakaryaenergi.com</span>
            <span>•</span>
            <Link href="/about-us" className="hover:text-white transition-colors">Kebijakan Privasi</Link>
            <span>•</span>
            <Link href="/contact-us" className="hover:text-white transition-colors">Bantuan</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
