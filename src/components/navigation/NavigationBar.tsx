'use client';

import Link from 'next/link';
import { Button } from '../ui/button';
import { useLenis } from 'lenis/react';

type Route = {
  label: string;
  href: string;
  key: number;
  variant: 'pink';
}

const routes: Route[] = [
  {
    label: 'MAIN',
    href: '/',
    variant: 'pink',
    key: 0
  },
  {
    label: 'WORK',
    href: '#work',
    variant: 'pink',
    key: 1
  },
  {
    label: 'PROJECTS',
    href: '#projects',
    variant: 'pink',
    key: 2
  },
  {
    label: 'CONTACT',
    href: '#contact',
    variant: 'pink',
    key: 3
  },
];
export default function NavigationBar() {
  const lenis = useLenis();

  const handleScroll = (e: React.MouseEvent, href: string) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      lenis?.scrollTo(href, {
        offset: -100, 
        duration: 1.5,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      });
    }
  };

  return (
    <div className="fixed bottom-4 top-auto left-0 right-0 px-4 z-50 w-full flex gap-4 md:top-0 md:bottom-auto md:mt-8 md:px-42">
      {routes.map(({label, href, key, variant}: Route) => 
        <Button key={key} size={"lg"} variant={variant} className='flex-1 flex px-2'>
          <Link 
          href={href}
          onClick={(e) => handleScroll(e, href)} 
          className='flex-1 w-full h-full flex items-center justify-center'
          >
            <p className='text-base font-bold'>{label}</p>
          </Link>
        </Button>
      )}
    </div>
  )
}
