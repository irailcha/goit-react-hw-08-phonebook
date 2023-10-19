import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';



export const fetchContacts = createAsyncThunk(

  'contacts/fetchAll',
  async (_, thunkApi) => {
    try {
    const { data }=await axios.get('/contacts');
      return data;
    } catch (error) {
      
      return thunkApi.rejectWithValue('Failed to fetch contacts');
    }
  }
);

export const addContact = createAsyncThunk(
  'contact/addContact',
  async (contact, thunkApi) => {
    try {
      const { data } = await axios.post('/contacts', contact);
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue();
    }
  }
);

export const deleteContact= createAsyncThunk(
  'contact/deleteContact',
  async (contactId, thunkApi) => {
    try {
      const { data }= await axios.delete(`/contacts/${contactId}`);
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue('Failed to delete contact');
    }
  }
);

export const filterContact = createAsyncThunk(
  'contact/filterContact',
  async (contact, thunkApi) => {
    try {
      const { data } = await axios.get(`/contacts/${contact.id}`, contact);
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue('Failed to filter contact');
    }
  }
);
