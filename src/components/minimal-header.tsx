'use client';
import { useEffect } from 'react';

export default function MinimalHeaderFlag() {
  useEffect(() => {
    document.body.classList.add('minimal-header');
    return () => document.body.classList.remove('minimal-header');
  }, []);
  return null;
}