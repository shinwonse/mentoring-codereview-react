import BottomNavigator from '@components/BottomNavigator';
import { ReactNode } from 'react';

function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <main>{children}</main>
      <BottomNavigator />
    </>
  );
}

export default Layout;
