import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

const ContactsSlice = createSlice({
  name: 'contacts',
  initialState: [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ],
  reducers: {
    addContactAction: {
      reducer: (state, action) => {
        const isSameName = state.some(
          i => i.name.toLowerCase() === action.payload.name.toLowerCase()
        );
        if (isSameName)
          return alert(` ${action.payload.name} is already in contacts`);
        state.push(action.payload);
      },
      prepare: (name, number) => {
        const id = nanoid();
        return { payload: { id, name, number } };
      },
    },
    deleteContactAction(state, action) {
      return state.filter(contact => contact.id !== action.payload);
    },
  },
});

export const { addContactAction, deleteContactAction } = ContactsSlice.actions;
export const contactsReducer = ContactsSlice.reducer;
