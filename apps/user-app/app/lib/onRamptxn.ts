"use server";

import { getServerSession } from "next-auth";
import { useSession } from "next-auth/react";
import { authOptions } from "./auth";
import prisma from "@repo/db/client";

export async function createOnRampTransaction(
  amount: number,
  provider: string
) {
  const session = await getServerSession(authOptions);
  const userId = session.user.id;
  const token = (Math.random() * 100).toString();

  if (!userId) {
    return {
      message: "User not logged in",
    };
  }

  await prisma.onRampTransaction.create({
    data: {
      userId: Number(userId),
      amount: amount * 100,
      startTime: new Date(),
      status: "Processing",
      provider,
      token,
    },
  });

  return {
    message: "Transaction added",
  };
}
