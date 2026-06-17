import { useLocation, useNavigate } from 'react-router-dom';

export default function HashLink({ hash, className, children, onClick, ...props }) {
  const location = useLocation();
  const navigate = useNavigate();
  const targetHash = hash.startsWith('#') ? hash : `#${hash}`;
  const targetId = targetHash.slice(1);

  const handleClick = (event) => {
    event.preventDefault();
    onClick?.(event);

    const scrollToTarget = () => {
      const el = document.getElementById(targetId);
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };

    if (location.pathname === '/') {
      window.history.pushState(null, '', targetHash);
      scrollToTarget();
      return;
    }

    navigate({ pathname: '/', hash: targetHash });
  };

  return (
    <a href={targetHash} className={className} onClick={handleClick} {...props}>
      {children}
    </a>
  );
}
