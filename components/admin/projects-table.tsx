"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableHeader,
  TableBody,
  TableHead,
  TableRow,
  TableCell,
} from "@/components/ui/table";
import {
  Search,
  PlusCircle,
  Pencil,
  Trash2,
  ExternalLink,
  Loader2,
  AlertTriangle,
} from "lucide-react";

interface ProjectItem {
  id: number;
  title: string;
  slug: string;
  category: string;
  location?: string | null;
  capacity?: string | null;
  year?: number | null;
  status: "Perencanaan" | "Berjalan" | "Selesai";
  isFeatured: boolean;
  coverImage?: string | null;
}

interface ProjectsTableProps {
  initialProjects: ProjectItem[];
}

export function ProjectsTable({ initialProjects }: ProjectsTableProps) {
  const router = useRouter();
  const [projects, setProjects] = useState<ProjectItem[]>(initialProjects);
  const [search, setSearch] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("Semua");
  const [statusFilter, setStatusFilter] = useState("Semua");

  // Delete modal state
  const [deleteId, setDeleteId] = useState<number | null>(null);
  const [deleteTitle, setDeleteTitle] = useState<string>("");
  const [isDeleting, setIsDeleting] = useState(false);

  const categories = ["Semua", "PLTS / Solar", "EPC", "Operation & Maintenance", "Konsultasi Energi"];
  const statuses = ["Semua", "Selesai", "Berjalan", "Perencanaan"];

  const filtered = projects.filter((p) => {
    const matchSearch =
      !search ||
      p.title.toLowerCase().includes(search.toLowerCase()) ||
      p.category.toLowerCase().includes(search.toLowerCase()) ||
      (p.location && p.location.toLowerCase().includes(search.toLowerCase()));

    const matchCategory =
      categoryFilter === "Semua" || p.category.includes(categoryFilter);

    const matchStatus = statusFilter === "Semua" || p.status === statusFilter;

    return matchSearch && matchCategory && matchStatus;
  });

  const confirmDelete = (id: number, title: string) => {
    setDeleteId(id);
    setDeleteTitle(title);
  };

  const handleDelete = async () => {
    if (!deleteId) return;
    setIsDeleting(true);
    try {
      const res = await fetch(`/api/projects/${deleteId}`, {
        method: "DELETE",
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Gagal menghapus proyek.");

      toast.success("Proyek berhasil dihapus.");
      setProjects((prev) => prev.filter((item) => item.id !== deleteId));
      setDeleteId(null);
      router.refresh();
    } catch (err: any) {
      toast.error(err.message || "Gagal menghapus proyek.");
    } finally {
      setIsDeleting(false);
    }
  };

  return (
    <div className="space-y-6">
      {/* Top Action Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-brown-300">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold font-heading text-brown-900">
            Daftar & Manajemen Proyek
          </h1>
          <p className="text-xs sm:text-sm text-brown-500 mt-1">
            Total {projects.length} portofolio proyek tersimpan di basis data.
          </p>
        </div>

        <Button asChild variant="gold">
          <Link href="/admin/projects/new" className="flex items-center gap-2">
            <PlusCircle className="w-4 h-4" />
            <span>Tambah Proyek</span>
          </Link>
        </Button>
      </div>

      {/* Filter & Search Bar */}
      <div className="grid grid-cols-1 sm:grid-cols-12 gap-3 bg-white p-4 rounded-[12px] border border-brown-300">
        <div className="sm:col-span-6 relative">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-brown-500" />
          <Input
            placeholder="Cari judul proyek, lokasi..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="pl-9 text-xs sm:text-sm h-10"
          />
        </div>

        <div className="sm:col-span-3">
          <select
            value={categoryFilter}
            onChange={(e) => setCategoryFilter(e.target.value)}
            className="w-full h-10 rounded-[12px] border border-brown-300 bg-white px-3 text-xs sm:text-sm text-brown-900 focus-visible:ring-2 focus-visible:ring-brown-500"
          >
            {categories.map((c) => (
              <option key={c} value={c}>
                Kategori: {c}
              </option>
            ))}
          </select>
        </div>

        <div className="sm:col-span-3">
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="w-full h-10 rounded-[12px] border border-brown-300 bg-white px-3 text-xs sm:text-sm text-brown-900 focus-visible:ring-2 focus-visible:ring-brown-500"
          >
            {statuses.map((s) => (
              <option key={s} value={s}>
                Status: {s}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Projects Table */}
      <div className="rounded-[12px] border border-brown-300 bg-white overflow-hidden shadow-none">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-16">Foto</TableHead>
              <TableHead>Judul Proyek</TableHead>
              <TableHead>Kategori</TableHead>
              <TableHead>Kapasitas</TableHead>
              <TableHead>Tahun</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-right">Aksi</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filtered.length > 0 ? (
              filtered.map((item) => (
                <TableRow key={item.id}>
                  <TableCell>
                    <div className="relative aspect-[16/10] w-14 rounded-[4px] overflow-hidden border border-brown-300 bg-paper">
                      <Image
                        src={item.coverImage || "https://images.unsplash.com/photo-1509391365360-2e959784a276?auto=format&fit=crop&w=200&q=80"}
                        alt={item.title}
                        fill
                        sizes="60px"
                        className="object-cover"
                      />
                    </div>
                  </TableCell>

                  <TableCell>
                    <div className="font-semibold text-sm text-brown-900 line-clamp-1">
                      {item.title}
                    </div>
                    <div className="flex items-center gap-2 text-xs text-brown-500 mt-0.5">
                      <span className="truncate max-w-[200px]">{item.location || "Indonesia"}</span>
                      {item.isFeatured && (
                        <Badge variant="gold" className="text-[10px] py-0 px-1.5 font-medium">
                          Unggulan
                        </Badge>
                      )}
                    </div>
                  </TableCell>

                  <TableCell className="text-xs text-brown-700 font-medium">
                    {item.category}
                  </TableCell>

                  <TableCell className="text-xs font-semibold text-brown-900">
                    {item.capacity || "—"}
                  </TableCell>

                  <TableCell className="text-xs text-brown-500">
                    {item.year || "—"}
                  </TableCell>

                  <TableCell>
                    <Badge variant={item.status === "Selesai" ? "success" : item.status === "Berjalan" ? "gold" : "warning"}>
                      {item.status}
                    </Badge>
                  </TableCell>

                  <TableCell className="text-right">
                    <div className="flex items-center justify-end gap-1.5">
                      <Link
                        href={`/project/${item.slug}`}
                        target="_blank"
                        className="p-1.5 rounded-[6px] text-brown-500 hover:text-brown-900 hover:bg-brown-100"
                        title="Lihat Halaman Publik"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </Link>

                      <Button asChild variant="outline" size="sm" className="h-8 px-2.5">
                        <Link href={`/admin/projects/${item.id}/edit`}>
                          <Pencil className="w-3.5 h-3.5 mr-1" />
                          <span>Edit</span>
                        </Link>
                      </Button>

                      <Button
                        type="button"
                        variant="ghost"
                        size="sm"
                        onClick={() => confirmDelete(item.id, item.title)}
                        className="h-8 px-2 text-red-600 hover:bg-red-50 hover:text-red-700"
                        title="Hapus Proyek"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={7} className="h-32 text-center text-brown-500 text-xs sm:text-sm">
                  Tidak ada data proyek yang sesuai dengan kriteria filter.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>

      {/* Delete Confirmation Modal Dialog */}
      {deleteId !== null && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-brown-900/60 backdrop-blur-sm">
          <div className="w-full max-w-md bg-white rounded-[12px] border border-brown-300 p-6 space-y-4 shadow-xl">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-full bg-red-100 text-red-600 flex items-center justify-center shrink-0">
                <AlertTriangle className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <h3 className="font-heading font-bold text-lg text-brown-900">
                  Konfirmasi Penghapusan Proyek
                </h3>
                <p className="text-xs text-brown-500 leading-relaxed">
                  Apakah Anda yakin ingin menghapus proyek <strong>&ldquo;{deleteTitle}&rdquo;</strong>? Tindakan ini bersifat permanen dan akan menghapus seluruh data serta foto galeri terkait.
                </p>
              </div>
            </div>

            <div className="flex items-center justify-end gap-2 pt-2">
              <Button
                type="button"
                variant="outline"
                onClick={() => setDeleteId(null)}
                disabled={isDeleting}
              >
                Batal
              </Button>
              <Button
                type="button"
                variant="destructive"
                onClick={handleDelete}
                disabled={isDeleting}
                className="gap-2"
              >
                {isDeleting ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>Menghapus...</span>
                  </>
                ) : (
                  <span>Ya, Hapus Proyek</span>
                )}
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}