'use client';
import { useState, useRef, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import {
  SearchContainer,
  SearchHeader,
  SearchTitle,
  SearchSubtitle,
  SearchGrid,
  FilterCard,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  InputGroup,
  InputLabel,
  SliderContainer,
  SliderHeader,
  SliderLabel,
  SliderValue,
  RangeSlider,
  Dropdown,
  SearchButton,
  LoadingContainer,
  LoadingSpinner,
  LoadingText,
  LoadingProgress,
  IconWrapper,
  ErrorMessage,
} from './styles';
import {
  budgetRange,
  countries,
  studyLevels,
  academicCertificates,
} from './constants';
import { 
  MagnifyingGlass, 
  MapPin, 
  GraduationCap, 
  Certificate, 
  CurrencyDollar,
  House,
  CheckCircle,
  XCircle
} from '@phosphor-icons/react';

const UniversitySearch = () => {
    const router = useRouter();
  const [tuitionRange, setTuitionRange] = useState([5000, 25000]);
  const [livingExpensesRange, setLivingExpensesRange] = useState([800, 2500]);
  const [selectedCountry, setSelectedCountry] = useState('');
  const [selectedStudyLevel, setSelectedStudyLevel] = useState('');
  const [selectedCertificate, setSelectedCertificate] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [errors, setErrors] = useState({});
  const [redirecting, setRedirecting] = useState(false);

  const validateForm = () => {
    const newErrors = {};
    
    if (!selectedCountry) {
      newErrors.country = 'Please select a study destination';
    }
    if (!selectedStudyLevel) {
      newErrors.studyLevel = 'Please select a study level';
    }
    if (!selectedCertificate) {
      newErrors.certificate = 'Please select your last certificate';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleTuitionChange = (e, index) => {
    const newValue = parseInt(e.target.value);
    const newRange = [...tuitionRange];
    newRange[index] = newValue;
    
    if (index === 0 && newValue > tuitionRange[1]) {
      newRange[1] = newValue;
    } else if (index === 1 && newValue < tuitionRange[0]) {
      newRange[0] = newValue;
    }
    
    setTuitionRange(newRange);
  };

  const handleLivingExpensesChange = (e, index) => {
    const newValue = parseInt(e.target.value);
    const newRange = [...livingExpensesRange];
    newRange[index] = newValue;
    
    if (index === 0 && newValue > livingExpensesRange[1]) {
      newRange[1] = newValue;
    } else if (index === 1 && newValue < livingExpensesRange[0]) {
      newRange[0] = newValue;
    }
    
    setLivingExpensesRange(newRange);
  };

  const handleSearch = async () => {
    if (!validateForm()) {
      return;
    }

    setIsLoading(true);
    setLoadingProgress(0);
    
    const searchCriteria = {
      tuitionMin: tuitionRange[0],
      tuitionMax: tuitionRange[1],
      livingExpensesMin: livingExpensesRange[0],
      livingExpensesMax: livingExpensesRange[1],
      country: selectedCountry,
      studyLevel: selectedStudyLevel,
      lastCertificate: selectedCertificate,
    };

    
    console.log('Search criteria:', searchCriteria);
    
 // Simulate loading progress
    const progressInterval = setInterval(() => {
      setLoadingProgress(prev => {
        if (prev >= 90) {
          clearInterval(progressInterval);
          return prev;
        }
        return prev + Math.random() * 15;
      });
    }, 200);
    
    // When loading is complete, set redirecting state
    setTimeout(() => {
      setLoadingProgress(100);
      setTimeout(() => {
        setRedirecting(true);
        router.push('/courses');
      }, 500);
    }, 3000);
  };


if (isLoading || redirecting) {
    return (
      <LoadingContainer>
        <LoadingSpinner />
        <LoadingText>Let AI find the best universities for you</LoadingText>
        <LoadingProgress>
          <div 
            className="progress-fill" 
            style={{ width: `${loadingProgress}%` }}
          />
        </LoadingProgress>
        <p className="loading-subtitle">
          Analyzing {Math.floor(loadingProgress * 50)} universities worldwide...
        </p>
      </LoadingContainer>
    );
  }

  return (
    <SearchContainer>
      <SearchHeader>
        <SearchTitle>Discover Your Dream University</SearchTitle>
        <SearchSubtitle>
          Find the perfect match based on your preferences and budget
        </SearchSubtitle>
      </SearchHeader>
      
      <SearchGrid>
        <FilterCard>
          <CardHeader>
            <IconWrapper>
              <CurrencyDollar size={24} weight="bold" />
            </IconWrapper>
            <div>
              <CardTitle>Budget Planning</CardTitle>
              <CardDescription>Set your financial preferences</CardDescription>
            </div>
          </CardHeader>
          
          <CardContent>
            <SliderContainer>
              <SliderHeader>
                <SliderLabel>Annual Tuition Fees</SliderLabel>
                <SliderValue>
                  ${tuitionRange[0].toLocaleString()} - ${tuitionRange[1].toLocaleString()}
                </SliderValue>
              </SliderHeader>
              <div className="slider-group">
                <RangeSlider
                  type="range"
                  min={budgetRange.min}
                  max={budgetRange.max}
                  step={budgetRange.step}
                  value={tuitionRange[0]}
                  onChange={(e) => handleTuitionChange(e, 0)}
                />
                <RangeSlider
                  type="range"
                  min={budgetRange.min}
                  max={budgetRange.max}
                  step={budgetRange.step}
                  value={tuitionRange[1]}
                  onChange={(e) => handleTuitionChange(e, 1)}
                />
              </div>
            </SliderContainer>
            
            <SliderContainer>
              <SliderHeader>
                <SliderLabel>Monthly Living Expenses</SliderLabel>
                <SliderValue>
                  ${livingExpensesRange[0].toLocaleString()} - ${livingExpensesRange[1].toLocaleString()}
                </SliderValue>
              </SliderHeader>
              <div className="slider-group">
                <RangeSlider
                  type="range"
                  min={budgetRange.min}
                  max={budgetRange.max}
                  step={budgetRange.step}
                  value={livingExpensesRange[0]}
                  onChange={(e) => handleLivingExpensesChange(e, 0)}
                />
                <RangeSlider
                  type="range"
                  min={budgetRange.min}
                  max={budgetRange.max}
                  step={budgetRange.step}
                  value={livingExpensesRange[1]}
                  onChange={(e) => handleLivingExpensesChange(e, 1)}
                />
              </div>
            </SliderContainer>
          </CardContent>
        </FilterCard>
        
        <FilterCard>
          <CardHeader>
            <IconWrapper>
              <GraduationCap size={24} weight="bold" />
            </IconWrapper>
            <div>
              <CardTitle>Study Preferences</CardTitle>
              <CardDescription>Choose your academic path</CardDescription>
            </div>
          </CardHeader>
          
          <CardContent>
            <InputGroup>
              <InputLabel>
                <MapPin size={16} />
                Study Destination *
              </InputLabel>
              <Dropdown
                value={selectedCountry}
                onChange={(e) => {
                  setSelectedCountry(e.target.value);
                  setErrors(prev => ({ ...prev, country: '' }));
                }}
                className={errors.country ? 'error' : ''}
              >
                <option value="">Select Country</option>
                {countries.map((country, index) => (
                  <option key={index} value={country}>
                    {country}
                  </option>
                ))}
              </Dropdown>
              {errors.country && <ErrorMessage>{errors.country}</ErrorMessage>}
            </InputGroup>
            
            <InputGroup>
              <InputLabel>
                <GraduationCap size={16} />
                Study Level *
              </InputLabel>
              <Dropdown
                value={selectedStudyLevel}
                onChange={(e) => {
                  setSelectedStudyLevel(e.target.value);
                  setErrors(prev => ({ ...prev, studyLevel: '' }));
                }}
                className={errors.studyLevel ? 'error' : ''}
              >
                <option value="">Select Level</option>
                {studyLevels.map((level, index) => (
                  <option key={index} value={level}>
                    {level}
                  </option>
                ))}
              </Dropdown>
              {errors.studyLevel && <ErrorMessage>{errors.studyLevel}</ErrorMessage>}
            </InputGroup>
            
            <InputGroup>
              <InputLabel>
                <Certificate size={16} />
                Last Certificate *
              </InputLabel>
              <Dropdown
                value={selectedCertificate}
                onChange={(e) => {
                  setSelectedCertificate(e.target.value);
                  setErrors(prev => ({ ...prev, certificate: '' }));
                }}
                className={errors.certificate ? 'error' : ''}
              >
                <option value="">Select Certificate</option>
                {academicCertificates.map((cert, index) => (
                  <option key={index} value={cert}>
                    {cert}
                  </option>
                ))}
              </Dropdown>
              {errors.certificate && <ErrorMessage>{errors.certificate}</ErrorMessage>}
            </InputGroup>
          </CardContent>
        </FilterCard>
      </SearchGrid>
      
      <div className="search-section">
        <SearchButton onClick={handleSearch}>
          <MagnifyingGlass size={20} weight="bold" />
          Find Perfect Universities
        </SearchButton>
      </div>
    </SearchContainer>
  );
};

export default UniversitySearch;