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

export const HeaderTitle = styled.h1`
  font-size: 2rem;
  font-weight: bold;
  margin: 0;
`;

export const MainContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem 1rem;
`;

export const ProfileContainer = styled.div`
  background-color: white;
  border-radius: 20px;
  padding: 2rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
`;

export const ProfileHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;

export const ProfilePhoto = styled.div`
  width: 100px;
  height: 100px;
  flex-shrink: 0;
`;

export const ProfileInfo = styled.div`
  flex-grow: 1;
`;

export const ProfileName = styled.h2`
  color: #050A30;
  font-size: 1.75rem;
  margin: 0 0 0.5rem 0;
`;

export const ProfileStatus = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  color: #6b7280;
`;

export const StatusBadge = styled.span`
  padding: 0.25rem 0.75rem;
  border-radius: 20px;
  font-size: 0.875rem;
  font-weight: 600;
  margin-left: 0.5rem;
  background-color: ${props => 
    props.$status === 'approved' ? '#d1fae5' : 
    props.$status === 'rejected' ? '#fee2e2' : 
    '#e0f2fe'};
  color: ${props => 
    props.$status === 'approved' ? '#065f46' : 
    props.$status === 'rejected' ? '#b91c1c' : 
    '#0369a1'};
`;

export const RejectionReason = styled.div`
  background-color: #fee2e2;
  color: #b91c1c;
  padding: 1rem;
  border-radius: 12px;
  display: flex;
  gap: 1rem;
  margin-bottom: 2rem;
  align-items: flex-start;

  h4 {
    margin: 0 0 0.5rem 0;
  }

  p {
    margin: 0;
    font-size: 0.875rem;
  }
`;

export const SectionContainer = styled.div`
  margin-bottom: 2rem;
`;

export const SectionTitle = styled.h3`
  color: #050A30;
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const SectionContent = styled.div`
  background-color: #f9fafb;
  border-radius: 12px;
  padding: 1.5rem;
`;

export const InfoGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 1.5rem;
`;

export const InfoItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`;

export const InfoLabel = styled.span`
  color: #6b7280;
  font-size: 0.875rem;
`;

export const InfoValue = styled.span`
  color: #374151;
  font-weight: 500;
  word-break: break-word;

  a {
    color: #3b82f6;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;

export const DocumentGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 1.5rem;
`;

export const DocumentCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const DocumentImage = styled.div`
  position: relative;
  width: 100%;
  height: 150px;
  border-radius: 8px;
  overflow: hidden;
  background-color: #f3f4f6;
  border: 1px solid #e5e7eb;
`;

export const DocumentName = styled.span`
  color: #374151;
  font-size: 0.875rem;
  text-align: center;
`;

export const Divider = styled.div`
  height: 1px;
  background-color: #e5e7eb;
  margin: 2rem 0;
`;