
"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu } from 'lucide-react';
import { cn } from '@/lib/utils';
import Logo from '../icons/Logo';

const navLinks = [
  { href: '#about', label: 'About TAVÚ' },
  { href: '#waitlist', label: 'Waitlist' },
  { href: '#contact', label: 'Contact' },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled ? "bg-cover bg-center" : ""
      )}
      style={isScrolled ? { backgroundImage: "url('/background2.png')" } : {}}
    >
      <div className={cn(
          "transition-colors duration-300", 
          isScrolled ? 'bg-primary/80 backdrop-blur-sm' : 'bg-gradient-to-b from-black/50 to-transparent'
      )}>
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-24">
            <Link href="/" className="flex items-center gap-2 text-primary">
              <Logo className="h-8 w-auto" />
            </Link>
            
            <nav className="hidden md:flex items-center space-x-8">
              {navLinks.map(link => (
                <Link key={link.href} href={link.href} className="font-headline text-lg font-medium transition-colors text-white hover:text-white/80 drop-shadow-sm">
                  {link.label}
                </Link>
              ))}
            </nav>

            <div className="hidden md:block">
              <Button asChild className="rounded-full font-body px-8 text-base bg-destructive text-destructive-foreground hover:bg-destructive/90 transition-transform duration-300 hover:scale-105">
                <Link href="#waitlist">Join Waitlist</Link>
              </Button>
            </div>
            
            <div className="md:hidden">
              <Sheet open={isOpen} onOpenChange={setIsOpen}>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <Menu className="h-7 w-7 text-white drop-shadow-sm" />
                    <span className="sr-only">Open menu</span>
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="bg-secondary">
                  <div className="flex flex-col space-y-8 mt-12 p-4">
                    <Link href="/" className="flex items-center gap-2 mb-6 text-primary" onClick={() => setIsOpen(false)}>
                       <Logo className="h-8 w-auto" />
                    </Link>
                    {navLinks.map(link => (
                      <Link
                        key={link.href}
                        href={link.href}
                        onClick={() => setIsOpen(false)}
                        className="font-headline text-2xl transition-colors text-muted-foreground hover:text-primary"
                      >
                        {link.label}
                      </Link>
                    ))}
                     <Button asChild className="rounded-full font-body mt-6 py-6 text-xl bg-destructive text-destructive-foreground" onClick={() => setIsOpen(false)}>
                      <Link href="#waitlist">Join Waitlist</Link>
                    </Button>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
