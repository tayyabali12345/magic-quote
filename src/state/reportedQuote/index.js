import { createSlice } from "@reduxjs/toolkit";
import reportedQuotes from "../../schemas/reportedQuote";

const initialState = {
  reportedQuotes: reportedQuotes,
  nextReportQuoteId: 5,
};

const reportedQuoteSlice = createSlice({
  name: "reportedQuotes",
  initialState,
  reducers: {
    reportQuote: (state, action) => {
      console.log("aaaa gya");
      state.reportedQuotes = [...state.reportedQuotes, action.payload]
      state.nextReportQuoteId ++;
    },
    removeQuoteo: (state, action) => {
      console.log("remove quote");
      state.quotes = state.quotes.filter((quote) => quote.id !== action.payload);
      state.nextQuoteId --;
    },
  },
});

export default reportedQuoteSlice;
