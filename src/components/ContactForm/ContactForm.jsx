import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { StyledForm, StyledField} from './ContactFormStyle';
import { Formik } from 'formik';
import * as yup from 'yup';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import { addContact } from '../../redux/contacts/operations';
import {selectContacts} from '../../redux/contacts/selectors';

const userSchema = yup.object().shape({
  name: yup.string().required().label("name"),
  number: yup.string().required().label('number'),
});

const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);


  const addContactHandler = (values, { resetForm }) => {
    const {name, number} = values;
    if (contacts.find(contact => contact.name.toLowerCase() === values.name.toLowerCase() || contact.number === values.number)) {
      return alert(`${values.name} or ${values.number} is already exist`)
    }
    dispatch(addContact({name, number}));
    resetForm();
  }; 


  return (
    <Formik initialValues={{ name: '', number: '' }} validationSchema={userSchema} onSubmit={addContactHandler}>
      {({ handleSubmit }) => (
        <StyledForm autoComplete='off' onSubmit={handleSubmit}>
          <label htmlFor='name'> Name </label>
          <StyledField
            type='text'
            name='name'
            pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
          <label htmlFor='number'> Number </label>
          <StyledField
            type='tel'
            name='number'
            pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />

          
               <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center' }}>
              <Button
                type="submit"
                
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Add contact
              </Button>
              </Grid>

        </StyledForm>
      )}
    </Formik>
  );
};

export default ContactForm;


