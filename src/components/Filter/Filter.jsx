import React from 'react';
// import './Filter.styled';
// import { FilterStyle } from './Filter.styled';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from '../../redux/contacts/filterSlice';
import {selectContacts} from '../../redux/contacts/selectors';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
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
  
  const  renderFilter = contacts.length > 0;

  return (
    renderFilter &&
    (<ThemeProvider theme={defaultTheme}>
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

      
        <Grid container spacing={2}>
        <Grid item xs={12}>
        <TextField
        required
        fullWidth
          type='text'
          name='Find contact'
          value={name}
          onChange={evt => changeContactHandler(evt.target.value)}
          placeholder='Filter'
        />
        </Grid>
      
    
      <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center' }} onClick={handleReset}>
                    <Button
                      type="submit"
                      
                      variant="contained"
                      sx={{ mt: 3, mb: 2 }}
                    > Reset filter </Button>
                  </Grid>
      </Grid>

    </Box>
      </Container>
    </ThemeProvider>)
  );
};


export default Filter;
