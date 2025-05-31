// styles.js
import styled from 'styled-components';

// Main Container
export const CountryPageContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem 1rem;
  background-color: #ffffff;
`;

// Country Header Section
export const CountryHeader = styled.div`
  display: flex;
  gap: 2rem;
  margin-bottom: 3rem;
  background: linear-gradient(135deg, #050A30 0%, #1a237e 100%);
  border-radius: 16px;
  padding: 2rem;
  color: white;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 1.5rem;
  }
`;

export const CountryImage = styled.div`
  position: relative;
  width: 40%;
  height: 300px;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media (max-width: 768px) {
    width: 100%;
    height: 200px;
  }
`;

export const CountryInfo = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const CountryTitle = styled.h1`
  color: #ffffff;
  font-size: 2.5rem;
  font-weight: 700;
  margin: 0 0 1rem 0;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

export const CountryDescription = styled.p`
  color: #e8eaf6;
  font-size: 1.1rem;
  line-height: 1.6;
  margin-bottom: 1.5rem;
`;

export const PopularCities = styled.p`
  color: #c5cae9;
  font-size: 0.95rem;
  font-style: italic;
`;

// Country Details Section
export const CountryDetails = styled.section`
  margin-bottom: 3rem;
  background-color: #f8fafc;
  border-radius: 12px;
  padding: 2rem;
`;

export const DetailGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  margin-top: 1.5rem;
`;

export const DetailCard = styled.div`
  background: white;
  padding: 1.5rem;
  border-radius: 8px;
  border-left: 4px solid #050A30;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
`;

export const DetailTitle = styled.h4`
  color: #050A30;
  font-size: 0.9rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  margin: 0 0 0.5rem 0;
`;

export const DetailValue = styled.p`
  color: #374151;
  font-size: 1.1rem;
  font-weight: 500;
  margin: 0;
`;

// Highlights Section
export const HighlightsSection = styled.section`
  margin-bottom: 3rem;
`;

export const SectionTitle = styled.h2`
  color: #050A30;
  font-size: 1.8rem;
  font-weight: 600;
  margin-bottom: 1rem;
`;

export const HighlightsList = styled.ul`
  list-style: none;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
`;

export const HighlightItem = styled.li`
  background: linear-gradient(135deg, #050A30 0%, #1a237e 100%);
  color: white;
  padding: 1rem 1.5rem;
  border-radius: 8px;
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  &:before {
    content: '✓';
    background: rgba(255, 255, 255, 0.2);
    width: 24px;
    height: 24px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.8rem;
    font-weight: bold;
  }
`;

// University Search Section
export const UniversitySearchSection = styled.section`
  margin-top: 3rem;
  padding: 2rem;
  background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
  border-radius: 16px;
  border: 1px solid #e2e8f0;
`;

export const SearchTitle = styled.h2`
  color: #050A30;
  font-size: 1.8rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
  text-align: center;
`;

// Filter Controls
export const FilterContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  margin-bottom: 2rem;
`;

export const FilterGroup = styled.div`
  display: flex;
  flex-direction: column;
`;

export const FilterLabel = styled.label`
  color: #050A30;
  font-size: 0.9rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  text-transform: uppercase;
  letter-spacing: 0.5px;
`;

export const SearchInput = styled.input`
  padding: 0.75rem;
  border: 2px solid #e2e8f0;
  border-radius: 8px;
  font-size: 1rem;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: #050A30;
    box-shadow: 0 0 0 3px rgba(5, 10, 48, 0.1);
  }

  &::placeholder {
    color: #9ca3af;
  }
`;

export const Select = styled.select`
  padding: 0.75rem;
  border: 2px solid #e2e8f0;
  border-radius: 8px;
  font-size: 1rem;
  background-color: white;
  cursor: pointer;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: #050A30;
    box-shadow: 0 0 0 3px rgba(5, 10, 48, 0.1);
  }
`;

// Slider Components
export const SliderContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const SliderRange = styled.input`
  width: 100%;
  height: 6px;
  border-radius: 3px;
  background: #e2e8f0;
  outline: none;
  -webkit-appearance: none;
  margin: 0.5rem 0;

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: #050A30;
    cursor: pointer;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  }

  &::-moz-range-thumb {
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: #050A30;
    cursor: pointer;
    border: none;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  }
`;

export const SliderValue = styled.span`
  color: #050A30;
  font-weight: 600;
  font-size: 0.9rem;
  text-align: center;
`;

// University Results
export const UniversityGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 1.5rem;
  margin-top: 2rem;
`;

export const UniversityCard = styled.div`
  background: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
  }
`;

export const UniversityImage = styled.div`
  width: 100%;
  height: 200px;
  background-color: #f3f4f6;
  position: relative;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const UniversityContent = styled.div`
  padding: 1.5rem;
`;

export const UniversityName = styled.h3`
  color: #050A30;
  font-size: 1.2rem;
  font-weight: 600;
  margin: 0 0 0.5rem 0;
`;

export const UniversityLocation = styled.p`
  color: #6b7280;
  font-size: 0.9rem;
  margin: 0 0 1rem 0;
`;

export const UniversityDetails = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 1rem;
  padding-top: 1rem;
  border-top: 1px solid #e5e7eb;
`;

export const TuitionFee = styled.span`
  color: #050A30;
  font-weight: 600;
  font-size: 1.1rem;
`;

export const Ranking = styled.span`
  background: linear-gradient(135deg, #050A30 0%, #1a237e 100%);
  color: white;
  padding: 0.25rem 0.75rem;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 600;
`;

// Loading and Empty States
export const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 3rem;
`;

export const EmptyState = styled.div`
  text-align: center;
  padding: 3rem;
  color: #6b7280;
`;

export const EmptyStateTitle = styled.h3`
  color: #050A30;
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
`;

export const EmptyStateText = styled.p`
  font-size: 1.1rem;
  margin: 0;
`;