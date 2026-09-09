import Image from "next/image";
"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import {
  LayoutDashboard,
  FolderGit2,
  Mail,
  LogOut,
  ExternalLink,
  SunMedium,
  Menu,
  X,
  PlusCircle,
} from "lucide-react";

export function AdminSidebar() {
  const pathname = usePathname();
  const router = useRouter();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [loggingOut, setLoggingOut] = useState(false);

  const navItems = [
    {
      name: "Dashboard",
      href: "/admin/dashboard",
      icon: LayoutDashboard,
    },
    {
      name: "Kelola Proyek",
      href: "/admin/projects",
      icon: FolderGit2,
    },
    {
      name: "Pesan Masuk",
      href: "/admin/messages",
      icon: Mail,
    },
  ];

  const handleLogout = async () => {
    setLoggingOut(true);
    try {
      await fetch("/api/auth/logout", { method: "POST" });
      toast.success("Berhasil keluar dari sesi admin.");
      router.push("/admin/login");
      router.refresh();
    } catch {
      toast.error("Gagal melakukan logout.");
    } finally {
      setLoggingOut(false);
    }
  };

  const NavContent = () => (
    <div className="flex flex-col h-full justify-between">
      <div className="space-y-6">
        {/* Brand Header */}
        <div className="flex items-center gap-3 px-2 py-1">
          <div className="w-9 h-9 rounded-[8px] bg-brown-700 text-gold-500 flex items-center justify-center shrink-0">
            <SunMedium className="w-5 h-5" />
          </div>
          <div className="flex flex-col truncate">
            <span className="font-heading font-bold text-sm tracking-tight text-brown-900 truncate">
              SURYAKARYA
            </span>
            <span className="text-[10px] font-semibold text-gold-500 uppercase tracking-wider">
              Admin CMS Panel
            </span>
          </div>
        </div>

        {/* Action Button */}
        <div className="px-1">
          <Button asChild variant="gold" size="sm" className="w-full justify-start gap-2">
            <Link href="/admin/projects/new">
              <PlusCircle className="w-4 h-4" />
              <span>Tambah Proyek</span>
            </Link>
          </Button>
        </div>

        {/* Navigation Links */}
        <nav className="space-y-1">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive =
              item.href === "/admin/dashboard"
                ? pathname === "/admin/dashboard"
                : pathname.startsWith(item.href);

            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className={cn(
                  "flex items-center gap-3 px-3 py-2.5 rounded-[8px] text-sm font-medium transition-colors",
                  isActive
                    ? "bg-brown-100 text-brown-900 font-semibold"
                    : "text-brown-700 hover:bg-brown-100/60 hover:text-brown-900"
                )}
              >
                <Icon className="w-4 h-4 text-brown-500 shrink-0" />
                <span>{item.name}</span>
              </Link>
            );
          })}
        </nav>
      </div>

      {/* Footer Info & Logout */}
      <div className="pt-6 border-t border-brown-300/80 space-y-3">
        <div className="px-3 py-2 rounded-[8px] bg-paper border border-brown-300 text-xs">
          <p className="font-semibold text-brown-900">Admin Aktif</p>
          <p className="text-brown-500 truncate">admin@suryakaryaenergi.com</p>
        </div>

        <div className="space-y-1">
          <Link
            href="/"
            target="_blank"
            className="flex items-center justify-between px-3 py-2 rounded-[8px] text-xs font-medium text-brown-700 hover:bg-brown-100 transition-colors"
          >
            <span className="flex items-center gap-2">
              <ExternalLink className="w-3.5 h-3.5 text-brown-500" />
              Lihat Website
            </span>
          </Link>

          <button
            type="button"
            onClick={handleLogout}
            disabled={loggingOut}
            className="w-full flex items-center gap-2 px-3 py-2 rounded-[8px] text-xs font-medium text-red-600 hover:bg-red-50 transition-colors"
          >
            <LogOut className="w-3.5 h-3.5" />
            <span>{loggingOut ? "Keluar..." : "Keluar Sesi (Logout)"}</span>
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <>
      {/* Mobile Top Header */}
      <div className="lg:hidden flex items-center justify-between p-4 bg-white border-b border-brown-300 sticky top-0 z-30">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-[8px] bg-brown-700 text-gold-500 flex items-center justify-center">
            <SunMedium className="w-4 h-4" />
          </div>
          <span className="font-heading font-bold text-sm text-brown-900">
            SKE Admin
          </span>
        </div>
        <button
          type="button"
          onClick={() => setMobileOpen(!mobileOpen)}
          className="p-2 rounded-[8px] text-brown-700 hover:bg-brown-100"
        >
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Drawer Overlay */}
      {mobileOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          <div
            className="fixed inset-0 bg-brown-900/50 backdrop-blur-sm"
            onClick={() => setMobileOpen(false)}
          />
          <div className="fixed top-0 bottom-0 left-0 w-64 bg-white border-r border-brown-300 p-5 shadow-xl z-50">
            <NavContent />
          </div>
        </div>
      )}

      {/* Desktop Persistent Sidebar */}
      <aside className="hidden lg:flex flex-col w-64 border-r border-brown-300 bg-white p-5 shrink-0 min-h-screen">
        <NavContent />
      </aside>
    </>
  );
}