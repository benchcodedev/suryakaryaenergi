"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { slugify } from "@/lib/utils";
import {
  Upload,
  X,
  Plus,
  Loader2,
  ArrowLeft,
  Image as ImageIcon,
  CheckCircle2,
} from "lucide-react";

interface GalleryImageItem {
  id?: number;
  imageUrl: string;
  caption?: string | null;
  sortOrder?: number;
}

interface ProjectFormProps {
  initialData?: {
    id?: number;
    title: string;
    slug: string;
    category: string;
    location?: string | null;
    client?: string | null;
    capacity?: string | null;
    year?: number | null;
    status: "Perencanaan" | "Berjalan" | "Selesai";
    isFeatured: boolean;
    coverImage?: string | null;
    description?: string | null;
    images?: GalleryImageItem[];
  };
  isEdit?: boolean;
}

export function ProjectForm({ initialData, isEdit = false }: ProjectFormProps) {
  const router = useRouter();

  const [title, setTitle] = useState(initialData?.title || "");
  const [slug, setSlug] = useState(initialData?.slug || "");
  const [category, setCategory] = useState(initialData?.category || "PLTS / Solar");
  const [location, setLocation] = useState(initialData?.location || "");
  const [client, setClient] = useState(initialData?.client || "");
  const [capacity, setCapacity] = useState(initialData?.capacity || "");
  const [year, setYear] = useState<string>(initialData?.year ? String(initialData.year) : "2024");
  const [status, setStatus] = useState<"Perencanaan" | "Berjalan" | "Selesai">(
    initialData?.status || "Selesai"
  );
  const [isFeatured, setIsFeatured] = useState<boolean>(initialData?.isFeatured ?? false);
  const [coverImage, setCoverImage] = useState(initialData?.coverImage || "");
  const [description, setDescription] = useState(initialData?.description || "");
  const [images, setImages] = useState<GalleryImageItem[]>(initialData?.images || []);

  const [uploadingCover, setUploadingCover] = useState(false);
  const [uploadingGallery, setUploadingGallery] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  // Auto-slug generator when title changes in creation mode
  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setTitle(val);
    if (!isEdit) {
      setSlug(slugify(val));
    }
  };

  // Upload Cover Image Handler
  const handleCoverUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setUploadingCover(true);
    const formData = new FormData();
    formData.append("file", file);

    try {
      const res = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Gagal mengunggah gambar");
      setCoverImage(data.url);
      toast.success("Foto sampul berhasil diunggah.");
    } catch (err: any) {
      toast.error(err.message || "Gagal mengunggah foto.");
    } finally {
      setUploadingCover(false);
    }
  };

  // Upload Gallery Images Handler
  const handleGalleryUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files || files.length === 0) return;

    setUploadingGallery(true);
    try {
      for (let i = 0; i < files.length; i++) {
        const file = files[i];
        const formData = new FormData();
        formData.append("file", file);

        const res = await fetch("/api/upload", {
          method: "POST",
          body: formData,
        });
        const data = await res.json();
        if (res.ok && data.url) {
          setImages((prev) => [
            ...prev,
            {
              imageUrl: data.url,
              caption: file.name.replace(/\.[^/.]+$/, ""),
              sortOrder: prev.length + 1,
            },
          ]);
        }
      }
      toast.success("Foto galeri berhasil ditambahkan.");
    } catch {
      toast.error("Terjadi kendala saat mengunggah foto galeri.");
    } finally {
      setUploadingGallery(false);
    }
  };

  const removeGalleryImage = (index: number) => {
    setImages((prev) => prev.filter((_, idx) => idx !== index));
  };

  const updateGalleryCaption = (index: number, caption: string) => {
    setImages((prev) =>
      prev.map((img, idx) => (idx === index ? { ...img, caption } : img))
    );
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!title.trim()) {
      toast.error("Judul proyek wajib diisi.");
      return;
    }

    setSubmitting(true);

    const payload = {
      title,
      slug: slug || slugify(title),
      category,
      location: location || null,
      client: client || null,
      capacity: capacity || null,
      year: year ? parseInt(year, 10) : null,
      status,
      isFeatured,
      coverImage: coverImage || null,
      description: description || null,
      images,
    };

    try {
      const url = isEdit ? `/api/projects/${initialData?.id}` : "/api/projects";
      const method = isEdit ? "PUT" : "POST";

      const res = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || "Gagal menyimpan proyek.");
      }

      toast.success(isEdit ? "Data proyek berhasil diperbarui!" : "Proyek baru berhasil disimpan!");
      router.push("/admin/projects");
      router.refresh();
    } catch (err: any) {
      toast.error(err.message || "Terjadi kesalahan saat menyimpan data.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-8 max-w-4xl">
      <div className="flex items-center justify-between pb-6 border-b border-brown-300">
        <div className="flex items-center gap-3">
          <Button asChild variant="outline" size="sm">
            <Link href="/admin/projects" className="flex items-center gap-1.5">
              <ArrowLeft className="w-4 h-4" />
              <span>Kembali</span>
            </Link>
          </Button>
          <h1 className="text-xl sm:text-2xl font-bold font-heading text-brown-900">
            {isEdit ? "Edit Data Proyek" : "Tambah Proyek Baru"}
          </h1>
        </div>

        <Button type="submit" variant="gold" disabled={submitting}>
          {submitting ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin mr-2" />
              <span>Menyimpan...</span>
            </>
          ) : (
            <span>Simpan Proyek</span>
          )}
        </Button>
      </div>

      {/* Basic Information Card */}
      <div className="rounded-[12px] border border-brown-300 bg-white p-6 sm:p-8 space-y-6">
        <h2 className="font-heading font-bold text-base text-brown-900 pb-3 border-b border-brown-300">
          1. Informasi Utama Proyek
        </h2>

        <div className="space-y-4">
          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-brown-900">
              Judul Proyek <span className="text-red-600">*</span>
            </label>
            <Input
              required
              placeholder="Contoh: PLTS Atap Kawasan Industri Cikarang"
              value={title}
              onChange={handleTitleChange}
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-brown-900">
                Slug URL (Unik)
              </label>
              <Input
                placeholder="plts-atap-cikarang"
                value={slug}
                onChange={(e) => setSlug(e.target.value)}
              />
              <span className="text-[11px] text-brown-500">
                URL publik: /project/{slug || "slug-proyek"}
              </span>
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-brown-900">
                Kategori Solusi <span className="text-red-600">*</span>
              </label>
              <select
                className="flex h-11 w-full rounded-[12px] border border-brown-300 bg-white px-3.5 py-2 text-sm text-brown-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brown-500"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              >
                <option value="PLTS / Solar">PLTS / Solar</option>
                <option value="EPC">EPC (Engineering, Procurement, Construction)</option>
                <option value="Operation & Maintenance">Operation & Maintenance (O&M)</option>
                <option value="Konsultasi Energi">Konsultasi & Audit Energi</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-brown-900">
                Kapasitas Pembangkit
              </label>
              <Input
                placeholder="Contoh: 3.2 MWp"
                value={capacity}
                onChange={(e) => setCapacity(e.target.value)}
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-brown-900">
                Tahun Pelaksanaan
              </label>
              <Input
                type="number"
                placeholder="2024"
                value={year}
                onChange={(e) => setYear(e.target.value)}
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-brown-900">
                Status Proyek
              </label>
              <select
                className="flex h-11 w-full rounded-[12px] border border-brown-300 bg-white px-3.5 py-2 text-sm text-brown-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brown-500"
                value={status}
                onChange={(e) => setStatus(e.target.value as any)}
              >
                <option value="Selesai">Selesai (Operasional)</option>
                <option value="Berjalan">Berjalan (Konstruksi)</option>
                <option value="Perencanaan">Perencanaan (Desain/FEED)</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-brown-900">
                Lokasi Fasilitas
              </label>
              <Input
                placeholder="Contoh: Cikarang, Jawa Barat"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-brown-900">
                Nama Klien / Pemilik
              </label>
              <Input
                placeholder="Contoh: PT Indotech Mandiri"
                value={client}
                onChange={(e) => setClient(e.target.value)}
              />
            </div>
          </div>

          {/* Featured Toggle */}
          <div className="pt-2 flex items-center gap-3">
            <input
              type="checkbox"
              id="isFeatured"
              checked={isFeatured}
              onChange={(e) => setIsFeatured(e.target.checked)}
              className="w-4 h-4 rounded text-gold-500 border-brown-300 focus:ring-brown-500"
            />
            <label htmlFor="isFeatured" className="text-xs font-semibold text-brown-900 cursor-pointer">
              Tampilkan sebagai Proyek Unggulan di Beranda (Featured)
            </label>
          </div>
        </div>
      </div>

      {/* Media & Documentation Card */}
      <div className="rounded-[12px] border border-brown-300 bg-white p-6 sm:p-8 space-y-6">
        <h2 className="font-heading font-bold text-base text-brown-900 pb-3 border-b border-brown-300">
          2. Foto Sampul & Dokumentasi Galeri
        </h2>

        {/* Cover Image */}
        <div className="space-y-3">
          <label className="text-xs font-semibold text-brown-900 block">
            Foto Sampul Utama (Cover Image)
          </label>

          <div className="flex flex-col sm:flex-row items-start gap-4">
            {coverImage ? (
              <div className="relative aspect-[16/10] w-48 rounded-[8px] overflow-hidden border border-brown-300 bg-paper shrink-0">
                <Image
                  src={coverImage}
                  alt="Cover preview"
                  fill
                  className="object-cover"
                />
                <button
                  type="button"
                  onClick={() => setCoverImage("")}
                  className="absolute top-1 right-1 p-1 bg-black/60 text-white rounded-[4px] hover:bg-black"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              </div>
            ) : (
              <div className="aspect-[16/10] w-48 rounded-[8px] border border-dashed border-brown-300 bg-paper flex flex-col items-center justify-center text-brown-500 text-xs shrink-0">
                <ImageIcon className="w-6 h-6 mb-1 text-brown-300" />
                <span>Belum ada foto</span>
              </div>
            )}

            <div className="flex-1 space-y-2">
              <div className="flex items-center gap-2">
                <label className="cursor-pointer inline-flex items-center gap-2 px-4 py-2 rounded-[8px] border border-brown-300 bg-paper hover:bg-brown-100 text-xs font-medium text-brown-900">
                  <Upload className="w-3.5 h-3.5 text-brown-700" />
                  <span>{uploadingCover ? "Mengunggah..." : "Pilih File Foto Sampul"}</span>
                  <input
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={handleCoverUpload}
                    disabled={uploadingCover}
                  />
                </label>
              </div>
              <p className="text-[11px] text-brown-500">
                Format: JPEG, PNG, WebP (maks 10MB). Disimpan langsung ke sistem penyimpanan.
              </p>
              <div className="pt-1">
                <Input
                  placeholder="Atau tempel URL gambar langsung..."
                  value={coverImage}
                  onChange={(e) => setCoverImage(e.target.value)}
                  className="text-xs"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Gallery Images */}
        <div className="pt-4 border-t border-brown-300 space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <label className="text-xs font-semibold text-brown-900 block">
                Galeri Tambahan (Multiple Images)
              </label>
              <p className="text-[11px] text-brown-500">
                Unggah dokumentasi teknis, sudut instalasi lain, atau foto peralatan sistem.
              </p>
            </div>

            <label className="cursor-pointer inline-flex items-center gap-2 px-3 py-1.5 rounded-[8px] border border-brown-300 bg-paper hover:bg-brown-100 text-xs font-medium text-brown-900">
              <Plus className="w-3.5 h-3.5 text-brown-700" />
              <span>{uploadingGallery ? "Mengunggah..." : "Tambah Foto Galeri"}</span>
              <input
                type="file"
                multiple
                accept="image/*"
                className="hidden"
                onChange={handleGalleryUpload}
                disabled={uploadingGallery}
              />
            </label>
          </div>

          {images.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {images.map((img, idx) => (
                <div
                  key={idx}
                  className="p-3 rounded-[8px] border border-brown-300 bg-paper flex gap-3 items-start relative"
                >
                  <div className="relative aspect-[16/10] w-24 rounded-[4px] overflow-hidden border border-brown-300 shrink-0">
                    <Image
                      src={img.imageUrl}
                      alt={img.caption || "Gallery item"}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex-1 space-y-1">
                    <label className="text-[10px] font-medium text-brown-500">Keterangan / Caption</label>
                    <Input
                      value={img.caption || ""}
                      onChange={(e) => updateGalleryCaption(idx, e.target.value)}
                      placeholder="Contoh: Modul inverter sentral"
                      className="text-xs h-8"
                    />
                  </div>
                  <button
                    type="button"
                    onClick={() => removeGalleryImage(idx)}
                    className="p-1 rounded-[4px] text-brown-500 hover:text-red-600 hover:bg-red-50"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
          ) : (
            <div className="p-4 rounded-[8px] border border-dashed border-brown-300 bg-paper text-center text-xs text-brown-500">
              Belum ada foto galeri tambahan.
            </div>
          )}
        </div>
      </div>

      {/* Narrative Description Card */}
      <div className="rounded-[12px] border border-brown-300 bg-white p-6 sm:p-8 space-y-4">
        <h2 className="font-heading font-bold text-base text-brown-900 pb-3 border-b border-brown-300">
          3. Deskripsi & Uraian Teknis Proyek
        </h2>
        <div className="space-y-1.5">
          <label className="text-xs font-semibold text-brown-900">
            Uraian Rekayasa (Tampil di Halaman Detail Publik)
          </label>
          <Textarea
            rows={6}
            placeholder="Jelaskan spesifikasi teknis, ruang lingkup pekerjaan EPC, tantangan rekayasa, dan manfaat kinerja yang dihasilkan..."
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
      </div>

      <div className="flex items-center justify-end gap-3 pt-4">
        <Button asChild variant="outline">
          <Link href="/admin/projects">Batal</Link>
        </Button>
        <Button type="submit" variant="gold" size="lg" disabled={submitting}>
          {submitting ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin mr-2" />
              <span>Menyimpan Proyek...</span>
            </>
          ) : (
            <span>Simpan Perubahan</span>
          )}
        </Button>
      </div>
    </form>
  );
}