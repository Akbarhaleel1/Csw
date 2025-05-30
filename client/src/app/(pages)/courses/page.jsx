"use client";
import React, { useState, useMemo } from "react";
import {
  Heart,
  MapPin,
  Calendar,
  BookOpen,
  DollarSign,
  Filter,
  Grid,
  List,
  ChevronDown,
  ChevronUp,
  Search,
} from "lucide-react";
import { useRouter } from "next/navigation";
import axios from "axios";
import {
  PageContainer,
  HeaderSection,
  HeaderContent,
  Breadcrumb,
  HeaderTitle,
  HeaderSubtitle,
  MainContent,
  FilterSection,
  FilterHeader,
  FilterTitle,
  FilterButton,
  FilterContent,
  FilterGroup,
  FilterLabel,
  FilterSelect,
  SearchButton,
  ResultsControlBar,
  ResultsCount,
  SortSelect,
  ViewModeButton,
  CourseGrid,
  CourseCard,
  FavoriteButton,
  UniversityName,
  ProgramName,
  BadgeContainer,
  RankingBadge,
  LevelBadge,
  DetailItem,
  DetailText,
  TuitionText,
  ViewDetailsButton,
  ApplyBar,
  ApplyButton,
  ModalOverlay,
  ModalContent,
  ModalButton,
} from "./styles";
import {
  sampleCourses,
  sortOptions,
  studyDestinations,
  studyLevels,
  lastCertificates,
} from "./constants";

