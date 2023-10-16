import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  color: #1976d2; 
  margin-left: 10px;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 16px; 

  &:hover {
    color: #000;
   
  }
`;
