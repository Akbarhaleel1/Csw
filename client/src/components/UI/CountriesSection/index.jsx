'use client';
import Link from 'next/link';
import Image from 'next/image';
import { studyDestinations } from './constants';
import { 
  CountriesSection as CountriesSectionStyled,
  BackgroundPattern,
  Container,
  SectionHeader,
  Badge,
  SectionTitle,
  SectionSubtitle,
  CountriesGrid,
  CountryCard,
  CountryImageWrapper,
  CountryImage,
  ImageOverlay,
  StatsHover,
  CountryContent,
  CountryHeader,
  CountryName,
  ArrowIcon,
  CountryInfo,
  LocationInfo,
  StatsInfo,
  CountryStats,
  CountryDescription,
  ActionButton
} from './styles';

const CountriesSection = () => {
  return (
    <CountriesSectionStyled>
      <BackgroundPattern />
      
      <Container>
        <SectionHeader>
          <Badge>
            🎓 Study Abroad Destinations
          </Badge>
          <SectionTitle>Your Dream Study Destination Awaits</SectionTitle>
          <SectionSubtitle>
            Discover world-class education opportunities across the globe. From prestigious universities 
            to vibrant cultures, find your perfect study destination.
          </SectionSubtitle>
        </SectionHeader>
        
        <CountriesGrid>
          {studyDestinations.map((country) => (
            <Link key={country.id} href={`/study-in/${country.slug}`} passHref>
              <CountryCard>
                <CountryImageWrapper>
                  <CountryImage className="country-image">
                    <Image
                      src={country.image}
                      alt={`Study in ${country.name}`}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                      style={{ objectFit: 'cover' }}
                      priority={country.id <= 4}
                    />
                  </CountryImage>
                  <ImageOverlay />
                  <StatsHover className="stats-hover">
                    <div>👥 {country.students} Students</div>
                    <div>🏛️ {country.universities} Universities</div>
                  </StatsHover>
                </CountryImageWrapper>
                
                <CountryContent>
                  <CountryHeader>
                    <CountryName>{country.name}</CountryName>
                    <ArrowIcon className="arrow-icon">→</ArrowIcon>
                  </CountryHeader>
                  
                  <CountryInfo>
                    <LocationInfo>
                      📍 {country.popularCities.slice(0, 3).join(', ')}
                      {country.popularCities.length > 3 && ' +more'}
                    </LocationInfo>
                    
                    <StatsInfo>
                      <CountryStats>
                        <span>{country.students}</span>
                        <small>International Students</small>
                      </CountryStats>
                      <CountryStats>
                        <span>{country.universities}</span>
                        <small>Universities</small>
                      </CountryStats>
                    </StatsInfo>
                    
                    <CountryDescription>
                      {country.description.length > 120 
                        ? `${country.description.substring(0, 120)}...` 
                        : country.description
                      }
                    </CountryDescription>
                  </CountryInfo>
                  
                  <ActionButton className="action-button">
                    Explore Programs
                  </ActionButton>
                </CountryContent>
              </CountryCard>
            </Link>
          ))}
        </CountriesGrid>
      </Container>
    </CountriesSectionStyled>
  );
};

export default CountriesSection;