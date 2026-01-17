import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Input from '../../../components/ui/Input';
import Button from '../../../components/ui/Button';
import { Checkbox } from '../../../components/ui/Checkbox';
import Icon from '../../../components/AppIcon';
import { supabase } from '../../../utils/supabaseClient';

const LoginForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false
  });

  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const validateForm = () => {
    const newErrors = {};

    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }));
  };

  const handleCheckboxChange = (e) => {
    setFormData(prev => ({ ...prev, rememberMe: e.target.checked }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsLoading(true);
    setErrors({});

    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email: formData.email,
        password: formData.password
      });

      console.log('Login data:', data);
      console.log('Login error:', error);

      if (error) {
        setErrors({ submit: error.message });
        return;
      }

      // ✅ LOGIN SUCCESS
      navigate('/assessment-dashboard');

    } catch (err) {
      console.error(err);
      setErrors({ submit: 'Something went wrong. Please try again.' });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full space-y-6">
      <Input
        type="email"
        name="email"
        label="Email Address"
        placeholder="Enter your email"
        value={formData.email}
        onChange={handleChange}
        error={errors.email}
        disabled={isLoading}
        required
      />

      <div className="relative">
        <Input
          type={showPassword ? 'text' : 'password'}
          name="password"
          label="Password"
          placeholder="Enter your password"
          value={formData.password}
          onChange={handleChange}
          error={errors.password}
          disabled={isLoading}
          required
        />
        <button
          type="button"
          onClick={() => setShowPassword(!showPassword)}
          className="absolute right-3 top-[38px]"
        >
          <Icon name={showPassword ? 'EyeOff' : 'Eye'} size={20} />
        </button>
      </div>

      <div className="flex items-center justify-between">
        <Checkbox
          label="Remember me"
          checked={formData.rememberMe}
          onChange={handleCheckboxChange}
          disabled={isLoading}
        />
        <button
          type="button"
          onClick={() => navigate('/forgot-password')}
          className="text-sm text-primary"
        >
          Forgot Password?
        </button>
      </div>

      {errors.submit && (
        <div className="p-4 bg-error/10 border border-error/20 rounded-lg text-error">
          {errors.submit}
        </div>
      )}

      <Button
        type="submit"
        fullWidth
        loading={isLoading}
        iconName="LogIn"
        iconPosition="right"
      >
        Sign In
      </Button>
    </form>
  );
};

export default LoginForm;
