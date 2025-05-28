'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { useIsMobile } from '../../../../libs/useIsMobile';
import { 
  Wrapper, 
  Container, 
  FormWrapper, 
  Form, 
  Title, 
  InputGroup, 
  Input, 
  Label, 
  Button, 
  LinkText, 
  Divider, 
  SocialButton,
  ErrorMessage,
  SuccessMessage,
  ImageSection,
  BackgroundOverlay,
  PhoneInputContainer,
  PhoneInput,
  InputRow,
  CountryCodeInput
} from './styles';
import axios from 'axios';
import { useRouter } from 'next/navigation';

const Signup = () => {
  const isMobile = useIsMobile();
  const router = useRouter();
  
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    countryCode: '+971',
    mobile: '',
    password: ''
  });
  
  const [errors, setErrors] = useState({});
  const [apiError, setApiError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    
    // Clear any API errors when user starts typing
    if (apiError) setApiError('');
    
    // Special handling for country code
    if (name === 'countryCode') {
      const sanitizedValue = value.replace(/[^0-9+]/g, '');
      const formattedValue = sanitizedValue.startsWith('+') 
        ? '+' + sanitizedValue.slice(1).replace(/[^0-9]/g, '').slice(0, 4)
        : '+' + sanitizedValue.replace(/[^0-9]/g, '').slice(0, 4);
      
      setFormData(prev => ({
        ...prev,
        [name]: formattedValue
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
    
    // Clear field error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.firstName.trim()) {
      newErrors.firstName = 'First name is required';
    } else if (formData.firstName.length > 50) {
      newErrors.firstName = 'First name too long';
    }
    
    if (!formData.lastName.trim()) {
      newErrors.lastName = 'Last name is required';
    } else if (formData.lastName.length > 50) {
      newErrors.lastName = 'Last name too long';
    }
    
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    
    if (!formData.countryCode) {
      newErrors.countryCode = 'Country code is required';
    } else if (!/^\+\d{1,4}$/.test(formData.countryCode)) {
      newErrors.countryCode = 'Please enter a valid country code';
    }
    
    if (!formData.mobile) {
      newErrors.mobile = 'Mobile number is required';
    } else if (!/^\d{8,15}$/.test(formData.mobile.replace(/\s/g, ''))) {
      newErrors.mobile = 'Please enter a valid mobile number';
    }
    
    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 8) {
      newErrors.password = 'Password must be at least 8 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setApiError('');
    
    if (!validateForm()) return;
    
    setIsLoading(true);
    
    const userData = {
      firstname: formData.firstName,
      lastname: formData.lastName,
      email: formData.email,
      password: formData.password,
      phonenumber: `${formData.countryCode}${formData.mobile}`,
      role: 'student' 
    };

    try {
      const response = await axios.post('http://localhost:3001/signup', { userData });
      
      if (response.status === 200) {
        setShowSuccess(true);
        router.push('/otp'); 
      }
    } catch (error) {
      if (error.response) {
        // Handle 400 Bad Request (user already exists)
        if (error.response.status === 400) {
          setApiError('This email is already registered. Please sign in instead.');
        } else {
          setApiError(error.response.data.message || 'Registration failed. Please try again.');
        }
      } else if (error.request) {
        setApiError('Network error. Please check your connection and try again.');
      } else {
        setApiError('An unexpected error occurred. Please try again.');
      }
    } finally {
      setIsLoading(false);
    }
  };

  const formVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const inputVariants = {
    focus: { scale: 1.02, transition: { duration: 0.2 } },
    blur: { scale: 1, transition: { duration: 0.2 } }
  };

  return (
    <Wrapper>
      {!isMobile && (
        <ImageSection>
          <BackgroundOverlay />
          <div className="student-image" />
          <div className="content">
            <h2>Start Your Journey!</h2>
            <p>Join thousands of students finding their perfect university abroad</p>
          </div>
        </ImageSection>
      )}
      
      <Container>
        <FormWrapper
          variants={formVariants}
          initial="hidden"
          animate="visible"
        >
          <Title>Create Account</Title>
          
          {apiError && (
            <ErrorMessage
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              style={{ marginBottom: '1rem' }}
            >
              {apiError}
            </ErrorMessage>
          )}
          
          {showSuccess && (
            <SuccessMessage
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
            >
              Account created successfully! Welcome to our platform.
            </SuccessMessage>
          )}
          
          <Form onSubmit={handleSubmit}>
            <InputRow>
              <InputGroup>
                <Label htmlFor="firstName">First Name</Label>
                <Input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  variants={inputVariants}
                  whileFocus="focus"
                  whileBlur="blur"
                  placeholder="Enter first name"
                  $hasError={!!errors.firstName}
                  maxLength="50"
                />
                {errors.firstName && <ErrorMessage>{errors.firstName}</ErrorMessage>}
              </InputGroup>

              <InputGroup>
                <Label htmlFor="lastName">Last Name</Label>
                <Input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  variants={inputVariants}
                  whileFocus="focus"
                  whileBlur="blur"
                  placeholder="Enter last name"
                  $hasError={!!errors.lastName}
                  maxLength="50"
                />
                {errors.lastName && <ErrorMessage>{errors.lastName}</ErrorMessage>}
              </InputGroup>
            </InputRow>

            <InputGroup>
              <Label htmlFor="email">Email Address</Label>
              <Input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                variants={inputVariants}
                whileFocus="focus"
                whileBlur="blur"
                placeholder="Enter your email"
                $hasError={!!errors.email || !!apiError}
              />
              {errors.email && <ErrorMessage>{errors.email}</ErrorMessage>}
            </InputGroup>

            <InputGroup>
              <Label>Mobile Number</Label>
              <PhoneInputContainer>
                <CountryCodeInput
                  type="text"
                  name="countryCode"
                  value={formData.countryCode}
                  onChange={handleInputChange}
                  variants={inputVariants}
                  whileFocus="focus"
                  whileBlur="blur"
                  placeholder="+code"
                  $hasError={!!errors.countryCode}
                />
                <PhoneInput
                  type="tel"
                  name="mobile"
                  value={formData.mobile}
                  onChange={handleInputChange}
                  variants={inputVariants}
                  whileFocus="focus"
                  whileBlur="blur"
                  placeholder="Enter mobile number"
                  $hasError={!!errors.mobile}
                  maxLength="15"
                />
              </PhoneInputContainer>
              {errors.countryCode && <ErrorMessage>{errors.countryCode}</ErrorMessage>}
              {errors.mobile && <ErrorMessage>{errors.mobile}</ErrorMessage>}
            </InputGroup>

            <InputGroup>
              <Label htmlFor="password">Password</Label>
              <Input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                variants={inputVariants}
                whileFocus="focus"
                whileBlur="blur"
                placeholder="Create a strong password"
                $hasError={!!errors.password}
              />
              {errors.password && <ErrorMessage>{errors.password}</ErrorMessage>}
            </InputGroup>

            <Button
              type="submit"
              disabled={isLoading}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {isLoading ? 'Creating Account...' : 'Create Account'}
            </Button>
          </Form>

          <Divider>
            <span>or continue with</span>
          </Divider>

          <SocialButton
            type="button"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24">
              <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
              <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
              <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
              <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
            </svg>
            Continue with Google
          </SocialButton>

          <LinkText>
            Already have an account? <a href="/login">Sign in here</a>
          </LinkText>
        </FormWrapper>
      </Container>
    </Wrapper>
  );
};

export default Signup; 