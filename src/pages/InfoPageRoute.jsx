import { useEffect } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import InfoPage from '../components/pages/InfoPage';
import { SITE_PAGES } from '../data/sitePages';

export default function InfoPageRoute() {
  const { pathname } = useLocation();
  const page = SITE_PAGES[pathname];

  useEffect(() => {
    if (page) document.title = `${page.title} – AgeWell`;
  }, [page]);

  if (!page) return <Navigate to="/" replace />;

  return (
    <Layout activePath={page.activePath ?? pathname}>
      <InfoPage {...page} />
    </Layout>
  );
}
