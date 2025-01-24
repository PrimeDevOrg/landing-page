'use client';

import React from 'react';

interface AboutCardProps {
  children: React.ReactNode;
  className?: string;
}

export function AboutCard({ children, className = '' }: AboutCardProps) {
  return (
    <div
      className={`50% flex flex-col gap-2 rounded-lg border border-[#ea5a0c34] bg-gradient-to-r from-white to-[#fc762e1f] p-6 text-2xl font-bold text-brand shadow-sm ${className}`}
    >
      {children}
    </div>
  );
}
