'use client';

import { useEffect, useRef } from 'react';
import Lenis from 'lenis';

import StyledComponentsRegistry from '../../../libs/registry';
import { GlobalStyles } from './GlobalStyles';
import { Footer, Header } from '..';

const Layout = ({ children }) => {
  const lenisRef = useRef(null);

  useEffect(() => {
    const lenis = new Lenis({
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smooth: true,
    });

    lenisRef.current = lenis;

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <StyledComponentsRegistry>
      <GlobalStyles />
      <div>
        <Header />
        {children}
        <Footer />
      </div>
    </StyledComponentsRegistry>
  );
};

export default Layout;
