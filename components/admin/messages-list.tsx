"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableHeader,
  TableBody,
  TableHead,
  TableRow,
  TableCell,
} from "@/components/ui/table";
import { formatDate } from "@/lib/utils";
import {
  Mail,
  MailOpen,
  Trash2,
  CheckCircle,
  X,
  Phone,
  Calendar,
  User,
  Loader2,
} from "lucide-react";

export interface ContactMessageItem {
  id: number;
  name: string;
  email: string;
  phone?: string | null;
  subject?: string | null;
  message: string;
  isRead: boolean;
  createdAt: Date | string;
}

interface MessagesListProps {
  initialMessages: ContactMessageItem[];
}

export function MessagesList({ initialMessages }: MessagesListProps) {
  const router = useRouter();
  const [messages, setMessages] = useState<ContactMessageItem[]>(initialMessages);
  const [filter, setFilter] = useState<"all" | "unread" | "read">("all");
  const [selectedMessage, setSelectedMessage] = useState<ContactMessageItem | null>(null);
  const [loadingAction, setLoadingAction] = useState(false);

  const filtered = messages.filter((m) => {
    if (filter === "unread") return !m.isRead;
    if (filter === "read") return m.isRead;
    return true;
  });

  const unreadCount = messages.filter((m) => !m.isRead).length;

  const handleOpenMessage = async (msg: ContactMessageItem) => {
    setSelectedMessage(msg);

    // If unread, automatically mark as read
    if (!msg.isRead) {
      try {
        await fetch(`/api/contact/${msg.id}`, {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ isRead: true }),
        });
        setMessages((prev) =>
          prev.map((item) => (item.id === msg.id ? { ...item, isRead: true } : item))
        );
        router.refresh();
      } catch {
        // silent fail for optimistic read
      }
    }
  };

  const handleToggleRead = async (id: number, currentStatus: boolean, e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setLoadingAction(true);
    try {
      const res = await fetch(`/api/contact/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ isRead: !currentStatus }),
      });
      if (!res.ok) throw new Error("Gagal mengubah status pesan.");

      setMessages((prev) =>
        prev.map((item) => (item.id === id ? { ...item, isRead: !currentStatus } : item))
      );
      if (selectedMessage && selectedMessage.id === id) {
        setSelectedMessage({ ...selectedMessage, isRead: !currentStatus });
      }
      toast.success(!currentStatus ? "Pesan ditandai sudah dibaca." : "Pesan ditandai belum dibaca.");
      router.refresh();
    } catch {
      toast.error("Gagal memperbarui status pesan.");
    } finally {
      setLoadingAction(false);
    }
  };

  const handleDelete = async (id: number, e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    if (!confirm("Hapus pesan ini secara permanen?")) return;

    setLoadingAction(true);
    try {
      const res = await fetch(`/api/contact/${id}`, {
        method: "DELETE",
      });
      if (!res.ok) throw new Error("Gagal menghapus pesan.");

      setMessages((prev) => prev.filter((item) => item.id !== id));
      if (selectedMessage && selectedMessage.id === id) {
        setSelectedMessage(null);
      }
      toast.success("Pesan berhasil dihapus.");
      router.refresh();
    } catch {
      toast.error("Gagal menghapus pesan.");
    } finally {
      setLoadingAction(false);
    }
  };

  return (
    <div className="space-y-6">
      {/* Top Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-brown-300">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold font-heading text-brown-900">
            Pesan Masuk & Permintaan Konsultasi
          </h1>
          <p className="text-xs sm:text-sm text-brown-500 mt-1">
            Total {messages.length} pesan ({unreadCount} pesan belum ditinjau)
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex items-center gap-2 bg-white p-1 rounded-[8px] border border-brown-300">
          <button
            type="button"
            onClick={() => setFilter("all")}
            className={`px-3 py-1.5 rounded-[6px] text-xs font-medium transition-colors ${
              filter === "all" ? "bg-brown-700 text-white" : "text-brown-700 hover:bg-brown-100"
            }`}
          >
            Semua ({messages.length})
          </button>
          <button
            type="button"
            onClick={() => setFilter("unread")}
            className={`px-3 py-1.5 rounded-[6px] text-xs font-medium transition-colors ${
              filter === "unread" ? "bg-brown-700 text-white" : "text-brown-700 hover:bg-brown-100"
            }`}
          >
            Belum Dibaca ({unreadCount})
          </button>
          <button
            type="button"
            onClick={() => setFilter("read")}
            className={`px-3 py-1.5 rounded-[6px] text-xs font-medium transition-colors ${
              filter === "read" ? "bg-brown-700 text-white" : "text-brown-700 hover:bg-brown-100"
            }`}
          >
            Sudah Dibaca ({messages.length - unreadCount})
          </button>
        </div>
      </div>

      {/* Messages Table */}
      <div className="rounded-[12px] border border-brown-300 bg-white overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-12">Status</TableHead>
              <TableHead>Pengirim</TableHead>
              <TableHead>Subjek & Cuplikan Pesan</TableHead>
              <TableHead>Tanggal Masuk</TableHead>
              <TableHead className="text-right">Aksi</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filtered.length > 0 ? (
              filtered.map((msg) => (
                <TableRow
                  key={msg.id}
                  onClick={() => handleOpenMessage(msg)}
                  className={`cursor-pointer transition-colors ${
                    !msg.isRead ? "bg-brown-100/30 font-medium" : ""
                  }`}
                >
                  <TableCell>
                    {msg.isRead ? (
                      <span title="Sudah dibaca"><MailOpen className="w-4 h-4 text-brown-300" /></span>
                    ) : (
                      <span title="Belum dibaca"><Mail className="w-4 h-4 text-gold-500" /></span>
                    )}
                  </TableCell>

                  <TableCell>
                    <div className="font-semibold text-sm text-brown-900">{msg.name}</div>
                    <div className="text-xs text-brown-500">{msg.email}</div>
                  </TableCell>

                  <TableCell className="max-w-md">
                    <div className="font-medium text-xs sm:text-sm text-brown-900 truncate">
                      {msg.subject || "(Tanpa Subjek)"}
                    </div>
                    <div className="text-xs text-brown-500 line-clamp-1 mt-0.5">
                      {msg.message}
                    </div>
                  </TableCell>

                  <TableCell className="text-xs text-brown-500 whitespace-nowrap">
                    {formatDate(msg.createdAt)}
                  </TableCell>

                  <TableCell className="text-right">
                    <div className="flex items-center justify-end gap-1.5" onClick={(e) => e.stopPropagation()}>
                      <Button
                        type="button"
                        variant="ghost"
                        size="sm"
                        onClick={(e) => handleToggleRead(msg.id, msg.isRead, e)}
                        title={msg.isRead ? "Tandai belum dibaca" : "Tandai sudah dibaca"}
                        className="h-8 px-2 text-brown-700"
                      >
                        {msg.isRead ? <Mail className="w-3.5 h-3.5" /> : <CheckCircle className="w-3.5 h-3.5 text-emerald-600" />}
                      </Button>

                      <Button
                        type="button"
                        variant="ghost"
                        size="sm"
                        onClick={(e) => handleDelete(msg.id, e)}
                        className="h-8 px-2 text-red-600 hover:bg-red-50 hover:text-red-700"
                        title="Hapus Pesan"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={5} className="h-32 text-center text-brown-500 text-xs sm:text-sm">
                  Tidak ada pesan masuk pada kategori ini.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>

      {/* Message Detail Modal Drawer */}
      {selectedMessage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-brown-900/60 backdrop-blur-sm">
          <div className="w-full max-w-2xl bg-white rounded-[12px] border border-brown-300 p-6 sm:p-8 space-y-6 shadow-2xl max-h-[90vh] overflow-y-auto">
            {/* Header */}
            <div className="flex items-start justify-between pb-4 border-b border-brown-300">
              <div className="space-y-1">
                <span className="text-xs font-semibold text-gold-500 uppercase tracking-wider">
                  Detail Pesan Masuk
                </span>
                <h3 className="text-xl font-bold font-heading text-brown-900">
                  {selectedMessage.subject || "Permintaan Informasi Tanpa Subjek"}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setSelectedMessage(null)}
                className="p-1.5 rounded-[8px] hover:bg-brown-100 text-brown-700"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Sender Meta Info */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 p-4 rounded-[8px] bg-paper border border-brown-300 text-xs">
              <div className="flex items-center gap-2">
                <User className="w-4 h-4 text-brown-500" />
                <span>
                  <strong>Pengirim:</strong> {selectedMessage.name}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-brown-500" />
                <span>
                  <strong>Email:</strong>{" "}
                  <a href={`mailto:${selectedMessage.email}`} className="text-brown-700 underline">
                    {selectedMessage.email}
                  </a>
                </span>
              </div>
              {selectedMessage.phone && (
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-brown-500" />
                  <span>
                    <strong>Telepon:</strong>{" "}
                    <a href={`tel:${selectedMessage.phone}`} className="text-brown-700 underline">
                      {selectedMessage.phone}
                    </a>
                  </span>
                </div>
              )}
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-brown-500" />
                <span>
                  <strong>Waktu:</strong> {formatDate(selectedMessage.createdAt)}
                </span>
              </div>
            </div>

            {/* Message Body */}
            <div className="space-y-2">
              <label className="text-xs font-semibold text-brown-900">
                Isi Pesan / Pertanyaan Konsultasi:
              </label>
              <div className="p-4 rounded-[8px] border border-brown-300 bg-white text-sm text-brown-900 leading-relaxed whitespace-pre-line">
                {selectedMessage.message}
              </div>
            </div>

            {/* Action Bar */}
            <div className="flex items-center justify-between pt-4 border-t border-brown-300">
              <Button
                type="button"
                variant="outline"
                size="sm"
                onClick={() => handleToggleRead(selectedMessage.id, selectedMessage.isRead)}
                disabled={loadingAction}
              >
                {selectedMessage.isRead ? "Tandai Belum Dibaca" : "Tandai Sudah Dibaca"}
              </Button>

              <div className="flex items-center gap-2">
                <Button
                  type="button"
                  variant="destructive"
                  size="sm"
                  onClick={() => handleDelete(selectedMessage.id)}
                  disabled={loadingAction}
                  className="gap-1.5"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                  <span>Hapus Pesan</span>
                </Button>
                <Button asChild variant="gold" size="sm">
                  <a href={`mailto:${selectedMessage.email}?subject=Re: ${encodeURIComponent(selectedMessage.subject || "Konsultasi PT Surya Karya Energi")}`}>
                    Balas via Email
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}