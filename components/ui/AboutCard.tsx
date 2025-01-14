"use client";

import React from "react";

interface AboutCardProps {
  children: React.ReactNode;
  className?: string; 
}

export function AboutCard({ children, className = "" }: AboutCardProps) {
  return (
    <div
    className={`flex flex-col gap-2 p-6 border border-[#ea5a0c34] rounded-lg shadow-sm bg-gradient-to-r from-white 50% to-[#fc762e1f] text-2xl text-brand font-bold ${className}`}
    >
      {children}
    </div>
  );
}
