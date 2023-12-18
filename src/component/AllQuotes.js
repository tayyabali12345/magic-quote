import React from 'react';
import { useSelector,  useDispatch } from 'react-redux';
import { removeQuote } from '../actions/quoteActions';

export default function AllQuotes() {
  const quotes = useSelector((state) => state.quotes.quotes);
  const dispatch = useDispatch();

  const formatDateTime = (timestamp) => {
    const dateObject = new Date(timestamp);
    const formattedDate = dateObject.toLocaleDateString();
    const formattedTime = dateObject.toLocaleTimeString();
    return { formattedDate, formattedTime };
  };

  const handleDelete = (quoteId) => {
    // Dispatch the removeQuote action with the quoteId
    dispatch(removeQuote(quoteId));
  };

  return (
    <div>
      <h2>Quotes List</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Author</th>
            <th>Description</th>
            <th>Created Date</th>
            <th>Created Time</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {quotes.map(quote => (
            <tr key={quote.id}>
              <td>{quote.id}</td>
              <td>{quote.author}</td>
              <td>{quote.description}</td>
              {quote.date && (
                <>
                  <td>{formatDateTime(quote.date).formattedDate}</td>
                  <td>{formatDateTime(quote.date).formattedTime}</td>
                </>
              )}
               <td>
                <button onClick={() => handleDelete(quote.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
