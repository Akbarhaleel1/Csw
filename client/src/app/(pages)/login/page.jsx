'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
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
  ErrorMessage,
  SuccessMessage,
  ImageSection,
  BackgroundOverlay
} from './styles';

const Login = () => {
  const isMobile = useIsMobile();
  const router = useRouter();
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [authError, setAuthError] = useState(null);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
    if (authError) setAuthError(null);
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    
    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsLoading(true);
    setAuthError(null);
    
    try {
      console.log('formData', formData.email)
      const result = await signIn('credentials', {
        redirect: false,
        email: formData.email,
        password: formData.password,
        callbackUrl: '/'
      });

      console.log('result is', result)

      if (result?.error) {
        setAuthError(result.error);
      } else {
        setShowSuccess(true);
        setTimeout(() => {
          router.push(result?.url || '/');
        }, 1500);
      }
    } catch (error) {
      setAuthError('An unexpected error occurred. Please try again.');
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
            <h2>Welcome Back!</h2>
            <p>Continue your journey to find the perfect university abroad</p>
          </div>
        </ImageSection>
      )}
      
      <Container>
        <FormWrapper
          variants={formVariants}
          initial="hidden"
          animate="visible"
        >
          <Title>Login</Title>
          
          {showSuccess && (
            <SuccessMessage
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
            >
              Login successful! Redirecting...
            </SuccessMessage>
          )}
          
          {authError && (
            <ErrorMessage
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
            >
              {authError}
            </ErrorMessage>
          )}
          
          <Form onSubmit={handleSubmit}>
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
                $hasError={!!errors.email}
              />
              {errors.email && <ErrorMessage>{errors.email}</ErrorMessage>}
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
                placeholder="Enter your password"
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
              {isLoading ? 'Login...' : 'Login'}
            </Button>
          </Form>

          <Divider>
            <span>or continue with</span>
          </Divider>

          <LinkText>
            Don't have an account? <a href="/signup">Sign up here</a>
          </LinkText>
        </FormWrapper>
      </Container>
    </Wrapper>
  );
};

export default Login;