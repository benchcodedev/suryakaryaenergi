"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { SunMedium, Lock, Mail, Loader2, ArrowLeft } from "lucide-react";

export default function AdminLoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("admin@suryakaryaenergi.com");
  const [password, setPassword] = useState("SuryaKarya2026!");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || "Gagal masuk ke sistem.");
      }

      toast.success("Login berhasil! Mengalihkan ke dashboard...");
      router.push("/admin/dashboard");
      router.refresh();
    } catch (err: any) {
      toast.error(err.message || "Email atau kata sandi tidak sesuai.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-paper p-4">
      <div className="w-full max-w-md bg-white border border-brown-300 rounded-[12px] p-8 shadow-sm space-y-6">
        {/* Brand Header */}
        <div className="text-center space-y-2">
          <div className="w-12 h-12 rounded-[8px] bg-brown-700 text-gold-500 flex items-center justify-center mx-auto shadow-sm">
            <SunMedium className="w-7 h-7" />
          </div>
          <h1 className="text-2xl font-bold font-heading text-brown-900">
            Masuk Panel Admin
          </h1>
          <p className="text-xs text-brown-500">
            PT Surya Karya Energi — Content Management System
          </p>
        </div>

        {/* Login Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-brown-900">
              Email Administrator
            </label>
            <div className="relative">
              <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-brown-500" />
              <Input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="pl-9 text-sm"
                placeholder="admin@suryakaryaenergi.com"
              />
            </div>
          </div>

          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-brown-900">
              Kata Sandi (Password)
            </label>
            <div className="relative">
              <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-brown-500" />
              <Input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="pl-9 text-sm"
                placeholder="••••••••"
              />
            </div>
          </div>

          <div className="pt-2">
            <Button
              type="submit"
              variant="gold"
              className="w-full"
              disabled={loading}
            >
              {loading ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin mr-2" />
                  <span>Memverifikasi...</span>
                </>
              ) : (
                <span>Masuk ke Dashboard</span>
              )}
            </Button>
          </div>
        </form>

        <div className="pt-4 border-t border-brown-300 text-center space-y-2">
          <p className="text-[11px] text-brown-500">
            Kredensial Default Development: <strong>admin@suryakaryaenergi.com</strong> / <strong>SuryaKarya2026!</strong>
          </p>
          <div>
            <Link
              href="/"
              className="inline-flex items-center gap-1.5 text-xs text-brown-700 hover:underline"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Kembali ke Halaman Publik</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}