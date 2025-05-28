'use client';
import { motion } from 'framer-motion';
import { styled } from 'styled-components';

export const Wrapper = styled.div`
  min-height: 100vh;
  display: flex;
  background-color: white;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const ImageSection = styled.div`
  flex: 1;
  background: #050A30;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  overflow: hidden;
  padding-right: 2rem;

  .student-image {
    position: absolute;
    left: 0;
    bottom: 0;
    width: 70%;
    height: 100%;
    background-image: url('/images/login_left_image.png');
    background-size: contain;
    background-repeat: no-repeat;
    background-position: left center;
    z-index: 1;
  }

  .content {
    text-align: right;
    z-index: 2;
    color: white;
    max-width: 400px;
    padding: 2rem;

    h2 {
      font-size: 2.5rem;
      font-weight: 700;
      margin-bottom: 1rem;
      font-family: 'SF Pro Display', sans-serif;
    }

    p {
      font-size: 1.1rem;
      opacity: 0.9;
      line-height: 1.6;
    }
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

export const BackgroundOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse"><path d="M 10 0 L 0 0 0 10" fill="none" stroke="rgba(255,255,255,0.1)" stroke-width="0.5"/></pattern></defs><rect width="100" height="100" fill="url(%23grid)"/></svg>');
  opacity: 0.3;
`;

export const Container = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  background-color: white;

  @media (max-width: 768px) {
    padding: 1rem;
    min-height: 100vh;
  }
`;

export const FormWrapper = styled(motion.div)`
  background: white;
  padding: 3rem;
  border-radius: 1rem;
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
  width: 100%;
  max-width: 450px;
  border: 1px solid #F4F6FC;

  @media (max-width: 768px) {
    padding: 2rem 1.5rem;
    border-radius: 0.75rem;
    margin: 1rem 0;
  }
`;

export const Title = styled.h1`
  font-size: 2rem;
  font-weight: 700;
  color: #050A30;
  text-align: center;
  margin-bottom: 1rem;
  font-family: 'SF Pro Display', sans-serif;

  @media (max-width: 768px) {
    font-size: 1.75rem;
    margin-bottom: 1rem;
  }
`;

export const Subtitle = styled.p`
  font-size: 1rem;
  color: #6B7280;
  text-align: center;
  margin-bottom: 2rem;
  line-height: 1.5;

  strong {
    color: #050A30;
    font-weight: 600;
  }
`;

export const OTPContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 0.75rem;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    gap: 0.5rem;
  }
`;

export const OTPInput = styled(motion.input)`
  width: 100%;
  height: 60px;
  text-align: center;
  font-size: 1.5rem;
  font-weight: 600;
  border: 2px solid ${props => props.$hasError ? '#ef4444' : '#E5E7EB'};
  border-radius: 0.5rem;
  color: #050A30;
  background-color: #FFFFFF;
  transition: all 0.2s ease;
  font-family: 'SF Pro Display', sans-serif;

  &:focus {
    outline: none;
    border-color: #050A30;
    box-shadow: 0 0 0 3px rgba(5, 10, 48, 0.1);
  }

  &::-webkit-inner-spin-button,
  &::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  @media (max-width: 768px) {
    height: 50px;
    font-size: 1.25rem;
  }
`;

export const Button = styled(motion.button)`
  background: #050A30;
  color: white;
  border: none;
  padding: 1rem;
  border-radius: 0.5rem;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
  font-family: 'SF Pro Display', sans-serif;
  width: 100%;
  margin-bottom: 1.5rem;

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }

  &:hover:not(:disabled) {
    box-shadow: 0 10px 15px -3px rgba(5, 10, 48, 0.3);
    transform: translateY(-1px);
  }
`;

export const ResendText = styled.p`
  text-align: center;
  color: #6B7280;
  font-size: 0.9rem;
  margin-bottom: 0.5rem;

  button {
    background: none;
    border: none;
    color: #050A30;
    font-weight: 600;
    cursor: pointer;
    padding: 0;
    text-decoration: underline;
    transition: color 0.2s ease;

    &:hover {
      color: #0049AD;
    }

    &:disabled {
      color: #9CA3AF;
      cursor: not-allowed;
      text-decoration: none;
    }
  }
`;

export const TimerText = styled.p`
  text-align: center;
  color: #6B7280;
  font-size: 0.9rem;
  margin-top: 0.5rem;
`;

export const ErrorMessage = styled(motion.div)`
  color: #ef4444;
  font-size: 0.875rem;
  text-align: center;
  margin-bottom: 1.5rem;
  padding: 0.75rem 1rem;
  background-color: rgba(239, 68, 68, 0.1);
  border-radius: 0.5rem;
`;

export const SuccessMessage = styled(motion.div)`
  background: rgba(5, 10, 48, 0.1);
  color: #050A30;
  padding: 0.875rem 1rem;
  border-radius: 0.5rem;
  margin-bottom: 1.5rem;
  border: 1px solid rgba(5, 10, 48, 0.2);
  font-size: 0.9rem;
  font-weight: 500;
  text-align: center;
`;