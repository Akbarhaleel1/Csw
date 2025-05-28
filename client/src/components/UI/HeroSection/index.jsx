'use client';
import Image from 'next/image';
import { 
  Wrapper, 
  Inner, 
  Pill, 
  HeroTextContainer, 
  StatsContainer,
  StatItem,
  ImageContainer,
  FloatingCard,
  BackgroundElements,
  GradientOrb
} from './styles';
import ic_chevron_right from '../../../../public/svgs/ic_chevron_right.svg';
import { GetStartedButton } from '@/components';
import MaskText from '@/components/Common/MaskText';
import { useIsMobile } from '../../../../libs/useIsMobile';
import Graduation from '../../../../public/images/hero_sub_image.jpg'; // Fixed import
import {
  mobileParagraphPhrases,
  mobilePhrases,
  paragraphPhrases,
  phrases,
} from './constants';

const HeroSection = () => {
  const isMobile = useIsMobile();
  
  return (
    <Wrapper>
      <BackgroundElements>
        <GradientOrb className="orb-1" />
        <GradientOrb className="orb-2" />
        <GradientOrb className="orb-3" />
      </BackgroundElements>
      
      <Inner>
        <Pill>
          <span>🎓 Trusted by 50,000+ Students</span>
          <Image src={ic_chevron_right} alt="chevron-right" />
        </Pill>
        
        <HeroTextContainer>
          {isMobile ? (
            <>
              <MaskText phrases={mobilePhrases} tag="h1" />
              <MaskText phrases={mobileParagraphPhrases} tag="p" />
            </>
          ) : (
            <>
              <MaskText phrases={phrases} tag="h1" />
              <MaskText phrases={paragraphPhrases} tag="p" />
            </>
          )}
        </HeroTextContainer>

        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center', marginBottom: '3rem' }}>
          <GetStartedButton padding="1rem 2rem" />
          <button style={{
            padding: '1rem 2rem',
            background: 'transparent',
            border: '2px solid rgba(255, 255, 255, 0.3)',
            borderRadius: '12px',
            color: '#ffffff',
            fontSize: '1rem',
            fontWeight: '500',
            cursor: 'pointer',
            transition: 'all 0.3s ease',
            backdropFilter: 'blur(10px)'
          }}>
            Watch Demo
          </button>
        </div>

        <StatsContainer>
          <StatItem>
            <div className="stat-number">50K+</div>
            <div className="stat-label">Students Placed</div>
          </StatItem>
          <StatItem>
            <div className="stat-number">500+</div>
            <div className="stat-label">Partner Universities</div>
          </StatItem>
          <StatItem>
            <div className="stat-number">98%</div>
            <div className="stat-label">Visa Success Rate</div>
          </StatItem>
          <StatItem>
            <div className="stat-number">25+</div>
            <div className="stat-label">Countries</div>
          </StatItem>
        </StatsContainer>

        <ImageContainer>
          <div className="main-image">
            {/* Using Next.js Image component with proper styling */}
            <Image 
              src={Graduation} 
              alt="Graduation celebration" 
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                borderRadius: '16px'
              }}
            />
          </div>
          
          <FloatingCard className="card-1">
            <div className="card-icon">🎯</div>
            <div className="card-content">
              <div className="card-title">Dream University Match</div>
              <div className="card-desc">AI-powered matching system</div>
            </div>
          </FloatingCard>
          
          <FloatingCard className="card-2">
            <div className="card-icon">📋</div>
            <div className="card-content">
              <div className="card-title">Application Tracking</div>
              <div className="card-desc">Real-time status updates</div>
            </div>
          </FloatingCard>
          
          <FloatingCard className="card-3">
            <div className="card-icon">✈️</div>
            <div className="card-content">
              <div className="card-title">Visa Assistance</div>
              <div className="card-desc">Expert guidance & support</div>
            </div>
          </FloatingCard>
        </ImageContainer>
      </Inner>
    </Wrapper>
  );
};

export default HeroSection;