const CourseResultsPage = () => {
  const router = useRouter();
  const [favorites, setFavorites] = useState([]);
  const [sortBy, setSortBy] = useState("popularity");
  const [viewMode, setViewMode] = useState("grid");
  const [showFilters, setShowFilters] = useState(false);
  const [showMaxFavoritesModal, setShowMaxFavoritesModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const [filters, setFilters] = useState({
    destination: "United States",
    studyLevel: "Master's Degree",
    lastCertificate: "Bachelor's Degree",
    tuitionRange: [0, 80000],
    livingExpenses: [500, 3000],
  });

  const toggleFavorite = (courseId) => {
    if (favorites.includes(courseId)) {
      setFavorites(favorites.filter((id) => id !== courseId));
    } else if (favorites.length < 5) {
      setFavorites([...favorites, courseId]);
    } else {
      setShowMaxFavoritesModal(true);
    }
  };

  const sortedCourses = useMemo(() => {
    let sorted = [...sampleCourses];
    switch (sortBy) {
      case "ranking":
        return sorted.sort((a, b) => a.worldRanking - b.worldRanking);
      case "tuition-low":
        return sorted.sort(
          (a, b) => a.annualTuition.amount - b.annualTuition.amount
        );
      case "tuition-high":
        return sorted.sort(
          (a, b) => b.annualTuition.amount - a.annualTuition.amount
        );
      case "alphabetical":
        return sorted.sort((a, b) =>
          a.universityName.localeCompare(b.universityName)
        );
      default:
        return sorted;
    }
  }, [sortBy]);

  const updateFilters = () => {
    console.log("Updating search with filters:", filters);
    setShowFilters(false);
  };
  const api = axios.create({
    baseURL: "http://localhost:3001",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const saveSelections = async () => {
    setIsLoading(true);
    setError(null);
    setSuccess(null);

    try {
      const userId = "user123";

      if (favorites.length === 0) {
        throw new Error("Please select at least one university");
      }

      const response = await api.post("/favourites", {
        userId,
       favorites,
      });

      setSuccess(response.data.message || "Selections saved successfully!");

      if (response.status === 200) {
        router.push("/studentForm");
      }
    } catch (err) {
      setError(
        err.response?.data?.error ||
          err.message ||
          "Failed to save selections. Please try again."
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <PageContainer>
      <HeaderSection>
        <HeaderContent>
          <Breadcrumb>
            Home {">"} Search {">"} Results
          </Breadcrumb>
          <HeaderTitle>Search Results for Your Criteria</HeaderTitle>
          <HeaderSubtitle>
            Found {sortedCourses.length} programs matching your preferences
          </HeaderSubtitle>
        </HeaderContent>
      </HeaderSection>

      <MainContent>
        <FilterSection>
          <FilterHeader $showFilters={showFilters}>
            <FilterTitle>Search Filters</FilterTitle>
            <FilterButton onClick={() => setShowFilters(!showFilters)}>
              <Filter size={16} />
              {showFilters ? "Hide Filters" : "Show Filters"}
              {showFilters ? (
                <ChevronUp size={16} />
              ) : (
                <ChevronDown size={16} />
              )}
            </FilterButton>
          </FilterHeader>

          {showFilters && (
            <FilterContent>
              <FilterGroup>
                <FilterLabel>Study Destination</FilterLabel>
                <FilterSelect
                  value={filters.destination}
                  onChange={(e) =>
                    setFilters({ ...filters, destination: e.target.value })
                  }
                >
                  {studyDestinations.map((dest) => (
                    <option key={dest} value={dest}>
                      {dest}
                    </option>
                  ))}
                </FilterSelect>
              </FilterGroup>

              <FilterGroup>
                <FilterLabel>Study Level</FilterLabel>
                <FilterSelect
                  value={filters.studyLevel}
                  onChange={(e) =>
                    setFilters({ ...filters, studyLevel: e.target.value })
                  }
                >
                  {studyLevels.map((level) => (
                    <option key={level} value={level}>
                      {level}
                    </option>
                  ))}
                </FilterSelect>
              </FilterGroup>

              <FilterGroup>
                <FilterLabel>Last Certificate</FilterLabel>
                <FilterSelect
                  value={filters.lastCertificate}
                  onChange={(e) =>
                    setFilters({ ...filters, lastCertificate: e.target.value })
                  }
                >
                  {lastCertificates.map((cert) => (
                    <option key={cert} value={cert}>
                      {cert}
                    </option>
                  ))}
                </FilterSelect>
              </FilterGroup>

              <FilterGroup style={{ gridColumn: "span 2" }}>
                <SearchButton onClick={updateFilters}>
                  <Search size={20} />
                  Update Search
                </SearchButton>
              </FilterGroup>
            </FilterContent>
          )}
        </FilterSection>

        <ResultsControlBar>
          <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
            <ResultsCount>Showing {sortedCourses.length} results</ResultsCount>
            <SortSelect
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
            >
              {sortOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </SortSelect>
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
            <ViewModeButton
              $active={viewMode === "grid"}
              onClick={() => setViewMode("grid")}
            >
              <Grid size={16} />
            </ViewModeButton>
            <ViewModeButton
              $active={viewMode === "list"}
              onClick={() => setViewMode("list")}
            >
              <List size={16} />
            </ViewModeButton>
          </div>
        </ResultsControlBar>

        <CourseGrid $viewMode={viewMode}>
          {sortedCourses.map((course) => (
            <CourseCard key={course.id}>
              <FavoriteButton onClick={() => toggleFavorite(course.id)}>
                <Heart
                  size={20}
                  fill={favorites.includes(course.id) ? "#ef4444" : "none"}
                  color={favorites.includes(course.id) ? "#ef4444" : "#6b7280"}
                />
              </FavoriteButton>

              <UniversityName>{course.universityName}</UniversityName>
              <ProgramName>{course.programName}</ProgramName>

              <BadgeContainer>
                <RankingBadge>THE Ranking: #{course.worldRanking}</RankingBadge>
                <LevelBadge>{course.studyLevel}</LevelBadge>
              </BadgeContainer>

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.75rem",
                  marginBottom: "1.5rem",
                }}
              >
                <DetailItem>
                  <MapPin size={16} color="#6b7280" />
                  <DetailText>
                    {course.location.city}, {course.location.country}
                  </DetailText>
                </DetailItem>
                <DetailItem>
                  <Calendar size={16} color="#6b7280" />
                  <DetailText>Next Intake: {course.nextIntake}</DetailText>
                </DetailItem>
                <DetailItem>
                  <BookOpen size={16} color="#6b7280" />
                  <DetailText>
                    Entry Requirements: {course.entryScore}
                  </DetailText>
                </DetailItem>
                <DetailItem>
                  <DollarSign size={16} color="#16a34a" />
                  <TuitionText>
                    {course.annualTuition.amount.toLocaleString()}{" "}
                    {course.annualTuition.currency}/year
                  </TuitionText>
                </DetailItem>
              </div>
              <ViewDetailsButton>View Details</ViewDetailsButton>
            </CourseCard>
          ))}
        </CourseGrid>

        {favorites.length > 0 && (
          <ApplyBar>
            <p
              style={{
                margin: "0 0 1rem 0",
                color: "#6b7280",
                fontSize: "0.875rem",
              }}
            >
              {favorites.length} of 5 universities selected
            </p>
            <ApplyButton
              onClick={saveSelections}
              disabled={isLoading || favorites.length === 0}
            >
              {isLoading
                ? "Saving..."
                : `Apply to Selected Universities (${favorites.length})`}
            </ApplyButton>

            {error && (
              <p
                style={{
                  color: "red",
                  marginTop: "0.5rem",
                  fontSize: "0.875rem",
                }}
              >
                {error}
              </p>
            )}
            {success && (
              <p
                style={{
                  color: "green",
                  marginTop: "0.5rem",
                  fontSize: "0.875rem",
                }}
              >
                {success}
              </p>
            )}

            <p
              style={{
                margin: "0",
                color: "#6b7280",
                fontSize: "0.75rem",
                maxWidth: "300px",
              }}
            >
              To proceed with applications, you must register your account or
              <a
                href="/contact"
                style={{
                  color: "#050A30",
                  textDecoration: "underline",
                  marginLeft: "4px",
                }}
              >
                contact our team
              </a>{" "}
              for assistance.
            </p>
          </ApplyBar>
        )}

        {showMaxFavoritesModal && (
          <ModalOverlay>
            <ModalContent>
              <h3
                style={{ color: "#050A30", marginBottom: "1rem", marginTop: 0 }}
              >
                Maximum Universities Reached
              </h3>
              <p style={{ color: "#6b7280", marginBottom: "1.5rem" }}>
                Maximum 5 universities allowed. Remove one to add this program.
              </p>
              <ModalButton onClick={() => setShowMaxFavoritesModal(false)}>
                Got it
              </ModalButton>
            </ModalContent>
          </ModalOverlay>
        )}
      </MainContent>
    </PageContainer>
  );
};

export default CourseResultsPage;
