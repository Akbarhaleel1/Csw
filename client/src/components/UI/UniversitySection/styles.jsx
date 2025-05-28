import styled from 'styled-components';

export const SearchContainer = styled.div`
  background: white;
  border-radius: 24px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
  padding: 2.5rem;
  max-width: 1200px;
  margin: 2rem auto;
  position: relative;
  z-index: 10;
`;

export const SearchTitle = styled.h2`
  font-size: 1.75rem;
  color: #2d3748;
  margin-bottom: 1.5rem;
  font-weight: 600;
`;

export const SearchGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const InputGroup = styled.div`
  margin-bottom: 1.5rem;
`;

export const InputLabel = styled.label`
  display: block;
  font-size: 0.875rem;
  color: #4a5568;
  margin-bottom: 0.5rem;
  font-weight: 500;
`;

export const UniversityInput = styled.input`
  width: 100%;
  padding: 0.875rem 1rem;
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  font-size: 1rem;
  transition: all 0.2s;
  background-color: #f8fafc;
  
  &:focus {
    outline: none;
    border-color: #4299e1;
    box-shadow: 0 0 0 3px rgba(66, 153, 225, 0.2);
    background-color: white;
  }
  
  &::placeholder {
    color: #a0aec0;
  }
`;

export const SuggestionsList = styled.ul`
  position: absolute;
  width: 100%;
  max-height: 200px;
  overflow-y: auto;
  background: white;
  border: 1px solid #e2e8f0;
  border-radius: 0 0 12px 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  z-index: 100;
  margin-top: -1px;
  list-style: none;
  padding: 0;
`;

export const SuggestionItem = styled.li`
  padding: 0.75rem 1rem;
  cursor: pointer;
  font-size: 0.95rem;
  
  &:hover {
    background-color: #edf2f7;
  }
`;

export const SliderContainer = styled.div`
  padding: 1rem 0.5rem;
`;

export const SliderHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.5rem;
`;

export const SliderLabel = styled.span`
  font-size: 0.875rem;
  color: #4a5568;
`;

export const SliderValue = styled.span`
  font-size: 0.875rem;
  font-weight: 600;
  color: #2d3748;
`;

export const RangeSlider = styled.input`
  width: 100%;
  height: 6px;
  -webkit-appearance: none;
  background: #e2e8f0;
  border-radius: 3px;
  outline: none;
  
  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    width: 18px;
    height: 18px;
    background: #4299e1;
    border-radius: 50%;
    cursor: pointer;
    transition: all 0.2s;
  }
  
  &:hover::-webkit-slider-thumb {
    transform: scale(1.1);
    box-shadow: 0 0 0 4px rgba(66, 153, 225, 0.2);
  }
`;

export const Dropdown = styled.select`
  width: 100%;
  padding: 0.875rem 1rem;
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  font-size: 1rem;
  color: #2d3748;
  background-color: #f8fafc;
  appearance: none;
  background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e");
  background-repeat: no-repeat;
  background-position: right 1rem center;
  background-size: 1em;
  
  &:focus {
    outline: none;
    border-color: #4299e1;
    box-shadow: 0 0 0 3px rgba(66, 153, 225, 0.2);
    background-color: white;
  }
`;

export const SearchButton = styled.button`
  grid-column: 1 / -1;
  background: #4299e1;
  color: white;
  border: none;
  border-radius: 12px;
  padding: 1rem 2rem;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  margin-top: 1rem;
  
  &:hover {
    background: #3182ce;
    transform: translateY(-1px);
    box-shadow: 0 4px 12px rgba(66, 153, 225, 0.3);
  }
  
  &:active {
    transform: translateY(0);
  }
  
  svg {
    width: 1.25rem;
    height: 1.25rem;
  }
`;

export const FilterRow = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
  margin-top: 1rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;