"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import {
  PageContainer,
  HeaderSection,
  HeaderContent,
  HeaderTitle,
  MainContent,
  ProfileContainer,
  ProfileHeader,
  ProfilePhoto,
  ProfileInfo,
  ProfileName,
  ProfileStatus,
  StatusBadge,
  SectionContainer,
  SectionTitle,
  SectionContent,
  InfoGrid,
  InfoItem,
  InfoLabel,
  InfoValue,
  DocumentGrid,
  DocumentCard,
  DocumentImage,
  DocumentName,
  RejectionReason,
  Divider
} from './styles';
import {
  User,
  Mail,
  Phone,
  CalendarDays,
  MapPin,
  Home,
  BookOpen,
  ShieldAlert,
  Contact,
  FileText,
  Clock
} from 'lucide-react';

const DocumentPreview = ({ url, alt }) => {
  const [error, setError] = useState(false);

  if (error || !url) {
    return (
      <div style={{
        width: '100%',
        height: '150px',
        backgroundColor: '#f3f4f6',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#6b7280',
        borderRadius: '8px'
      }}>
        Document Not Available
      </div>
    );
  }

  return (
    <Image
      src={url}
      alt={alt}
      fill
      style={{ objectFit: 'contain' }}
      onError={() => setError(true)}
    />
  );
};

