import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Icon from '../AppIcon';
import Button from '../ui/Button';
import { supabase } from '../../utils/supabaseClient';

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [user, setUser] = useState(null);

  const navigationItems = [
    { label: 'Dashboard', path: '/assessment-dashboard', icon: 'LayoutDashboard' },
    { label: 'Assessments', path: '/personality-assessment', icon: 'ClipboardList' },
    { label: 'Results', path: '/assessment-results', icon: 'BarChart3' },
  ];

  const isActive = (path) => {
    if (path === '/personality-assessment') {
      return location?.pathname === '/personality-assessment' || location?.pathname === '/skills-evaluation';
    }
    return location?.pathname === path;
  };

  const handleNavigation = (path) => {
    navigate(path);
    setIsMobileMenuOpen(false);
  };

  const handleLogoClick = () => {
    navigate('/assessment-dashboard');
    setIsMobileMenuOpen(false);
  };

  // Fetch current user
  useEffect(() => {
    const getUser = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      setUser(session?.user || null);
    };
    getUser();

    const { data: listener } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user || null);
    });

    return () => {
      listener.subscription.unsubscribe();
    };
  }, []);

  const handleLogout = async () => {
    try {
      await supabase.auth.signOut();
      navigate('/user-login');
    } catch (error) {
      console.error('Logout error:', error.message);
      alert('Failed to logout. Try again.');
    }
  };

  return (
    <>
      {/* Mobile menu button */}
      <button
        className="mobile-menu-button"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        aria-label="Toggle mobile menu"
      >
        <Icon name={isMobileMenuOpen ? 'X' : 'Menu'} size={24} />
      </button>

      <header className="header-nav">
        <div className="max-w-7xl mx-auto h-full flex items-center justify-between">
          <div className="header-logo cursor-pointer" onClick={handleLogoClick}>
            <div className="header-logo-icon">
              <Icon name="Compass" size={24} color="white" />
            </div>
            <span className="header-logo-text hidden sm:inline">CareerCompass</span>
          </div>

          <nav className="hidden lg:flex items-center gap-2">
            {navigationItems?.map((item) => (
              <button
                key={item?.path}
                onClick={() => handleNavigation(item?.path)}
                className={`nav-link flex items-center gap-2 ${isActive(item?.path) ? 'active' : ''}`}
              >
                <Icon name={item?.icon} size={18} />
                <span>{item?.label}</span>
              </button>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-3">
            {user ? (
              <Button
                variant="outline"
                size="sm"
                iconName="LogOut"
                onClick={handleLogout}
              >
                Logout
              </Button>
            ) : (
              <Button
                variant="ghost"
                size="sm"
                iconName="User"
                onClick={() => navigate('/user-login')}
              >
                Account
              </Button>
            )}
          </div>
        </div>
      </header>

      {/* Mobile menu overlay */}
      <div className={`mobile-menu-overlay ${!isMobileMenuOpen ? 'closed' : ''}`}>
        <div className="h-full flex flex-col p-6">
          <div className="header-logo mb-8 cursor-pointer" onClick={handleLogoClick}>
            <div className="header-logo-icon">
              <Icon name="Compass" size={24} color="white" />
            </div>
            <span className="header-logo-text">CareerCompass</span>
          </div>

          <nav className="flex flex-col gap-2 flex-1">
            {navigationItems?.map((item) => (
              <button
                key={item?.path}
                onClick={() => handleNavigation(item?.path)}
                className={`nav-link flex items-center gap-3 text-left ${isActive(item?.path) ? 'active' : ''}`}
              >
                <Icon name={item?.icon} size={20} />
                <span>{item?.label}</span>
              </button>
            ))}
          </nav>

          <div className="border-t border-border pt-4 mt-4">
            {user ? (
              <Button
                variant="outline"
                fullWidth
                iconName="LogOut"
                onClick={handleLogout}
              >
                Logout
              </Button>
            ) : (
              <Button
                variant="outline"
                fullWidth
                iconName="User"
                onClick={() => {
                  navigate('/user-login');
                  setIsMobileMenuOpen(false);
                }}
              >
                Account
              </Button>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
