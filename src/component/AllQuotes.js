import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeQuote } from '../actions/quoteActions';
import { reportQuote } from '../actions/reportedQuoteActions';

export default function AllQuotes() {
  const quotes = useSelector((state) => state.quotes.quotes);
  const nextreportId = useSelector((state) => state.reportedQuotes.nextReportQuoteId);
  const reportedQuotes = useSelector((state) => state.reportedQuotes.reportedQuotes);
  const user = useSelector((state) => state.users.currentUser);
  const [descriptions, setDescriptions] = useState({});

  const dispatch = useDispatch();

  const formatDateTime = (timestamp) => {
    const dateObject = new Date(timestamp);
    const formattedDate = dateObject.toLocaleDateString();
    const formattedTime = dateObject.toLocaleTimeString();
    return { formattedDate, formattedTime };
  };

  const handleDelete = (quoteId) => {
    dispatch(removeQuote(quoteId));
  };

  const handleReportQuote = (quoteId) => {
    const obj = {
      id: nextreportId,
      quote_id: quoteId,
      description: descriptions[quoteId] || '',
      user_id: user.id,
    };
    console.log("abc");
    dispatch(reportQuote(obj));
    setDescriptions('');
  };

  const handleDescriptionChange = (quoteId, value) => {
    setDescriptions((prevDescriptions) => ({
      ...prevDescriptions,
      [quoteId]: value,
    }));
  };

  const isQuoteReported = (quoteId) => {
    return reportedQuotes.some(report => report.quote_id === quoteId && report.user_id === user.id);
  };

  return (
    <center>
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
          {quotes.map((quote) => (
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
              <td>
                {isQuoteReported(quote.id) ? (
                  <p>This quote has already been reported.</p>
                ) : (
                  <>
                    <input
                      type="text"
                      value={descriptions[quote.id] || ''}
                      onChange={(e) => handleDescriptionChange(quote.id, e.target.value)}
                    />
                    <button onClick={() => handleReportQuote(quote.id)}>Report Quote</button>
                  </>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </center>
  );
}
