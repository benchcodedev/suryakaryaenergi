import React from "react";
import prisma from "@/lib/prisma";
import { MessagesList } from "@/components/admin/messages-list";

export const revalidate = 0; // Always fresh

export default async function AdminMessagesPage() {
  const messages = await prisma.contactMessage.findMany({
    orderBy: { createdAt: "desc" },
  });

  return <MessagesList initialMessages={messages as any} />;
}