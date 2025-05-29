"use client";
import React from "react";
import { useParams, useRouter } from "next/navigation";
import { detailedCourses } from "./constants";
import {
  PageContainer,
  HeaderSection,
  HeaderContent,
  Breadcrumb,
  HeaderTitle,
  MainContent,
  CourseDetailContainer,
  UniversityHeader,
  UniversityLogo,
  UniversityInfo,
  ProgramTitle,
  BadgeContainer,
  Badge,
  RankingBadge,
  LevelBadge,
  DetailSection,
  SectionTitle,
  SectionContent,
  DetailItem,
  DetailIcon,
  DetailText,
  TuitionText,
  RequirementsList,
  RequirementItem,
  ActionButtons,
  ApplyButton,
  BackButton,
  GalleryImage,
  GalleryContainer,
  TabContainer,
  TabButton,
  TabContent,
  ScholarshipCard,
  OutcomeItem,
} from "./styles";
import {
  MapPin,
  Calendar,
  BookOpen,
  DollarSign,
  Clock,
  Globe,
  Users,
  Briefcase,
  Award,
  ArrowLeft,
} from "lucide-react";
import Image from "next/image";

const CourseDetailsPage = () => {
  const router = useRouter();
  const { id } = useParams();
  const course = detailedCourses[id];
  const [activeTab, setActiveTab] = React.useState("overview");

  if (!course) {
    return <div>Course not found</div>;
  }

  return (
    <PageContainer>
      <HeaderSection>
        <HeaderContent>
          <Breadcrumb>
            <span onClick={() => router.push("/")}>Home</span> &gt;
            <span onClick={() => router.push("/search")}>Search</span> &gt;
            {course.universityName}
          </Breadcrumb>
          <HeaderTitle>{course.universityName}</HeaderTitle>
        </HeaderContent>
      </HeaderSection>

      <MainContent>
        <CourseDetailContainer>
          <UniversityHeader>
            <UniversityLogo>
              <div
                style={{
                  position: "relative",
                  width: "100px",
                  height: "100px",
                  borderRadius: "12px",
                  overflow: "hidden",
                }}
              >
                <Image
                  src={course.logoUrl}
                  alt={`${course.universityName} logo`}
                  fill
                  sizes="100px"
                  style={{
                    objectFit: "contain",
                    padding: "8px",
                    backgroundColor: "#f8fafc",
                  }}
                />
              </div>
            </UniversityLogo>
            <UniversityInfo>
              <ProgramTitle>{course.programName}</ProgramTitle>
              <BadgeContainer>
                <RankingBadge>THE Ranking: #{course.worldRanking}</RankingBadge>
                <LevelBadge>{course.studyLevel}</LevelBadge>
                <Badge>{course.duration}</Badge>
              </BadgeContainer>
            </UniversityInfo>
          </UniversityHeader>

          <GalleryContainer>
            <div
              style={{
                position: "relative",
                width: "100%",
                height: "300px",
                borderRadius: "12px",
                overflow: "hidden",
              }}
            >
              <Image
                src={course.imageUrl}
                alt={`${course.universityName} campus`}
                fill
                sizes="(max-width: 768px) 100vw, 800px"
                style={{
                  objectFit: "cover",
                  objectPosition: "center",
                }}
                priority
              />
            </div>
          </GalleryContainer>

          <TabContainer>
            <TabButton
              $active={activeTab === "overview"}
              onClick={() => setActiveTab("overview")}
            >
              Overview
            </TabButton>
            <TabButton
              $active={activeTab === "requirements"}
              onClick={() => setActiveTab("requirements")}
            >
              Requirements
            </TabButton>
            <TabButton
              $active={activeTab === "fees"}
              onClick={() => setActiveTab("fees")}
            >
              Fees & Funding
            </TabButton>
            <TabButton
              $active={activeTab === "careers"}
              onClick={() => setActiveTab("careers")}
            >
              Careers
            </TabButton>
          </TabContainer>

          <TabContent
            $active={activeTab === "overview"}
            onClick={() => setActiveTab("overview")}
          >
            <DetailSection>
              <SectionTitle>Program Description</SectionTitle>
              <SectionContent>
                <p>{course.description}</p>
              </SectionContent>
            </DetailSection>

            <DetailSection>
              <SectionTitle>Key Information</SectionTitle>
              <SectionContent>
                <DetailItem>
                  <DetailIcon>
                    <MapPin size={18} />
                  </DetailIcon>
                  <div>
                    <DetailText>
                      <strong>Location:</strong> {course.location.campus}
                    </DetailText>
                    <DetailText $small>{course.location.address}</DetailText>
                  </div>
                </DetailItem>
                <DetailItem>
                  <DetailIcon>
                    <Calendar size={18} />
                  </DetailIcon>
                  <div>
                    <DetailText>
                      <strong>Next Intake:</strong> {course.nextIntake}
                    </DetailText>
                    <DetailText $small>
                      Application Deadline: {course.applicationDeadline}
                    </DetailText>
                  </div>
                </DetailItem>
                <DetailItem>
                  <DetailIcon>
                    <Clock size={18} />
                  </DetailIcon>
                  <DetailText>
                    <strong>Duration:</strong> {course.duration}
                  </DetailText>
                </DetailItem>
                <DetailItem>
                  <DetailIcon>
                    <Globe size={18} />
                  </DetailIcon>
                  <DetailText>
                    <strong>Website:</strong>{" "}
                    <a
                      href={course.website}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {course.website}
                    </a>
                  </DetailText>
                </DetailItem>
              </SectionContent>
            </DetailSection>
          </TabContent>

          <TabContent $show={activeTab === "overview"}>
            <DetailSection>
              <SectionTitle>Entry Requirements</SectionTitle>
              <SectionContent>
                <DetailItem>
                  <DetailIcon>
                    <BookOpen size={18} />
                  </DetailIcon>
                  <DetailText>
                    <strong>Language Proficiency:</strong> {course.entryScore}
                  </DetailText>
                </DetailItem>
                <RequirementsList>
                  {course.requirements.map((req, index) => (
                    <RequirementItem key={index}>
                      <DetailText>{req}</DetailText>
                    </RequirementItem>
                  ))}
                </RequirementsList>
              </SectionContent>
            </DetailSection>
          </TabContent>

          <TabContent $show={activeTab === "fees"}>
            <DetailSection>
              <SectionTitle>Tuition Fees</SectionTitle>
              <SectionContent>
                <DetailItem>
                  <DetailIcon>
                    <DollarSign size={18} />
                  </DetailIcon>
                  <TuitionText>
                    {course.annualTuition.amount.toLocaleString()}{" "}
                    {course.annualTuition.currency}/year
                  </TuitionText>
                </DetailItem>
              </SectionContent>
            </DetailSection>

            <DetailSection>
              <SectionTitle>Scholarships & Funding</SectionTitle>
              <SectionContent>
                {course.scholarships.map((scholarship, index) => (
                  <ScholarshipCard key={index}>
                    <DetailText>{scholarship}</DetailText>
                  </ScholarshipCard>
                ))}
              </SectionContent>
            </DetailSection>
          </TabContent>

          <TabContent $show={activeTab === "careers"}>
            <DetailSection>
              <SectionTitle>Career Outcomes</SectionTitle>
              <SectionContent>
                <DetailItem>
                  <DetailIcon>
                    <Briefcase size={18} />
                  </DetailIcon>
                  <DetailText>
                    <strong>Graduate Employment Rate:</strong> 95% within 3
                    months
                  </DetailText>
                </DetailItem>
                <div style={{ marginTop: "1rem" }}>
                  {course.careerOutcomes.map((outcome, index) => (
                    <OutcomeItem key={index}>
                      <DetailText>{outcome}</DetailText>
                    </OutcomeItem>
                  ))}
                </div>
              </SectionContent>
            </DetailSection>
          </TabContent>

          <ActionButtons>
            <BackButton onClick={() => router.back()}>
              <ArrowLeft size={18} /> Back to Results
            </BackButton>
            <ApplyButton onClick={() => router.push("/application")}>
              Apply Now
            </ApplyButton>
          </ActionButtons>
        </CourseDetailContainer>
      </MainContent>
    </PageContainer>
  );
};

export default CourseDetailsPage;
