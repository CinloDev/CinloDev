import React from 'react';

export default function LogoImage() {
  return (
    <div className="inline-flex items-center">
      <img src="/assets/logo.png" alt="CinloDev logo" width={160} height={48} className="object-contain" />
    </div>
  );
}