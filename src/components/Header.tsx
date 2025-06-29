'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import LoadingComponent from './ui/LoadingComponent';
import { useRouter } from 'next/navigation';
import { services } from '@/lib/data/services';
interface NavLinksTypes {
  label: string;
  path: string;
  id?: number;
}
const navLinks: NavLinksTypes[] = [
  {
    label: 'Home',
    path: '/',
    id: 1,
  },
  {
    label: 'About',
    path: '/',
    id: 2,
  },
  {
    label: 'Products',
    path: '/products',
    id: 3,
  },
  {
    label: 'Services',
    path: '/services',
    id: 4,
  },
  {
    label: 'Jobs',
    path: '/jobs',
    id: 5,
  },
];
const MenuButton = ({ clickHandler }: { clickHandler: () => void }) => {
  return (
    <svg
      onClick={clickHandler}
      className='w-5 h-5'
      xmlns='http://www.w3.org/2000/svg'
      x='0px'
      y='0px'
      width='50'
      height='50'
      viewBox='0 0 50 50'
    >
      <path d='M 0 9 L 0 11 L 50 11 L 50 9 Z M 0 24 L 0 26 L 50 26 L 50 24 Z M 0 39 L 0 41 L 50 41 L 50 39 Z'></path>
    </svg>
  );
};
const HomeButton = ({ clickHandler }: { clickHandler: () => void }) => {
  return (
    <svg
      onClick={clickHandler}
      className=' '
      xmlns='http://www.w3.org/2000/svg'
      x='0px'
      y='0px'
      width='24'
      height='24'
      viewBox='0 0 24 24'
    >
      <path d='M 12 2.0996094 L 1 12 L 4 12 L 4 21 L 11 21 L 11 15 L 13 15 L 13 21 L 20 21 L 20 12 L 23 12 L 12 2.0996094 z M 12 4.7910156 L 18 10.191406 L 18 11 L 18 19 L 15 19 L 15 13 L 9 13 L 9 19 L 6 19 L 6 10.191406 L 12 4.7910156 z'></path>
    </svg>
  );
};
const sideBarLinks: NavLinksTypes[] = [
  {
    label: 'Contact Us',
    path: '/contact-us',
  },
];

const Header = () => {
  const [search, setSearch] = useState<string>('');
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
    <header className='flex flex-col gap-4  bg-white text-black w-screen justify-between items-center p-2 shadow-lg shadow-black'>
      {/* ----------------------------------Mobile View */}
      {/* -------------nav 1 */}
      <nav className='lg:hidden w-screen px-4 overflow-hidden flex items-center flex-row-reverse justify-between '>
        {/* ---------------------Company logo */}
        <Image
          onClick={() => router.push('/')}
          className='  w-7 h-7 md:w-14 md:h-14 '
          src='/Zebotix.png'
          alt='logo'
          width={500}
          height={500}
        />
        {/* ---------------------login button */}
        <Link
          className='text-white font-bold bg-[#1664C0] px-2 py-1 rounded outline-none'
          href={'/login'}
        >
          login
        </Link>
      </nav>
      {/* ----------nav 2 */}
      <nav className='lg:hidden '>
        <div className='relative w-screen px-4 flex justify-between '>
          {/* ---------------navLinks list*/}
          <ul className='flex justify-between w-2/3'>
            {navLinks.map(({ label, path, id }) => {
              //  services dropdown
              if (label.toLowerCase() === 'services') {
                return (
                  <li key={Math.random() * 10000} className='relative'>
                    <div className='flex items-center justify-between gap-2'>
                      <span onClick={() => router.push('/services')}>{label}</span>
                      <Image
                        onClick={() => setIsOpen(!isOpen)}
                        className='w-4 h-4'
                        src={'/dropdown.png'}
                        alt='dropdown'
                        width={100}
                        height={100}
                      />
                    </div>
                  </li>
                );
              }
              // other links
              if (id !== undefined && id >= 3 && label.toLowerCase() !== 'services') {
                return (
                  <li key={id}>
                    <Link href={path}>{label}</Link>
                  </li>
                );
              }
            })}
          </ul>
          {/* dropDown box for services drop down */}
          {isOpen && (
            <ul
              className={`transition-all duration-700 delay-75 ease-in-out absolute left-[27%] top-full mt-2 flex flex-col items-s bg-white rounded-lg outline-3 outline-blue-500 dropdown-menu${
                scale === 0 ? ' collapsed' : ''
              }`}
              data-scale={scale}
            >
              {services.map((s, index) => {
                return (
                  <li
                    className={`${index % 2 === 0 ? ' bg-white' : ' bg-[#f0f0f0]'}  pl-2 py-2 pr-4`}
                    onClick={() => handleSelect(s.serviceName)}
                    key={Math.random() * 10000}
                  >
                    <Link href={`/services/${s.serviceName}`}>{s.serviceName}</Link>
                  </li>
                );
              })}
            </ul>
          )}
          {/* right sided home and menu buttons */}
          <div className=' w-1/3 flex gap-2 items-center justify-end'>
            <HomeButton clickHandler={() => router.push('/')} />
            <MenuButton clickHandler={() => setIsSideBarOpen(true)} />
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

      {/* ----------------- desktop view ----------------- */}
      {windowWidth >= 800 && (
        <nav className='hidden md:flex md:justify-between'>
          <div className='flex bg-gray-200 px-2 md:px-4 py-1 md:py-2 rounded-full overflow-hidden w-1/2 outline-none gap-2'>
            <input
              type='search'
              className='bg-gray-200 px-2 md:px-4 text-sm rounded-full font-thin md:text-xl outline-none w-full'
              name='search'
              id='search'
              placeholder='Search'
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <button type='button' title='search'>
              <Image
                className='w-5 h-5 md:w-6 md:h-6'
                src={`/search.svg`}
                alt={`search`}
                height={100}
                width={100}
              />
            </button>
          </div>
          <div></div>
          <div className=' flex gap-4 '>
            {navLinks.map(({ label, path, id }) => (
              <Link key={id} href={path} className='link-with-border font-medium text-lg'>
                {label}
              </Link>
            ))}
          </div>
          <div className='login'>
            <Link href={'/'}>
              <button
                type='button'
                className='border-b-2 border-gray-500 px-2 py-1 rounded-md outline-none'
              >
                login
              </button>
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;
