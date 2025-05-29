
import React, { useState, useEffect } from 'react';
import { 
  Upload, 
  FileText, 
  Image, 
  CheckCircle,
  XCircle,
  AlertCircle,
  Plus,
  Trash2,
  Eye,
  Camera,
  GraduationCap,
  Shield,
  RefreshCw,
  Info,
} from 'lucide-react';
import './DocumentUpload.css';

const DocumentUploadSection = ({onDocumentsUpdate, initialDocuments}) => {
  const [formData, setFormData] = useState({ documents: initialDocuments  });
  const [errors, setErrors] = useState({});
  const [draggedOver, setDraggedOver] = useState(null);
  const [showTips, setShowTips] = useState({});
  const [previewFile, setPreviewFile] = useState(null);
  const [viewMode, setViewMode] = useState('grid');
    const [uploadProgress, setUploadProgress] = useState({});
    
    useEffect(() => {
    onDocumentsUpdate(formData.documents);
  }, [formData.documents, onDocumentsUpdate]);


  const documentTypes = [
    {
      key: 'personalPhoto',
      title: 'Personal Photo',
      description: 'Recent passport-style photograph',
      required: true,
      icon: Camera,
      accept: 'image/*',
      maxSize: '5MB',
      priority: 1,
      tips: ['Use good lighting', 'Face clearly visible', 'No sunglasses or hats']
    },
    {
      key: 'passportCopy',
      title: 'Passport Copy',
      description: 'Clear copy of passport main page',
      required: true,
      icon: FileText,
      accept: '.pdf,.jpg,.jpeg,.png',
      maxSize: '10MB',
      priority: 1,
      tips: ['All text must be readable', 'Include all four corners', 'No shadows or glare']
    },
    {
      key: 'academicCertificate',
      title: 'Academic Certificate',
      description: 'Latest educational qualification',
      required: true,
      icon: GraduationCap,
      accept: '.pdf,.jpg,.jpeg,.png',
      maxSize: '10MB',
      priority: 1,
      tips: ['Official certificate only', 'Include institution seal', 'Clear and legible text']
    },
    {
      key: 'residencyPermit',
      title: 'Residency Permit',
      description: 'Required for international students',
      required: false,
      icon: Shield,
      accept: '.pdf,.jpg,.jpeg,.png',
      maxSize: '10MB',
      priority: 2,
      tips: ['Valid permit only', 'Include expiry date', 'Both sides if applicable']
    }
  ];
const handleDocumentUpload = (key, file) => {
  if (!file) return;

  // Set the file immediately (to ensure onSubmit sees it)
  const newDocuments = { ...formData.documents, [key]: file };
  setFormData(prevData => ({ ...prevData, documents: newDocuments }));
  setUploadProgress(prev => ({ ...prev, [key]: 0 }));

  // Simulate visual progress only
  let progress = 0;
  const interval = setInterval(() => {
    progress += 10;
    setUploadProgress(prev => ({ ...prev, [key]: progress }));
    if (progress >= 100) clearInterval(interval);
  }, 100);
};


  const handleDrop = (key, e) => {
    e.preventDefault();
    setDraggedOver(null);
    const files = e.dataTransfer.files;
    if (files.length > 0) {
      handleDocumentUpload(key, files[0]);
    }
  };

  const handleDragOver = (key, e) => {
    e.preventDefault();
    setDraggedOver(key);
  };

  const handleDragLeave = () => {
    setDraggedOver(null);
  };

  const toggleTips = (key) => {
    setShowTips(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const getFileIcon = (fileName) => {
    const ext = fileName.split('.').pop().toLowerCase();
    if (['jpg', 'jpeg', 'png', 'gif'].includes(ext)) return Image;
    if (ext === 'pdf') return FileText;
    if (['doc', 'docx'].includes(ext)) return FileText;
    return FileText;
  };

  const formatFileSize = (bytes) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  const getPriorityLabel = (priority) => {
    switch (priority) {
      case 1: return { label: 'Essential', className: 'section-badge-essential' };
      case 2: return { label: 'Important', className: 'section-badge-important' };
      case 3: return { label: 'Optional', className: 'section-badge-optional' };
      default: return { label: 'Optional', className: 'section-badge-optional' };
    }
  };

  const getStatusIcon = (key, required) => {
    const hasFile = formData.documents[key];
    const progress = uploadProgress[key];
    
    if (progress && progress < 100) {
      return <AlertCircle className="status-icon-warning" size={20} />;
    }
    if (hasFile) {
      return <CheckCircle className="status-icon-success" size={20} />;
    }
  };

  const getCardClassName = (key, required) => {
    const hasFile = formData.documents[key];
    const isDragged = draggedOver === key;
    const progress = uploadProgress[key];
    
    let className = "document-card";
    
    if (isDragged) {
      className += " document-card-dragged";
    } else if (progress && progress < 100) {
      className += " document-card-uploading";
    } else if (hasFile) {
      className += " document-card-completed";
    } else if (required) {
      className += " document-card-required";
    } else {
      className += " document-card-default";
    }
    
    return className;
  };

  // Group documents by priority
  const groupedDocs = documentTypes.reduce((acc, doc) => {
    const priority = doc.priority || 3;
    if (!acc[priority]) acc[priority] = [];
    acc[priority].push(doc);
    return acc;
  }, {});

  const requiredDocsCount = documentTypes.filter(d => d.required).length;
  const completedDocsCount = Object.values(formData.documents).filter(Boolean).length;
  const progressPercentage = (completedDocsCount / requiredDocsCount) * 100;

  return (
    <div className="document-upload-container">
      {/* Header */}
      <div className="header">
        <div className="header-content">
          <div className="header-icon">
            <Upload color="white" size={32} />
          </div>
          <h1 className="header-title">
            Document Verification Portal
          </h1>
          <p className="header-description">
            Securely upload your documents to complete the verification process. All files are encrypted and protected.
          </p>
        </div>
        
        {/* Progress Section */}
        <div className="progress-card">
          <div className="progress-header">
            <h3 className="progress-title">Upload Progress</h3>
            <div className="progress-counter">
              <span className="progress-number">{completedDocsCount}</span>
              <span className="progress-total">/ {requiredDocsCount}</span>
            </div>
          </div>
          
          <div className="progress-bar-container">
            <div className="progress-bar-bg">
              <div 
                className="progress-bar-fill"
                style={{ width: `${progressPercentage}%` }}
              >
                <div className="progress-bar-shimmer"></div>
              </div>
            </div>
          </div>
          
          <div className="progress-footer">
            <span className="progress-remaining">
              {requiredDocsCount - completedDocsCount} required documents remaining
            </span>
            <div className="progress-legend">
              <div className="legend-item">
                <div className="legend-dot legend-dot-essential"></div>
                <span className="legend-text">Essential</span>
              </div>
              <div className="legend-item">
                <div className="legend-dot legend-dot-important"></div>
                <span className="legend-text">Important</span>
              </div>
              <div className="legend-item">
                <div className="legend-dot legend-dot-optional"></div>
                <span className="legend-text">Optional</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Document Sections by Priority */}
      <div className="document-sections">
        {Object.entries(groupedDocs).sort(([a], [b]) => a - b).map(([priority, docs]) => (
          <div key={priority}>
            <div className="section-header">
              <h2 className="section-title">
                {getPriorityLabel(parseInt(priority)).label} Documents
              </h2>
              <div className={`section-badge ${getPriorityLabel(parseInt(priority)).className}`}>
                {docs.length} document{docs.length > 1 ? 's' : ''}
              </div>
            </div>
            
            <div className="document-grid">
              {docs.map((doc) => {
                const IconComponent = doc.icon;
                const hasFile = formData.documents[doc.key];
                const progress = uploadProgress[doc.key];

                return (
                  <div key={doc.key} className="document-grid-item">
                    <div
                      className={getCardClassName(doc.key, doc.required)}
                      onDrop={(e) => handleDrop(doc.key, e)}
                      onDragOver={(e) => handleDragOver(doc.key, e)}
                      onDragLeave={handleDragLeave}
                    >
                      {/* Upload Progress Overlay */}
                      {progress && progress < 100 && (
                        <div className="upload-overlay">
                          <div className="upload-progress">
                            <div className="progress-spinner-container">
                              <div className="progress-spinner-bg"></div>
                              <div className="progress-spinner"></div>
                              <div className="progress-percentage">{progress}%</div>
                            </div>
                            <p className="upload-text">Uploading...</p>
                          </div>
                        </div>
                      )}

                      {/* Main Content */}
                      <div className="card-content">
                        {/* Header */}
                        <div className="card-header">
                          <div className="card-info">
                            <div className={`card-icon ${hasFile ? 'card-icon-completed' : 'card-icon-default'}`}>
                              <IconComponent 
                                size={24} 
                                className={hasFile ? 'text-green-600' : 'text-gray-600'} 
                              />
                            </div>
                            <div className="card-text">
                              <h3 className="card-title" title={doc.title}>
                                {doc.title}
                              </h3>
                              <p className="card-description">
                                {doc.description}
                              </p>
                            </div>
                          </div>
                          {getStatusIcon(doc.key, doc.required)}
                        </div>

                        {/* File Display or Upload Zone */}
                        {hasFile ? (
                          <div className="file-display">
                            <div className="file-info">
                              {React.createElement(getFileIcon(hasFile.name), { size: 20, className: "text-green-600" })}
                              <div className="file-details">
                                <p className="file-name" title={hasFile.name}>
                                  {hasFile.name.length > 20 
                                    ? `${hasFile.name.substring(0, 15)}...${hasFile.name.split('.').pop()}`
                                    : hasFile.name}
                                </p>
                                <p className="file-size">{formatFileSize(hasFile.size || 0)}</p>
                              </div>
                              <CheckCircle className="status-icon-success" size={20} />
                            </div>
                            
                            <div className="file-actions">
                              <button
                                type="button"
                                className="file-action-btn file-action-replace"
                                onClick={() => handleDocumentUpload(doc.key, null)}
                              >
                                <RefreshCw size={14} />
                                Replace
                              </button>
                              <button
                                type="button"
                                className="file-action-btn file-action-remove"
                                onClick={() => {
                                  setFormData(prev => {
                                    const newDocs = {...prev.documents};
                                    delete newDocs[doc.key];
                                    return {...prev, documents: newDocs};
                                  });
                                }}
                              >
                                <Trash2 size={14} />
                                Remove
                              </button>
                            </div>
                          </div>
                        ) : (
                          <div className="upload-zone">
                            <div className="upload-dropzone">
                              <div className="upload-icon-container">
                                <Plus size={24} className="status-icon-default" />
                              </div>
                              <p className="upload-primary-text">
                                Drop your file here
                              </p>
                              <p className="upload-secondary-text">
                                or <span className="upload-link">click to browse</span>
                              </p>
                            </div>
                            
                            <div className="upload-constraints">
                              <span>Max: {doc.maxSize}</span>
                              <span>{doc.accept.replace(/\./g, '').replace(/,/g, ', ').toUpperCase()}</span>
                            </div>
                          </div>
                        )}

                        {/* Tips Section */}
                        <div className="tips-section">
                          <button
                            type="button"
                            onClick={() => toggleTips(doc.key)}
                            className="tips-toggle"
                          >
                            <Info size={14} />
                            {showTips[doc.key] ? 'Hide tips' : 'Show upload tips'}
                          </button>
                          
                          {showTips[doc.key] && (
                            <div className="tips-content">
                              <h4 className="tips-title">Upload Tips:</h4>
                              <ul className="tips-list">
                                {doc.tips?.map((tip, index) => (
                                  <li key={index}>
                                    <span className="tips-bullet">•</span>
                                    <span>{tip}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}
                        </div>
                      </div>

                      <input
                        type="file"
                        id={`file-upload-${doc.key}`}
                        accept={doc.accept}
                        onChange={(e) => handleDocumentUpload(doc.key, e.target.files[0])}
                        className="file-input"
                      />
                    </div>

                    {errors[doc.key] && (
                      <div className="error-message">
                        <XCircle size={16} className="status-icon-error" />
                        <div>
                          <p className="error-title">Upload Error</p>
                          <p className="error-text">{errors[doc.key]}</p>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      {/* Help Section */}
      <div className="help-section">
        <div className="help-header">
          <div className="help-icon">
            <Info className="icon-optional" size={24} />
          </div>
          <h3 className="help-title">Document Guidelines & Support</h3>
          <p className="help-description">Follow these guidelines to ensure quick approval of your documents</p>
        </div>
        
        <div className="help-grid">
          <div className="help-card">
            <h4 className="help-card-title">
              <FileText size={16} className="icon-optional" />
              File Requirements
            </h4>
            <ul className="help-list">
              <li>
                <CheckCircle size={14} className="status-icon-success" />
                <span>JPEG, PNG, PDF formats accepted</span>
              </li>
              <li>
                <CheckCircle size={14} className="status-icon-success" />
                <span>Maximum file size: 10MB</span>
              </li>
              <li>
                <CheckCircle size={14} className="status-icon-success" />
                <span>High resolution, clear images</span>
              </li>
            </ul>
          </div>
          
          <div className="help-card">
            <h4 className="help-card-title">
              <Camera size={16} className="status-icon-success" />
              Quality Standards
            </h4>
            <ul className="help-list">
              <li>
                <CheckCircle size={14} className="status-icon-success" />
                <span>All text must be clearly readable</span>
              </li>
              <li>
                <CheckCircle size={14} className="status-icon-success" />
                <span>No blurred or cropped content</span>
              </li>
              <li>
                <CheckCircle size={14} className="status-icon-success" />
                <span>Avoid shadows and glare</span>
              </li>
            </ul>
          </div>
          
          <div className="help-card">
            <h4 className="help-card-title">
              <Shield size={16} className="icon-important" />
              Security & Privacy
            </h4>
            <ul className="help-list">
              <li>
                <CheckCircle size={14} className="status-icon-success" />
                <span>256-bit SSL encryption</span>
              </li>
              <li>
                <CheckCircle size={14} className="status-icon-success" />
                <span>GDPR compliant storage</span>
              </li>
              <li>
                <CheckCircle size={14} className="status-icon-success" />
                <span>Auto-delete after verification</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="help-contact">
          <p className="help-contact-text">
            Need help? Contact our support team at 
            <a href="mailto:support@example.com" className="help-contact-link">
              support@example.com
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default DocumentUploadSection;