import { HeaderPrimary, HeaderSecondary } from '../components/common/header';

// eslint-disable-next-line react/prop-types
export const Layout = ({ children }) => {
  return (
    <>
      <header>
        <HeaderSecondary></HeaderSecondary>
        <HeaderPrimary></HeaderPrimary>
      </header>

      <main>{children}</main>
    </>
  );
};