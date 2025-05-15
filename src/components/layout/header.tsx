
'use client';

import type { FC } from 'react';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetClose } from '@/components/ui/sheet';

interface NavItem {
  href: string;
  label: string;
}

const navItems: NavItem[] = [
  { href: '#about-me', label: 'About' },
  { href: '#projects', label: 'Projects' },
  { href: '#social-links', label: 'Connect' },
  { href: '#social-links', label: 'Contact' }, // Points to social links for now
];

const Header: FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  if (!isMounted) {
    // Return a basic structure or null to avoid flash of unstyled content / layout shift during SSR
    // For a sticky header, it's often better to render its structure to prevent content jump.
    // However, for Sheet functionality, client-side logic is key.
    // We can render the static part of the header.
    return (
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <Link href="/" className="text-xl font-bold text-primary">
            MyPortfolio
          </Link>
          <div className="hidden md:flex space-x-6">
             {/* Placeholder for desktop nav items if needed before mount */}
          </div>
          <div className="md:hidden">
            <Button variant="ghost" size="icon" aria-label="Open menu" disabled>
              <Menu className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </header>
    );
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="text-xl font-bold text-primary">
          MyPortfolio
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-sm font-medium text-foreground/80 hover:text-accent transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Mobile Navigation --- Using Sheet */}
        <div className="md:hidden">
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" aria-label="Open menu">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[280px] p-0 flex flex-col bg-background">
                <div className="flex items-center justify-between p-4 border-b">
                   <Link href="/" className="text-lg font-bold text-primary" onClick={handleLinkClick}>
                      MyPortfolio
                    </Link>
                  <SheetClose asChild>
                    <Button variant="ghost" size="icon" aria-label="Close menu">
                      <X className="h-6 w-6" />
                    </Button>
                  </SheetClose>
                </div>
                <nav className="flex-grow p-4 space-y-4">
                  {navItems.map((item) => (
                    <SheetClose asChild key={item.label}>
                      <Link
                        href={item.href}
                        className="block py-2 text-base font-medium text-foreground/80 hover:text-accent transition-colors"
                        onClick={handleLinkClick}
                      >
                        {item.label}
                      </Link>
                    </SheetClose>
                  ))}
                </nav>
                <div className="p-4 border-t mt-auto">
                  <p className="text-xs text-muted-foreground text-center">&copy; {new Date().getFullYear()} Joel Luhembwe Watshala</p>
                </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;
