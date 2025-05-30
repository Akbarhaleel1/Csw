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
export const sendStudentConfirmationMail = async (profile: any) => {
  const { personalInfo, academicInfo } = profile;

  const mailOptions = {
    from: '"CSW Education" <akbarhaleel508@gmail.com>',
    to: personalInfo.email,
    subject: 'Your Registration Has Been Received - CSW Education',
    html: `
      <h2>Dear ${personalInfo.firstName} ${personalInfo.lastName},</h2>
      <p>Thank you for submitting your application. Below are your submitted details:</p>
      <h3>📘 Academic Info</h3>
      <ul>
        <li><strong>Student ID:</strong> ${academicInfo.studentId}</li>
        <li><strong>Program:</strong> ${academicInfo.program}</li>
        <li><strong>Year:</strong> ${academicInfo.yearOfStudy}</li>
      </ul>

      <h3>📩 Personal Info</h3>
      <ul>
        <li><strong>Email:</strong> ${personalInfo.email}</li>
        <li><strong>Phone:</strong> ${personalInfo.phone}</li>
        <li><strong>DOB:</strong> ${personalInfo.dateOfBirth}</li>
        <li><strong>Gender:</strong> ${personalInfo.gender}</li>
      </ul>

      <p>Your form has been sent to the admin for review. We will get back to you shortly.</p>
      <br/>
      <p>Warm regards,</p>
      <strong>CSW Education Team</strong>
    `,
  };

  await transporter.sendMail(mailOptions);
};