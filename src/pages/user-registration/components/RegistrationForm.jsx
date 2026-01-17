import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Input from '../../../components/ui/Input';
import Select from '../../../components/ui/Select';
import { Checkbox } from '../../../components/ui/Checkbox';
import Button from '../../../components/ui/Button';
import { supabase } from '../../../utils/supabaseClient'; // Make sure this exists

const RegistrationForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
    birthDate: '',
    educationLevel: '',
    currentStatus: '',
    agreeToTerms: false
  });

  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [passwordStrength, setPasswordStrength] = useState(0);
  const [serverError, setServerError] = useState(''); // New for Supabase errors

  const educationLevelOptions = [
    { value: 'high-school', label: 'High School' },
    { value: 'some-college', label: 'Some College' },
    { value: 'associate', label: 'Associate Degree' },
    { value: 'bachelor', label: "Bachelor's Degree" },
    { value: 'master', label: "Master's Degree" },
    { value: 'doctorate', label: 'Doctorate' }
  ];

  const currentStatusOptions = [
    { value: 'high-school-student', label: 'High School Student' },
    { value: 'college-student', label: 'College Student' },
    { value: 'recent-graduate', label: 'Recent Graduate' },
    { value: 'career-changer', label: 'Career Changer' }
  ];

  const calculatePasswordStrength = (password) => {
    let strength = 0;
    if (password?.length >= 8) strength += 25;
    if (password?.length >= 12) strength += 25;
    if (/[a-z]/?.test(password) && /[A-Z]/?.test(password)) strength += 25;
    if (/\d/?.test(password)) strength += 15;
    if (/[!@#$%^&*(),.?":{}|<>]/?.test(password)) strength += 10;
    return Math.min(strength, 100);
  };

  const validateField = (name, value) => {
    switch (name) {
      case 'fullName':
        if (!value?.trim()) return 'Full name is required';
        if (value?.trim()?.length < 2) return 'Name must be at least 2 characters';
        if (!/^[a-zA-Z\s]+$/?.test(value)) return 'Name can only contain letters and spaces';
        return '';

      case 'email':
        if (!value) return 'Email is required';
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/?.test(value)) return 'Please enter a valid email address';
        return '';

      case 'password':
        if (!value) return 'Password is required';
        if (value?.length < 8) return 'Password must be at least 8 characters';
        if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/?.test(value)) {
          return 'Password must contain uppercase, lowercase, and number';
        }
        return '';

      case 'confirmPassword':
        if (!value) return 'Please confirm your password';
        if (value !== formData?.password) return 'Passwords do not match';
        return '';

      case 'birthDate':
        if (!value) return 'Birth date is required';
        const birthYear = new Date(value)?.getFullYear();
        const currentYear = new Date()?.getFullYear();
        const age = currentYear - birthYear;
        if (age < 13) return 'You must be at least 13 years old';
        if (age > 100) return 'Please enter a valid birth date';
        return '';

      case 'educationLevel':
        if (!value) return 'Please select your education level';
        return '';

      case 'currentStatus':
        if (!value) return 'Please select your current status';
        return '';

      case 'agreeToTerms':
        if (!value) return 'You must agree to the terms and conditions';
        return '';

      default:
        return '';
    }
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e?.target;
    const fieldValue = type === 'checkbox' ? checked : value;

    setFormData(prev => ({
      ...prev,
      [name]: fieldValue
    }));

    if (name === 'password') {
      let strength = calculatePasswordStrength(value);
      setPasswordStrength(strength);
    }

    if (touched?.[name]) {
      const error = validateField(name, fieldValue);
      setErrors(prev => ({
        ...prev,
        [name]: error
      }));
    }
  };

  const handleSelectChange = (name, value) => {
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    if (touched?.[name]) {
      const error = validateField(name, value);
      setErrors(prev => ({
        ...prev,
        [name]: error
      }));
    }
  };

  const handleBlur = (e) => {
    const { name } = e?.target;
    setTouched(prev => ({
      ...prev,
      [name]: true
    }));

    const error = validateField(name, formData?.[name]);
    setErrors(prev => ({
      ...prev,
      [name]: error
    }));
  };

  const handleSubmit = async (e) => {
    e?.preventDefault();

    const allTouched = Object.keys(formData)?.reduce((acc, key) => {
      acc[key] = true;
      return acc;
    }, {});
    setTouched(allTouched);

    const newErrors = {};
    Object.keys(formData)?.forEach(key => {
      const error = validateField(key, formData?.[key]);
      if (error) newErrors[key] = error;
    });
    setErrors(newErrors);
    setServerError('');

    if (Object.keys(newErrors)?.length === 0) {
      setIsSubmitting(true);

      try {
        const { data, error } = await supabase.auth.signUp({
          email: formData.email,
          password: formData.password,
          options: {
            data: {
              fullName: formData.fullName,
              birthDate: formData.birthDate,
              educationLevel: formData.educationLevel,
              currentStatus: formData.currentStatus
            }
          }
        });

        if (error) {
          setServerError(error.message);
          setIsSubmitting(false);
          return;
        }

        // Optional: show a message to verify email
        console.log('Registration successful:', data);

        setIsSubmitting(false);
        navigate('/assessment-dashboard'); // Redirect after signup
      } catch (err) {
        setServerError('Something went wrong. Please try again.');
        setIsSubmitting(false);
      }
    }
  };

  const getPasswordStrengthColor = () => {
    if (passwordStrength < 40) return 'bg-error';
    if (passwordStrength < 70) return 'bg-warning';
    return 'bg-success';
  };

  const getPasswordStrengthText = () => {
    if (passwordStrength < 40) return 'Weak';
    if (passwordStrength < 70) return 'Medium';
    return 'Strong';
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {serverError && (
        <div className="text-error text-sm">{serverError}</div>
      )}
      <Input
        label="Full Name"
        type="text"
        name="fullName"
        placeholder="Enter your full name"
        value={formData?.fullName}
        onChange={handleChange}
        onBlur={handleBlur}
        error={touched?.fullName ? errors?.fullName : ''}
        required
      />
      <Input
        label="Email Address"
        type="email"
        name="email"
        placeholder="your.email@example.com"
        value={formData?.email}
        onChange={handleChange}
        onBlur={handleBlur}
        error={touched?.email ? errors?.email : ''}
        description="We'll use this for account verification and updates"
        required
      />
      <div>
        <Input
          label="Password"
          type="password"
          name="password"
          placeholder="Create a strong password"
          value={formData?.password}
          onChange={handleChange}
          onBlur={handleBlur}
          error={touched?.password ? errors?.password : ''}
          required
        />
        {formData?.password && (
          <div className="mt-2">
            <div className="flex items-center justify-between mb-1">
              <span className="text-xs text-muted-foreground">Password Strength</span>
              <span className={`text-xs font-medium ${
                passwordStrength < 40 ? 'text-error' : 
                passwordStrength < 70 ? 'text-warning': 'text-success'
              }`}>
                {getPasswordStrengthText()}
              </span>
            </div>
            <div className="h-2 bg-muted rounded-full overflow-hidden">
              <div
                className={`h-full transition-all duration-300 ${getPasswordStrengthColor()}`}
                style={{ width: `${passwordStrength}%` }}
              />
            </div>
          </div>
        )}
      </div>
      <Input
        label="Confirm Password"
        type="password"
        name="confirmPassword"
        placeholder="Re-enter your password"
        value={formData?.confirmPassword}
        onChange={handleChange}
        onBlur={handleBlur}
        error={touched?.confirmPassword ? errors?.confirmPassword : ''}
        required
      />
      <Input
        label="Birth Date"
        type="date"
        name="birthDate"
        value={formData?.birthDate}
        onChange={handleChange}
        onBlur={handleBlur}
        error={touched?.birthDate ? errors?.birthDate : ''}
        description="Must be at least 13 years old to register"
        required
      />
      <Select
        label="Education Level"
        options={educationLevelOptions}
        value={formData?.educationLevel}
        onChange={(value) => handleSelectChange('educationLevel', value)}
        error={touched?.educationLevel ? errors?.educationLevel : ''}
        placeholder="Select your education level"
        required
      />
      <Select
        label="Current Status"
        options={currentStatusOptions}
        value={formData?.currentStatus}
        onChange={(value) => handleSelectChange('currentStatus', value)}
        error={touched?.currentStatus ? errors?.currentStatus : ''}
        placeholder="Select your current status"
        description="This helps us personalize your career guidance"
        required
      />
      <Checkbox
        label="I agree to the Terms of Service and Privacy Policy"
        name="agreeToTerms"
        checked={formData?.agreeToTerms}
        onChange={handleChange}
        error={touched?.agreeToTerms ? errors?.agreeToTerms : ''}
        required
      />
      <Button
        type="submit"
        variant="default"
        fullWidth
        loading={isSubmitting}
        disabled={isSubmitting}
        iconName="UserPlus"
        iconPosition="left"
      >
        {isSubmitting ? 'Creating Account...' : 'Create Account'}
      </Button>
    </form>
  );
};

export default RegistrationForm;
