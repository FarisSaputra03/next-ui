"use client"
import React from "react";
import {Image} from "@nextui-org/react";
export default function Foto() {
  return (
    <div className="flex justify-end">
    <Image
    width={300}
    alt="NextUI hero Image"
    src="https://nextui-docs-v2.vercel.app/images/hero-card-complete.jpeg"
  />
  </div>
  )
}
