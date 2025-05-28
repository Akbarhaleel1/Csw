'use client';
import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { useIsMobile } from '../../../../libs/useIsMobile';
import { 
  Wrapper, 
  Container, 
  FormWrapper, 
  Title, 
  Subtitle, 
  OTPContainer, 
  OTPInput, 
  Button, 
  ResendText, 
  TimerText,
  ErrorMessage,
  SuccessMessage,
  ImageSection,
  BackgroundOverlay
} from './styles';

const OTPVerification = () => {
  const isMobile = useIsMobile();
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [resendDisabled, setResendDisabled] = useState(true);
  const [timer, setTimer] = useState(30);
  const inputRefs = useRef([]);

  // Handle OTP input change
  const handleChange = (index, value) => {
    if (/^\d*$/.test(value) && value.length <= 1) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);
      setError('');

      // Auto focus to next input
      if (value && index < 5) {
        inputRefs.current[index + 1].focus();
      }
    }
  };

  // Handle paste OTP
  const handlePaste = (e) => {
    e.preventDefault();
    const pasteData = e.clipboardData.getData('text/plain').slice(0, 6);
    if (/^\d+$/.test(pasteData)) {
      const newOtp = [...otp];
      for (let i = 0; i < pasteData.length; i++) {
        newOtp[i] = pasteData[i];
      }
      setOtp(newOtp);
      setError('');
    }
  };

  // Handle backspace
  const handleKeyDown = (index, e) => {
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      inputRefs.current[index - 1].focus();
    }
  };

  // Verify OTP
  const handleSubmit = async (e) => {
    e.preventDefault();
    const otpValue = otp.join('');

    if (otpValue.length !== 6) {
      setError('Please enter a 6-digit OTP');
      return;
    }

    setIsLoading(true);
    setError('');
    
    // Simulate API call
    setTimeout(() => {
      console.log('OTP submitted:', otpValue);
      setIsLoading(false);
      
      // For demo purposes - assume OTP is 123456
      if (otpValue === '123456') {
        setSuccess('Verification successful! Redirecting...');
        // In a real app, you would redirect here
      } else {
        setError('Invalid OTP. Please try again.');
      }
    }, 1500);
  };

  // Handle resend OTP
  const handleResendOTP = () => {
    setResendDisabled(true);
    setTimer(30);
    setOtp(['', '', '', '', '', '']);
    setError('');
    setSuccess('New OTP has been sent to your mobile number');
    
    // Simulate API call to resend OTP
    console.log('Resending OTP...');
    inputRefs.current[0].focus();
  };

  // Countdown timer for resend OTP
  useEffect(() => {
    let interval;
    if (resendDisabled && timer > 0) {
      interval = setInterval(() => {
        setTimer(prev => prev - 1);
      }, 1000);
    } else if (timer === 0) {
      setResendDisabled(false);
    }
    return () => clearInterval(interval);
  }, [resendDisabled, timer]);

  const formVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const inputVariants = {
    focus: { scale: 1.02 },
    tap: { scale: 0.98 }
  };

  return (
    <Wrapper>
      {!isMobile && (
        <ImageSection>
          <BackgroundOverlay />
          <div className="student-image" />
          <div className="content">
            <h2>Verify Your Identity</h2>
            <p>Secure access to your student account and university resources</p>
          </div>
        </ImageSection>
      )}
      
      <Container>
        <FormWrapper
          variants={formVariants}
          initial="hidden"
          animate="visible"
        >
          <Title>OTP Verification</Title>
          <Subtitle>
We've sent a 6-digit code to <strong>s•••••e@example.com</strong>
          </Subtitle>
          
          {error && (
            <ErrorMessage
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
            >
              {error}
            </ErrorMessage>
          )}
          
          {success && (
            <SuccessMessage
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
            >
              {success}
            </SuccessMessage>
          )}
          
          <form onSubmit={handleSubmit}>
            <OTPContainer>
              {Array.from({ length: 6 }).map((_, index) => (
                <OTPInput
                  key={index}
                  type="tel"
                  inputMode="numeric"
                  pattern="[0-9]*"
                  maxLength="1"
                  value={otp[index]}
                  onChange={(e) => handleChange(index, e.target.value)}
                  onKeyDown={(e) => handleKeyDown(index, e)}
                  onPaste={handlePaste}
                  variants={inputVariants}
                  whileFocus="focus"
                  whileTap="tap"
                  ref={(el) => (inputRefs.current[index] = el)}
                  $hasError={!!error}
                  autoFocus={index === 0}
                />
              ))}
            </OTPContainer>
            
            <Button
              type="submit"
              disabled={isLoading}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {isLoading ? 'Verifying...' : 'Verify OTP'}
            </Button>
            
            <ResendText>
              Didn't receive the code?{' '}
              <button 
                type="button" 
                onClick={handleResendOTP} 
                disabled={resendDisabled}
              >
                Resend OTP
              </button>
            </ResendText>
            
            {resendDisabled && (
              <TimerText>Resend code in {timer} seconds</TimerText>
            )}
          </form>
        </FormWrapper>
      </Container>
    </Wrapper>
  );
};

export default OTPVerification;