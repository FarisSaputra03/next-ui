"use client";
import React from "react";
import { Pagination } from "@nextui-org/react";

export default function Pagi() {
  return (
    <div className="flex justify-center">
      <Pagination showControls total={20} initialPage={1} />
    </div>
  );
}
