import { ReactNode } from 'react';
import { Navigation } from '../../components/navigation/Navigation';
import { Footer } from '../footer/Footer';

interface DefaultLayoutProps {
  children: ReactNode;
}

export const DefaultLayout = ({ children }: DefaultLayoutProps) => {
  return (
    <>
      <Navigation />
      {children}
      <Footer />
    </>
  );
};
