'use client';
import { useState } from 'react';
import Image from 'next/image';
import { videoTestimonials } from './constants';
import { 
  PageContainer,
  HeaderSection,
  HeaderContent,
  HeaderTitle,
  HeaderSubtitle,
  MainContent,
  TestimonialsSection,
  TestimonialsHeader,
  TestimonialsTitle,
  TestimonialsSubtitle,
  TestimonialsGrid,
  TestimonialCard,
  TestimonialThumbnail,
  TestimonialInfo,
  TestimonialName,
  TestimonialProgram,
  TestimonialQuote,
  PlayButton,
  ModalOverlay,
  ModalContent,
  CloseButton,
  VideoContainer,
  ModalInfo,
  StatsContainer,
  StatItem
} from './styles';
import { 
  Users,
  Play,
  X,
  GraduationCap,
  Star,
  TrendUp
} from '@phosphor-icons/react';

const Testimonials = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [showVideoModal, setShowVideoModal] = useState(false);

  const handleCardClick = (testimonial) => {
    setSelectedVideo(testimonial);
    setShowVideoModal(true);
  };

  const closeModal = () => {
    setShowVideoModal(false);
    setTimeout(() => setSelectedVideo(null), 300);
  };

  return (
    <PageContainer>
      <HeaderSection>
        <HeaderContent>
          <HeaderTitle>Client Success Stories</HeaderTitle>
          <HeaderSubtitle>
            Discover how our personalized guidance helped students achieve their dreams at world's top universities
          </HeaderSubtitle>
        </HeaderContent>
      </HeaderSection>

      <MainContent>
        <StatsContainer>
          <StatItem>
            <h3>500+</h3>
            <p>Success Stories</p>
          </StatItem>
          <StatItem>
            <h3>95%</h3>
            <p>Acceptance Rate</p>
          </StatItem>
          <StatItem>
            <h3>50+</h3>
            <p>Top Universities</p>
          </StatItem>
        </StatsContainer>

        <TestimonialsSection>
          <TestimonialsHeader>
            <TestimonialsTitle>
              <Users size={32} weight="bold" /> 
              Video Testimonials
            </TestimonialsTitle>
            <TestimonialsSubtitle>
              Hear directly from our successful students about their journey to prestigious universities
            </TestimonialsSubtitle>
          </TestimonialsHeader>
          
          <TestimonialsGrid>
            {videoTestimonials.map((testimonial) => (
              <TestimonialCard 
                key={testimonial.id} 
                onClick={() => handleCardClick(testimonial)}
              >
                <TestimonialThumbnail>
                  <Image
                    src={testimonial.thumbnail}
                    alt={`${testimonial.name} testimonial`}
                    fill
                    style={{ objectFit: 'cover' }}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <PlayButton>
                    <Play size={28} weight="fill" />
                  </PlayButton>
                </TestimonialThumbnail>
                <TestimonialInfo>
                  <TestimonialName>{testimonial.name}</TestimonialName>
                  <TestimonialProgram>
                    <GraduationCap size={16} style={{ marginRight: '6px' }} />
                    {testimonial.program}
                  </TestimonialProgram>
                  <TestimonialQuote>{testimonial.quote}</TestimonialQuote>
                </TestimonialInfo>
              </TestimonialCard>
            ))}
          </TestimonialsGrid>
        </TestimonialsSection>

        {showVideoModal && selectedVideo && (
          <ModalOverlay onClick={closeModal}>
            <ModalContent onClick={(e) => e.stopPropagation()}>
              <CloseButton onClick={closeModal}>
                <X size={24} weight="bold" />
              </CloseButton>
              <VideoContainer>
                <iframe
                  src={`${selectedVideo.videoUrl}?autoplay=1&rel=0&modestbranding=1`}
                  title={`${selectedVideo.name} Success Story`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </VideoContainer>
              <ModalInfo>
                <TestimonialName>{selectedVideo.name}</TestimonialName>
                <TestimonialProgram>
                  <GraduationCap size={16} style={{ marginRight: '6px' }} />
                  {selectedVideo.program}
                </TestimonialProgram>
                <TestimonialQuote style={{ 
                  WebkitLineClamp: 'none', 
                  overflow: 'visible',
                  marginTop: '1rem'
                }}>
                  {selectedVideo.quote}
                </TestimonialQuote>
              </ModalInfo>
            </ModalContent>
          </ModalOverlay>
        )}
      </MainContent>
    </PageContainer>
  );
};

export default Testimonials;