import { createAction } from "@reduxjs/toolkit";

export const addQuote = createAction("quotes/addQuote");
export const removeQuote = createAction("quotes/removeQuote");
export const updateQuote = createAction("quotes/updateQuote");
