'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import LoadingComponent from './ui/LoadingComponent';
import { useRouter } from 'next/navigation';
import { services } from '@/lib/data/services';
import { navLinks } from '@/lib/data/navLinks';
import { sideBarLinks } from '@/lib/data/sideBarLinks';
import MenuButton from './ui/MenuButton';
import SearchButton from './ui/SearchButton';

const Header = () => {
  const [search, setSearch] = useState<boolean>(false);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isSideBarOpen, setIsSideBarOpen] = useState<boolean>(false);
  const [scale, setScale] = useState<number>(0);
  const [windowWidth, setWindowWidth] = useState<number>(0);
  const router = useRouter();

  const handleSelect = (service: string) => {
    if (service) {
      setIsOpen(false);
      setScale(0);
      router.push(`/services/${service.toLowerCase().replace(/\s+/g, '-')}`);
    }
    return service;
  };

  const [isClient, setIsClient] = useState<boolean>(false);
  useEffect(() => {
    setIsClient(true);
    if (typeof window !== 'undefined') {
      setWindowWidth(window.innerWidth);
      const handleResize = () => setWindowWidth(window.innerWidth);
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }
  }, [setIsClient, setWindowWidth]);

  if (!isClient) {
    return <LoadingComponent size='2xl' />;
  }
  return (
    // ---------------------header started
    <header className='flex flex-col gap-4  bg-white text-black w-screen justify-between items-center p-2 shadow-sm shadow-black'>
      {/* ----------------------------------Mobile View */}
      {/* -------------nav 1 */}
      <nav className='w-screen px-6 overflow-hidden flex items-center flex-row-reverse justify-between '>
        {/* ---------------------Company logo */}
        <Image
          onClick={() => router.push('/')}
          className='  w-7 h-7 md:w-14 md:h-14 '
          src='/Zebotix.png'
          priority={false}
          alt='logo'
          width={500}
          height={500}
        />
        {/* ---------------------login button */}
        <Link
          className='text-white text-base font-light bg-[#1664C0] px-2 py-1 rounded outline-none'
          href={'/login'}
        >
          Sign In
        </Link>
      </nav>
      {/* ----------nav 2 */}
      <nav>
        <div className='relative w-screen px-6 flex justify-between '>
          {/* ---------------navLinks list*/}
          <ul className='flex justify-between w-2/3'>
            {navLinks.map(({ label, path, id }) => {
              //  services dropdown
              if (label.toLowerCase() === 'services') {
                return (
                  <li key={Math.random() * 10000} className='relative'>
                    <div className='flex items-center justify-between gap-2'>
                      <span
                        className={windowWidth > 800 ? `text-lg` : ``}
                        onClick={() => router.push('/services')}
                      >
                        {label}
                      </span>
                      <Image
                        onClick={() => setIsOpen(!isOpen)}
                        className='w-4 h-4'
                        src={'/dropdown.png'}
                        alt='dropdown'
                        width={100}
                        height={100}
                      />
                    </div>
                    {/* dropDown box for services drop down */}

                    {isOpen && (
                      <ul
                        className={`transition-all duration-700 delay-75 ease-in-out absolute top-full mt-2 flex flex-col items-s bg-white rounded-lg outline-3 outline-blue-500 dropdown-menu${
                          scale === 0 ? ' collapsed' : ''
                        }`}
                        data-scale={scale}
                      >
                        {services.map((s, index) => {
                          return (
                            <li
                              className={`${
                                index % 2 === 0 ? ' bg-white' : ' bg-[#f0f0f0]'
                              } pl-2 py-2 pr-4 w-40`}
                              onClick={() => handleSelect(s.serviceName)}
                              key={Math.random() * 10000}
                            >
                              <Link href={`/services/${s.serviceName}`}>{s.serviceName}</Link>
                            </li>
                          );
                        })}
                      </ul>
                    )}
                  </li>
                );
              }
              // other links
              if (
                id !== undefined &&
                windowWidth <= 800 &&
                id >= 3 &&
                label.toLowerCase() !== 'services'
              ) {
                return (
                  <li key={id}>
                    <Link href={path}>{label}</Link>
                  </li>
                );
              }
              if (id !== undefined && windowWidth > 800 && label.toLowerCase() !== 'services') {
                return (
                  <li key={id} className='text-lg'>
                    <Link href={path}>{label}</Link>
                  </li>
                );
              }
            })}
          </ul>

          {/* right sided Search and menu buttons */}
          <div className=' w-1/3 flex gap-2 items-center justify-end'>
            <div>
              {search && (
                <input className='absolute' type='text' placeholder='Search' title='Search Input' />
              )}
              <SearchButton clickHandler={() => setSearch(true)} />
            </div>
            <MenuButton clickHandler={() => setIsSideBarOpen(!search)} />
          </div>
          {isSideBarOpen && (
            <div className='fixed inset-0 z-50 overflow-hidden'>
              {/* Backdrop with matching animation */}
              <div
                className={`absolute inset-0 bg-[#1665c084] backdrop-blur-xs ${
                  isSideBarOpen ? 'animate-slideIn' : !isSideBarOpen ? 'animate-slideOut' : ''
                }`}
                onClick={() => setIsSideBarOpen(false)}
              />

              {/* Sidebar with perfectly matched animations */}
              <div
                className={`absolute left-0 top-0 h-full w-3/4 max-w-sm bg-white shadow-xl ${
                  isSideBarOpen ? 'animate-slideIn' : !isSideBarOpen ? 'animate-slideOut' : ''
                }`}
              >
                <button
                  type='button'
                  onClick={() => setIsSideBarOpen(false)}
                  className='absolute top-4 right-4 text-2xl hover:text-gray-600 transition-colors'
                  aria-label='Close sidebar'
                >
                  &times;
                </button>

                <ul className='p-6 space-y-4'>
                  {navLinks.map(({ label, path, id }) => {
                    if (id && id <= 2) {
                      return (
                        <li
                          key={id}
                          onClick={() => {
                            router.push(path);
                            setIsSideBarOpen(false);
                          }}
                          className='py-2 px-4 hover:bg-gray-100 rounded-md cursor-pointer transition-colors'
                        >
                          {label}
                        </li>
                      );
                    }
                  })}
                  {sideBarLinks.map(({ label, path }) => (
                    <li
                      key={`${label}-${path}`}
                      onClick={() => {
                        router.push(path);
                        setIsSideBarOpen(false);
                      }}
                      className='py-2 px-4 hover:bg-gray-100 rounded-md cursor-pointer transition-colors'
                    >
                      {label}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;
