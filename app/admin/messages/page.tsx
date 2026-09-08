import React from "react";
import prisma from "@/lib/prisma";
import { MessagesList } from "@/components/admin/messages-list";
import { FALLBACK_MESSAGES } from "@/lib/fallback-data";

export const revalidate = 0; // Always fresh

export default async function AdminMessagesPage() {
  let messages: any[] = [];

  try {
    messages = await prisma.contactMessage.findMany({
      orderBy: { createdAt: "desc" },
    });
    if (messages.length === 0) {
      messages = FALLBACK_MESSAGES;
    }
  } catch (error) {
    console.warn("Database unreachable in AdminMessagesPage, using fallback:", error);
    messages = FALLBACK_MESSAGES;
  }

  return <MessagesList initialMessages={messages as any} />;
}
