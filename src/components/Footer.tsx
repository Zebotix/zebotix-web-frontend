'use client';
import Image from 'next/image';
// import Link from 'next/link';
import React from 'react';
import { useRouter } from 'next/navigation';
import { socialMediaLinks } from '@/lib/data/socialMediaLinks';
import { legals, resources, solutions } from '@/lib/data/footerLinks';
import CompanyLocation from './ui/CompanyLocation';
const Footer = () => {
  const Router = useRouter();

  return (
    <footer className='min-h-[90vh] flex flex-col h-[90vh] w-screen bg-[#AEB8C8] text-black py-10 px-20'>
      <section className='flex flex-col md:flex-row justify-between items-start gap-10 w-full h-full'>
        <div className='h-full flex flex-col justify-between items-start'>
          <Image
            onClick={() => Router.push('/')}
            className='w-7 h-7 md:w-14 md:h-14 '
            src={'/Zebotix.png'}
            alt='logo'
            width={1000}
            height={1000}
          />
        </div>
        {/* Resources Links */}
        <section className='h-full flex flex-col  items-start'>
          <span className='font-semibold text-md'>Resources</span>
          <ul className='h-full flex flex-col mt-4 gap-4 items-start'>
            {resources.map((resource, index) => (
              <li
                key={index * Math.random() * 10000}
                className='text-sm cursor-pointer hover:underline'
                onClick={() => Router.push(resource.url)}
              >
                {resource.label}
              </li>
            ))}
          </ul>
        </section>
        {/* Solutions */}
        <section className='h-full flex flex-col  items-start'>
          <span className='font-semibold text-md'>Solutions</span>
          <ul className='h-full flex flex-col mt-4 gap-4 items-start'>
            {solutions.map((solution, index) => (
              <li
                key={index * Math.random() * 10000}
                className='text-sm cursor-pointer hover:underline'
                onClick={() => Router.push(solution.url)}
              >
                {solution.label}
              </li>
            ))}
          </ul>
        </section>
        {/* Legals */}
        <section className='h-full flex flex-col  items-start'>
          <span className='font-semibold text-md'>Legals</span>
          <ul className='h-full flex flex-col mt-4 gap-4 items-start'>
            {legals.map((legal, index) => (
              <li
                key={index * Math.random() * 10000}
                className='text-sm cursor-pointer hover:underline'
                onClick={() => Router.push(legal.url)}
              >
                {legal.label}
              </li>
            ))}
          </ul>
        </section>
        <section className='h-full flex flex-col items-end'>
          <CompanyLocation />
          <button type='button' className={` mt-2 border rounded px-2 py-1`}>
            Feedback
          </button>
        </section>
      </section>
      <section className='flex justify-between'>
        <ul className='flex flex-col justify-start gap-2'>
          <li>&copy; {new Date().getFullYear()} Zebotix Co.</li>
          <li className='flex items-center gap-2'>
            {socialMediaLinks.map(({ icon, name, url }, index) => (
              <div key={index} className='flex items-center gap-2'>
                <Image
                  className='invert cursor-pointer hover:scale-110 transition-transform duration-300 w-4 h-4'
                  src={icon}
                  alt={name}
                  onClick={() => Router.push(url)}
                  width={16}
                  height={16}
                />
                {/* Add divider unless it's the last item */}
                {index < socialMediaLinks.length - 1 && <span className='text-gray-500'>|</span>}
              </div>
            ))}
          </li>
        </ul>
        <p>Theme Changer Button</p>
      </section>

      <p className='text-center text-lg font-semibold mt-4'>
        Zebotix - Empowering Innovation, One Solution at a Time.
      </p>
    </footer>
  );
};

export default Footer;
