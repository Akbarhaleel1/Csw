export const styles = {
  // Main container
  container: {
    minHeight: '100vh',
    padding: '2rem 1rem',
    backgroundColor: '#F4F6FC',
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif'
  },

  // Form wrapper
  formWrapper: {
    maxWidth: '64rem',
    margin: '0 auto'
  },

  // Main form card
  formCard: {
    backgroundColor: 'white',
    borderRadius: '1rem',
    boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
    overflow: 'hidden'
  },

  // Header section
  header: {
    padding: '1.5rem 2rem',
    backgroundColor: '#050A30',
    color: 'white'
  },

  headerContent: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.75rem'
  },

  headerTitle: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    margin: 0,
    marginBottom: '0.25rem'
  },

  headerSubtitle: {
    color: '#93C5FD',
    fontSize: '0.875rem',
    margin: 0
  },

  // Form content
  formContent: {
    padding: '2rem'
  },

  // Profile image section
  profileSection: {
    marginBottom: '2rem',
    textAlign: 'center'
  },

  profileImageContainer: {
    position: 'relative',
    display: 'inline-block'
  },

  profileImage: {
    width: '8rem',
    height: '8rem',
    margin: '0 auto',
    borderRadius: '50%',
    overflow: 'hidden',
    border: '4px solid #E5E7EB',
    backgroundColor: '#F3F4F6',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },

  profileImagePreview: {
    width: '100%',
    height: '100%',
    objectFit: 'cover'
  },

  profileImagePlaceholder: {
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#9CA3AF'
  },

  cameraButton: {
    position: 'absolute',
    bottom: '-0.5rem',
    right: '-0.5rem',
    padding: '0.5rem',
    borderRadius: '50%',
    backgroundColor: '#050A30',
    color: 'white',
    cursor: 'pointer',
    border: 'none',
    transition: 'all 0.2s ease',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    '&:hover': {
      opacity: 0.8
    }
  },

  hiddenInput: {
    display: 'none'
  },

  profileText: {
    fontSize: '0.875rem',
    color: '#6B7280',
    marginTop: '0.5rem'
  },

  // Section headers
  sectionHeader: {
    fontSize: '1.25rem',
    fontWeight: 'bold',
    color: '#1F2937',
    marginBottom: '1.5rem',
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem'
  },

  sectionIcon: {
    color: '#050A30'
  },

  // Form sections
  formSection: {
    marginBottom: '2rem'
  },

  // Grid layouts
  gridContainer: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '1.5rem'
  },

  gridFullWidth: {
    gridColumn: '1 / -1'
  },

  // Form inputs
  inputGroup: {
    display: 'flex',
    flexDirection: 'column'
  },

  label: {
    display: 'block',
    fontSize: '0.875rem',
    fontWeight: '600',
    color: '#374151',
    marginBottom: '0.5rem'
  },

  input: {
    width: '100%',
    padding: '0.75rem 1rem',
    border: '1px solid #D1D5DB',
    borderRadius: '0.5rem',
    fontSize: '1rem',
    transition: 'all 0.2s ease',
    backgroundColor: 'white',
    outline: 'none',
    boxSizing: 'border-box',
    '&:focus': {
      borderColor: '#3B82F6',
      boxShadow: '0 0 0 3px rgba(59, 130, 246, 0.1)'
    }
  },

  select: {
    width: '100%',
    padding: '0.75rem 1rem',
    border: '1px solid #D1D5DB',
    borderRadius: '0.5rem',
    fontSize: '1rem',
    transition: 'all 0.2s ease',
    backgroundColor: 'white',
    outline: 'none',
    cursor: 'pointer',
    boxSizing: 'border-box',
    '&:focus': {
      borderColor: '#3B82F6',
      boxShadow: '0 0 0 3px rgba(59, 130, 246, 0.1)'
    }
  },

  // Error styles
  errorText: {
    color: '#EF4444',
    fontSize: '0.75rem',
    marginTop: '0.25rem'
  },

  inputError: {
    borderColor: '#EF4444',
    boxShadow: '0 0 0 3px rgba(239, 68, 68, 0.1)'
  },

  // Submit button
  submitContainer: {
    display: 'flex',
    justifyContent: 'center',
    paddingTop: '1.5rem'
  },

  submitButton: {
    padding: '1rem 2rem',
    backgroundColor: '#050A30',
    color: 'white',
    fontWeight: '600',
    borderRadius: '0.5rem',
    border: 'none',
    cursor: 'pointer',
    transition: 'all 0.2s ease',
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
    fontSize: '1rem',
    '&:hover': {
      opacity: 0.9,
      transform: 'translateY(-1px)',
      boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1)'
    }
  },

  // Document upload section
  documentsSection: {
    marginBottom: '2rem'
  },

  documentUploadGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
    gap: '1.5rem'
  },

  documentUploadCard: {
    border: '2px dashed #D1D5DB',
    borderRadius: '0.75rem',
    padding: '1.5rem',
    textAlign: 'center',
    transition: 'all 0.3s ease',
    backgroundColor: '#FAFAFA',
    cursor: 'pointer',
    '&:hover': {
      borderColor: '#050A30',
      backgroundColor: '#F8FAFC'
    }
  },

  documentUploadCardActive: {
    borderColor: '#059669',
    backgroundColor: '#ECFDF5',
    borderStyle: 'solid'
  },

  documentIcon: {
    color: '#6B7280',
    marginBottom: '0.75rem'
  },

  documentTitle: {
    fontSize: '1rem',
    fontWeight: '600',
    color: '#1F2937',
    marginBottom: '0.5rem'
  },

  documentDescription: {
    fontSize: '0.875rem',
    color: '#6B7280',
    marginBottom: '1rem'
  },

  documentStatus: {
    fontSize: '0.75rem',
    padding: '0.25rem 0.75rem',
    borderRadius: '1rem',
    fontWeight: '500',
    display: 'inline-flex',
    alignItems: 'center',
    gap: '0.25rem'
  },

  documentStatusUploaded: {
    backgroundColor: '#D1FAE5',
    color: '#065F46'
  },

  documentStatusPending: {
    backgroundColor: '#FEF3C7',
    color: '#92400E'
  },

  documentFileName: {
    fontSize: '0.875rem',
    color: '#374151',
    marginTop: '0.5rem',
    fontWeight: '500',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '0.25rem',
    wordBreak: 'break-word'
  },

  // CRM section styles
  crmSection: {
    backgroundColor: '#FEF2F2',
    border: '1px solid #FECACA',
    borderRadius: '0.75rem',
    padding: '1.5rem',
    marginBottom: '2rem'
  },

  crmHeader: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.75rem',
    marginBottom: '1rem'
  },

  crmIcon: {
    color: '#DC2626'
  },

  crmTitle: {
    fontSize: '1.125rem',
    fontWeight: 'bold',
    color: '#991B1B'
  },

  crmSubtitle: {
    fontSize: '0.875rem',
    color: '#7F1D1D',
    marginBottom: '1rem',
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem'
  },

  crmInputGroup: {
    display: 'flex',
    flexDirection: 'column'
  },

  crmInput: {
    width: '100%',
    padding: '0.75rem 1rem',
    border: '1px solid #FCA5A5',
    borderRadius: '0.5rem',
    fontSize: '1rem',
    backgroundColor: 'white',
    outline: 'none',
    transition: 'all 0.2s ease',
    boxSizing: 'border-box',
    '&:focus': {
      borderColor: '#DC2626',
      boxShadow: '0 0 0 3px rgba(220, 38, 38, 0.1)'
    }
  },

  // Responsive styles
  '@media (max-width: 768px)': {
    formContent: {
      padding: '1.5rem'
    },
    header: {
      padding: '1rem 1.5rem'
    },
    headerTitle: {
      fontSize: '1.25rem'
    },
    gridContainer: {
      gridTemplateColumns: '1fr'
    },
    documentUploadGrid: {
      gridTemplateColumns: '1fr'
    }
  }
};
