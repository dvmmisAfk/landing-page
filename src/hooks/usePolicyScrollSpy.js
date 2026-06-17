import { useEffect } from 'react';

export default function usePolicyScrollSpy(sectionIds) {
  useEffect(() => {
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    const navLinks = document.querySelectorAll('.policy-nav a');

    const onScroll = () => {
      let current = sectionIds[0];
      sections.forEach((sec) => {
        if (window.scrollY >= sec.offsetTop - 120) current = sec.id;
      });
      navLinks.forEach((link) => {
        link.classList.toggle('active', link.getAttribute('href') === `#${current}`);
      });
    };

    window.addEventListener('scroll', onScroll);
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, [sectionIds]);
}
