import React from 'react';
import { useSelector } from 'react-redux';

export default function ReportedQuotes() {
  const quotes = useSelector((state) => state.reportedQuotes.reportedQuotes);
  const users = useSelector((state) => state.users.users);

  const getUserName = (userId) => {
    const user = users.find(user => user.id === userId);
    return user ? user.first_name : 'Unknown User';
  };

  return (
    <center>
      <h2> Reported Quotes List</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Reported By</th>
            <th>Reason to Report</th>
            <th>Reported Quote ID</th>
          </tr>
        </thead>
        <tbody>
          {quotes.map(quote => (
            <tr key={quote.id}>
              <td>{quote.id}</td>
              <td>{getUserName(quote.user_id)}</td>
              <td>{quote.description}</td>
              <td>{quote.quote_id}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </center>
  );
}
