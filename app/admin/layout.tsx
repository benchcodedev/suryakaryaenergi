import React from "react";
import { AdminSidebar } from "@/components/admin/admin-sidebar";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex flex-col lg:flex-row bg-paper text-brown-900">
      <AdminSidebar />
      <main className="flex-1 p-6 sm:p-8 lg:p-10 max-w-7xl overflow-x-hidden">
        {children}
      </main>
    </div>
  );
}