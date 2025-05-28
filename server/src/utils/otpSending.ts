import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'akbarhaleel508@gmail.com',
        pass: 'ejev ngqr qtxb khwn',
    },
    tls: {
        rejectUnauthorized: false
    }
});

const otpSending = async (userEmail: string, otp: number) => {
    const mailOptions = {
        from: process.env.EMAIL_USER,
        to: userEmail,
        subject: 'Verify Your Account - CSW Education Portal',
        html: `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <style>
                * {
                    margin: 0;
                    padding: 0;
                    box-sizing: border-box;
                }
                body {
                    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
                    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                    margin: 0;
                    padding: 40px 20px;
                    min-height: 100vh;
                }
                .email-container {
                    max-width: 650px;
                    margin: 0 auto;
                    background: #ffffff;
                    border-radius: 20px;
                    overflow: hidden;
                    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
                }
                .header {
                    background: linear-gradient(135deg, #1e3c72 0%, #2a5298 100%);
                    padding: 40px 30px;
                    text-align: center;
                    position: relative;
                    overflow: hidden;
                }
                .header::before {
                    content: '';
                    position: absolute;
                    top: -50%;
                    left: -50%;
                    width: 200%;
                    height: 200%;
                    background: radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%);
                    animation: float 6s ease-in-out infinite;
                }
                @keyframes float {
                    0%, 100% { transform: translateY(0px); }
                    50% { transform: translateY(-20px); }
                }
                .logo {
                    width: 120px;
                    height: auto;
                    margin-bottom: 20px;
                    border-radius: 10px;
                    position: relative;
                    z-index: 2;
                }
                .company-name {
                    color: #ffffff;
                    font-size: 28px;
                    font-weight: 700;
                    margin-bottom: 8px;
                    position: relative;
                    z-index: 2;
                }
                .tagline {
                    color: rgba(255, 255, 255, 0.9);
                    font-size: 16px;
                    font-weight: 300;
                    position: relative;
                    z-index: 2;
                }
                .content {
                    padding: 50px 40px;
                    text-align: center;
                    background: #ffffff;
                }
                .welcome-text {
                    font-size: 24px;
                    color: #2c3e50;
                    margin-bottom: 15px;
                    font-weight: 600;
                }
                .description {
                    font-size: 16px;
                    color: #7f8c8d;
                    line-height: 1.6;
                    margin-bottom: 40px;
                }
                .otp-container {
                    background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
                    border-radius: 15px;
                    padding: 30px;
                    margin: 30px 0;
                    position: relative;
                    overflow: hidden;
                }
                .otp-container::before {
                    content: '';
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    background: linear-gradient(45deg, transparent 30%, rgba(255,255,255,0.1) 50%, transparent 70%);
                    animation: shimmer 3s infinite;
                }
                @keyframes shimmer {
                    0% { transform: translateX(-100%); }
                    100% { transform: translateX(100%); }
                }
                .otp-label {
                    color: #ffffff;
                    font-size: 16px;
                    margin-bottom: 15px;
                    font-weight: 500;
                }
                .otp-code {
                    font-size: 36px;
                    font-weight: 800;
                    color: #ffffff;
                    letter-spacing: 8px;
                    font-family: 'Courier New', monospace;
                    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
                    margin: 10px 0;
                }
                .validity {
                    background: #e8f4f8;
                    border-left: 4px solid #3498db;
                    padding: 20px;
                    margin: 30px 0;
                    border-radius: 8px;
                }
                .validity-text {
                    color: #2980b9;
                    font-size: 14px;
                    font-weight: 500;
                }
                .features {
                    display: flex;
                    justify-content: space-around;
                    margin: 40px 0;
                    flex-wrap: wrap;
                    gap: 20px;
                }
                .feature {
                    text-align: center;
                    flex: 1;
                    min-width: 150px;
                }
                .feature-icon {
                    width: 50px;
                    height: 50px;
                    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    margin: 0 auto 15px;
                    font-size: 24px;
                    color: white;
                }
                .feature-title {
                    font-size: 14px;
                    font-weight: 600;
                    color: #2c3e50;
                    margin-bottom: 5px;
                }
                .feature-desc {
                    font-size: 12px;
                    color: #7f8c8d;
                }
                .footer {
                    background: #f8f9fa;
                    padding: 30px;
                    text-align: center;
                    border-top: 1px solid #ecf0f1;
                }
                .social-links {
                    margin: 20px 0;
                }
                .social-link {
                    display: inline-block;
                    margin: 0 10px;
                    padding: 10px;
                    background: #3498db;
                    color: white;
                    text-decoration: none;
                    border-radius: 50%;
                    width: 40px;
                    height: 40px;
                    line-height: 20px;
                }
                .footer-text {
                    font-size: 12px;
                    color: #95a5a6;
                    line-height: 1.5;
                }
                .copyright {
                    margin-top: 20px;
                    padding-top: 20px;
                    border-top: 1px solid #ecf0f1;
                    font-size: 11px;
                    color: #bdc3c7;
                }
                @media (max-width: 600px) {
                    .email-container {
                        margin: 0;
                        border-radius: 0;
                    }
                    .content {
                        padding: 30px 20px;
                    }
                    .otp-code {
                        font-size: 28px;
                        letter-spacing: 4px;
                    }
                    .features {
                        flex-direction: column;
                        align-items: center;
                    }
                }
            </style>
            <title>Account Verification - CSW Education</title>
        </head>
        <body>
            <div class="email-container">
                <div class="header">
                    <img src="https://i.ibb.co/n48rsyz/CSW-Logo.jpg" alt="CSW Education Logo" class="logo">
                    <div class="company-name">CSW Education</div>
                    <div class="tagline">Empowering Your Academic Journey</div>
                </div>
                
                <div class="content">
                    <h1 class="welcome-text">Welcome to Your Future! 🎓</h1>
                    <p class="description">
                        You're just one step away from accessing premium degree courses that will transform your career. 
                        Please verify your account using the OTP code below.
                    </p>
                    
                    <div class="otp-container">
                        <div class="otp-label">Your Verification Code</div>
                        <div class="otp-code">${otp}</div>
                    </div>
                    
                    <div class="validity">
                        <div class="validity-text">
                            ⏰ This code expires in 10 minutes for your security
                        </div>
                    </div>
                    
                    <div class="features">
                        <div class="feature">
                            <div class="feature-icon">📚</div>
                            <div class="feature-title">Premium Courses</div>
                            <div class="feature-desc">Access to top-tier degree programs</div>
                        </div>
                        <div class="feature">
                            <div class="feature-icon">👨‍🏫</div>
                            <div class="feature-title">Expert Faculty</div>
                            <div class="feature-desc">Learn from industry professionals</div>
                        </div>
                        <div class="feature">
                            <div class="feature-icon">🎯</div>
                            <div class="feature-title">Career Support</div>
                            <div class="feature-desc">Job placement assistance</div>
                        </div>
                    </div>
                </div>
                
                <div class="footer">
                    <div class="social-links">
                        <a href="#" class="social-link">📧</a>
                        <a href="#" class="social-link">📱</a>
                        <a href="#" class="social-link">🌐</a>
                    </div>
                    <div class="footer-text">
                        <strong>Need Help?</strong><br>
                        Contact our support team at support@csweducation.com<br>
                        or call us at +1 (555) 123-4567
                    </div>
                    <div class="copyright">
                        &copy; ${new Date().getFullYear()} CSW Education. All rights reserved.<br>
                        This email was sent to ${userEmail}. If you didn't request this, please ignore this email.
                    </div>
                </div>
            </div>
        </body>
        </html>
        `
    }

    try {
        await transporter.sendMail(mailOptions);
        console.log('OTP email sent successfully to:', userEmail);
        return { success: true, message: 'OTP email sent successfully' };
    } catch (error) {
        console.error('Error sending OTP email:', error);
        throw new Error('Error sending OTP email');
    }
}

export default otpSending;