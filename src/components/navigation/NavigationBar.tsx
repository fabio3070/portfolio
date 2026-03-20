import Link from 'next/link';
import { Button } from '../ui/button'

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
  return (
    <div className="fixed top-0 left-0 right-0 px-28 z-50 w-full flex gap-4 mt-8">
      {routes.map(({label, href, key, variant}: Route) => 
        <Button key={key} size={"lg"} variant={variant} className='font-size-3xl font-bold flex-1 flex'>
          <Link href={href} className='flex-1 w-full h-full flex items-center justify-center'><p>{label}</p></Link>
        </Button>
      )}
    </div>
  )
}
