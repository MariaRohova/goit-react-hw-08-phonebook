import { createSlice } from '@reduxjs/toolkit';
import {
  addContacts,
  changeContacts,
  deleteContacts,
  fetchContacts,
} from './operation';

const contactsState = {
  items: [],
  isLoading: false,
  error: null,
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    contacts: contactsState,
  },
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchContacts.pending, (state, action) => {
        state.contacts.isLoading = true;
        state.contacts.error = '';
      })
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.contacts.items = action.payload;
        state.contacts.isLoading = false;
      })
      .addCase(fetchContacts.rejected, (state, action) => {
        state.contacts.error = action.payload;
        state.contacts.isLoading = false;
      })

      .addCase(deleteContacts.pending, state => {
        state.contacts.isLoading = true;
        state.contacts.error = '';
      })
      .addCase(deleteContacts.fulfilled, (state, action) => {
        state.contacts.items = state.contacts.items.filter(
          ({ id }) => id !== action.payload.id
        );
        state.contacts.isLoading = false;
      })
      .addCase(deleteContacts.rejected, (state, action) => {
        state.contacts.error = action.payload;
        state.contacts.isLoading = false;
      })

      .addCase(addContacts.pending, (state, action) => {
        state.contacts.isLoading = true;
        state.contacts.error = '';
      })
      .addCase(addContacts.fulfilled, (state, action) => {
        state.contacts.items = [action.payload, ...state.contacts.items];
        state.contacts.isLoading = false;
      })
      .addCase(addContacts.rejected, (state, action) => {
        state.contacts.error = action.payload;
        state.contacts.isLoading = false;
      })

      .addCase(changeContacts.pending, (state, action) => {
        state.contacts.isLoading = true;
        state.contacts.error = '';
      })
      .addCase(changeContacts.fulfilled, (state, { payload }) => {
        state.contacts.items = [
          payload,
          ...state.contacts.items.filter(contact => {
            return contact.id !== payload.id;
          }),
        ];
        state.contacts.isLoading = false;
      })
      .addCase(changeContacts.rejected, (state, action) => {
        state.contacts.error = action.payload;
        state.contacts.isLoading = false;
      });
    
  },
});

export const { addContact, removeContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
