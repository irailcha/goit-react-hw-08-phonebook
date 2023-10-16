
import { useAuth } from 'hooks';
import {StyledNavLink} from './NavigationStyle'

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <nav>
      <StyledNavLink  to="/">
        Home
      </StyledNavLink>
      {isLoggedIn && (
        <StyledNavLink to="/contacts">
          Contacts
        </StyledNavLink>
      )}
    </nav>
  );
};


