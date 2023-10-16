import { useDispatch } from 'react-redux';
import { logOut } from '../../redux/auth/operations';
import { useAuth } from '../../hooks';
import {StyledButton, UserMenuStyle, GreetingsStyle} from './UserMenuStyle';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <UserMenuStyle >
     
      <GreetingsStyle >{user.email}</GreetingsStyle>
      <StyledButton type="button" onClick={() => dispatch(logOut())}>
        Logout
      </StyledButton>
    </UserMenuStyle>
  );
};