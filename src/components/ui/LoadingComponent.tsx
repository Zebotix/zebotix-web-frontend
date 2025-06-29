// components/LoadingComponent.tsx
'use client';
import Motion from '@/utils/Motion';
import { useLoading } from '@/hooks/LoadingContext';

const LoadingComponent = ({
  size = 'xl',
}: {
  size?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl';
}) => {
  const { isLoading } = useLoading();
  const sizeClasses = {
    sm: 'h-12 w-12',
    md: 'h-20 w-20',
    lg: 'h-28 w-28',
    xl: 'h-44 w-44',
    '2xl': 'h-64 w-64',
    '3xl': 'h-96 w-96',
  };

  if (!isLoading) return null;

  return (
    <div className='fixed inset-0 z-50 flex items-center justify-center bg-white bg-opacity-90'>
      <div className={`relative ${sizeClasses[size]}`}>
        {/* Outer Ring */}
        <Motion.div
          className={`absolute rounded-full border-[3px] border-t-transparent border-b-blue-900 border-l-blue-700 border-r-blue-600 ${sizeClasses[size]}`}
          animate={{ rotate: 360 }}
          transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
        />

        {/* Middle Ring */}
        <Motion.div
          className={`absolute rounded-full border-[2px] border-t-transparent border-b-blue-600 border-l-blue-500 border-r-blue-400 ${sizeClasses[size]} scale-75`}
          animate={{ rotate: -360 }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'linear' }}
        />

        {/* Inner Ring */}
        <Motion.div
          className={`absolute rounded-full border-[1px] border-t-transparent border-b-blue-400 border-l-blue-300 border-r-blue-200 ${sizeClasses[size]} scale-50`}
          animate={{ rotate: 360 }}
          transition={{ duration: 0.75, repeat: Infinity, ease: 'linear' }}
        />

        {/* Center Glow */}
        <div className='absolute inset-0 m-auto h-1.5 w-1.5 rounded-full bg-blue-500 shadow-[0_0_8px_2px_rgba(59,130,246,0.8)]' />
      </div>
    </div>
  );
};

export default LoadingComponent;
