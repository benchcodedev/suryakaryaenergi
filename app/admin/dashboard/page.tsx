import React from "react";
import Link from "next/link";
import prisma from "@/lib/prisma";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  FolderGit2,
  CheckCircle2,
  Clock,
  Mail,
  PlusCircle,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import { formatDate } from "@/lib/utils";

export const revalidate = 0; // Always fresh in admin dashboard

export default async function AdminDashboardPage() {
  const [
    totalProjects,
    completedProjects,
    runningProjects,
    planningProjects,
    unreadMessages,
    recentProjects,
    recentMessages,
  ] = await Promise.all([
    prisma.project.count(),
    prisma.project.count({ where: { status: "Selesai" } }),
    prisma.project.count({ where: { status: "Berjalan" } }),
    prisma.project.count({ where: { status: "Perencanaan" } }),
    prisma.contactMessage.count({ where: { isRead: false } }),
    prisma.project.findMany({
      take: 5,
      orderBy: { createdAt: "desc" },
    }),
    prisma.contactMessage.findMany({
      take: 5,
      orderBy: { createdAt: "desc" },
    }),
  ]);

  const stats = [
    {
      title: "Total Proyek",
      value: totalProjects,
      desc: "Portofolio terdaftar",
      icon: FolderGit2,
      color: "text-brown-900",
      bg: "bg-brown-100",
    },
    {
      title: "Proyek Selesai",
      value: completedProjects,
      desc: "Instalasi beroperasi",
      icon: CheckCircle2,
      color: "text-emerald-600",
      bg: "bg-emerald-50",
    },
    {
      title: "Sedang Berjalan",
      value: runningProjects + planningProjects,
      desc: `${runningProjects} berjalan, ${planningProjects} perencanaan`,
      icon: Clock,
      color: "text-gold-500",
      bg: "bg-amber-50",
    },
    {
      title: "Pesan Masuk Baru",
      value: unreadMessages,
      desc: "Inquiry belum ditinjau",
      icon: Mail,
      color: "text-red-600",
      bg: "bg-red-50",
    },
  ];

  return (
    <div className="space-y-8">
      {/* Top Banner Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-brown-300">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold font-heading text-brown-900">
            Ikhtisar Sistem Manajemen
          </h1>
          <p className="text-xs sm:text-sm text-brown-500 mt-1">
            Selamat datang di panel pengelolaan konten resmi PT Surya Karya Energi.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <Button asChild variant="gold" size="default">
            <Link href="/admin/projects/new" className="flex items-center gap-2">
              <PlusCircle className="w-4 h-4" />
              <span>Tambah Proyek Baru</span>
            </Link>
          </Button>
        </div>
      </div>

      {/* Metrics Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {stats.map((st, idx) => {
          const Icon = st.icon;
          return (
            <div
              key={idx}
              className="rounded-[12px] border border-brown-300 bg-white p-6 flex flex-col justify-between"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-semibold text-brown-500">{st.title}</span>
                <div className={`w-9 h-9 rounded-[8px] ${st.bg} flex items-center justify-center ${st.color}`}>
                  <Icon className="w-5 h-5" />
                </div>
              </div>
              <div>
                <p className="text-3xl font-bold font-heading text-brown-900 leading-none">
                  {st.value}
                </p>
                <p className="text-xs text-brown-500 mt-2">{st.desc}</p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Two Column Section: Recent Projects & Inquiries */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left: Recent Projects */}
        <div className="lg:col-span-7 rounded-[12px] border border-brown-300 bg-white p-6 space-y-4">
          <div className="flex items-center justify-between pb-3 border-b border-brown-300">
            <h2 className="font-heading font-bold text-lg text-brown-900">
              Proyek Terbaru
            </h2>
            <Link
              href="/admin/projects"
              className="text-xs font-semibold text-brown-700 hover:underline flex items-center gap-1"
            >
              <span>Kelola Semua Proyek</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="divide-y divide-brown-300/60">
            {recentProjects.map((p) => (
              <div key={p.id} className="py-3.5 flex items-center justify-between gap-4">
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-2">
                    <span className="font-semibold text-sm text-brown-900 truncate">
                      {p.title}
                    </span>
                    {p.isFeatured && (
                      <Badge variant="gold" className="text-[10px] py-0 px-1.5 shrink-0">
                        Unggulan
                      </Badge>
                    )}
                  </div>
                  <p className="text-xs text-brown-500 mt-0.5 truncate">
                    {p.category} {p.capacity ? `• ${p.capacity}` : ""} {p.location ? `• ${p.location}` : ""}
                  </p>
                </div>
                <div className="flex items-center gap-2 shrink-0">
                  <Badge variant={p.status === "Selesai" ? "success" : p.status === "Berjalan" ? "gold" : "warning"}>
                    {p.status}
                  </Badge>
                  <Button asChild variant="outline" size="sm">
                    <Link href={`/admin/projects/${p.id}/edit`}>Edit</Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Recent Inquiries */}
        <div className="lg:col-span-5 rounded-[12px] border border-brown-300 bg-white p-6 space-y-4">
          <div className="flex items-center justify-between pb-3 border-b border-brown-300">
            <h2 className="font-heading font-bold text-lg text-brown-900">
              Pesan Masuk Terbaru
            </h2>
            <Link
              href="/admin/messages"
              className="text-xs font-semibold text-brown-700 hover:underline flex items-center gap-1"
            >
              <span>Semua Pesan</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="divide-y divide-brown-300/60">
            {recentMessages.length > 0 ? (
              recentMessages.map((msg) => (
                <div key={msg.id} className="py-3 space-y-1">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-bold text-brown-900 truncate max-w-[180px]">
                      {msg.name}
                    </span>
                    <span className="text-brown-500 text-[11px]">
                      {formatDate(msg.createdAt)}
                    </span>
                  </div>
                  <p className="text-xs font-medium text-brown-700 truncate">
                    {msg.subject || "Tanpa Subjek"}
                  </p>
                  <p className="text-xs text-brown-500 line-clamp-2 leading-relaxed">
                    {msg.message}
                  </p>
                </div>
              ))
            ) : (
              <p className="text-xs text-brown-500 py-6 text-center">
                Belum ada pesan masuk.
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}