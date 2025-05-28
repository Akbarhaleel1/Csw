'use client';
import { styled } from 'styled-components';
import Link from 'next/link';

export const Wrapper = styled.header`
  padding: 1rem 0;
  border-bottom: 0.5px solid rgba(255, 255, 255, 0.1);
  background-color: #050A30;
  position: sticky;
  top: 0;
  z-index: 100;

  @media (max-width: 768px) {
    padding: 0.75rem 0;
  }
`;

export const Inner = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 90%;
  max-width: 1440px;
  margin: 0 auto;
`;

export const LogoContainer = styled.div`
  @media (max-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
  }
`;

export const BurgerMenu = styled.div`
  display: none;
  position: relative;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
    padding: 0.5rem;

    div {
      position: absolute;
      background: #050A30;
      width: '250px';
      height: '300px';
      border-radius: 25px;
      z-index: 1;
      top: 50px;
      box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
    }

    img {
      position: relative;
      z-index: 2;
      object-fit: cover;
      filter: brightness(0) invert(1);
    }
  }
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  gap: 3.75rem;
  position: relative;
  margin-right: -6.3rem;

  a {
    color: white;
    font-size: 1rem;
    font-weight: 400;
    position: relative;

    &:hover::after {
      content: '';
      position: absolute;
      bottom: -5px;
      left: 0;
      width: 100%;
      height: 1px;
      background-color: white;
    }
  }

  @media (max-width: 768px) {
    position: absolute;
    top: 60px;
    flex-direction: column;
    gap: 1rem;
    align-items: flex-start;
    right: 120px;
    z-index: 3;
    visibility: hidden;
    opacity: 0;
    transition: all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    transition-delay: 0.5s;

    &.active {
      opacity: 1;
      visibility: visible;
    }
  }
`;

export const CallToActions = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  @media (max-width: 768px) {
    position: absolute;
    top: 220px;
    z-index: 3;
    right: 50px;
    visibility: hidden;
    opacity: 0;
    transition: all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    transition-delay: 0.5s;

    &.active {
      opacity: 1;
      visibility: visible;
    }
  }
`;

export const GetStartedButton = styled(Link)`
  background: white;
  color: #050A30;
  padding: 0.5rem 1.5rem;
  border-radius: 2rem;
  font-size: 1rem;
  font-weight: 600;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
`;