import styled from 'styled-components';

// Layout Components
export const PageContainer = styled.div`
  background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
  min-height: 100vh;
  font-family: 'Inter', 'system-ui', -apple-system, BlinkMacSystemFont, sans-serif;
`;

export const HeaderSection = styled.div`
  background: linear-gradient(135deg, #050A30 0%, #1e293b 50%, #334155 100%);
  color: white;
  padding: 4rem 0 6rem 0;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Ccircle cx='7' cy='7' r='2'/%3E%3Ccircle cx='27' cy='7' r='2'/%3E%3Ccircle cx='47' cy='7' r='2'/%3E%3Ccircle cx='7' cy='27' r='2'/%3E%3Ccircle cx='27' cy='27' r='2'/%3E%3Ccircle cx='47' cy='27' r='2'/%3E%3Ccircle cx='7' cy='47' r='2'/%3E%3Ccircle cx='27' cy='47' r='2'/%3E%3Ccircle cx='47' cy='47' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
    opacity: 0.1;
  }
  
  &::after {
    content: '';
    position: absolute;
    bottom: -2px;
    left: 0;
    right: 0;
    height: 40px;
    background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
    clip-path: polygon(0 100%, 100% 100%, 100% 0, 0 80%);
  }
`;

export const HeaderContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  position: relative;
  z-index: 2;
  text-align: center;
`;

export const HeaderTitle = styled.h1`
  font-size: clamp(2.5rem, 5vw, 4rem);
  font-weight: 800;
  margin: 0;
  background: linear-gradient(135deg, #ffffff 0%, #e2e8f0 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
  letter-spacing: -0.02em;
  line-height: 1.1;
`;

export const HeaderSubtitle = styled.p`
  font-size: 1.25rem;
  margin: 1rem 0 0 0;
  opacity: 0.9;
  font-weight: 400;
  max-width: 600px;
  margin: 1.5rem auto 0;
  line-height: 1.6;
`;

export const MainContent = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 2rem;
  position: relative;
  z-index: 1;
  margin-top: -2rem;
`;

// Modal Components
export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(5, 10, 48, 0.85);
  backdrop-filter: blur(8px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  animation: fadeIn 0.3s ease-out;
  
  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }
`;

export const ModalContent = styled.div`
  background: white;
  padding: 0;
  border-radius: 24px;
  max-width: 900px;
  width: 95%;
  position: relative;
  box-shadow: 0 25px 50px rgba(0, 0, 0, 0.25);
  overflow: hidden;
  animation: slideUp 0.3s ease-out;
  
  @keyframes slideUp {
    from { 
      opacity: 0;
      transform: translateY(50px) scale(0.95);
    }
    to { 
      opacity: 1;
      transform: translateY(0) scale(1);
    }
  }
`;

// Testimonial Components
export const TestimonialsSection = styled.section`
  padding: 3rem 0 5rem 0;
`;

export const TestimonialsHeader = styled.div`
  text-align: center;
  margin-bottom: 4rem;
`;

export const TestimonialsTitle = styled.h2`
  color: #050A30;
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  margin: 0 0 1rem 0;
  letter-spacing: -0.01em;
`;

export const TestimonialsSubtitle = styled.p`
  color: #64748b;
  font-size: 1.125rem;
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.6;
`;

export const TestimonialsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
  
  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 1.5rem;
  }
  
  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    gap: 1.25rem;
  }
`;

export const TestimonialCard = styled.div`
  background: white;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  border: 1px solid rgba(226, 232, 240, 0.8);
  position: relative;
  
  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 20px 40px rgba(5, 10, 48, 0.15);
    border-color: rgba(5, 10, 48, 0.1);
  }
  
  &:active {
    transform: translateY(-4px);
  }
`;

export const TestimonialThumbnail = styled.div`
  position: relative;
  width: 100%;
  height: 220px;
  overflow: hidden;
  background: linear-gradient(135deg, #f1f5f9 0%, #e2e8f0 100%);
  
  img {
    transition: transform 0.3s ease;
  }
  
  ${TestimonialCard}:hover img {
    transform: scale(1.05);
  }
`;

export const PlayButton = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 70px;
  height: 70px;
  background: linear-gradient(135deg, #050A30 0%, #1e293b 100%);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  opacity: 0;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 8px 25px rgba(5, 10, 48, 0.3);
  
  &::before {
    content: '';
    position: absolute;
    inset: -10px;
    background: radial-gradient(circle, rgba(255, 255, 255, 0.2) 0%, transparent 70%);
    border-radius: 50%;
    opacity: 0;
    transition: opacity 0.3s ease;
  }
  
  ${TestimonialCard}:hover & {
    opacity: 1;
    transform: translate(-50%, -50%) scale(1.1);
    
    &::before {
      opacity: 1;
    }
  }
  
  svg {
    margin-left: 2px;
  }
`;

export const TestimonialInfo = styled.div`
  padding: 1.75rem;
`;

export const TestimonialName = styled.h3`
  color: #050A30;
  font-size: 1.25rem;
  font-weight: 600;
  margin: 0 0 0.5rem 0;
  letter-spacing: -0.01em;
`;

export const TestimonialProgram = styled.p`
  color: #64748b;
  font-size: 0.95rem;
  margin: 0 0 1rem 0;
  font-weight: 500;
`;

export const TestimonialQuote = styled.p`
  color: #475569;
  font-size: 1rem;
  line-height: 1.6;
  margin: 0;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  font-style: italic;
  position: relative;
  
  &::before {
    content: '"';
    font-size: 1.5em;
    color: #cbd5e1;
    position: absolute;
    left: -8px;
    top: -5px;
    font-family: Georgia, serif;
  }
`;

export const VideoContainer = styled.div`
  position: relative;
  width: 100%;
  padding-top: 56.25%; // 16:9 aspect ratio
  background: #000;
  
  iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: none;
  }
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;
  background: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(10px);
  border: none;
  border-radius: 50%;
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: white;
  z-index: 10;
  transition: all 0.2s ease;
  
  &:hover {
    background: rgba(0, 0, 0, 0.9);
    transform: scale(1.1);
  }
  
  &:active {
    transform: scale(0.95);
  }
`;

export const ModalInfo = styled.div`
  padding: 2rem;
  border-top: 1px solid #e2e8f0;
  background: #f8fafc;
`;

export const StatsContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 3rem;
  margin: 3rem 0;
  
  @media (max-width: 768px) {
    gap: 2rem;
    flex-wrap: wrap;
  }
`;

export const StatItem = styled.div`
  text-align: center;
  
  h3 {
    font-size: 2.5rem;
    font-weight: 800;
    color: #050A30;
    margin: 0;
    background: linear-gradient(135deg, #050A30 0%, #1e293b 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
  
  p {
    color: #64748b;
    font-weight: 500;
    margin: 0.5rem 0 0 0;
    font-size: 0.95rem;
  }
`;