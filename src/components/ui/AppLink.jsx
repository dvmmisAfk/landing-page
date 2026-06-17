import { Link, useLocation } from 'react-router-dom';

function parseTo(to) {
  if (typeof to === 'string') {
    const [pathname = '/', hashPart] = to.split('#');
    return {
      pathname: pathname || '/',
      hash: hashPart ? `#${hashPart}` : '',
    };
  }

  return {
    pathname: to.pathname ?? '/',
    hash: to.hash ?? '',
  };
}

export default function AppLink({ to, onClick, ...props }) {
  const location = useLocation();

  const handleClick = (event) => {
    onClick?.(event);
    if (event.defaultPrevented) return;

    const target = parseTo(to);
    const isSameRoute =
      location.pathname === target.pathname &&
      (location.hash || '') === (target.hash || '');

    if (isSameRoute && !target.hash) {
      window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
    }
  };

  return <Link to={to} onClick={handleClick} {...props} />;
}
