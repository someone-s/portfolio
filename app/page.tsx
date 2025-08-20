"use client"


import BaseLayout from "@/components/base-layout";
import { redirect } from "next/navigation";

export default function Landing() {

  redirect('/home');

  return (
    <BaseLayout>
    </BaseLayout>
  );
}
