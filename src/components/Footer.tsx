'use client';
import Image from 'next/image';
// import Link from 'next/link';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { socialMediaLinks } from '@/lib/data/socialMediaLinks';
import { legals, resources, solutions } from '@/lib/data/footerLinks';
import CompanyLocation from './ui/CompanyLocation';
import { useForm } from 'react-hook-form';
import { AnimatePresence } from 'framer-motion';
import Motion from '@/utils/Motion';
import ThemeToggle from './ui/ThemeChanger/ThemeButton';
import { useTheme } from 'next-themes';
const Footer = () => {
  const Router = useRouter();
  const [feedbackClicked, setFeedbackClicked] = useState<boolean>(false);
  const { theme } = useTheme();
  type feedbackType = {
    email: string;
    feedback: string;
  };
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting, isSubmitted },
  } = useForm<feedbackType>();

  const onSubmit = async (data: feedbackType) => {
    await new Promise((resolve) => setTimeout(resolve, 3000)); // 3-second delay
    console.log('Feedback Submitted:', data);
    reset(); // Reset form
    setTimeout(() => {
      setFeedbackClicked(false);
    }, 2000);
  };

  return (
    <footer className='border-t-1 min-h-[90vh] flex flex-col h-[90vh] w-screen py-10 px-20'>
      <section className='flex flex-col md:flex-row justify-between items-start gap-10 w-full h-full'>
        <div className='h-full flex flex-col justify-between items-start'>
          <Image
            onClick={() => Router.push('/')}
            className='cursor-pointer w-7 h-7 md:w-14 md:h-14 '
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
          <div className='relative inline-block text-left'>
            {/* Feedback Form */}
            <AnimatePresence>
              {feedbackClicked && (
                <Motion.form
                  key='feedback-form'
                  initial={{ opacity: 0, scale: 0.95, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95, y: 20 }}
                  transition={{ duration: 0.25, ease: 'easeInOut' }}
                  onSubmit={handleSubmit(onSubmit)}
                  className='absolute right-0 bottom-12 w-72 bg-white shadow-lg rounded-lg p-4 z-50 border border-gray-200'
                >
                  <h3 className='text-lg font-semibold mb-2 text-gray-700'>
                    We value your feedback
                  </h3>

                  <label
                    htmlFor='userEmailForFeedback'
                    className='block text-sm text-gray-600 mb-1'
                  >
                    Email
                  </label>
                  <input
                    type='email'
                    id='userEmailForFeedback'
                    placeholder='your@email.com'
                    {...register('email', { required: 'Email is required' })}
                    className='w-full px-3 py-2 mb-1 border border-gray-300 rounded placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400'
                  />
                  {errors.email && (
                    <p className='text-xs text-red-500 mb-2'>{errors.email.message}</p>
                  )}

                  <label htmlFor='feedback' className='block text-sm text-gray-600 mb-1'>
                    Feedback
                  </label>
                  <textarea
                    id='feedback'
                    rows={4}
                    placeholder='Write your feedback...'
                    {...register('feedback', { required: 'Feedback is required' })}
                    className='w-full px-3 py-2 mb-1 border border-gray-300 rounded placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 resize-none'
                  />
                  {errors.feedback && (
                    <p className='text-xs text-red-500 mb-2'>{errors.feedback.message}</p>
                  )}

                  <button
                    type='submit'
                    className='w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition-all'
                  >
                    {isSubmitting ? 'Submitting...' : isSubmitted ? 'Submitted' : 'Submit Feedback'}
                  </button>
                </Motion.form>
              )}
            </AnimatePresence>

            {/* Feedback Button */}
            <button
              onClick={() => setFeedbackClicked(!feedbackClicked)}
              type='button'
              className='mt-2 border border-gray-300 rounded px-4 py-2 bg-blue-600 text-white hover:bg-blue-700 transition-all'
            >
              Feedback
            </button>
          </div>
        </section>
      </section>
      <section className='flex justify-between'>
        <ul className='flex flex-col justify-start gap-2'>
          <li>&copy; {new Date().getFullYear()} Zebotix Co.</li>
          <li className='flex items-center gap-2'>
            {socialMediaLinks.map(({ icon, name, url }, index) => (
              <div key={index} className='flex items-center gap-2'>
                <Image
                  className={`${
                    theme === 'light' ? 'invert' : theme === 'dark' ? 'invert-0' : ''
                  } cursor-pointer hover:scale-110 transition-transform duration-300 w-4 h-4`}
                  src={icon}
                  alt={name}
                  onClick={() => Router.push(url)}
                  width={100}
                  height={100}
                />
                {/* Add divider unless it's the last item */}
                {index < socialMediaLinks.length - 1 && <span className='text-gray-500'>|</span>}
              </div>
            ))}
          </li>
        </ul>
        <ThemeToggle />
      </section>

      <p className='text-center text-lg font-semibold mt-4'>
        Zebotix - Empowering Innovation, One Solution at a Time.
      </p>
    </footer>
  );
};

export default Footer;
