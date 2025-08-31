import type { Metadata } from 'next';
import { Toaster } from "@/components/ui/toaster"
import './globals.css';
import { Cormorant_Garamond } from 'next/font/google';
import { cn } from '@/lib/utils';

const fontHeadline = Cormorant_Garamond({
  subsets: ['latin'],
  variable: '--font-headline',
  weight: ['400', '700'],
});

const fontBody = Cormorant_Garamond({
  subsets: ['latin'],
  variable: '--font-body',
  weight: ['400', '700'],
});


export const metadata: Metadata = {
  metadataBase: new URL('https://tavustudio.com'), // Replace with your actual domain
  title: 'TAVÚ — Enter the Stillness | Waitlist (Abu Dhabi)',
  description: 'Enter the stillness — TAVÚ opens soon in Al Raha, Abu Dhabi. Join the waitlist for founders’ perks, early booking and a welcome gift. Reformer Pilates, Breathwork and Contrast Therapy blended as ritual.',
  openGraph: {
    title: 'TAVÚ — Enter the Stillness',
    description: 'A sanctuary for presence, breath and ritual. Join the waitlist for early access to TAVÚ studio in Abu Dhabi.',
    images: [{
      url: 'https://picsum.photos/1200/630',
      width: 1200,
      height: 630,
      alt: 'Soft morning light across linen textures in the TAVÚ studio.',
    }]
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={cn("font-body antialiased", fontHeadline.variable, fontBody.variable)}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
