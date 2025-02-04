"use client";
import { signIn, signOut, useSession } from "next-auth/react";
import { Appbar } from "@repo/ui/appbar";
import { useBalance } from "@repo/store/balance";

export default function Page(): JSX.Element {
  const session = useSession();
  const balance = useBalance();
  return (
    <div>
      <Appbar onSignin={signIn} onSignout={signOut} user={session.data?.user} />
      <div>{balance}</div>
    </div>
  );
}
