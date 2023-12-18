import './App.css';
import Login from './page/Login'
import Signup from './page/Signup'
import Error from './page/Error'
import HomePage from './page/HomePage'
import CreateQuote from './page/CreateQuote'
import { Routes, Route } from 'react-router-dom';
import EditProfile from './page/EditProfile';
import NewComment from './component/NewComment';
import EditComment from './component/EditComment';
import EditQuote from './component/EditQuote';
import Users from './component/Users';
import User from './component/User';
import AllTags from './component/AllTags';
import AllQuotes from './component/AllQuotes';

function App() {
  return (
    <Routes>
      <Route exact path='/' element={<Login/>} />
      <Route path='/signup' Component={Signup} />
      <Route path='/homepage' Component={HomePage} />
      <Route path='/user/edit' Component={EditProfile} />
      <Route path='/users' Component={Users} />
      <Route path='/user/:userId' Component={User} />
      <Route path='/users/tags' Component={AllTags} />
      <Route path='/users/quotes' Component={AllQuotes} />
      <Route path='/user/quote' Component={CreateQuote} />
      <Route path="/edit-comment" Component={NewComment} />
      <Route path="/edit-comment/:comment_id" Component={EditComment} />
      <Route path="/edit-quote/:quote_id" Component={EditQuote} />

      <Route path="*" element={<Error/>} />
    </Routes>
  );
}



export default App;
