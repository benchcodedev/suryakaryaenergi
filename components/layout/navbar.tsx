"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Menu, X, SunMedium, PhoneCall, ShieldCheck } from "lucide-react";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile drawer on route navigation
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  const navLinks = [
    { name: "Beranda", href: "/" },
    { name: "Tentang Kami", href: "/about-us" },
    { name: "Keberlanjutan (ESG)", href: "/sustainability" },
    { name: "Portofolio Proyek", href: "/project" },
    { name: "Hubungi Kami", href: "/contact-us" },
  ];

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-400 ease-in-out",
          isScrolled
            ? "bg-white/95 backdrop-blur-xl border-b border-brown-300/40 py-3.5 shadow-[0_4px_25px_rgba(42,29,18,0.08)]"
            : "bg-gradient-to-b from-black/60 via-black/20 to-transparent py-5"
        )}
      >
        <div className="container flex items-center justify-between">
          {/* Brand Identity */}
          <Link href="/" className="flex items-center gap-3 group">
            <div
              className={cn(
                "w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 shadow-md group-hover:scale-105",
                isScrolled
                  ? "bg-brown-700 text-gold-500 shadow-brown-900/10"
                  : "bg-white/15 backdrop-blur-md border border-white/30 text-gold-400 shadow-black/20"
              )}
            >
              <SunMedium className="w-6 h-6" />
            </div>
            <div className="flex flex-col">
              <span
                className={cn(
                  "font-heading font-extrabold text-lg leading-none tracking-tight transition-colors",
                  isScrolled ? "text-brown-900" : "text-white drop-shadow-sm"
                )}
              >
                SURYA KARYA ENERGI
              </span>
              <span
                className={cn(
                  "text-[10px] font-semibold tracking-wider uppercase mt-1 transition-colors",
                  isScrolled ? "text-gold-600" : "text-amber-300 drop-shadow-sm"
                )}
              >
                EPC & Renewable Solutions
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-1.5">
            {navLinks.map((link) => {
              const isActive =
                link.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(link.href);

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-200",
                    isScrolled
                      ? isActive
                        ? "text-brown-900 bg-brown-100/90 font-bold"
                        : "text-brown-700 hover:text-brown-900 hover:bg-brown-100/60"
                      : isActive
                      ? "text-white bg-white/20 backdrop-blur-md border border-white/20 font-bold"
                      : "text-white/90 hover:text-white hover:bg-white/10"
                  )}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Right Action CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <Button
              asChild
              className={cn(
                "font-semibold rounded-xl transition-all duration-300 shadow-glow-gold hover:shadow-glow-gold-lg hover:-translate-y-0.5",
                isScrolled
                  ? "bg-gold-500 hover:bg-gold-600 text-white"
                  : "bg-gold-500 hover:bg-gold-400 text-brown-900 font-bold border border-gold-400/50"
              )}
            >
              <Link href="/contact-us" className="flex items-center gap-2">
                <PhoneCall className="w-4 h-4" />
                <span>Konsultasi Proyek</span>
              </Link>
            </Button>
          </div>

          {/* Mobile Hamburger Toggle Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={cn(
              "lg:hidden p-2.5 rounded-xl transition-colors",
              isScrolled
                ? "text-brown-900 hover:bg-brown-100"
                : "text-white bg-white/15 backdrop-blur-md border border-white/20 hover:bg-white/25"
            )}
            aria-label={mobileMenuOpen ? "Tutup menu" : "Buka menu navigasi"}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
            onClick={() => setMobileMenuOpen(false)}
          />
          <div className="fixed top-0 right-0 bottom-0 w-4/5 max-w-sm bg-white border-l border-brown-300 p-6 flex flex-col justify-between shadow-2xl z-50">
            <div>
              <div className="flex items-center justify-between pb-6 border-b border-brown-300">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-xl bg-brown-700 flex items-center justify-center text-gold-500 shadow-sm">
                    <SunMedium className="w-5 h-5" />
                  </div>
                  <div className="flex flex-col">
                    <span className="font-heading font-bold text-base text-brown-900">
                      Surya Karya Energi
                    </span>
                    <span className="text-[10px] font-semibold text-gold-600">
                      EPC & Clean Energy
                    </span>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-1.5 rounded-lg hover:bg-brown-100"
                >
                  <X className="w-5 h-5 text-brown-700" />
                </button>
              </div>

              <div className="flex flex-col space-y-1.5 mt-6">
                {navLinks.map((link) => {
                  const isActive =
                    link.href === "/"
                      ? pathname === "/"
                      : pathname.startsWith(link.href);

                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      className={cn(
                        "px-4 py-3 rounded-xl text-base font-semibold transition-all",
                        isActive
                          ? "text-brown-900 bg-brown-100 font-bold"
                          : "text-brown-700 hover:bg-brown-100/60"
                      )}
                    >
                      {link.name}
                    </Link>
                  );
                })}
              </div>
            </div>

            <div className="pt-6 border-t border-brown-300 space-y-4">
              <Button asChild className="w-full bg-gold-500 hover:bg-gold-600 text-white font-bold py-3 rounded-xl shadow-glow-gold">
                <Link href="/contact-us">Hubungi Tim Rekayasa</Link>
              </Button>
              <div className="flex items-center justify-between text-xs text-brown-500 pt-1">
                <span className="inline-flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-gold-500" />
                  ISO 9001 & SMK3
                </span>
                <Link
                  href="/admin/login"
                  className="font-medium text-brown-700 hover:underline"
                >
                  Portal Admin
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}