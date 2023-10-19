import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Box, Button, Table, TableBody, TableCell, TableContainer, TableRow, Paper } from '@mui/material';
import { deleteContact } from '../../redux/contacts/operations';
import { selectVisibleContacts } from '../../redux/contacts/selectors';

const ContactList = () => {
  const dispatch = useDispatch();
  const visibleContacts = useSelector(selectVisibleContacts);

  const deleteContactHandler = (contactId) => {
    dispatch(deleteContact(contactId));
  };

  return (
    <Box>
      {visibleContacts.map((contact) => (
        <TableContainer component={Paper} key={contact.id}>
          <Table>
            <TableBody>
              <TableRow key={contact.id}>
                <TableCell style={{ width: '40%' }}>{contact.name}</TableCell>
                <TableCell style={{ width: '40%' }}>{contact.number}</TableCell>
                <TableCell>
                  <Box display="flex" justifyContent="flex-end">
                    <Button
                      variant="contained"
                      color="error"
                      onClick={() => deleteContactHandler(contact.id)}
                    >
                      Delete
                    </Button>
                  </Box>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      ))}
    </Box>
  );
};

export default ContactList;




