'use client';

import { useParams } from 'next/navigation';
import { useState, useEffect, useMemo } from 'react';
import { 
  studyDestinations, 
  dummyUniversities, 
  studyLevels, 
  academicCertificates,
  budgetRanges,
  livingExpenseRanges 
} from './constants';
import {
  CountryPageContainer,
  CountryHeader,
  CountryImage,
  CountryInfo,
  CountryTitle,
  CountryDescription,
  PopularCities,
  CountryDetails,
  DetailGrid,
  DetailCard,
  DetailTitle,
  DetailValue,
  HighlightsSection,
  SectionTitle,
  HighlightsList,
  HighlightItem,
  UniversitySearchSection,
  SearchTitle,
  FilterContainer,
  FilterGroup,
  FilterLabel,
  SearchInput,
  Select,
  SliderContainer,
  SliderRange,
  SliderValue,
  UniversityGrid,
  UniversityCard,
  UniversityImage,
  UniversityContent,
  UniversityName,
  UniversityLocation,
  UniversityDetails,
  TuitionFee,
  Ranking,
  LoadingContainer,
  EmptyState,
  EmptyStateTitle,
  EmptyStateText
} from './styles';

const CountryPage = () => {
  const { slug } = useParams();
  const country = studyDestinations.find(c => c.slug === slug);
  
  // Search and filter states
  const [searchQuery, setSearchQuery] = useState('');
  const [budgetRange, setBudgetRange] = useState([budgetRanges.min, budgetRanges.max]);
  const [livingExpenseRange, setLivingExpenseRange] = useState([livingExpenseRanges.min, livingExpenseRanges.max]);
  const [selectedStudyLevel, setSelectedStudyLevel] = useState('All Levels');
  const [selectedCertificate, setSelectedCertificate] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  // Get universities for this specific country
  const countryUniversities = useMemo(() => {
    return dummyUniversities.filter(uni => uni.country === country?.name);
  }, [country?.name]);

  // Filter universities based on search criteria
  const filteredUniversities = useMemo(() => {
    let filtered = countryUniversities;

    // Filter by search query (university name)
    if (searchQuery.trim()) {
      filtered = filtered.filter(uni =>
        uni.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Filter by budget range (annual tuition)
    filtered = filtered.filter(uni =>
      uni.tuitionFee >= budgetRange[0] && uni.tuitionFee <= budgetRange[1]
    );

    // Filter by living expenses
    filtered = filtered.filter(uni =>
      uni.monthlyLiving >= livingExpenseRange[0] && uni.monthlyLiving <= livingExpenseRange[1]
    );

    // Filter by study level
    if (selectedStudyLevel !== 'All Levels') {
      filtered = filtered.filter(uni =>
        uni.studyLevels.includes(selectedStudyLevel)
      );
    }

    return filtered;
  }, [countryUniversities, searchQuery, budgetRange, livingExpenseRange, selectedStudyLevel]);

  // Handle budget range change
  const handleBudgetChange = (e, index) => {
    const newRange = [...budgetRange];
    newRange[index] = parseInt(e.target.value);
    setBudgetRange(newRange);
  };

  // Handle living expense range change
  const handleLivingExpenseChange = (e, index) => {
    const newRange = [...livingExpenseRange];
    newRange[index] = parseInt(e.target.value);
    setLivingExpenseRange(newRange);
  };

  // Format currency
  const formatCurrency = (amount, currency = 'USD') => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: currency,
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  if (!country) {
    return (
      <CountryPageContainer>
        <EmptyState>
          <EmptyStateTitle>Country Not Found</EmptyStateTitle>
          <EmptyStateText>The requested study destination could not be found.</EmptyStateText>
        </EmptyState>
      </CountryPageContainer>
    );
  }

  return (
    <CountryPageContainer>
      {/* Country Header */}
      <CountryHeader>
        <CountryImage>
          <img 
            src={country.image} 
            alt={`Study in ${country.name}`}
            onError={(e) => {
              e.target.src = 'https://via.placeholder.com/800x400/050A30/ffffff?text=' + encodeURIComponent(country.name);
            }}
          />
        </CountryImage>
        <CountryInfo>
          <CountryTitle>Study in {country.name}</CountryTitle>
          <CountryDescription>{country.description}</CountryDescription>
          <PopularCities>
            <strong>Popular Cities:</strong> {country.popularCities.join(', ')}
          </PopularCities>
        </CountryInfo>
      </CountryHeader>

      {/* Country Details */}
      <CountryDetails>
        <SectionTitle>Quick Facts</SectionTitle>
        <DetailGrid>
          <DetailCard>
            <DetailTitle>Language</DetailTitle>
            <DetailValue>{country.language}</DetailValue>
          </DetailCard>
          <DetailCard>
            <DetailTitle>Currency</DetailTitle>
            <DetailValue>{country.currency}</DetailValue>
          </DetailCard>
          <DetailCard>
            <DetailTitle>Visa Requirement</DetailTitle>
            <DetailValue>{country.visaInfo}</DetailValue>
          </DetailCard>
          <DetailCard>
            <DetailTitle>Tuition Range (Bachelor's)</DetailTitle>
            <DetailValue>
              {formatCurrency(country.averageTuition.bachelor.min, country.currency)} - {formatCurrency(country.averageTuition.bachelor.max, country.currency)}
            </DetailValue>
          </DetailCard>
          <DetailCard>
            <DetailTitle>Living Expenses (Monthly)</DetailTitle>
            <DetailValue>
              {formatCurrency(country.livingExpenses.min, country.currency)} - {formatCurrency(country.livingExpenses.max, country.currency)}
            </DetailValue>
          </DetailCard>
        </DetailGrid>
      </CountryDetails>

      {/* Highlights Section */}
      <HighlightsSection>
        <SectionTitle>Why Study in {country.name}?</SectionTitle>
        <HighlightsList>
          {country.highlights.map((highlight, index) => (
            <HighlightItem key={index}>{highlight}</HighlightItem>
          ))}
        </HighlightsList>
      </HighlightsSection>

      {/* University Search Section */}
      <UniversitySearchSection>
        <SearchTitle>Find Universities in {country.name}</SearchTitle>
        
        {/* Search Filters */}
        <FilterContainer>
          <FilterGroup>
            <FilterLabel>University Name</FilterLabel>
            <SearchInput
              type="text"
              placeholder="Search universities..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </FilterGroup>

          <FilterGroup>
            <FilterLabel>Study Level</FilterLabel>
            <Select
              value={selectedStudyLevel}
              onChange={(e) => setSelectedStudyLevel(e.target.value)}
            >
              {studyLevels.map(level => (
                <option key={level} value={level}>{level}</option>
              ))}
            </Select>
          </FilterGroup>

          <FilterGroup>
            <FilterLabel>Last Academic Certificate</FilterLabel>
            <Select
              value={selectedCertificate}
              onChange={(e) => setSelectedCertificate(e.target.value)}
            >
              <option value="">Select Certificate</option>
              {academicCertificates.map(cert => (
                <option key={cert} value={cert}>{cert}</option>
              ))}
            </Select>
          </FilterGroup>
        </FilterContainer>

        {/* Budget Sliders */}
        <FilterContainer>
          <FilterGroup>
            <FilterLabel>Annual Budget Range</FilterLabel>
            <SliderContainer>
              <div style={{ display: 'flex', gap: '1rem', marginBottom: '0.5rem' }}>
                <SliderRange
                  type="range"
                  min={budgetRanges.min}
                  max={budgetRanges.max}
                  step={budgetRanges.step}
                  value={budgetRange[0]}
                  onChange={(e) => handleBudgetChange(e, 0)}
                />
                <SliderRange
                  type="range"
                  min={budgetRanges.min}
                  max={budgetRanges.max}
                  step={budgetRanges.step}
                  value={budgetRange[1]}
                  onChange={(e) => handleBudgetChange(e, 1)}
                />
              </div>
              <SliderValue>
                {formatCurrency(budgetRange[0])} - {formatCurrency(budgetRange[1])}
              </SliderValue>
            </SliderContainer>
          </FilterGroup>

          <FilterGroup>
            <FilterLabel>Monthly Living Expenses</FilterLabel>
            <SliderContainer>
              <div style={{ display: 'flex', gap: '1rem', marginBottom: '0.5rem' }}>
                <SliderRange
                  type="range"
                  min={livingExpenseRanges.min}
                  max={livingExpenseRanges.max}
                  step={livingExpenseRanges.step}
                  value={livingExpenseRange[0]}
                  onChange={(e) => handleLivingExpenseChange(e, 0)}
                />
                <SliderRange
                  type="range"
                  min={livingExpenseRanges.min}
                  max={livingExpenseRanges.max}
                  step={livingExpenseRanges.step}
                  value={livingExpenseRange[1]}
                  onChange={(e) => handleLivingExpenseChange(e, 1)}
                />
              </div>
              <SliderValue>
                {formatCurrency(livingExpenseRange[0])} - {formatCurrency(livingExpenseRange[1])}
              </SliderValue>
            </SliderContainer>
          </FilterGroup>
        </FilterContainer>

        {/* University Results */}
        {isLoading ? (
          <LoadingContainer>
            <div>Loading universities...</div>
          </LoadingContainer>
        ) : filteredUniversities.length > 0 ? (
          <UniversityGrid>
            {filteredUniversities.map(university => (
              <UniversityCard key={university.id}>
                <UniversityImage>
                  <img 
                    src={university.image} 
                    alt={university.name}
                    onError={(e) => {
                      e.target.src = 'https://via.placeholder.com/400x300/050A30/ffffff?text=' + encodeURIComponent(university.name);
                    }}
                  />
                </UniversityImage>
                <UniversityContent>
                  <UniversityName>{university.name}</UniversityName>
                  <UniversityLocation>{university.city}, {university.country}</UniversityLocation>
                  
                  <div style={{ marginBottom: '1rem' }}>
                    <p style={{ color: '#6b7280', fontSize: '0.9rem', margin: '0.25rem 0' }}>
                      <strong>Established:</strong> {university.establishedYear}
                    </p>
                    <p style={{ color: '#6b7280', fontSize: '0.9rem', margin: '0.25rem 0' }}>
                      <strong>Students:</strong> {university.studentPopulation.toLocaleString()}
                    </p>
                    <p style={{ color: '#6b7280', fontSize: '0.9rem', margin: '0.25rem 0' }}>
                      <strong>International Students:</strong> {university.internationalStudents}%
                    </p>
                    <p style={{ color: '#6b7280', fontSize: '0.9rem', margin: '0.25rem 0' }}>
                      <strong>Acceptance Rate:</strong> {university.acceptanceRate}%
                    </p>
                  </div>

                  <div style={{ marginBottom: '1rem' }}>
                    <p style={{ color: '#374151', fontSize: '0.9rem', fontStyle: 'italic' }}>
                      {university.description}
                    </p>
                  </div>

                  <div style={{ marginBottom: '1rem' }}>
                    <p style={{ color: '#050A30', fontSize: '0.85rem', fontWeight: '600', marginBottom: '0.5rem' }}>
                      POPULAR PROGRAMS:
                    </p>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                      {university.programs.slice(0, 3).map((program, index) => (
                        <span 
                          key={index}
                          style={{
                            background: '#f3f4f6',
                            color: '#374151',
                            padding: '0.25rem 0.5rem',
                            borderRadius: '4px',
                            fontSize: '0.75rem',
                            fontWeight: '500'
                          }}
                        >
                          {program}
                        </span>
                      ))}
                    </div>
                  </div>

                  <UniversityDetails>
                    <div>
                      <TuitionFee>{formatCurrency(university.tuitionFee)}</TuitionFee>
                      <div style={{ fontSize: '0.8rem', color: '#6b7280' }}>Annual Tuition</div>
                      <div style={{ fontSize: '0.9rem', color: '#374151', marginTop: '0.25rem' }}>
                        Living: {formatCurrency(university.monthlyLiving)}/month
                      </div>
                    </div>
                    <Ranking>#{university.ranking} Ranked</Ranking>
                  </UniversityDetails>
                </UniversityContent>
              </UniversityCard>
            ))}
          </UniversityGrid>
        ) : (
          <EmptyState>
            <EmptyStateTitle>No Universities Found</EmptyStateTitle>
            <EmptyStateText>
              Try adjusting your search criteria to find universities that match your preferences.
            </EmptyStateText>
          </EmptyState>
        )}

        {/* Results Summary */}
        {!isLoading && (
          <div style={{ 
            textAlign: 'center', 
            marginTop: '2rem', 
            padding: '1rem',
            background: 'rgba(5, 10, 48, 0.05)',
            borderRadius: '8px',
            color: '#050A30'
          }}>
            <strong>
              {filteredUniversities.length} universities found in {country.name}
            </strong>
            {searchQuery && (
              <div style={{ fontSize: '0.9rem', marginTop: '0.5rem', color: '#6b7280' }}>
                Showing results for "{searchQuery}"
              </div>
            )}
          </div>
        )}
      </UniversitySearchSection>
    </CountryPageContainer>
  );
};

export default CountryPage;