import type {Metadata} from 'next';
import {Outfit, Plus_Jakarta_Sans} from 'next/font/google';
import './globals.css';

const outfit = Outfit({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  variable: '--font-display',
  display: 'swap',
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-sans',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Quiet Light in Motion',
  description:
    'A sophisticated, minimalistic black-and-white digital experience featuring slow-moving horizontal light beams across a dark atmospheric canvas.',
  openGraph: {
    title: 'Quiet Light in Motion',
    description:
      'A sophisticated, minimalistic black-and-white digital experience featuring slow-moving horizontal light beams across a dark atmospheric canvas.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Quiet Light in Motion',
    description:
      'A sophisticated, minimalistic black-and-white digital experience featuring slow-moving horizontal light beams across a dark atmospheric canvas.',
  },
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className={`${outfit.variable} ${plusJakartaSans.variable}`}>
      <body
        className="bg-[#050505] text-[#f4f4f6] font-sans antialiased selection:bg-white/20 selection:text-white overflow-x-hidden"
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
