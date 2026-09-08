"use client";

import React, { useState } from "react";
import { useSearchParams } from "next/navigation";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Send, CheckCircle2, Loader2 } from "lucide-react";

export function ContactForm() {
  const searchParams = useSearchParams();
  const defaultProject = searchParams.get("project");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: defaultProject ? `Konsultasi Proyek: ${defaultProject}` : "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      toast.error("Mohon lengkapi nama, email, dan isi pesan Anda.");
      return;
    }

    setLoading(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || "Gagal mengirimkan pesan.");
      }

      setSubmitted(true);
      toast.success("Pesan berhasil dikirim! Tim rekayasa kami akan segera menghubungi Anda.");
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
    } catch (err: any) {
      toast.error(err.message || "Terjadi kendala saat mengirim pesan.");
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="rounded-3xl border border-brown-300/80 bg-surface p-10 sm:p-12 text-center space-y-5 shadow-card">
        <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto shadow-sm">
          <CheckCircle2 className="w-8 h-8" />
        </div>
        <h3 className="font-heading font-bold text-2xl text-brown-900">
          Pesan Berhasil Terkirim!
        </h3>
        <p className="text-xs sm:text-sm text-brown-500 max-w-md mx-auto leading-relaxed">
          Terima kasih telah menghubungi PT Surya Karya Energi. Permintaan konsultasi Anda telah masuk ke sistem kami dan akan ditanggapi oleh tim insinyur teknis dalam kurun 1x24 jam kerja.
        </p>
        <div className="pt-2">
          <Button
            type="button"
            variant="outline"
            className="rounded-xl border-brown-700 font-bold"
            onClick={() => setSubmitted(false)}
          >
            Kirim Formulir Lainnya
          </Button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div className="space-y-2">
          <label htmlFor="name" className="text-xs font-bold text-brown-900 uppercase tracking-wider">
            Nama Lengkap <span className="text-red-600">*</span>
          </label>
          <Input
            id="name"
            name="name"
            required
            placeholder="Contoh: Budi Prasetyo"
            value={formData.name}
            onChange={handleChange}
            className="h-12 rounded-xl text-sm bg-surface/50 border-brown-300/80 focus-visible:ring-gold-500"
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="email" className="text-xs font-bold text-brown-900 uppercase tracking-wider">
            Email Perusahaan / Pribadi <span className="text-red-600">*</span>
          </label>
          <Input
            id="email"
            name="email"
            type="email"
            required
            placeholder="budi@perusahaan.co.id"
            value={formData.email}
            onChange={handleChange}
            className="h-12 rounded-xl text-sm bg-surface/50 border-brown-300/80 focus-visible:ring-gold-500"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div className="space-y-2">
          <label htmlFor="phone" className="text-xs font-bold text-brown-900 uppercase tracking-wider">
            Nomor Telepon / WhatsApp
          </label>
          <Input
            id="phone"
            name="phone"
            type="tel"
            placeholder="+62 812 xxxx xxxx"
            value={formData.phone}
            onChange={handleChange}
            className="h-12 rounded-xl text-sm bg-surface/50 border-brown-300/80 focus-visible:ring-gold-500"
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="subject" className="text-xs font-bold text-brown-900 uppercase tracking-wider">
            Topik / Subjek
          </label>
          <Input
            id="subject"
            name="subject"
            placeholder="Contoh: Studi Kelayakan PLTS 2 MWp"
            value={formData.subject}
            onChange={handleChange}
            className="h-12 rounded-xl text-sm bg-surface/50 border-brown-300/80 focus-visible:ring-gold-500"
          />
        </div>
      </div>

      <div className="space-y-2">
        <label htmlFor="message" className="text-xs font-bold text-brown-900 uppercase tracking-wider">
          Uraian Kebutuhan / Pesan <span className="text-red-600">*</span>
        </label>
        <Textarea
          id="message"
          name="message"
          required
          rows={5}
          placeholder="Jelaskan kebutuhan kapasitas listrik, lokasi fasilitas, atau pertanyaan teknis yang ingin Anda diskusikan..."
          value={formData.message}
          onChange={handleChange}
          className="rounded-xl text-sm bg-surface/50 border-brown-300/80 focus-visible:ring-gold-500 p-4 leading-relaxed"
        />
      </div>

      <div className="pt-2">
        <Button
          type="submit"
          size="lg"
          disabled={loading}
          className="w-full sm:w-auto bg-gold-500 hover:bg-gold-600 text-white font-bold px-8 py-6 rounded-xl shadow-glow-gold flex items-center justify-center gap-2 text-base"
        >
          {loading ? (
            <>
              <Loader2 className="w-5 h-5 animate-spin" />
              <span>Mengirimkan Pesan...</span>
            </>
          ) : (
            <>
              <Send className="w-5 h-5" />
              <span>Kirim Formulir Konsultasi</span>
            </>
          )}
        </Button>
      </div>
    </form>
  );
}