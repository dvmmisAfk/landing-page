import { Routes, Route } from 'react-router-dom';
import ScrollToHash from './components/ui/ScrollToHash';
import HomePage from './pages/HomePage';
import InfoPageRoute from './pages/InfoPageRoute';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import TermsPage from './pages/TermsPage';
import { SITE_PAGE_PATHS } from './data/sitePages';

export default function App() {
  return (
    <>
      <ScrollToHash />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
        <Route path="/terms" element={<TermsPage />} />
        {SITE_PAGE_PATHS.map((path) => (
          <Route key={path} path={path} element={<InfoPageRoute />} />
        ))}
      </Routes>
    </>
  );
}
