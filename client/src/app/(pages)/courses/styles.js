import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
`;

export const PageContainer = styled.div`
  background-color: #fafafa;
  min-height: 100vh;
  font-family: "system-ui, -apple-system, sans-serif";
`;

export const HeaderSection = styled.div`
  background-color: #050a30;
  color: white;
  padding: 2rem 0;
`;

export const HeaderContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
`;

export const Breadcrumb = styled.nav`
  font-size: 0.875rem;
  margin-bottom: 1rem;
  opacity: 0.8;
`;

export const HeaderTitle = styled.h1`
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
  margin: 0;
`;

export const HeaderSubtitle = styled.p`
  font-size: 1.125rem;
  opacity: 0.9;
  margin: 0;
`;

export const MainContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem 1rem;
`;

export const FilterSection = styled.div`
  background-color: white;
  border-radius: 20px;
  padding: 1.5rem;
  margin-bottom: 2rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
`;

export const FilterHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${(props) => (props.$showFilters ? "1.5rem" : "0")};
`;

export const FilterTitle = styled.h3`
  color: #050a30;
  font-size: 1.25rem;
  font-weight: 600;
  margin: 0;
`;

export const FilterButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background-color: #050a30;
  color: white;
  border: none;
  padding: 0.75rem 1rem;
  border-radius: 12px;
  cursor: pointer;
  font-size: 0.875rem;
  font-weight: 500;
  transition: all 0.2s ease;
`;

export const FilterContent = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  animation: ${fadeIn} 0.3s ease;
`;

export const FilterGroup = styled.div`
  margin-bottom: 1rem;
`;

export const FilterLabel = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  color: #374151;
  font-weight: 500;
`;

export const FilterSelect = styled.select`
  width: 100%;
  padding: 0.75rem;
  border: 2px solid #e5e7eb;
  border-radius: 12px;
  font-size: 1rem;
  background-color: white;
`;

export const SearchButton = styled.button`
  background-color: #050a30;
  color: white;
  border: none;
  padding: 0.75rem 2rem;
  border-radius: 12px;
  cursor: pointer;
  font-size: 1rem;
  font-weight: 600;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const ResultsControlBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
  flex-wrap: wrap;
  gap: 1rem;
`;

export const ResultsCount = styled.span`
  color: #6b7280;
  font-size: 0.875rem;
`;

export const SortSelect = styled.select`
  padding: 0.5rem 1rem;
  border: 2px solid #e5e7eb;
  border-radius: 8px;
  font-size: 0.875rem;
  background-color: white;
`;

export const ViewModeButton = styled.button`
  padding: 0.5rem;
  border: ${(props) =>
    props.$active ? "2px solid #050A30" : "2px solid #e5e7eb"};
  border-radius: 8px;
  background-color: ${(props) => (props.$active ? "#050A30" : "white")};
  color: ${(props) => (props.$active ? "white" : "#6b7280")};
  cursor: pointer;
`;

export const CourseGrid = styled.div`
  display: grid;
  grid-template-columns: ${(props) =>
    props.$viewMode === "grid"
      ? "repeat(auto-fit, minmax(350px, 1fr))"
      : "1fr"};
  gap: 1.5rem;
  margin-bottom: 2rem;
`;

export const CourseCard = styled.div`
  background-color: white;
  border-radius: 20px;
  padding: 1.5rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
  position: relative;
  border: 1px solid #f3f4f6;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
  }
`;

export const FavoriteButton = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background-color: transparent;
  border: none;
  cursor: pointer;
  padding: 0.5rem;
  border-radius: 50%;
  transition: all 0.2s ease;
`;

export const UniversityName = styled.h3`
  color: #050a30;
  font-size: 1.25rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
  margin-top: 0;
  padding-right: 2rem;
`;

export const ProgramName = styled.h4`
  color: #374151;
  font-size: 1rem;
  font-weight: 600;
  margin-bottom: 1rem;
  margin-top: 0;
`;

export const BadgeContainer = styled.div`
  display: flex;
  gap: 0.5rem;
  margin-bottom: 1rem;
  flex-wrap: wrap;
`;

export const Badge = styled.span`
  padding: 0.25rem 0.75rem;
  border-radius: 20px;
  font-size: 0.75rem;
  font-weight: 600;
`;

export const RankingBadge = styled(Badge)`
  background-color: #fef3c7;
  color: #92400e;
`;

export const LevelBadge = styled(Badge)`
  background-color: #dbeafe;
  color: #1e40af;
`;

export const DetailItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const DetailText = styled.span`
  color: #6b7280;
  font-size: 0.875rem;
`;

export const TuitionText = styled.span`
  color: #16a34a;
  font-size: 1rem;
  font-weight: 600;
`;

export const ViewDetailsButton = styled.button`
  width: 100%;
  background-color: #050a30;
  color: white;
  border: none;
  padding: 0.75rem;
  border-radius: 12px;
  cursor: pointer;
  font-size: 0.875rem;
  font-weight: 600;
  transition: all 0.2s ease;
`;

export const ApplyBar = styled.div`
  position: fixed;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  background-color: white;
  padding: 1.5rem;
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  text-align: center;
  z-index: 1000;
  border: 1px solid #e5e7eb;
`;

export const ApplyButton = styled.button`
  background-color: #16a34a;
  color: white;
  border: none;
  padding: 1rem 2rem;
  border-radius: 12px;
  cursor: pointer;
  font-size: 1rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  transition: all 0.2s ease;
`;

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2000;
`;

export const ModalContent = styled.div`
  background-color: white;
  padding: 2rem;
  border-radius: 20px;
  max-width: 400px;
  margin: 1rem;
  text-align: center;
`;

export const ModalButton = styled.button`
  background-color: #050a30;
  color: white;
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 12px;
  cursor: pointer;
  font-size: 0.875rem;
  font-weight: 600;
`;
