import { useEffect } from 'react';
import { handleAuthCallback } from '@netlify/identity';

const AuthBootstrap = () => {
  useEffect(() => {
    handleAuthCallback().then((result) => {
      if (!result) return;
      sessionStorage.setItem('zenith_auth_callback', result.type);
      if (result.type === 'invite' && result.token) sessionStorage.setItem('zenith_invite_token', result.token);
      if (!window.location.hash.startsWith('#/admin')) window.location.hash = '#/admin';
    }).catch(() => { /* The public site remains available when Identity is not enabled locally. */ });
  }, []);
  return null;
};

export default AuthBootstrap;

