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
    background-image: url('/images/signup_image.png');
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
  max-width: 500px;
  border: 1px solid #F4F6FC;

  @media (max-width: 768px) {
    padding: 2rem 1.5rem;
    border-radius: 0.75rem;
    margin: 1rem 0;
    max-width: none;
  }
`;

export const Title = styled.h1`
  font-size: 2rem;
  font-weight: 700;
  color: #050A30;
  text-align: center;
  margin-bottom: 2rem;
  font-family: 'SF Pro Display', sans-serif;

  @media (max-width: 768px) {
    font-size: 1.75rem;
    margin-bottom: 1.5rem;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

export const InputRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`;

export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const Label = styled.label`
  font-size: 0.9rem;
  font-weight: 600;
  color: #050A30;
  margin-bottom: 0.25rem;
`;

export const Input = styled(motion.input)`
  padding: 0.875rem 1rem;
  border: 2px solid ${props => props.$hasError ? '#ef4444' : '#E5E7EB'};
  border-radius: 0.5rem;
  font-size: 1rem;
  color: #050A30;
  background-color: #FFFFFF;
  transition: all 0.2s ease;
  font-family: 'SF Pro Display', sans-serif;

  &:focus {
    outline: none;
    border-color: #050A30;
    box-shadow: 0 0 0 3px rgba(5, 10, 48, 0.1);
  }

  &::placeholder {
    color: #6B7280;
    opacity: 0.7;
  }

  @media (max-width: 768px) {
    padding: 0.75rem;
  }
`;
export const CountryCodeInput = styled(Input)`
  width: 80px;
  min-width: 80px;
  margin-right: 10px;
  text-align: center;
`;

export const PhoneInputContainer = styled.div`
  display: flex;
  gap: 0.5rem;
`;

export const CountrySelect = styled.select`
  padding: 0.875rem 0.75rem;
  border: 2px solid #E5E7EB;
  border-radius: 0.5rem;
  font-size: 1rem;
  color: #050A30;
  background-color: #FFFFFF;
  min-width: 100px;
  cursor: pointer;
  font-family: 'SF Pro Display', sans-serif;

  &:focus {
    outline: none;
    border-color: #050A30;
    box-shadow: 0 0 0 3px rgba(5, 10, 48, 0.1);
  }

  @media (max-width: 768px) {
    padding: 0.75rem;
    min-width: 90px;
  }
`;

export const PhoneInput = styled(motion.input)`
  flex: 1;
  padding: 0.875rem 1rem;
  border: 2px solid ${props => props.$hasError ? '#ef4444' : '#E5E7EB'};
  border-radius: 0.5rem;
  font-size: 1rem;
  color: #050A30;
  background-color: #FFFFFF;
  transition: all 0.2s ease;
  font-family: 'SF Pro Display', sans-serif;

  &:focus {
    outline: none;
    border-color: #050A30;
    box-shadow: 0 0 0 3px rgba(5, 10, 48, 0.1);
  }

  &::placeholder {
    color: #6B7280;
    opacity: 0.7;
  }

  @media (max-width: 768px) {
    padding: 0.75rem;
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
  margin-top: 0.5rem;
  transition: all 0.2s ease;
  font-family: 'SF Pro Display', sans-serif;

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }

  &:hover:not(:disabled) {
    box-shadow: 0 10px 15px -3px rgba(5, 10, 48, 0.3);
  }

  @media (max-width: 768px) {
    padding: 0.875rem;
  }
`;

export const Divider = styled.div`
  display: flex;
  align-items: center;
  margin: 1.5rem 0;
  color: #6B7280;

  &::before,
  &::after {
    content: '';
    flex: 1;
    height: 1px;
    background: #E5E7EB;
  }

  span {
    padding: 0 1rem;
    font-size: 0.875rem;
    background: white;
  }
`;

export const SocialButton = styled(motion.button)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  width: 100%;
  padding: 0.875rem;
  border: 2px solid #E5E7EB;
  background: white;
  color: #050A30;
  border-radius: 0.5rem;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  font-family: 'SF Pro Display', sans-serif;

  &:hover {
    border-color: #050A30;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }

  svg {
    width: 20px;
    height: 20px;
  }
`;

export const LinkText = styled.p`
  text-align: center;
  margin-top: 1.5rem;
  color: #6B7280;
  font-size: 0.9rem;

  a {
    color: #050A30;
    font-weight: 600;
    text-decoration: none;
    transition: color 0.2s ease;

    &:hover {
      color: #0049AD;
      text-decoration: underline;
    }
  }
`;

export const ErrorMessage = styled(motion.span)`
  color: #ef4444;
  font-size: 0.875rem;
  margin-top: 0.25rem;
  display: block;
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