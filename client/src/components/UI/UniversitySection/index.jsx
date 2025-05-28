'use client';
import { useState, useRef, useEffect } from 'react';
import {
  SearchContainer,
  SearchTitle,
  SearchGrid,
  InputGroup,
  InputLabel,
  UniversityInput,
  SuggestionsList,
  SuggestionItem,
  SliderContainer,
  SliderHeader,
  SliderLabel,
  SliderValue,
  RangeSlider,
  Dropdown,
  SearchButton,
  FilterRow,
} from './styles';
import {
  budgetRange,
  countries,
  studyLevels,
  academicCertificates,
  universitySuggestions,
} from './constants';
import { MagnifyingGlass } from '@phosphor-icons/react';

const UniversitySearch = () => {
  const [universityName, setUniversityName] = useState('');
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [filteredSuggestions, setFilteredSuggestions] = useState([]);
  const [tuitionRange, setTuitionRange] = useState([0, 10000]);
  const [livingExpensesRange, setLivingExpensesRange] = useState([0, 10000]);
  const [selectedCountry, setSelectedCountry] = useState('');
  const [selectedStudyLevel, setSelectedStudyLevel] = useState('');
  const [selectedCertificate, setSelectedCertificate] = useState('');
  const inputRef = useRef(null);

  useEffect(() => {
    if (universityName.length > 1) {
      const filtered = universitySuggestions.filter(uni =>
        uni.toLowerCase().includes(universityName.toLowerCase())
      );
      setFilteredSuggestions(filtered);
      setShowSuggestions(filtered.length > 0);
    } else {
      setFilteredSuggestions([]);
      setShowSuggestions(false);
    }
  }, [universityName]);

  const handleSuggestionClick = (suggestion) => {
    setUniversityName(suggestion);
    setShowSuggestions(false);
    inputRef.current.focus();
  };

  const handleTuitionChange = (e, index) => {
    const newValue = parseInt(e.target.value);
    const newRange = [...tuitionRange];
    newRange[index] = newValue;
    
    // Ensure min doesn't exceed max and vice versa
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

  const handleSearch = () => {
    const searchCriteria = {
      universityName,
      tuitionMin: tuitionRange[0],
      tuitionMax: tuitionRange[1],
      livingExpensesMin: livingExpensesRange[0],
      livingExpensesMax: livingExpensesRange[1],
      country: selectedCountry,
      studyLevel: selectedStudyLevel,
      lastCertificate: selectedCertificate,
    };
    
    console.log('Search criteria:', searchCriteria);
    // Here you would typically make an API call with the search criteria
  };

  return (
    <SearchContainer>
      <SearchTitle>Find Your Perfect University</SearchTitle>
      
      <SearchGrid>
        <InputGroup>
          <InputLabel>University Name</InputLabel>
          <div style={{ position: 'relative' }}>
            <UniversityInput
              ref={inputRef}
              type="text"
              placeholder="Search by university name"
              value={universityName}
              onChange={(e) => setUniversityName(e.target.value)}
              onFocus={() => universityName.length > 1 && setShowSuggestions(true)}
              onBlur={() => setTimeout(() => setShowSuggestions(false), 200)}
            />
            {showSuggestions && (
              <SuggestionsList>
                {filteredSuggestions.map((suggestion, index) => (
                  <SuggestionItem
                    key={index}
                    onMouseDown={() => handleSuggestionClick(suggestion)}
                  >
                    {suggestion}
                  </SuggestionItem>
                ))}
              </SuggestionsList>
            )}
          </div>
        </InputGroup>
        
        <div>
          <SliderContainer>
            <SliderHeader>
              <SliderLabel>Annual Tuition Fees (USD)</SliderLabel>
              <SliderValue>
                ${tuitionRange[0]} - ${tuitionRange[1]}
              </SliderValue>
            </SliderHeader>
            <div style={{ display: 'flex', gap: '1rem' }}>
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
              <SliderLabel>Monthly Living Expenses (USD)</SliderLabel>
              <SliderValue>
                ${livingExpensesRange[0]} - ${livingExpensesRange[1]}
              </SliderValue>
            </SliderHeader>
            <div style={{ display: 'flex', gap: '1rem' }}>
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
        </div>
        
        <FilterRow>
          <InputGroup>
            <InputLabel>Select Study Destination</InputLabel>
            <Dropdown
              value={selectedCountry}
              onChange={(e) => setSelectedCountry(e.target.value)}
            >
              <option value="">All Countries</option>
              {countries.map((country, index) => (
                <option key={index} value={country}>
                  {country}
                </option>
              ))}
            </Dropdown>
          </InputGroup>
          
          <InputGroup>
            <InputLabel>Select Study Level</InputLabel>
            <Dropdown
              value={selectedStudyLevel}
              onChange={(e) => setSelectedStudyLevel(e.target.value)}
            >
              <option value="">All Study Levels</option>
              {studyLevels.map((level, index) => (
                <option key={index} value={level}>
                  {level}
                </option>
              ))}
            </Dropdown>
          </InputGroup>
          
          <InputGroup>
            <InputLabel>Last Academic Certificate</InputLabel>
            <Dropdown
              value={selectedCertificate}
              onChange={(e) => setSelectedCertificate(e.target.value)}
            >
              <option value="">All Certificates</option>
              {academicCertificates.map((cert, index) => (
                <option key={index} value={cert}>
                  {cert}
                </option>
              ))}
            </Dropdown>
          </InputGroup>
        </FilterRow>
        
        <SearchButton onClick={handleSearch}>
          <MagnifyingGlass size={20} weight="bold" />
          Search Universities
        </SearchButton>
      </SearchGrid>
    </SearchContainer>
  );
};

export default UniversitySearch;