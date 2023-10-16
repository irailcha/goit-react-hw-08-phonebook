import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Formik } from 'formik';
import * as yup from 'yup';

import { addContact } from '../../redux/contacts/operations';

import { selectContacts } from '../../redux/contacts/selectors';
import Button from '@mui/material/Button';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';

const userSchema = yup.object().shape({
  name: yup.string().required().label("name"),
  number: yup.string().required().label('number'),
});

const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const addContactHandler = (values, { resetForm }) => {
    const { name, number } = values;
    if (contacts.find(contact => contact.name.toLowerCase() === values.name.toLowerCase() || contact.number === values.number)) {
      return alert(`${values.name} or ${values.number} is already exist`)
    }
    dispatch(addContact({ name, phone: number }));
    resetForm();
  }; 

  const defaultTheme = createTheme();

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Formik initialValues={{ name: '', number: '' }} validationSchema={userSchema} onSubmit={addContactHandler}>
            {({ handleSubmit }) => (
              <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }} autoComplete='off'>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <label htmlFor='name'> Name </label>
                    <TextField
                      required
                      fullWidth
                      type='text'
                      name='name'
                      pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                      title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                      
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <label htmlFor='number'> Number </label>
                    <TextField
                      required
                      fullWidth
                      type='tel'
                      name='number'
                      pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
                      title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                      
                    />
                  </Grid>
                  <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center' }}>
                    <Button
                      type="submit"
                      
                      variant="contained"
                      sx={{ mt: 3, mb: 2 }}
                    > Add contact </Button>
                  </Grid>
                </Grid>
              </Box>
            )}
          </Formik>
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default ContactForm;


