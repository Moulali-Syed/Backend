import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
  },
  reducers: {
    //mapping between action(is addItem) and reducer(it is function)
    //state - here is the initialState
    //action - is the data coming in from our action like button click
    addItem: (state, action) => {
      state.items.push(action.payload());
    },
    //on clearing cart we are not sending any data
    clearCart: (state) => {
      state.items = [];
    },
    removeItem: (state, action) => {
      state.items.pop();
    },
  },
});

//actions* here
export const { addItem, removeItem, clearCart } = cartSlice.actions;
//we need to export reducers , it is decided by redux to call it reducer only
//while exporting, so is below(reducer*)
export default cartSlice.reducer;
