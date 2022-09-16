import { createSlice, configureStore } from '@reduxjs/toolkit';

const initialState = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: JSON.parse(localStorage.getItem('contacts')) ?? initialState,
  reducers: {
    add(state, action) {
      return [...state, action.payload];
    },
    remove(state, action) {
      return state.filter(el => el.id !== action.payload);
    },
  },
});

export const filterSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    filterValue(state, action) {
      return (state = action.payload);
    },
  },
});

export const { add, remove } = contactsSlice.actions;
export const { filterValue } = filterSlice.actions;

export const store = configureStore({
  reducer: {
    contacts: contactsSlice.reducer,
    filter: filterSlice.reducer,
  },
});
