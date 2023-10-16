import React from 'react';
import { StyledNavLink } from './AuthNavStyle';

export const AuthNav = () => {
  return (
    <div>
      <StyledNavLink to="/register">
        Sign up
      </StyledNavLink>
      <StyledNavLink to="/login">
        Log In
      </StyledNavLink>
    </div>
  );
};


