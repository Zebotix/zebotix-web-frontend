import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/Header';
import { LoadingProvider } from '@/hooks/LoadingContext';
import Footer from '@/components/Footer';
import ThemeProvider from '@/hooks/ThemeContext';
import { ClerkProvider } from '@clerk/nextjs';
export const metadata: Metadata = {
  title: 'Zebotix - Empowering Innovation, One Solution at a Time.',
  description:
    "Zebotix is a forward-thinking technology solutions company committed to redefining the way businesses and individuals interact with the digital world. At the heart of Zebotix lies a passion for innovation, excellence, and customer-centric solutions. We specialize in cutting-edge software development, AI-driven applications, and robust IT services tailored to meet the unique needs of modern enterprises. Whether it's building responsive web applications, creating seamless user experiences, or harnessing the power of machine learning, Zebotix delivers top-tier solutions that drive growth, enhance productivity, and future-proof your operations. Our mission is to bridge the gap between technology and creativity, enabling clients to achieve their goals through scalable, efficient, and innovative systems. With a team of dedicated professionals and a commitment to staying ahead of the curve, Zebotix is your trusted partner in navigating the ever-evolving digital landscape. At Zebotix, we don't just create solutions; we empower possibilities. Together, let's build a smarter, more connected future.",
  icons: {
    icon: '/favicon.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang='en' suppressHydrationWarning>
        <body className=' antialiased transition-colors duration-300'>
          <LoadingProvider>
            <ThemeProvider>
              <Header />
              {children}
              <Footer />
            </ThemeProvider>
          </LoadingProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
