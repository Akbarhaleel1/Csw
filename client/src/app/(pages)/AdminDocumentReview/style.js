export const adminStyles = {
  dashboard: {
    minHeight: '100vh',
    background: 'linear-gradient(135deg, #f0f4ff, #ffffff)',
    fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, sans-serif'
  },

  header: {
    background: 'linear-gradient(to right, #3b82f6, #6366f1)',
    color: '#ffffff',
    padding: '1.5rem 2rem',
    boxShadow: '0 8px 20px rgba(0, 0, 0, 0.08)',
    borderBottom: 'none'
  },

  headerTitle: {
    fontSize: '2rem',
    fontWeight: '700',
    margin: 0,
    display: 'flex',
    alignItems: 'center',
    gap: '0.75rem'
  },

  headerSubtitle: {
    fontSize: '1rem',
    opacity: 0.9,
    margin: '0.5rem 0 0 0',
    fontWeight: '400'
  },

  mainContent: {
    display: 'grid',
    gridTemplateColumns: '1fr 400px',
    gap: '2rem',
    padding: '2.5rem',
    maxWidth: '1400px',
    margin: '0 auto'
  },

  leftPanel: {
    backgroundColor: '#ffffff',
    borderRadius: '16px',
    boxShadow: '0 10px 25px rgba(0, 0, 0, 0.05)',
    overflow: 'hidden'
  },

  rightPanel: {
    backgroundColor: '#ffffff',
    borderRadius: '16px',
    boxShadow: '0 10px 25px rgba(0, 0, 0, 0.05)',
    padding: '2rem',
    height: 'fit-content'
  },

  sectionTitle: {
    fontSize: '1.5rem',
    fontWeight: '700',
    color: '#1e293b',
    padding: '2rem 2rem 1rem',
    borderBottom: '2px solid #e5e7eb'
  },

  applicationCard: {
    padding: '1.75rem 2rem',
    borderBottom: '1px solid #e5e7eb',
    transition: '0.3s ease',
    backgroundColor: 'white',
    borderRadius: '12px',
    margin: '1rem',
    boxShadow: '0 1px 5px rgba(0,0,0,0.03)',
    cursor: 'pointer'
  },

  applicationCardHover: {
    backgroundColor: '#f0f9ff',
    boxShadow: '0 6px 18px rgba(59, 130, 246, 0.1)',
    transform: 'translateY(-2px)'
  },

  applicationCardActive: {
    backgroundColor: '#eff6ff',
    borderLeft: '4px solid #3b82f6'
  },

  studentName: {
    fontSize: '1.25rem',
    fontWeight: '700',
    color: '#0f172a'
  },

  applicationId: {
    fontSize: '0.9rem',
    color: '#475569'
  },

  statusBadge: {
    display: 'inline-block',
    padding: '0.4rem 0.8rem',
    borderRadius: '9999px',
    fontSize: '0.75rem',
    fontWeight: '600',
    textTransform: 'uppercase',
    letterSpacing: '0.05em'
  },

  statusPending: {
    backgroundColor: '#fef3c7',
    color: '#92400e'
  },

  statusApproved: {
    backgroundColor: '#d1fae5',
    color: '#065f46'
  },

  statusRejected: {
    backgroundColor: '#fecaca',
    color: '#991b1b'
  },

  documentGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))',
    gap: '1.5rem',
    padding: '2rem'
  },

  documentCard: {
    border: '2px solid #e2e8f0',
    borderRadius: '12px',
    padding: '1.25rem',
    textAlign: 'center',
    transition: '0.3s ease',
    backgroundColor: '#ffffff',
    cursor: 'pointer'
  },

  documentCardHover: {
    borderColor: '#6366f1',
    boxShadow: '0 6px 12px rgba(99, 102, 241, 0.15)'
  },

  documentIcon: {
    fontSize: '2.75rem',
    color: '#3b82f6'
  },

  documentName: {
    fontSize: '1rem',
    fontWeight: '600',
    color: '#1e293b',
    marginTop: '0.5rem'
  },

  documentActions: {
    display: 'flex',
    gap: '0.75rem',
    justifyContent: 'center',
    marginTop: '1rem'
  },

  actionButton: {
    padding: '0.6rem 1.2rem',
    borderRadius: '8px',
    fontSize: '0.75rem',
    fontWeight: '600',
    cursor: 'pointer',
    border: 'none',
    transition: 'all 0.3s ease',
    textTransform: 'uppercase',
    letterSpacing: '0.05em'
  },

  previewButton: {
    backgroundColor: '#3b82f6',
    color: '#ffffff'
  },

  previewButtonHover: {
    backgroundColor: '#2563eb'
  },

  downloadButton: {
    backgroundColor: '#e5e7eb',
    color: '#1e293b'
  },

  downloadButtonHover: {
    backgroundColor: '#cbd5e1'
  },

  decisionPanel: {
    marginTop: '2rem',
    padding: '2rem',
    backgroundColor: '#f1f5f9',
    borderRadius: '12px',
    border: '1px solid #e2e8f0'
  },

  decisionTitle: {
    fontSize: '1.25rem',
    fontWeight: '700',
    color: '#1e293b',
    marginBottom: '1rem'
  },

  decisionButtons: {
    display: 'flex',
    gap: '1rem',
    marginBottom: '1.5rem'
  },

  approveButton: {
    flex: 1,
    padding: '0.9rem 1.5rem',
    backgroundColor: '#10b981',
    color: 'white',
    borderRadius: '8px',
    fontWeight: '700',
    fontSize: '1rem',
    cursor: 'pointer',
    border: 'none',
    transition: '0.3s'
  },

  approveButtonHover: {
    backgroundColor: '#059669'
  },

  rejectButton: {
    flex: 1,
    padding: '0.9rem 1.5rem',
    backgroundColor: '#ef4444',
    color: 'white',
    borderRadius: '8px',
    fontWeight: '700',
    fontSize: '1rem',
    cursor: 'pointer',
    border: 'none',
    transition: '0.3s'
  },

  rejectButtonHover: {
    backgroundColor: '#dc2626'
  },

  reasonTextarea: {
    width: '100%',
    minHeight: '100px',
    padding: '0.9rem',
    border: '2px solid #e2e8f0',
    borderRadius: '10px',
    fontSize: '0.875rem',
    resize: 'vertical',
    fontFamily: 'inherit'
  },

  reasonTextareaFocus: {
    outline: 'none',
    borderColor: '#3b82f6',
    boxShadow: '0 0 0 3px rgba(59, 130, 246, 0.1)'
  },

  notificationPanel: {
    marginBottom: '2rem'
  },

  notificationItem: {
    padding: '1.25rem',
    borderLeft: '5px solid #6366f1',
    backgroundColor: '#eef2ff',
    borderRadius: '0 12px 12px 0',
    marginBottom: '1rem'
  },

  notificationText: {
    fontSize: '0.9rem',
    color: '#1e293b'
  },

  notificationTime: {
    fontSize: '0.75rem',
    color: '#64748b'
  },

  statsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(160px, 1fr))',
    gap: '1.25rem',
    marginBottom: '2rem'
  },

  statCard: {
    padding: '1.5rem',
    backgroundColor: '#ffffff',
    borderRadius: '12px',
    textAlign: 'center',
    border: '1px solid #e2e8f0',
    boxShadow: '0 6px 12px rgba(0,0,0,0.03)'
  },

  statNumber: {
    fontSize: '1.75rem',
    fontWeight: '800',
    color: '#1e293b'
  },

  statLabel: {
    fontSize: '0.8rem',
    color: '#64748b',
    textTransform: 'uppercase',
    letterSpacing: '0.05em',
    marginTop: '0.25rem'
  },

  emptyState: {
    textAlign: 'center',
    padding: '4rem 2rem',
    color: '#64748b'
  },

  emptyStateIcon: {
    fontSize: '3.5rem',
    marginBottom: '1rem',
    opacity: '0.4'
  },

  loadingSpinner: {
    display: 'inline-block',
    width: '24px',
    height: '24px',
    border: '4px solid #f3f3f3',
    borderTop: '4px solid #3b82f6',
    borderRadius: '50%',
    animation: 'spin 1s linear infinite'
  }
};

// Keyframes
const spinKeyframes = `
@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
`;

if (typeof document !== 'undefined') {
  const style = document.createElement('style');
  style.textContent = spinKeyframes;
  document.head.appendChild(style);
}
