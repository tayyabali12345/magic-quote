import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useNavigate, Link } from 'react-router-dom';
import { clearUserData } from '../actions/userActions';

function Header() {
  const loggedInUser = useSelector((state) => state.users.currentUser);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handlelogout = ()=> {
    dispatch(clearUserData());
    navigate('/');
  }

  return (
    <Navbar bg="primary" variant="dark">
      <Container>
        <Navbar.Brand href="#home">MAGIC QUOTE GENERATOR</Navbar.Brand>

        <Nav className="me-auto">
          {loggedInUser ? (
            <>
              <Link to="/user/edit" className="nav-link">
                Edit Profile
              </Link>
              <Link to="/user/quote" className="nav-link">
                New Quote
              </Link>
              <Link to="/users" className="nav-link">
                Users
              </Link>
              <Link to="/users/tags" className="nav-link">
                Tags
              </Link>
              <Link to="/users/quotes" className="nav-link">
                Existing Quotes
              </Link>
              <Link to="/users/reported-quotes" className="nav-link">
                Reported Quotes
              </Link>
              <button className='logbtn' onClick={()=>{handlelogout()}}>Log Out</button>
            </>
          ) : (
            <>
              <Link to="/" className="nav-link">
                SignIn
              </Link>
              <Link to="/signup" className="nav-link">
                SignUp
              </Link>
            </>
          )}
        </Nav>
      </Container>
    </Navbar>
  );
}

export default Header;

