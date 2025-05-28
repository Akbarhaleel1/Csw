'use client';
import Image from 'next/image';
import {
  Wrapper,
  Inner,
  LogoContainer,
  Nav,
  CallToActions,
  BurgerMenu,
  GetStartedButton,
} from './styles';
import csw_logo from '../../../../public/images/csw-logo.png';
import ic_bars from '../../../../public/svgs/ic_bars.svg';
import AnimatedLink from '@/components/Common/AnimatedLink';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { links, menu } from './constants';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Wrapper>
      <Inner>
        <LogoContainer>
          <Image src={csw_logo} alt="csw_logo" priority />
          <BurgerMenu onClick={() => setIsOpen(!isOpen)}>
            <motion.div
              variants={menu}
              animate={isOpen ? 'open' : 'closed'}
              initial="closed"
            ></motion.div>
            <Image src={ic_bars} alt="bars" />
          </BurgerMenu>
        </LogoContainer>
        <Nav className={isOpen ? 'active' : ''}>
          {links.map((link, i) => (
            <AnimatedLink key={i} title={link.linkTo} href={link.url} />
          ))}
        </Nav>
        <CallToActions className={isOpen ? 'active' : ''}>
          <AnimatedLink title="Login" href="/login" />
          <GetStartedButton href="/signup">Get Started</GetStartedButton>
        </CallToActions>
      </Inner>
    </Wrapper>
  );
};

export default Header;