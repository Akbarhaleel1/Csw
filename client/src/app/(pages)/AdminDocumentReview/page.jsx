"use client"

import { useEffect, useState } from "react"
import {
  FileText,
  Users,
  CheckCircle,
  XCircle,
  Download,
  Eye,
  Bell,
  MoreHorizontal,
  Calendar,
  Mail,
  Phone,
  X,
} from "lucide-react"
import "./admin.css"
import axios from "axios"

const DEFAULT_AVATAR = "https://t3.ftcdn.net/jpg/03/91/19/22/360_F_391192211_2w5pQpFV1aozYQhcIw3FqA35vuTxJKrB.jpg";

export default function AdminDashboard() {
  const [applications, setApplications] = useState([])
  const [selectedApplication, setSelectedApplication] = useState(null)
  const [rejectionReason, setRejectionReason] = useState("")
  const [isProcessing, setIsProcessing] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)
  const [viewDocument, setViewDocument] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  useEffect(() => {
    const fetchStudentsData = async () => {
      try {
        const response = await axios.get('http://localhost:3001/AdminDocumentReview');
        setApplications(response.data.result);
        if (response.data.result.length > 0) {
          setSelectedApplication(response.data.result[0]);
        }
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching student data:', error);
        setError(error);
        setIsLoading(false);
      }
    };

    fetchStudentsData();
  }, []);

  const stats = {
    pending: applications.filter((app) => app.status === "pending").length,
    approved: applications.filter((app) => app.status === "approved").length,
    rejected: applications.filter((app) => app.status === "rejected").length,
    total: applications.length,
  }

  const handleApprove = async (applicationId) => {
    setIsProcessing(true)
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      setApplications(applications.map(app => 
        app._id === applicationId ? { ...app, status: "approved" } : app
      ));
      setSelectedApplication(prev => prev._id === applicationId ? { ...prev, status: "approved" } : prev);
    } finally {
      setIsProcessing(false)
    }
  }

  const handleReject = async (applicationId) => {
    if (!rejectionReason.trim()) return
    setIsProcessing(true)
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      setApplications(applications.map(app => 
        app._id === applicationId ? { ...app, status: "rejected", reasons: rejectionReason } : app
      ));
      setSelectedApplication(prev => prev._id === applicationId ? { ...prev, status: "rejected", reasons: rejectionReason } : prev);
      setRejectionReason("")
    } finally {
      setIsProcessing(false)
    }
  }

  const formatDate = (dateString) => {
    if (!dateString) return "N/A";
    const date = new Date(dateString);
    return date.toLocaleDateString();
  }

  const documentTypes = [
    { name: "Passport", key: "passportCopy" },
    { name: "Academic Certificate", key: "academicCertificate" },
    { name: "Residency Permit", key: "residencyPermit" },
    { name: "Personal Photo", key: "personalPhoto" }
  ];

  const handleDownload = (url, filename) => {
    fetch(url)
      .then(response => response.blob())
      .then(blob => {
        const blobUrl = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = blobUrl;
        a.download = filename || 'document';
        document.body.appendChild(a);
        a.click();
        window.URL.revokeObjectURL(blobUrl);
        document.body.removeChild(a);
      })
      .catch(error => console.error('Error downloading file:', error));
  };

  const handleViewDocument = (url) => {
    setViewDocument(url);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setViewDocument(null);
  };

  if (isLoading) {
    return (
      <div className="dashboard">
        <div className="loading-state">
          <div className="spinner"></div>
          <p>Loading applications...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="dashboard">
        <div className="error-state">
          <h3>Error loading data</h3>
          <p>{error.message}</p>
          <button onClick={() => window.location.reload()}>Try Again</button>
        </div>
      </div>
    );
  }

  return (
    <div className="dashboard">
      {/* Document View Modal */}
      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal">
            <div className="modal-header">
              <h3>View Document</h3>
              <button onClick={closeModal} className="modal-close">
                <X size={24} />
              </button>
            </div>
            <div className="modal-content">
              {viewDocument && (
                <iframe 
                  src={viewDocument} 
                  title="Document Viewer"
                  style={{ width: '100%', height: '100%', border: 'none' }}
                />
              )}
            </div>
          </div>
        </div>
      )}

      <header className="header">
        <div className="header-content">
          <div className="header-left">
            <div className="header-logo">
              <div className="header-icon">
                <Users size={24} />
              </div>
              <div className="header-text">
                <h1>Admin Dashboard</h1>
                <p>Document Review & Application Management</p>
              </div>
            </div>
          </div>
          <div className="header-actions">
            <div className="notification-bell">
              <div className="notification-indicator"></div>
            </div>
          </div>
        </div>
      </header>

      <div className="main-layout">
        <div className="sidebar">
          <div className="sidebar-header">
            <div className="sidebar-title">
              <h2>Applications</h2>
              <span className="badge secondary">{stats.pending} pending</span>
            </div>

            <div className="stats-grid">
              <div className="stat-card">
                <div className="stat-number pending">{stats.pending}</div>
                <div className="stat-label">Pending</div>
              </div>
              <div className="stat-card">
                <div className="stat-number approved">{stats.approved}</div>
                <div className="stat-label">Approved</div>
              </div>
            </div>
          </div>

          <div className="sidebar-content">
            <div className="applications-list">
              {applications.map((application) => (
                <div
                  key={application._id}
                  className={`application-card ${selectedApplication?._id === application._id ? "selected" : ""}`}
                  onClick={() => setSelectedApplication(application)}
                >
                  <div className="application-header">
                    <div className="avatar">
                      <img 
                        src={application.personalPhoto || DEFAULT_AVATAR} 
                        alt={`${application.firstName} ${application.lastName}`}
                        onError={(e) => {
                          e.target.onerror = null;
                          e.target.src = DEFAULT_AVATAR;
                        }}
                      />
                    </div>
                    <div className="application-info">
                      <div className="application-top">
                        <h3 className="application-name">{application.firstName} {application.lastName}</h3>
                        <span className={`badge ${application.status}`}>{application.status}</span>
                      </div>
                      <p className="application-program">{application.country}</p>
                      <p className="application-id">APP-{application._id.slice(-6).toUpperCase()}</p>
                      <div className="application-date">
                        <Calendar size={12} />
                        {formatDate(application.createdAt)}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="main-content">
          {selectedApplication ? (
            <div className="content-area">
              <div className="card">
                <div className="card-header">
                  <div className="student-header">
                    <div className="student-info">
                      <div className="student-avatar">
                        <img 
                          src={selectedApplication.personalPhoto || DEFAULT_AVATAR} 
                          alt={`${selectedApplication.firstName} ${selectedApplication.lastName}`}
                          onError={(e) => {
                            e.target.onerror = null;
                            e.target.src = DEFAULT_AVATAR;
                          }}
                        />
                      </div>
                      <div className="student-details">
                        <h2>{selectedApplication.firstName} {selectedApplication.lastName}</h2>
                        <div className="student-contact">
                          <div className="contact-item">
                            <Mail size={16} />
                            {selectedApplication.email}
                          </div>
                          <div className="contact-item">
                            <Phone size={16} />
                            {selectedApplication.phone}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="student-meta">
                      <span className={`badge ${selectedApplication.status}`}>{selectedApplication.status}</span>
                      <p>{selectedApplication.country}</p>
                      <p>{selectedApplication.city}, {selectedApplication.state}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="card">
                <div className="card-header">
                  <h3 className="card-title">Documents</h3>
                  <p className="card-description">Review and manage submitted documents</p>
                </div>
                <div className="card-content">
                  <div className="documents-grid">
                    {documentTypes.map((doc, index) => (
                      <div key={index} className={`document-card ${selectedApplication[doc.key] ? "uploaded" : "missing"}`}>
                        <div className="document-header">
                          <div className={`document-icon ${selectedApplication[doc.key] ? "uploaded" : "missing"}`}>
                            <FileText size={20} />
                          </div>
                          <div className="document-info">
                            <h4 className="document-name">{doc.name}</h4>
                            <p className="document-size">{selectedApplication[doc.key] ? "Available" : "Not Uploaded"}</p>
                            {selectedApplication[doc.key] ? (
                              <div className="document-actions">
                                <button
                                  onClick={() => handleViewDocument(selectedApplication[doc.key])}
                                  className="btn btn-outline btn-sm"
                                >
                                  <Eye size={12} />
                                  View
                                </button>
                                <button
                                  onClick={() => handleDownload(selectedApplication[doc.key], `${doc.name}-${selectedApplication.firstName}`)}
                                  className="btn btn-outline btn-sm"
                                >
                                  <Download size={12} />
                                  Download
                                </button>
                              </div>
                            ) : (
                              <span className="badge rejected">Missing</span>
                            )}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {selectedApplication.status === "pending" && (
                <div className="card">
                  <div className="card-header">
                    <h3 className="card-title">Application Decision</h3>
                    <p className="card-description">Review and make a decision on this application</p>
                  </div>
                  <div className="card-content">
                    <div className="decision-actions">
                      <button 
                        onClick={() => handleApprove(selectedApplication._id)} 
                        disabled={isProcessing} 
                        className="btn btn-success"
                      >
                        {isProcessing ? (
                          <>
                            <div className="spinner"></div>
                            Processing...
                          </>
                        ) : (
                          <>
                            <CheckCircle size={16} />
                            Approve Application
                          </>
                        )}
                      </button>
                      <button
                        className="btn btn-danger"
                        onClick={() => handleReject(selectedApplication._id)}
                        disabled={isProcessing || !rejectionReason.trim()}
                      >
                        <XCircle size={16} />
                        Reject Application
                      </button>
                    </div>

                    <div className="form-group">
                      <label className="form-label">Rejection Reason (required for rejection)</label>
                      <textarea
                        className="textarea"
                        placeholder="Please provide a detailed reason for rejection or required document revisions..."
                        value={rejectionReason}
                        onChange={(e) => setRejectionReason(e.target.value)}
                      />
                    </div>
                  </div>
                </div>
              )}
            </div>
          ) : (
            <div className="empty-state">
              <div className="empty-state-content">
                <Users size={48} color="#9ca3af" />
                <h3>No Applications Found</h3>
                <p>There are currently no applications to review.</p>
              </div>
            </div>
          )}
        </div>

        <div className="right-sidebar">
          <div className="sidebar-section-header">
            <h3>Recent Activity</h3>
            <button className="btn btn-outline btn-sm">
              <MoreHorizontal size={16} />
            </button>
          </div>

          <div className="activity-list">
            {applications.slice(0, 4).map((application) => (
              <div key={application._id} className="activity-item">
                <div className="activity-header">
                  <div className="activity-icon">
                    <Bell size={12} color="#2563eb" />
                  </div>
                  <div className="activity-content">
                    <p className="activity-message">
                      {application.status === "approved" 
                        ? `${application.firstName}'s application approved`
                        : application.status === "rejected"
                        ? `${application.firstName}'s application rejected`
                        : `New application from ${application.firstName}`}
                    </p>
                    <p className="activity-time">{formatDate(application.updatedAt)}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}