
import Link from 'next/link';
import { Instagram, Youtube, Facebook } from 'lucide-react';
import Logo from '../icons/Logo';

const TikTokIcon = ({ className }: { className?: string }) => (
    <svg 
        xmlns="http://www.w3.org/2000/svg" 
        viewBox="0 0 24 24" 
        fill="currentColor"
        className={className}
    >
        <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-2.43.03-4.83-.95-6.43-2.88-1.59-1.94-2.23-4.52-1.9-7.12.31-2.52 1.8-4.79 3.86-6.35 2.06-1.56 4.66-2.26 7.16-2.14.02 1.54-.02 3.08-.01 4.63-.01 2.05-1.66 3.7-3.71 3.71s-3.71-1.66-3.71-3.71c0-2.05 1.66-3.71 3.71-3.71z"/>
    </svg>
)

export default function Footer() {
  return (
    <footer 
      id="contact" 
      className="relative bg-cover bg-center text-primary-foreground font-body"
      style={{ backgroundImage: "url('/background2.png')" }}
    >
      <div className="absolute inset-0 bg-primary/90 z-0"></div>
      <div className="relative container mx-auto px-4 py-16 sm:py-24 z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 text-center md:text-left">
          
          {/* Column 1: Logo & Tagline */}
          <div className="md:col-span-1 flex flex-col items-center md:items-start">
            <Link href="/" className="mb-4">
              <Logo className="h-10 w-auto" />
            </Link>
            <p className="text-base text-primary-foreground/80 max-w-xs">
              Movement • Ritual • Renewal
            </p>
          </div>

          {/* Column 2: Navigation */}
          <div className="md:col-span-1">
            <h3 className="font-headline text-lg font-semibold mb-4 text-primary-foreground">Main</h3>
            <ul className="space-y-3 text-primary-foreground/80">
              <li><Link href="#about" className="hover:text-primary-foreground transition-colors">About TAVÚ</Link></li>
              <li><Link href="#waitlist" className="hover:text-primary-foreground transition-colors">Waitlist</Link></li>
            </ul>
          </div>

          {/* Column 3: Contact */}
          <div className="md:col-span-1">
            <h3 className="font-headline text-lg font-semibold mb-4 text-primary-foreground">Contact Us</h3>
            <div className="space-y-3 text-primary-foreground/80">
                <p>TAVÚ Studio, Abu Dhabi</p>
                <p><a href="mailto:connect@tavustudio.com" className="hover:text-primary-foreground transition-colors">connect@tavustudio.com</a></p>
            </div>
          </div>
          
          {/* Column 4: Social */}
          <div className="md:col-span-1">
             <h3 className="font-headline text-lg font-semibold mb-4 text-primary-foreground">Follow Us</h3>
             <div className="flex justify-center md:justify-start space-x-5">
                <a href="https://www.instagram.com/tavuwellness/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-primary-foreground/80 hover:text-primary-foreground hover:scale-110 transition-all duration-300">
                  <Instagram className="h-6 w-6" />
                </a>
                <a href="https://www.tiktok.com/@tavuwellness" target="_blank" rel="noopener noreferrer" aria-label="TikTok" className="text-primary-foreground/80 hover:text-primary-foreground hover:scale-110 transition-all duration-300">
                  <TikTokIcon className="h-6 w-6" />
                </a>
              </div>
          </div>

        </div>

        <div className="border-t border-primary-foreground/20 mt-16 pt-8 text-center text-base text-primary-foreground/60 font-bold">
           <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6">
             <p>&copy; {new Date().getFullYear()} TAVÚ Studio. All rights reserved.</p>
             <div className="flex gap-6">
                <Link href="/privacy-policy" className="hover:text-primary-foreground transition-colors">Privacy Policy</Link>
                <Link href="/terms-of-service" className="hover:text-primary-foreground transition-colors">Terms of Service</Link>
             </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
