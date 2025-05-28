'use client';
import { styled } from 'styled-components';

export const Wrapper = styled.footer`
  background-color: #050A30;
  color: white;
  padding: 4rem 0 2rem;
`;

export const Inner = styled.div`
  width: 90%;
  max-width: 1440px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 3rem;
`;

export const FooterMain = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
  padding-bottom: 3rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const FooterColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

export const ColumnTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
`;

export const FooterLinks = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

export const FooterLink = styled.li`
  font-size: 1rem;
  font-weight: 400;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  width: fit-content;

  &:hover {
    color: rgba(255, 255, 255, 0.8);
    padding-left: 0.5rem;

    &::before {
      content: '→';
      position: absolute;
      left: -0.5rem;
    }
  }
`;

export const FooterBottom = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;
`;

export const Copyright = styled.p`
  font-size: 0.875rem;
  color: rgba(255, 255, 255, 0.7);
`;

export const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
`;

export const SocialLink = styled.a`
  color: white;
  font-size: 1.25rem;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-3px);
  }
`;