import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { supabase } from '../utils/supabaseClient';

const ProtectedRoute = ({ children, adminOnly = false }) => {
  const [loading, setLoading] = useState(true);
  const [authenticated, setAuthenticated] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const checkUser = async () => {
      const {
        data: { session },
      } = await supabase.auth.getSession();

      if (session) {
        setAuthenticated(true);
        const role =
          session.user?.user_metadata?.role ||
          session.user?.app_metadata?.role ||
          session.user?.role;
        setIsAdmin(role === 'admin' || role === 'Admin');
      } else {
        setAuthenticated(false);
        setIsAdmin(false);
      }

      setLoading(false);
    };

    checkUser();

    // Listen to auth state changes so we respond to login/logout immediately.
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      if (session) {
        setAuthenticated(true);
        const role =
          session.user?.user_metadata?.role ||
          session.user?.app_metadata?.role ||
          session.user?.role;
        setIsAdmin(role === 'admin' || role === 'Admin');
      } else {
        setAuthenticated(false);
        setIsAdmin(false);
      }
    });

    return () => {
      subscription?.unsubscribe();
    };
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!authenticated) {
    return <Navigate to="/user-login" replace />;
  }

  if (adminOnly && !isAdmin) {
    // Authenticated but not an admin – send them to their dashboard.
    return <Navigate to="/assessment-dashboard" replace />;
  }

  return children;
};

export default ProtectedRoute;
