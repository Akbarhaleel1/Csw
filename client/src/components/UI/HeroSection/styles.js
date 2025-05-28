'use client';
import { styled, keyframes } from 'styled-components';
import hero_background from '../../../../public/images/grid_background.png';

const float = keyframes`
  0%, 100% { transform: translateY(0px) rotate(0deg); }
  50% { transform: translateY(-10px) rotate(2deg); }
`;

const pulse = keyframes`
  0%, 100% { opacity: 0.6; transform: scale(1); }
  50% { opacity: 0.8; transform: scale(1.05); }
`;

const slideUp = keyframes`
  from { opacity: 0; transform: translateY(30px); }
  to { opacity: 1; transform: translateY(0px); }
`;

export const Wrapper = styled.section`
  margin-top: 6.25rem;
  position: relative;
  overflow: hidden;
  min-height: 100vh;
  display: flex;
  align-items: center;
  background-color: #070606;
   margin-top: 0;
`;

export const BackgroundElements = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  pointer-events: none;
  z-index: 0;
`;

export const GradientOrb = styled.div`
  position: absolute;
  border-radius: 50%;
  filter: blur(80px);
  animation: ${pulse} 4s ease-in-out infinite;
  
  &.orb-1 {
    width: 500px;
    height: 500px;
    background: linear-gradient(135deg, rgba(255, 255, 255, 0.05) 0%, rgba(189, 189, 189, 0.08) 100%);
    top: -250px;
    right: -250px;
    animation-delay: 0s;
  }
  
  &.orb-2 {
    width: 400px;
    height: 400px;
    background: linear-gradient(135deg, rgba(189, 189, 189, 0.06) 0%, rgba(255, 255, 255, 0.04) 100%);
    bottom: -200px;
    left: -200px;
    animation-delay: 2s;
  }
  
  &.orb-3 {
    width: 300px;
    height: 300px;
    background: linear-gradient(135deg, rgba(255, 255, 255, 0.04) 0%, rgba(189, 189, 189, 0.05) 100%);
    top: 30%;
    right: 15%;
    animation-delay: 1s;
  }
`;

export const Inner = styled.div`
  background: url(${hero_background.src}) no-repeat;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 56rem;
  margin: 0 auto;
  text-align: center;
  background-position: top center;
  background-size: contain;
  padding: 4rem 1.5rem;
  position: relative;
  z-index: 1;
  
  @media (max-width: 1200px) {
    max-width: 65rem;
    padding: 3rem 1.5rem;
  }
  
  @media (max-width: 768px) {
    padding: 2rem 1rem;
    max-width: 100%;
  }
`;

export const Pill = styled.div`
  display: flex;
  padding: 0.375rem 0.75rem;
  justify-content: center;
  align-items: center;
  gap: 0.625rem;
  border-radius: 6.25rem;
  border: 0.2px solid #989898;
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(10px);
  margin-bottom: 1rem;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  animation: ${slideUp} 0.6s ease-out;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.15);
    background: rgba(255, 255, 255, 0.2);
  }

  span {
    color: #dcdcdc;
    font-size: 1rem;
    font-weight: 400;
  }
  
  img {
    filter: invert(0.7);
  }
`;

export const HeroTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  padding-bottom: 2rem;
  animation: ${slideUp} 0.8s ease-out 0.2s both;

  h1 {
    font-size: 6rem;
    font-weight: 400;
    line-height: 1.1;
    margin: 0;
    color: #ffffff;
    text-shadow: 0 2px 20px rgba(0, 0, 0, 0.1);
  }

  p {
    max-width: 41.75rem;
    color: #bdbdbd;
    font-size: 1.5rem;
    font-weight: 400;
    line-height: 1.6;
    margin: 0 auto;
  }

  @media (max-width: 768px) {
    gap: 1rem;
    padding-bottom: 1.5rem;
    
    h1 {
      font-size: 2.5rem;
      font-weight: 400;
    }

    p {
      font-size: 1rem;
      line-height: 1.5rem;
      max-width: 95%;
    }
  }
`;

export const StatsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 3rem;
  margin: 3rem 0;
  padding: 2rem 0;
  animation: ${slideUp} 1s ease-out 0.4s both;
  
  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;
    margin: 2rem 0;
  }
`;

export const StatItem = styled.div`
  text-align: center;
  
  .stat-number {
    font-size: 2.5rem;
    font-weight: 700;
    color: #fff;
    margin-bottom: 0.5rem;
    text-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  }
  
  .stat-label {
    font-size: 0.95rem;
    color: #bdbdbd;
    font-weight: 500;
  }
  
  @media (max-width: 768px) {
    .stat-number {
      font-size: 2rem;
    }
    
    .stat-label {
      font-size: 0.85rem;
    }
  }
`;

export const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 60rem;
  margin-top: 4rem;
  animation: ${slideUp} 1.2s ease-out 0.6s both;
  
  .main-image {
    width: 100%;
    height: 400px;
    border-radius: 24px;
    background: linear-gradient(135deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.02) 100%);
    border: 1px solid rgba(152, 152, 152, 0.2);
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(20px);
    
    .placeholder-image {
      font-size: 1.5rem;
      color: #bdbdbd;
      font-weight: 600;
    }
  }
  
  @media (max-width: 768px) {
    margin-top: 2rem;
    
    .main-image {
      height: 250px;
      
      .placeholder-image {
        font-size: 1.2rem;
      }
    }
  }
`;

export const FloatingCard = styled.div`
  position: absolute;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(152, 152, 152, 0.2);
  border-radius: 16px;
  padding: 1.5rem;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  gap: 1rem;
  min-width: 280px;
  animation: ${float} 6s ease-in-out infinite;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.15);
  }
  
  .card-icon {
    font-size: 2rem;
    width: 50px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: linear-gradient(135deg, #070606 0%, #989898 100%);
    border-radius: 12px;
    color: #ffffff;
  }
  
  .card-content {
    flex: 1;
  }
  
  .card-title {
    font-size: 1rem;
    font-weight: 600;
    color: #070606;
    margin-bottom: 0.25rem;
  }
  
  .card-desc {
    font-size: 0.85rem;
    color: #989898;
  }
  
  &.card-1 {
    top: -20px;
    left: -50px;
    animation-delay: 0s;
  }
  
  &.card-2 {
    top: 50px;
    right: -50px;
    animation-delay: 2s;
  }
  
  &.card-3 {
    bottom: -20px;
    left: 50px;
    animation-delay: 4s;
  }
  
  @media (max-width: 1024px) {
    &.card-1 {
      left: -30px;
      min-width: 250px;
    }
    
    &.card-2 {
      right: -30px;
      min-width: 250px;
    }
    
    &.card-3 {
      left: 30px;
      min-width: 250px;
    }
  }
  
  @media (max-width: 768px) {
    position: static;
    margin: 1rem 0;
    min-width: auto;
    animation: none;
    
    &.card-1, &.card-2, &.card-3 {
      position: static;
    }
  }
`;