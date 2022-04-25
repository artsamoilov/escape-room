import { Header, Footer } from 'components/common/common';
import { ReactNode } from 'react';

type PropsType = {
  children: ReactNode,
}

const MainLayout = ({ children }: PropsType): JSX.Element => (
  <>
    <Header />
    {children}
    <Footer />
  </>
);

export default MainLayout;
