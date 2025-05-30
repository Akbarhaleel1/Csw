import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'akbarhaleel508@gmail.com',
    pass: 'ejev ngqr qtxb khwn',
  },
  tls: {
    rejectUnauthorized: false,
  },
});
export  const sendStudentConfirmationMail = async (profile: any) => {
  const mailOptions = {
    from: '"CSW Education" <akbarhaleel508@gmail.com>',
    to: profile.email,
    subject: 'Your Registration Has Been Received - CSW Education',
    html: `
      <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #e1e1e1; border-radius: 8px; overflow: hidden;">
        <!-- Header -->
        <div style="background-color: #050A30; padding: 20px; text-align: center;">
          <h1 style="color: white; margin: 0; font-size: 24px;">CSW Education</h1>
        </div>
        
        <!-- Content -->
        <div style="padding: 20px;">
          <h2 style="color: #050A30;">Dear ${profile.firstName} ${profile.lastName},</h2>
          <p style="color: #333;">Thank you for submitting your student registration form. Here are the details you provided:</p>

          <!-- Academic Info Section -->
          <div style="background-color: #f8f9fa; padding: 15px; border-radius: 5px; margin-bottom: 20px; border-left: 4px solid #050A30;">
            <h3 style="color: #050A30; margin-top: 0;">📘 Academic Info</h3>
            <ul style="color: #333; padding-left: 20px;">
              <li><strong>Student ID:</strong> ${profile.studentId}</li>
              <li><strong>Program:</strong> ${profile.program}</li>
              <li><strong>Year of Study:</strong> ${profile.yearOfStudy}</li>
            </ul>
          </div>

          <!-- Personal Info Section -->
          <div style="background-color: #f8f9fa; padding: 15px; border-radius: 5px; margin-bottom: 20px; border-left: 4px solid #050A30;">
            <h3 style="color: #050A30; margin-top: 0;">🧑 Personal Info</h3>
            <ul style="color: #333; padding-left: 20px;">
              <li><strong>Email:</strong> ${profile.email}</li>
              <li><strong>Phone:</strong> ${profile.phone}</li>
              <li><strong>Date of Birth:</strong> ${new Date(profile.dateOfBirth).toDateString()}</li>
              <li><strong>Gender:</strong> ${profile.gender}</li>
              <li><strong>Address:</strong> ${profile.address}, ${profile.city}, ${profile.state}, ${profile.country} - ${profile.zipCode}</li>
            </ul>
          </div>

          <!-- Documents Section -->
          <div style="background-color: #f8f9fa; padding: 15px; border-radius: 5px; margin-bottom: 20px; border-left: 4px solid #050A30;">
            <h3 style="color: #050A30; margin-top: 0;">📄 Uploaded Documents</h3>
            <ul style="color: #333; padding-left: 20px;">
              <li><a href="${profile.personalPhoto}" target="_blank" style="color: #050A30; text-decoration: none;">🖼️ Personal Photo</a></li>
              <li><a href="${profile.passportCopy}" target="_blank" style="color: #050A30; text-decoration: none;">🛂 Passport Copy</a></li>
              <li><a href="${profile.academicCertificate}" target="_blank" style="color: #050A30; text-decoration: none;">🎓 Academic Certificate</a></li>
              <li><a href="${profile.residencyPermit}" target="_blank" style="color: #050A30; text-decoration: none;">🏠 Residency Permit</a></li>
            </ul>
          </div>

          <p style="color: #333;">Your form has been sent to the admin for review. You will be contacted once it's processed.</p>
        </div>

        <!-- Footer -->
        <div style="background-color: #050A30; padding: 15px; text-align: center; color: white;">
          <p style="margin: 0; color: white;">Warm regards,</p>
          <p style="margin: 0;color: white; font-weight: bold;">CSW Education Team</p>
          <p style="margin: 10px 0 0 0; font-size: 12px;">© ${new Date().getFullYear()} CSW Education. All rights reserved.</p>
        </div>
      </div>
    `,
  };

  await transporter.sendMail(mailOptions);
};