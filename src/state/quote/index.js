import { createSlice } from "@reduxjs/toolkit";
import quotes from "../../schemas/quote";

const initialState = {
  quotes: quotes,
  nextQuoteId: 4,
};

const quoteSlice = createSlice({
  name: "quotes",
  initialState,
  reducers: {
    addQuote: (state, action) => {
      state.quotes = [...state.quotes, action.payload]
      state.nextQuoteId ++;
    },
    removeQuote: (state, action) => {
      state.quotes = state.quotes.filter((quote) => quote.id !== action.payload);
      state.nextQuoteId --;
    },
    updateQuote: (state, action) => {
      const { id, description } = action.payload;

      const index = state.quotes.findIndex((quote) => quote.id === id);

      if (index !== -1) {
        state.quotes[index].description = description;
      }

    },
  },
});

export default quoteSlice;
