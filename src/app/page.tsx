"use client";

import { SignInButton, SignOutButton, useAuth, useSession } from "@clerk/nextjs";



export default function Home() {
  const { isSignedIn } = useSession()

  return <main>{isSignedIn ? <SignOutButton /> : <SignInButton />}</main>;
}
