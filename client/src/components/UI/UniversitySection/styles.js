import styled, { keyframes } from 'styled-components';

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

const spin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const pulse = keyframes`
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.7;
  }
`;

export const SearchContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem 1rem;
  min-height: 100vh;
  background: #fafafa;
  
  .search-section {
    text-align: center;
    margin-top: 3rem;
  }
  
  @media (max-width: 768px) {
    padding: 1rem 0.5rem;
  }
`;

export const SearchHeader = styled.div`
  text-align: center;
  margin-bottom: 3rem;
  animation: ${fadeInUp} 0.6s ease-out;
`;

export const SearchTitle = styled.h1`
  font-size: 2.5rem;
  font-weight: 700;
  color: #050A30;
  margin-bottom: 1rem;
  line-height: 1.2;
  
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

export const SearchSubtitle = styled.p`
  font-size: 1.125rem;
  color: #6b7280;
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.6;
`;

export const SearchGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  animation: ${fadeInUp} 0.6s ease-out 0.2s both;
  
  @media (max-width: 968px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`;

export const FilterCard = styled.div`
  background: white;
  border-radius: 20px;
  border: 1px solid #e5e7eb;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
  overflow: hidden;
  
  &:hover {
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
    transform: translateY(-2px);
  }
`;

export const CardHeader = styled.div`
  display: flex;
  align-items: center;
  padding: 1.5rem 1.5rem 0;
  margin-bottom: 1rem;
`;

export const CardTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  color: #050A30;
  margin: 0;
`;

export const CardDescription = styled.p`
  font-size: 0.875rem;
  color: #6b7280;
  margin: 0.25rem 0 0;
`;

export const CardContent = styled.div`
  padding: 0 1.5rem 1.5rem;
`;

export const IconWrapper = styled.div`
  width: 48px;
  height: 48px;
  background: #050A30;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  margin-right: 1rem;
  flex-shrink: 0;
`;

export const InputGroup = styled.div`
  margin-bottom: 1.5rem;
`;

export const InputLabel = styled.label`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.875rem;
  font-weight: 500;
  color: #374151;
  margin-bottom: 0.5rem;
`;

export const SliderContainer = styled.div`
  margin-bottom: 2rem;
  
  .slider-group {
    display: flex;
    gap: 1rem;
    margin-top: 1rem;
  }
`;

export const SliderHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.75rem;
`;

export const SliderLabel = styled.span`
  font-size: 0.875rem;
  font-weight: 500;
  color: #374151;
`;

export const SliderValue = styled.span`
  font-size: 0.875rem;
  font-weight: 600;
  color: #050A30;
  background: #f3f4f6;
  padding: 0.25rem 0.75rem;
  border-radius: 8px;
`;

export const RangeSlider = styled.input`
  width: 100%;
  height: 6px;
  -webkit-appearance: none;
  background: #e5e7eb;
  border-radius: 3px;
  outline: none;
  transition: all 0.2s ease;
  
  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    width: 20px;
    height: 20px;
    background: #050A30;
    border-radius: 50%;
    cursor: pointer;
    transition: all 0.2s ease;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
  
  &:hover::-webkit-slider-thumb {
    transform: scale(1.1);
    box-shadow: 0 0 0 4px rgba(5, 10, 48, 0.1);
  }
  
  &::-moz-range-thumb {
    width: 20px;
    height: 20px;
    background: #050A30;
    border-radius: 50%;
    cursor: pointer;
    border: none;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
`;

export const Dropdown = styled.select`
  width: 100%;
  padding: 0.75rem 1rem;
  border: 1px solid #d1d5db;
  border-radius: 12px;
  font-size: 0.875rem;
  color: #374151;
  background: white;
  appearance: none;
  cursor: pointer;
  transition: all 0.2s ease;
  
  background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%23374151' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e");
  background-repeat: no-repeat;
  background-position: right 0.75rem center;
  background-size: 1em;
  
  &:focus {
    outline: none;
    border-color: #050A30;
    box-shadow: 0 0 0 3px rgba(5, 10, 48, 0.1);
  }
  
  &:hover {
    border-color: #9ca3af;
  }
  
  &.error {
    border-color: #ef4444;
    box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.1);
  }
  
  option {
    padding: 0.5rem;
  }
`;

export const SearchButton = styled.button`
  background: #050A30;
  color: white;
  border: none;
  border-radius: 12px;
  padding: 1rem 2rem;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  box-shadow: 0 4px 6px -1px rgba(5, 10, 48, 0.2);
  
  &:hover {
    background: #0a1548;
    transform: translateY(-1px);
    box-shadow: 0 10px 15px -3px rgba(5, 10, 48, 0.3);
  }
  
  &:active {
    transform: translateY(0);
  }
  
  @media (max-width: 768px) {
    padding: 0.875rem 1.5rem;
    font-size: 0.875rem;
  }
`;

export const LoadingContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background: #fafafa;
  padding: 2rem;
  text-align: center;
  
  .loading-subtitle {
    color: #6b7280;
    font-size: 0.875rem;
    margin-top: 1rem;
    animation: ${pulse} 2s infinite;
  }
`;

export const LoadingSpinner = styled.div`
  width: 60px;
  height: 60px;
  border: 4px solid #e5e7eb;
  border-top: 4px solid #050A30;
  border-radius: 50%;
  animation: ${spin} 1s linear infinite;
  margin-bottom: 1.5rem;
`;

export const LoadingText = styled.h2`
  font-size: 1.5rem;
  font-weight: 600;
  color: #050A30;
  margin-bottom: 1.5rem;
`;

export const LoadingProgress = styled.div`
  width: 300px;
  height: 4px;
  background: #e5e7eb;
  border-radius: 2px;
  overflow: hidden;
  
  .progress-fill {
    height: 100%;
    background: #050A30;
    border-radius: 2px;
    transition: width 0.3s ease;
  }
  
  @media (max-width: 480px) {
    width: 250px;
  }
`;

export const ErrorMessage = styled.span`
  color: #ef4444;
  font-size: 0.75rem;
  margin-top: 0.25rem;
  display: block;
`;