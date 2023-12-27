import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { userTags, removeTags, deleteTag } from '../actions/tagActions';

export default function AllTags() {
  const dispatch = useDispatch();
  const tags = useSelector((state) => state.tags.tags);
  const currentUser = useSelector((state) => state.users.currentUser);

  const followTags = (id) => {
    dispatch(userTags([id, currentUser.id]));
  };

  const unfollowTags = (id) => {
    dispatch(removeTags([id, currentUser.id]));
  };

  const handleDelete = (tagId) => {
    dispatch(deleteTag(tagId));
  };

  return (
    <center>
      <div className='container'>
        <h4>Tags List</h4>
        <table>
          <thead>
            <tr>
              <th>Author</th>
              <th>Description</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {tags.map(tag => (
              <tr key={tag.id}>
                <td>{tag.name}</td>
                <td>{tag.author}</td>
                {currentUser.role !== "admin" ? (
                  <td>
                    <button onClick={() => (tag.followed_user_ids.find(id => id === currentUser.id) ? unfollowTags(tag.id) : followTags(tag.id))}>
                      {tag.followed_user_ids.find(id => id === currentUser.id) ? "UnFollow" : "Follow"}
                    </button>
                  </td>
                ):(
                <td>
                  <button className='btn deletebtn' onClick={() => handleDelete(tag.id)}>Delete Tag</button>
                </td>)
                }
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </center>
  );
}
