import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { addQuote } from '../actions/quoteActions';
import { useDispatch } from 'react-redux';
import { useSelector } from "react-redux";

const CreateQuote = () => {
  const tags = useSelector((state) => state.tags.tags);
  const [author, setAuthor]= useState("");
  const [description, setDescription]= useState("");
  const [selectedTags, setSelectedTags] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const nextQuoteId = useSelector(state => state.quotes.nextQuoteId);

  const handleQuote = () => {
    if (author !== "" && description!== "") {
      const newQuote = {
        id: nextQuoteId,
        tag_ids: selectedTags,
        date: Date.now(),
        author,
        description,
      };

      dispatch(addQuote(newQuote));
      navigate('/homepage');
    } else {
      setErrorMessage('AUTHOR and Description must be present');
    }
  };

  const handleTagChange = (tag) => {
    const tagIndex = selectedTags.findIndex(selectedTag => selectedTag.id === tag.id);

    if (tagIndex !== -1) {
      const updatedTags = [...selectedTags];
      updatedTags.splice(tagIndex, 1);
      setSelectedTags(updatedTags);
    } else {
      setSelectedTags([...selectedTags, tag.id]);
    }
  };


  return (
    <div>
      <h2>Create Quote</h2>
      <form>
        <div>
          <label>Quote Author:</label>
          <input
            type="text"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          />
        </div>
        <div>
          <label>Description:</label>
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>

        <div>
          <label>Tags:</label>
          {tags.map(tag => (
            <div key={tag.id}>
              <input
                type="checkbox"
                id={tag.id}
                name="tags"
                value={tag.id}
                checked={selectedTags.some(selectedTag => selectedTag === tag.id)}
                onChange={() => handleTagChange(tag)}
              />
              <label htmlFor={tag.id}>{tag.name}</label>
            </div>
          ))}
        </div>

        <button type="button" onClick={handleQuote}>
          Create Quote
        </button>
      </form>
      {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
    </div>
  );
};

export default CreateQuote;
