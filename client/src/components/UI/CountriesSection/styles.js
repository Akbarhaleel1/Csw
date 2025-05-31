import styled, { keyframes } from 'styled-components';

// Animations
const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const float = keyframes`
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-15px); }
`;

const shimmer = keyframes`
  0% { background-position: -200% 0; }
  100% { background-position: 200% 0; }
`;

// Main Container
export const CountriesSection = styled.section`
  position: relative;
  padding: 100px 0;
  background: linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%);
  min-height: 100vh;
  overflow: hidden;
`;

// Background Elements
export const BackgroundPattern = styled.div`
  position: absolute;
  inset: 0;
  opacity: 0.3;
  background: 
    radial-gradient(circle at 20% 30%, rgba(5, 10, 48, 0.03) 0%, transparent 50%),
    radial-gradient(circle at 80% 70%, rgba(5, 10, 48, 0.04) 0%, transparent 50%);
  
  &::before {
    content: '';
    position: absolute;
    top: 15%;
    left: 8%;
    width: 250px;
    height: 250px;
    background: linear-gradient(45deg, rgba(5, 10, 48, 0.05), rgba(5, 10, 48, 0.08));
    border-radius: 50%;
    animation: ${float} 10s ease-in-out infinite;
  }
  
  &::after {
    content: '';
    position: absolute;
    bottom: 15%;
    right: 8%;
    width: 180px;
    height: 180px;
    background: linear-gradient(45deg, rgba(5, 10, 48, 0.04), rgba(5, 10, 48, 0.06));
    border-radius: 50%;
    animation: ${float} 8s ease-in-out infinite reverse;
  }
`;

export const Container = styled.div`
  max-width: 1600px;
  margin: 0 auto;
  padding: 0 32px;
  position: relative;
  z-index: 10;
  
  @media (max-width: 768px) {
    padding: 0 20px;
  }
`;

// Header Section
export const SectionHeader = styled.div`
  text-align: center;
  margin-bottom: 60px;
  animation: ${fadeInUp} 0.8s ease-out;
`;

export const Badge = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 12px 28px;
  background: #050A30;
  color: white;
  font-size: 14px;
  font-weight: 600;
  border-radius: 50px;
  margin-bottom: 24px;
  box-shadow: 0 8px 30px rgba(5, 10, 48, 0.25);
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent);
    animation: ${shimmer} 3s infinite;
  }
`;

export const SectionTitle = styled.h2`
  font-size: clamp(2.5rem, 5vw, 3.5rem);
  font-weight: 800;
  margin-bottom: 20px;
  line-height: 1.2;
  color: #050A30;
  text-align: center;
`;

export const SectionSubtitle = styled.p`
  color: #64748b;
  font-size: 18px;
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.6;
  font-weight: 400;
  
  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

// Grid Layout - Fixed sizes for consistency
export const CountriesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(380px, 1fr));
  gap: 32px;
  justify-items: center;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 24px;
  }
  
  @media (min-width: 1400px) {
    grid-template-columns: repeat(4, 1fr);
  }
  
  @media (min-width: 1000px) and (max-width: 1399px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

// Card Components - Fixed height for consistency
export const CountryCard = styled.div`
  background: white;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 4px 25px rgba(5, 10, 48, 0.08);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  position: relative;
  border: 1px solid rgba(226, 232, 240, 0.5);
  width: 100%;
  max-width: 380px;
  height: 520px; /* Fixed height for consistency */
  display: flex;
  flex-direction: column;
  
  &:hover {
    transform: translateY(-12px);
    box-shadow: 0 20px 50px rgba(5, 10, 48, 0.15);
    border-color: #050A30;
  }
  
  &:hover .country-image {
    transform: scale(1.08);
  }
  
  &:hover .stats-hover {
    opacity: 1;
    transform: translateY(0);
  }
  
  &:hover .action-button {
    background: #050A30;
    color: white;
    transform: translateY(0);
    box-shadow: 0 8px 25px rgba(5, 10, 48, 0.3);
  }
  
  &:hover .arrow-icon {
    transform: translateX(6px);
    color: #050A30;
  }
`;

export const CountryImageWrapper = styled.div`
  position: relative;
  height: 200px; /* Fixed height */
  overflow: hidden;
  flex-shrink: 0;
`;

export const CountryImage = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  transition: transform 0.5s ease;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const ImageOverlay = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(
    180deg,
    transparent 0%,
    rgba(0, 0, 0, 0.05) 60%,
    rgba(5, 10, 48, 0.4) 100%
  );
`;

export const StatsHover = styled.div`
  position: absolute;
  bottom: 12px;
  left: 12px;
  right: 12px;
  display: flex;
  justify-content: space-between;
  gap: 8px;
  opacity: 0;
  transform: translateY(15px);
  transition: all 0.3s ease;
  
  div {
    background: rgba(255, 255, 255, 0.95);
    backdrop-filter: blur(8px);
    padding: 6px 12px;
    border-radius: 16px;
    font-size: 11px;
    font-weight: 600;
    color: #050A30;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
    white-space: nowrap;
    flex: 1;
    text-align: center;
  }
`;

// Content Area - Flexible layout within fixed card height
export const CountryContent = styled.div`
  padding: 24px 20px;
  display: flex;
  flex-direction: column;
  flex: 1;
`;

export const CountryHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 12px;
`;

export const CountryName = styled.h3`
  color: #050A30;
  font-size: 20px;
  font-weight: 700;
  margin: 0;
  line-height: 1.2;
`;

export const ArrowIcon = styled.span`
  color: #64748b;
  font-size: 18px;
  font-weight: bold;
  transition: all 0.3s ease;
`;

export const CountryInfo = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

export const LocationInfo = styled.p`
  color: #64748b;
  font-size: 13px;
  margin: 0 0 12px 0;
  display: flex;
  align-items: center;
  gap: 6px;
  font-weight: 500;
`;

export const StatsInfo = styled.div`
  display: flex;
  gap: 20px;
  margin-bottom: 12px;
`;

export const CountryStats = styled.div`
  display: flex;
  flex-direction: column;
  
  span {
    font-size: 18px;
    font-weight: 700;
    color: #050A30;
    margin-bottom: 2px;
    line-height: 1;
  }
  
  small {
    color: #64748b;
    font-size: 11px;
    font-weight: 500;
    line-height: 1.2;
  }
`;

export const CountryDescription = styled.p`
  color: #64748b;
  font-size: 13px;
  line-height: 1.4;
  margin: 0 0 16px 0;
  flex: 1;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

export const ActionButton = styled.button`
  width: 100%;
  padding: 12px 20px;
  background: #f8fafc;
  color: #050A30;
  border: 2px solid #e2e8f0;
  border-radius: 12px;
  font-weight: 600;
  font-size: 13px;
  cursor: pointer;
  transition: all 0.3s ease;
  transform: translateY(2px);
  margin-top: auto;
  
  &:hover {
    background: #050A30;
    color: white;
    border-color: #050A30;
    box-shadow: 0 6px 20px rgba(5, 10, 48, 0.25);
  }
`;