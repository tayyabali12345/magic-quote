import "./App.css";
import Login from "./page/Login";
import Signup from "./page/Signup";
import Error from "./page/Error";
import HomePage from "./page/HomePage";
import CreateQuote from "./page/CreateQuote";
import { Routes, Route } from "react-router-dom";
import EditProfile from "./page/EditProfile";
import NewComment from "./component/NewComment";
import EditComment from "./component/EditComment";
import EditQuote from "./component/EditQuote";
import Users from "./component/Users";
import User from "./component/User";
import AllTags from "./component/AllTags";
import AllQuotes from "./component/AllQuotes";
import ReportedQuotes from "./component/ReportedQuotes";
import ProtectedRoute from "./component/ProtectedRoute";
import Header from "./component/Header";
import Footer from "./component/Footer";
import Sidebar from "./component/Sidebar";

function App() {
  return (
    <>
      <Header />
      {/* <Sidebar/> */}
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route path="/signup" Component={Signup} />

        <Route
          path="/homepage"
          element={<ProtectedRoute Component={HomePage} />}
        />

        <Route
          path="/user/edit"
          element={<ProtectedRoute Component={EditProfile} />}
        />

        <Route
          path="/users"
          element={<ProtectedRoute Component={Users} />}
        />

        <Route
          path="/user/:userId"
          element={<ProtectedRoute Component={User} />}
        />

        <Route
          path="/users/tags"
          element={<ProtectedRoute Component={AllTags} />}
        />

        <Route
          path="/users/quotes"
          element={<ProtectedRoute Component={AllQuotes} />}
        />

        <Route
          path="/user/quote"
          element={<ProtectedRoute Component={CreateQuote} />}
        />

        <Route
          path="/edit-comment"
          element={<ProtectedRoute Component={NewComment} />}
        />

        <Route
          path="/edit-comment/:comment_id"
          element={<ProtectedRoute Component={EditComment} />}
        />

        <Route
          path="/users/reported-quotes"
          element={<ProtectedRoute Component={ReportedQuotes} />}
        />

        <Route
          path="/edit-quote/:quote_id"
          element={<ProtectedRoute Component={EditQuote} />}
        />

        <Route path="*" element={<Error />} />
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
