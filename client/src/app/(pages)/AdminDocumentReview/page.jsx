

"use client"

import { useState } from "react"
import {
  FileText,
  Users,
  CheckCircle,
  XCircle,
  Download,
  Eye,
  Bell,
  Filter,
  MoreHorizontal,
  Calendar,
  Mail,
  Phone,
} from "lucide-react"
import "./admin.css"

// Mock data
const mockApplications = [
  {
    id: "APP-2024-001",
    studentName: "John Smith",
    email: "john.smith@email.com",
    phone: "+1 (555) 123-4567",
    status: "pending",
    submissionDate: "2024-01-15",
    program: "Computer Science",
    country: "United States",
    avatar: "/placeholder.svg?height=40&width=40",
    documents: [
      { name: "Passport", type: "pdf", uploaded: true, size: "2.4 MB" },
      { name: "Academic Transcripts", type: "pdf", uploaded: true, size: "1.8 MB" },
      { name: "English Proficiency Test", type: "pdf", uploaded: true, size: "956 KB" },
      { name: "Statement of Purpose", type: "pdf", uploaded: true, size: "1.2 MB" },
      { name: "Financial Documents", type: "pdf", uploaded: true, size: "3.1 MB" },
    ],
  },
  {
    id: "APP-2024-002",
    studentName: "Sarah Johnson",
    email: "sarah.johnson@email.com",
    phone: "+44 20 7946 0958",
    status: "pending",
    submissionDate: "2024-01-14",
    program: "Business Administration",
    country: "United Kingdom",
    avatar: "/placeholder.svg?height=40&width=40",
    documents: [
      { name: "Passport", type: "pdf", uploaded: true, size: "2.1 MB" },
      { name: "Academic Transcripts", type: "pdf", uploaded: true, size: "1.5 MB" },
      { name: "English Proficiency Test", type: "pdf", uploaded: false, size: "0 MB" },
      { name: "Statement of Purpose", type: "pdf", uploaded: true, size: "1.1 MB" },
    ],
  },
  {
    id: "APP-2024-003",
    studentName: "Michael Brown",
    email: "michael.brown@email.com",
    phone: "+61 2 9374 4000",
    status: "approved",
    submissionDate: "2024-01-13",
    program: "Engineering",
    country: "Australia",
    avatar: "/placeholder.svg?height=40&width=40",
    documents: [
      { name: "Passport", type: "pdf", uploaded: true, size: "2.8 MB" },
      { name: "Academic Transcripts", type: "pdf", uploaded: true, size: "2.2 MB" },
      { name: "English Proficiency Test", type: "pdf", uploaded: true, size: "1.1 MB" },
      { name: "Statement of Purpose", type: "pdf", uploaded: true, size: "1.4 MB" },
    ],
  },
]

const mockNotifications = [
  { id: 1, message: "New application submitted by John Smith", time: "5 minutes ago", type: "new" },
  { id: 2, message: "Sarah Johnson uploaded missing documents", time: "1 hour ago", type: "update" },
  { id: 3, message: "Michael Brown's application approved", time: "2 hours ago", type: "approved" },
  { id: 4, message: "Document verification completed for Emma Wilson", time: "3 hours ago", type: "verified" },
]

