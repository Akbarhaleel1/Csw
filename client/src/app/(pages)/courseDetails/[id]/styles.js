import styled from 'styled-components';

export const PageContainer = styled.div`
  background-color: #fafafa;
  min-height: 100vh;
  font-family: 'system-ui, -apple-system, sans-serif';
`;

export const HeaderSection = styled.div`
  background-color: #050A30;
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
  
  span {
    cursor: pointer;
    &:hover {
      text-decoration: underline;
    }
  }
`;

export const HeaderTitle = styled.h1`
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
  margin: 0;
`;

export const MainContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem 1rem;
`;

export const CourseDetailContainer = styled.div`
  background-color: white;
  border-radius: 20px;
  padding: 2rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
`;

export const UniversityHeader = styled.div`
  display: flex;
  gap: 1.5rem;
  align-items: center;
  margin-bottom: 2rem;
`;

export const UniversityLogo = styled.div`
  flex-shrink: 0;
`;

export const UniversityInfo = styled.div`
  flex-grow: 1;
`;

export const ProgramTitle = styled.h2`
  color: #050A30;
  font-size: 1.75rem;
  font-weight: bold;
  margin: 0 0 0.5rem 0;
`;

export const BadgeContainer = styled.div`
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
`;

export const Badge = styled.span`
  padding: 0.25rem 0.75rem;
  border-radius: 20px;
  font-size: 0.75rem;
  font-weight: 600;
  background-color: #e5e7eb;
  color: #374151;
`;

export const RankingBadge = styled(Badge)`
  background-color: #fef3c7;
  color: #92400e;
`;

export const LevelBadge = styled(Badge)`
  background-color: #dbeafe;
  color: #1e40af;
`;

export const GalleryContainer = styled.div`
  margin-bottom: 2rem;
`;

export const GalleryImage = styled.div`
  width: 100%;
  height: 300px;
  border-radius: 12px;
  background-size: cover;
  background-position: center;
  margin-bottom: 1rem;
`;

export const TabContainer = styled.div`
  display: flex;
  border-bottom: 1px solid #e5e7eb;
  margin-bottom: 2rem;
`;

export const TabButton = styled.button`
  padding: 0.75rem 1.5rem;
  background: none;
  border: none;
  cursor: pointer;
  font-weight: 600;
 color: ${props => props.$active ? '#050A30' : '#6b7280'};
  border-bottom: 2px solid ${props => props.$active ? '#050A30' : 'transparent'}
  margin-bottom: -1px;
`;

export const TabContent = styled.div`
  display: ${props => props.$show ? 'block' : 'none'};
  margin-bottom: 2rem;
`;

export const DetailSection = styled.div`
  margin-bottom: 2rem;
`;

export const SectionTitle = styled.h3`
  color: #050A30;
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 1rem;
`;

export const SectionContent = styled.div`
  background-color: #f9fafb;
  border-radius: 12px;
  padding: 1.5rem;
`;

export const DetailItem = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 1rem;
  align-items: flex-start;
`;

export const DetailIcon = styled.div`
  color: #6b7280;
  padding-top: 2px;
`;

export const DetailText = styled.p`
 color: ${props => props.$small ? '#6b7280' : '#374151'};
  font-size: ${props => props.$small ? '0.875rem' : '1rem'};
  margin: 0;
`;

export const TuitionText = styled(DetailText)`
  color: #16a34a;
  font-weight: 600;
`;

export const RequirementsList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 1rem 0 0 0;
`;

export const RequirementItem = styled.li`
  padding: 0.5rem 0;
  border-bottom: 1px solid #e5e7eb;
  
  &:last-child {
    border-bottom: none;
  }
`;

export const ScholarshipCard = styled.div`
  background-color: white;
  border-radius: 8px;
  padding: 1rem;
  margin-bottom: 0.5rem;
  border: 1px solid #e5e7eb;
`;

export const OutcomeItem = styled.div`
  padding: 0.5rem 0;
  border-bottom: 1px solid #e5e7eb;
`;

export const ActionButtons = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 2rem;
`;

export const BackButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: none;
  border: 1px solid #e5e7eb;
  padding: 0.75rem 1.5rem;
  border-radius: 12px;
  cursor: pointer;
  font-weight: 600;
  color: #374151;
`;

export const ApplyButton = styled.button`
  background-color: #16a34a;
  color: white;
  border: none;
  padding: 0.75rem 2rem;
  border-radius: 12px;
  cursor: pointer;
  font-size: 1rem;
  font-weight: 600;
`;