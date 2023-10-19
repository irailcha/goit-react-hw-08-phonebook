import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from '../../redux/contacts/filterSlice';
import { selectContacts } from '../../redux/contacts/selectors';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';

import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const Filter = ({ name }) => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const changeContactHandler = (newFilter) => {
    dispatch(setFilter(newFilter));
  };

  const handleReset = () => {
    changeContactHandler('');
  };
  
  const defaultTheme = createTheme();
  
  const renderFilter = contacts.length > 0;

  return (
    renderFilter && (
      <ThemeProvider theme={defaultTheme}>
        <Container component="main" maxWidth="md">
          <CssBaseline />
          <Box
            sx={{
              marginTop: 0,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '15px',

            }}
          >
            <TextField
              required
              fullWidth
              type='text'
              name='Find contact'
              value={name}
              onChange={evt => changeContactHandler(evt.target.value)}
              placeholder='Filter'
            />
            <Button
              type="submit"
              variant="contained"
              sx={{ mt: 0 }}
              onClick={handleReset}
            >
              Reset
            </Button>
          </Box>
        </Container>
      </ThemeProvider>
    )
  );
};

export default Filter;

