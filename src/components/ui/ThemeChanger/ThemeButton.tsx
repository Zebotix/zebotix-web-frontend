'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

export default function ThemeSwitcher() {
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null; // Prevents hydration mismatch

  return (
    <div className='flex space-x-2 items-center'>
      <button
        type='button'
        className={`p-2 rounded-md border transition-all duration-300 ${
          resolvedTheme === 'light'
            ? 'bg-white text-black border-gray-400 hover:bg-gray-200'
            : 'bg-gray-900 text-white border-gray-600 hover:bg-gray-700'
        }`}
        onClick={() => setTheme('light')}
      >
        Light
      </button>
      <button
        type='button'
        className={`p-2 rounded-md border transition-all duration-300 ${
          resolvedTheme === 'dark'
            ? 'bg-gray-900 text-white border-gray-600 hover:bg-gray-700'
            : 'bg-white text-black border-gray-400 hover:bg-gray-200'
        }`}
        onClick={() => setTheme('dark')}
      >
        Dark
      </button>
      <button
        type='button'
        className='p-2 rounded-md border bg-blue-500 text-white border-blue-700 hover:bg-blue-600 transition-all duration-300'
        onClick={() => setTheme('system')}
      >
        System
      </button>
    </div>
  );
}
