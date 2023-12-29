import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateQuote  } from '../actions/quoteActions';
import { useNavigate,useParams } from 'react-router-dom';

export default function EditQuote() {
  const dispatch = useDispatch();
  const { quote_id } = useParams();
  const allQuotes = useSelector((state) => state.quotes.quotes);
  const foundQuote = allQuotes.find(quote => quote.id == quote_id);
  const [quote, setQuote] = useState(foundQuote.description);
  const navigate = useNavigate();

  const handleQuoteAction = () => {
    if (quote.trim() !== '') {
      dispatch(updateQuote({ id: foundQuote.id, description: quote }));
      setQuote('');
      navigate('/homepage');
    }
  };

  return (
    <center>
      <label>'Edit Quote: '</label>
      <input
        type="text"
        value={quote}
        onChange={(e) => setQuote(e.target.value)}
      />
      <button onClick={handleQuoteAction}>
        Save Quote
      </button>
    </center>
  );
}