const StudentProfilePage = () => {
  const profile = {
    personalInfo: {
      firstName: 'Muhammed',
      lastName: 'Easa',
      email: 'drkjoker123@gmail.com',
      phone: '+9170125 263',
      dateOfBirth: '2025-05-29',
      gender: 'female',
      personalPhoto: 'https://userdocss.s3.ap-south-1.amazonaws.com/1748587661070-freedom_mobile_banner.png'
    },
    addressInfo: {
      address: 'Trivandrum',
      city: 'Dubai',
      state: 'Kerala',
      zipCode: '645563',
      country: 'UK'
    },
    academicInfo: {
      studentId: '1234567',
      program: 'science',
      yearOfStudy: '3',
      academicCertificate: 'https://userdocss.s3.ap-south-1.amazonaws.com/1748587662103-Harvard-University-Campus.jpg'
    },
    emergencyContact: {
      name: '3redsa',
      phone: 'erfdvc'
    },
    documents: {
      passportCopy: 'https://userdocss.s3.ap-south-1.amazonaws.com/1748587661854-future_mobile_banner.png',
      residencyPermit: 'https://userdocss.s3.ap-south-1.amazonaws.com/1748587662372-terry_card.png'
    },
    status: {
      current: 'pending',
      reasons: null,
      updatedAt: '2025-05-30T06:47:42.630Z'
    }
  };

  const isRejected = profile.status.current === 'rejected';

  return (
    <PageContainer>
      <HeaderSection>
        <HeaderContent>
          <HeaderTitle>Student Dashboard</HeaderTitle>
        </HeaderContent>
      </HeaderSection>

      <MainContent>
        <ProfileContainer>
          <ProfileHeader>
            <ProfilePhoto>
              <div style={{ 
                position: 'relative', 
                width: '100px', 
                height: '100px',
                borderRadius: '50%',
                overflow: 'hidden',
                border: '3px solid #050A30'
              }}>
                {profile.personalInfo.personalPhoto ? (
                  <Image
                    src={profile.personalInfo.personalPhoto}
                    alt="Student Photo"
                    fill
                    style={{ objectFit: 'cover' }}
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'flex';
                    }}
                  />
                ) : null}
                <div style={{
                  display: 'none',
                  width: '100%',
                  height: '100%',
                  backgroundColor: '#f3f4f6',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#6b7280'
                }}>
                  No Photo
                </div>
              </div>
            </ProfilePhoto>
            <ProfileInfo>
              <ProfileName>
                {profile.personalInfo.firstName} {profile.personalInfo.lastName}
              </ProfileName>
              <ProfileStatus>
                Status: 
                <StatusBadge $status={profile.status.current}>
                  {profile.status.current}
                </StatusBadge>
                {profile.status.current === 'pending' && (
                  <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.875rem', color: '#6b7280' }}>
                    <Clock size={16} /> Since {new Date(profile.status.updatedAt).toLocaleDateString()}
                  </span>
                )}
              </ProfileStatus>
            </ProfileInfo>
          </ProfileHeader>

          {isRejected && profile.status.reasons && (
            <RejectionReason>
              <ShieldAlert size={20} />
              <div>
                <h4>Application Rejected</h4>
                <p>{profile.status.reasons}</p>
              </div>
            </RejectionReason>
          )}

          <SectionContainer>
            <SectionTitle>
              <User size={20} /> Personal Information
            </SectionTitle>
            <SectionContent>
              <InfoGrid>
                <InfoItem>
                  <InfoLabel>First Name</InfoLabel>
                  <InfoValue>{profile.personalInfo.firstName}</InfoValue>
                </InfoItem>
                <InfoItem>
                  <InfoLabel>Last Name</InfoLabel>
                  <InfoValue>{profile.personalInfo.lastName}</InfoValue>
                </InfoItem>
                <InfoItem>
                  <InfoLabel>Email</InfoLabel>
                  <InfoValue>
                    <a href={`mailto:${profile.personalInfo.email}`}>
                      {profile.personalInfo.email}
                    </a>
                  </InfoValue>
                </InfoItem>
                <InfoItem>
                  <InfoLabel>Phone</InfoLabel>
                  <InfoValue>
                    <a href={`tel:${profile.personalInfo.phone}`}>
                      {profile.personalInfo.phone}
                    </a>
                  </InfoValue>
                </InfoItem>
                <InfoItem>
                  <InfoLabel>Date of Birth</InfoLabel>
                  <InfoValue>
                    {new Date(profile.personalInfo.dateOfBirth).toLocaleDateString()}
                  </InfoValue>
                </InfoItem>
                <InfoItem>
                  <InfoLabel>Gender</InfoLabel>
                  <InfoValue>{profile.personalInfo.gender}</InfoValue>
                </InfoItem>
              </InfoGrid>
            </SectionContent>
          </SectionContainer>

          <Divider />

          <SectionContainer>
            <SectionTitle>
              <MapPin size={20} /> Address Information
            </SectionTitle>
            <SectionContent>
              <InfoGrid>
                <InfoItem>
                  <InfoLabel>Address</InfoLabel>
                  <InfoValue>{profile.addressInfo.address}</InfoValue>
                </InfoItem>
                <InfoItem>
                  <InfoLabel>City</InfoLabel>
                  <InfoValue>{profile.addressInfo.city}</InfoValue>
                </InfoItem>
                <InfoItem>
                  <InfoLabel>State</InfoLabel>
                  <InfoValue>{profile.addressInfo.state}</InfoValue>
                </InfoItem>
                <InfoItem>
                  <InfoLabel>Zip Code</InfoLabel>
                  <InfoValue>{profile.addressInfo.zipCode}</InfoValue>
                </InfoItem>
                <InfoItem>
                  <InfoLabel>Country</InfoLabel>
                  <InfoValue>{profile.addressInfo.country}</InfoValue>
                </InfoItem>
              </InfoGrid>
            </SectionContent>
          </SectionContainer>

          <Divider />

          <SectionContainer>
            <SectionTitle>
              <BookOpen size={20} /> Academic Information
            </SectionTitle>
            <SectionContent>
              <InfoGrid>
                <InfoItem>
                  <InfoLabel>Student ID</InfoLabel>
                  <InfoValue>{profile.academicInfo.studentId}</InfoValue>
                </InfoItem>
                <InfoItem>
                  <InfoLabel>Program</InfoLabel>
                  <InfoValue>{profile.academicInfo.program}</InfoValue>
                </InfoItem>
                <InfoItem>
                  <InfoLabel>Year of Study</InfoLabel>
                  <InfoValue>{profile.academicInfo.yearOfStudy}</InfoValue>
                </InfoItem>
              </InfoGrid>
            </SectionContent>
          </SectionContainer>

          <Divider />

          <SectionContainer>
            <SectionTitle>
              <Contact size={20} /> Emergency Contact
            </SectionTitle>
            <SectionContent>
              <InfoGrid>
                <InfoItem>
                  <InfoLabel>Contact Name</InfoLabel>
                  <InfoValue>{profile.emergencyContact.name}</InfoValue>
                </InfoItem>
                <InfoItem>
                  <InfoLabel>Contact Phone</InfoLabel>
                  <InfoValue>
                    <a href={`tel:${profile.emergencyContact.phone}`}>
                      {profile.emergencyContact.phone}
                    </a>
                  </InfoValue>
                </InfoItem>
              </InfoGrid>
            </SectionContent>
          </SectionContainer>

          <Divider />

          <SectionContainer>
            <SectionTitle>
              <FileText size={20} /> Documents
            </SectionTitle>
            <SectionContent>
              <DocumentGrid>
                <DocumentCard>
                  <DocumentImage>
                    <DocumentPreview 
                      url={profile.documents.passportCopy} 
                      alt="Passport Copy" 
                    />
                  </DocumentImage>
                  <DocumentName>Passport Copy</DocumentName>
                </DocumentCard>
                <DocumentCard>
                  <DocumentImage>
                    <DocumentPreview 
                      url={profile.documents.residencyPermit} 
                      alt="Residency Permit" 
                    />
                  </DocumentImage>
                  <DocumentName>Residency Permit</DocumentName>
                </DocumentCard>
                <DocumentCard>
                  <DocumentImage>
                    <DocumentPreview 
                      url={profile.academicInfo.academicCertificate} 
                      alt="Academic Certificate" 
                    />
                  </DocumentImage>
                  <DocumentName>Academic Certificate</DocumentName>
                </DocumentCard>
              </DocumentGrid>
            </SectionContent>
          </SectionContainer>
        </ProfileContainer>
      </MainContent>
    </PageContainer>
  );
};

export default StudentProfilePage;