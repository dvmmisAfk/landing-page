import Navbar from './Navbar';
import Footer from './Footer';

export default function Layout({ children, activePath, ctaVariant, copyrightYear }) {
  return (
    <>
      <Navbar activePath={activePath} ctaVariant={ctaVariant} />
      {children}
      <Footer copyrightYear={copyrightYear} />
    </>
  );
}
