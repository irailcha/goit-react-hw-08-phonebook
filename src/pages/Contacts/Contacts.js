import React from 'react';
import ContactForm from '../../components/ContactForm/ContactForm';
import Filter from '../../components/Filter/Filter';
import ContactList from '../../components/ContactList/ContactList';
import { SectionStyle, TitleStyle, ContactListStyle, MessageStyle } from './ContactsStyle';
import {
  selectLoading,
  selectError,
  selectContacts
} from '../../redux/contacts/selectors';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from '../../redux/contacts/operations';
import { useEffect } from 'react';

export const Contacts = () => {

  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log('fetchContacts')
    dispatch(fetchContacts());
  }, [dispatch]);



  return (
    <SectionStyle>
      <TitleStyle> Phonebook </TitleStyle>
      <ContactForm/>
      {loading && <MessageStyle>Loading...</MessageStyle>}
          {error && <MessageStyle>{error}</MessageStyle>}

      <TitleStyle> Contacts </TitleStyle>
      <ContactListStyle>
        <Filter />
        {contacts.length === 0 && (
            <MessageStyle>There are no any contacts </MessageStyle>
          )}
        <ContactList />
      </ContactListStyle>
      
    </SectionStyle>
  );
};


export default Contacts;



