import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  color: #fff;
    background-color: #1976d2;
    padding: 5px 10px;
    border-radius: 4px;
  margin-right: 10px;
  
  &:hover {
    color: #000;
    background-color: #1976d2;
  }
`;
