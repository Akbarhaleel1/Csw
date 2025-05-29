
'use client'
import React, { useState } from 'react';
import { Camera, Upload, User, Mail, Phone, MapPin, Calendar, GraduationCap, FileText, Save, Shield, AlertTriangle, CheckCircle, Clock } from 'lucide-react';
import DocumentUploadSection from './components/DocumentUploadSection';
import { useForm } from 'react-hook-form';
import { styles } from './constance';
import axios from 'axios';

// Helper function to merge styles with hover effects
const mergeStyles = (baseStyle, additionalStyles) => {
  return {
    ...baseStyle,
    ...additionalStyles
  };
};

export default function StudentForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
    reset
  } = useForm({
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      dateOfBirth: '',
      gender: '',
      
      // Address Information
      address: '',
      city: '',
      state: '',
      zipCode: '',
      country: '',
      
      // Academic Information
      studentId: '',
      program: '',
      yearOfStudy: '',
      
      // Emergency Contact
      emergencyContact: '',
      emergencyPhone: '',
      
      // Document Uploads will be handled separately
          documents: {}
    }
  });

  const [imagePreview, setImagePreview] = useState(null);
  const [hoveredDocument, setHoveredDocument] = useState(null);
  const [documents, setDocuments] = useState({
    personalPhoto: null,
    passportCopy: null,
    academicCertificate: null,
    residencyPermit: null,
    additionalDoc1: null,
    additionalDoc2: null
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleDocumentsUpdate = (documents) => {
    setValue('documents', documents);
     setDocuments(documents);    
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      // Validate image size (max 5MB)
      if (file.size > 5 * 1024 * 1024) {
        setSubmitError('Image size should be less than 5MB');
        return;
      }
      
      setDocuments(prev => ({
        ...prev,
        personalPhoto: file
      }));
      
      const reader = new FileReader();
      reader.onload = (e) => {
        setImagePreview(e.target.result);
      };
      reader.readAsDataURL(file);
      setSubmitError('');
    }
  };

  const onSubmit = async (data) => {
    console.log('documents in onsubmit', documents)
  setIsSubmitting(true);
  setSubmitError('');
  setSubmitSuccess(false);
  
  try {
    // Create FormData for file uploads
    const formDataToSend = new FormData();
    
    // Append all form data (excluding documents)
    for (const key in data) {
      if (key !== 'documents' && data[key] !== null && data[key] !== undefined) {
        formDataToSend.append(key, data[key]);
      }
    }
    
    // Append all documents that exist
    console.log('documents', documents);

    for (const docKey in documents) {
      console.log('docKey', docKey)
      if (documents[docKey]) {
        formDataToSend.append(docKey, documents[docKey]);
      }
    }

    const passportFile = formDataToSend.get('passportCopy');
console.log('passportFile', passportFile)


    // Make API call
    const response = await axios.post('http://localhost:3001/studentForm', formDataToSend, {
      headers: {
        'Content-Type': 'multipart/form-data',
      }
    });

    if (response.data.success) {
      setSubmitSuccess(true);
      reset();
      setDocuments({
        personalPhoto: null,
        passportCopy: null,
        academicCertificate: null,
        residencyPermit: null,
      });
      setImagePreview(null);
    } else {
      setSubmitError(response.data.message || 'Submission failed');
    }
  } catch (error) {
    console.error('Error submitting form:', error);
    setSubmitError(error.response?.data?.message || 'An error occurred while submitting the form');
  } finally {
    setIsSubmitting(false);
  }
  };
  

  const getInputStyle = (fieldName) => {
    return mergeStyles(styles.input, errors[fieldName] ? styles.inputError : {});
  };

  const getSelectStyle = (fieldName) => {
    return mergeStyles(styles.select, errors[fieldName] ? styles.inputError : {});
  };

  const getDocumentCardStyle = (documentKey) => {
    const hasFile = documents[documentKey];
    const isHovered = hoveredDocument === documentKey;
    
    return mergeStyles(
      styles.documentUploadCard,
      hasFile ? styles.documentUploadCardActive : {},
      isHovered ? { borderColor: '#050A30', backgroundColor: '#F8FAFC' } : {}
    );
  };

  const getDocumentStatus = (documentKey, isRequired) => {
    const hasFile = documents[documentKey];
    const Icon = hasFile ? CheckCircle : Clock;
    const statusText = hasFile ? 'Uploaded' : (isRequired ? 'Required' : 'Optional');
    const statusStyle = hasFile ? styles.documentStatusUploaded : styles.documentStatusPending;
    
    return (
      <div style={mergeStyles(styles.documentStatus, statusStyle)}>
        <Icon size={12} />
        <span>{statusText}</span>
      </div>
    );
  };

  return (
    <div style={styles.container}>
      <div style={styles.formWrapper}>
        <div style={styles.formCard}>
          {/* Header */}
          <div style={styles.header}>
            <div style={styles.headerContent}>
              <GraduationCap size={32} />
              <div>
                <h1 style={styles.headerTitle}>Student Registration Form</h1>
                <p style={styles.headerSubtitle}>Please fill in all required information and upload necessary documents</p>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} style={styles.formContent}>
            {/* Submission Status */}
            {submitError && (
              <div style={{ 
                backgroundColor: '#FEF2F2',
                color: '#B91C1C',
                padding: '1rem',
                borderRadius: '0.5rem',
                marginBottom: '1.5rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem'
              }}>
                <AlertTriangle size={20} />
                <span>{submitError}</span>
              </div>
            )}
            
            {submitSuccess && (
              <div style={{ 
                backgroundColor: '#ECFDF5',
                color: '#065F46',
                padding: '1rem',
                borderRadius: '0.5rem',
                marginBottom: '1.5rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem'
              }}>
                <CheckCircle size={20} />
                <span>Registration submitted successfully!</span>
              </div>
            )}
     
            {/* Profile Image Section */}
            <div style={styles.profileSection}>
              <div style={styles.profileImageContainer}>
                <div style={styles.profileImage}>
                  {imagePreview ? (
                    <img src={imagePreview} alt="Profile" style={styles.profileImagePreview} />
                  ) : (
                    <div style={styles.profileImagePlaceholder}>
                      <User size={64} />
                    </div>
                  )}
                </div>
                <label style={styles.cameraButton}>
                  <Camera size={20} />
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageUpload}
                    style={styles.hiddenInput}
                  />
                </label>
              </div>
              <p style={styles.profileText}>Upload your profile photo (JPEG/PNG, max 5MB)</p>
            </div>

            {/* Personal Information */}
            <div style={styles.formSection}>
              <h2 style={styles.sectionHeader}>
                <User size={20} style={styles.sectionIcon} />
                Personal Information
              </h2>
              
              <div style={styles.gridContainer}>
                <div style={styles.inputGroup}>
                  <label style={styles.label}>First Name *</label>
                  <input
                    type="text"
                    {...register("firstName", { required: "First name is required" })}
                    style={getInputStyle('firstName')}
                    placeholder="Enter your first name"
                  />
                  {errors.firstName && <p style={styles.errorText}>{errors.firstName.message}</p>}
                </div>
                
                <div style={styles.inputGroup}>
                  <label style={styles.label}>Last Name *</label>
                  <input
                    type="text"
                    {...register("lastName", { required: "Last name is required" })}
                    style={getInputStyle('lastName')}
                    placeholder="Enter your last name"
                  />
                  {errors.lastName && <p style={styles.errorText}>{errors.lastName.message}</p>}
                </div>
                
                <div style={styles.inputGroup}>
                  <label style={styles.label}>Email Address *</label>
                  <input
                    type="email"
                    {...register("email", { 
                      required: "Email is required",
                      pattern: {
                        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                        message: "Please enter a valid email"
                      }
                    })}
                    style={getInputStyle('email')}
                    placeholder="Enter your email"
                  />
                  {errors.email && <p style={styles.errorText}>{errors.email.message}</p>}
                </div>
                
                <div style={styles.inputGroup}>
                  <label style={styles.label}>Phone Number *</label>
                  <input
                    type="tel"
                    {...register("phone", { required: "Phone number is required" })}
                    style={getInputStyle('phone')}
                    placeholder="Enter your phone number"
                  />
                  {errors.phone && <p style={styles.errorText}>{errors.phone.message}</p>}
                </div>
                
                <div style={styles.inputGroup}>
                  <label style={styles.label}>Date of Birth *</label>
                  <input
                    type="date"
                    {...register("dateOfBirth", { required: "Date of birth is required" })}
                    style={getInputStyle('dateOfBirth')}
                  />
                  {errors.dateOfBirth && <p style={styles.errorText}>{errors.dateOfBirth.message}</p>}
                </div>
                
                <div style={styles.inputGroup}>
                  <label style={styles.label}>Gender</label>
                  <select
                    {...register("gender")}
                    style={styles.select}
                  >
                    <option value="">Select gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                    <option value="prefer-not-to-say">Prefer not to say</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Address Information */}
            <div style={styles.formSection}>
              <h2 style={styles.sectionHeader}>
                <MapPin size={20} style={styles.sectionIcon} />
                Address Information
              </h2>
              
              <div style={styles.gridContainer}>
                <div style={mergeStyles(styles.inputGroup, styles.gridFullWidth)}>
                  <label style={styles.label}>Street Address</label>
                  <input
                    type="text"
                    {...register("address")}
                    style={styles.input}
                    placeholder="Enter your street address"
                  />
                </div>
                
                <div style={styles.inputGroup}>
                  <label style={styles.label}>City</label>
                  <input
                    type="text"
                    {...register("city")}
                    style={styles.input}
                    placeholder="Enter your city"
                  />
                </div>
                
                <div style={styles.inputGroup}>
                  <label style={styles.label}>State/Province</label>
                  <input
                    type="text"
                    {...register("state")}
                    style={styles.input}
                    placeholder="Enter your state"
                  />
                </div>
                
                <div style={styles.inputGroup}>
                  <label style={styles.label}>ZIP/Postal Code</label>
                  <input
                    type="text"
                    {...register("zipCode")}
                    style={styles.input}
                    placeholder="Enter ZIP code"
                  />
                </div>
                
                <div style={styles.inputGroup}>
                  <label style={styles.label}>Country</label>
                  <select
                    {...register("country")}
                    style={styles.select}
                  >
                    <option value="">Select country</option>
                    <option value="US">United States</option>
                    <option value="CA">Canada</option>
                    <option value="UK">United Kingdom</option>
                    <option value="AU">Australia</option>
                    <option value="DE">Germany</option>
                    <option value="FR">France</option>
                    <option value="JP">Japan</option>
                    <option value="IN">India</option>
                    <option value="BR">Brazil</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Academic Information */}
            <div style={styles.formSection}>
              <h2 style={styles.sectionHeader}>
                <GraduationCap size={20} style={styles.sectionIcon} />
                Academic Information
              </h2>
              
              <div style={styles.gridContainer}>
                <div style={styles.inputGroup}>
                  <label style={styles.label}>Student ID</label>
                  <input
                    type="text"
                    {...register("studentId")}
                    style={styles.input}
                    placeholder="Enter student ID"
                  />
                </div>
                
                <div style={styles.inputGroup}>
                  <label style={styles.label}>Program/Course *</label>
                  <select
                    {...register("program", { required: "Program is required" })}
                    style={getSelectStyle('program')}
                  >
                    <option value="">Select your program</option>
                    <option value="computer-science">Computer Science</option>
                    <option value="engineering">Engineering</option>
                    <option value="business">Business Administration</option>
                    <option value="medicine">Medicine</option>
                    <option value="law">Law</option>
                    <option value="arts">Liberal Arts</option>
                    <option value="science">Natural Sciences</option>
                    <option value="architecture">Architecture</option>
                    <option value="other">Other</option>
                  </select>
                  {errors.program && <p style={styles.errorText}>{errors.program.message}</p>}
                </div>
                
                <div style={styles.inputGroup}>
                  <label style={styles.label}>Year of Study</label>
                  <select
                    {...register("yearOfStudy")}
                    style={styles.select}
                  >
                    <option value="">Select year</option>
                    <option value="1">1st Year</option>
                    <option value="2">2nd Year</option>
                    <option value="3">3rd Year</option>
                    <option value="4">4th Year</option>
                    <option value="5+">5th Year+</option>
                    <option value="graduate">Graduate</option>
                    <option value="postgraduate">Postgraduate</option>
                  </select>
                </div>
              </div>
            </div>

            <DocumentUploadSection 
        onDocumentsUpdate={handleDocumentsUpdate}
        initialDocuments={watch('documents') || {}}
      />

            {/* Emergency Contact */}
            <div style={styles.formSection}>
              <h2 style={styles.sectionHeader}>
                <Phone size={20} style={styles.sectionIcon} />
                Emergency Contact
              </h2>
              
              <div style={styles.gridContainer}>
                <div style={styles.inputGroup}>
                  <label style={styles.label}>Contact Name</label>
                  <input
                    type="text"
                    {...register("emergencyContact")}
                    style={styles.input}
                    placeholder="Full name of emergency contact"
                  />
                </div>
                
                <div style={styles.inputGroup}>
                  <label style={styles.label}>Contact Phone</label>
                  <input
                    type="tel"
                    {...register("emergencyPhone")}
                    style={styles.input}
                    placeholder="Emergency contact phone"
                  />
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <div style={styles.submitContainer}>
              <button
                type="submit"
                style={styles.submitButton}
                disabled={isSubmitting}
              >
                <Save size={20} />
                <span>{isSubmitting ? 'Submitting...' : 'Submit Registration'}</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}