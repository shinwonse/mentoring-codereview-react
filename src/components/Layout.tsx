import BottomNavigator from '@components/BottomNavigator';
import Header from '@components/Header';
import { cn } from '@utils/cn';
import { ReactNode } from 'react';

type Props = {
  bottomNavigator?: boolean;
  children: ReactNode;
  header?: boolean;
  title?: string;
};

function Layout({ bottomNavigator, children, header, title }: Props) {
  return (
    <>
      {header && <Header title={title} />}
      <main className={cn('max-h-full')}>{children}</main>
      {bottomNavigator && <BottomNavigator />}
    </>
  );
}

export default Layout;
