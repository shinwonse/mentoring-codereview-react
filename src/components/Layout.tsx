import BottomNavigator from '@components/BottomNavigator';
import { cn } from '@utils/cn';
import { ReactNode } from 'react';

function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <main className={cn('max-h-full')}>{children}</main>
      <BottomNavigator />
    </>
  );
}

export default Layout;