export default function AdminDashboard() {
  const [selectedApplication, setSelectedApplication] = useState(mockApplications[0])
  const [rejectionReason, setRejectionReason] = useState("")
  const [isProcessing, setIsProcessing] = useState(false)

  const stats = {
    pending: mockApplications.filter((app) => app.status === "pending").length,
    approved: mockApplications.filter((app) => app.status === "approved").length,
    rejected: mockApplications.filter((app) => app.status === "rejected").length,
    total: mockApplications.length,
  }

  const handleApprove = async () => {
    setIsProcessing(true)
    // Simulate API call
    setTimeout(() => {
      setIsProcessing(false)
      // Update application status logic here
    }, 2000)
  }

  const handleReject = async () => {
    if (!rejectionReason.trim()) return
    setIsProcessing(true)
    // Simulate API call
    setTimeout(() => {
      setIsProcessing(false)
      setRejectionReason("")
      // Update application status logic here
    }, 2000)
  }

  const getInitials = (name) => {
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase()
  }

  return (
    <div className="dashboard">
      {/* Header */}
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
        {/* Sidebar - Applications List */}
        <div className="sidebar">
          <div className="sidebar-header">
            <div className="sidebar-title">
              <h2>Applications</h2>
              <span className="badge secondary">{stats.pending} pending</span>
            </div>

            {/* Stats Cards */}
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
              {mockApplications.map((application) => (
                <div
                  key={application.id}
                  className={`application-card ${selectedApplication?.id === application.id ? "selected" : ""}`}
                  onClick={() => setSelectedApplication(application)}
                >
                  <div className="application-header">
                    <div className="avatar">
                      {application.avatar ? (
                        <img src={application.avatar || "/placeholder.svg"} alt={application.studentName} />
                      ) : (
                        getInitials(application.studentName)
                      )}
                    </div>
                    <div className="application-info">
                      <div className="application-top">
                        <h3 className="application-name">{application.studentName}</h3>
                        <span className={`badge ${application.status}`}>{application.status}</span>
                      </div>
                      <p className="application-program">{application.program}</p>
                      <p className="application-id">{application.id}</p>
                      <div className="application-date">
                        <Calendar size={12} />
                        {application.submissionDate}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="main-content">
          {selectedApplication ? (
            <div className="content-area">
              {/* Student Info Header */}
              <div className="card">
                <div className="card-header">
                  <div className="student-header">
                    <div className="student-info">
                      <div className="student-avatar">
                        {selectedApplication.avatar ? (
                          <img
                            src={selectedApplication.avatar || "/placeholder.svg"}
                            alt={selectedApplication.studentName}
                          />
                        ) : (
                          getInitials(selectedApplication.studentName)
                        )}
                      </div>
                      <div className="student-details">
                        <h2>{selectedApplication.studentName}</h2>
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
                      <p>{selectedApplication.program}</p>
                      <p>{selectedApplication.country}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Documents Grid */}
              <div className="card">
                <div className="card-header">
                  <h3 className="card-title">Documents</h3>
                  <p className="card-description">Review and manage submitted documents</p>
                </div>
                <div className="card-content">
                  <div className="documents-grid">
                    {selectedApplication.documents.map((document, index) => (
                      <div key={index} className={`document-card ${document.uploaded ? "uploaded" : "missing"}`}>
                        <div className="document-header">
                          <div className={`document-icon ${document.uploaded ? "uploaded" : "missing"}`}>
                            <FileText size={20} />
                          </div>
                          <div className="document-info">
                            <h4 className="document-name">{document.name}</h4>
                            <p className="document-size">{document.size}</p>
                            {document.uploaded ? (
                              <div className="document-actions">
                                <button className="btn btn-outline btn-sm">
                                  <Eye size={12} />
                                  View
                                </button>
                                <button className="btn btn-outline btn-sm">
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

              {/* Decision Panel */}
              {selectedApplication.status === "pending" && (
                <div className="card">
                  <div className="card-header">
                    <h3 className="card-title">Application Decision</h3>
                    <p className="card-description">Review and make a decision on this application</p>
                  </div>
                  <div className="card-content">
                    <div className="decision-actions">
                      <button onClick={handleApprove} disabled={isProcessing} className="btn btn-success">
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
                        onClick={handleReject}
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
                <h3>Select an Application</h3>
                <p>Choose an application from the sidebar to review documents and make decisions.</p>
              </div>
            </div>
          )}
        </div>

        {/* Right Sidebar - Notifications */}
        <div className="right-sidebar">
          <div className="sidebar-section-header">
            <h3>Recent Activity</h3>
            <button className="btn btn-outline btn-sm">
              <MoreHorizontal size={16} />
            </button>
          </div>

          <div className="activity-list">
            {mockNotifications.map((notification) => (
              <div key={notification.id} className="activity-item">
                <div className="activity-header">
                  <div className="activity-icon">
                    <Bell size={12} color="#2563eb" />
                  </div>
                  <div className="activity-content">
                    <p className="activity-message">{notification.message}</p>
                    <p className="activity-time">{notification.time}</p>
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
