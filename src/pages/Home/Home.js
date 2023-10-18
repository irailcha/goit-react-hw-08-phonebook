
import addressBookImage from '../../img/design-illustration.jpg';
import {StyledHomePage, StyledTitle} from './HomeStyle'


export const Home = () =>  {
  return (
    <StyledHomePage >
      <StyledTitle>
      Navigating Your Contacts
      </StyledTitle>
      <img src={addressBookImage} alt="Address Book" />
      
    </StyledHomePage>



  );
}

export default Home;




    

