// import logo from './logo.svg';
import React, { useEffect } from "react";
import "./App.css";
import "./App.scss";
import { Nav, Navbar, Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import Cookies from "js-cookie";
import jwt_decode from "jwt-decode";

import Catalog from "./components/Catalog/Catalog.js";
import MyCart from "./components/MyCart/Cart.js";
import Admin from "./components/Admin/Admin.js";

// Component to render the login/signup/logout menu
const RightLoginSignupMenu = () => {
  // Based on Asgardeo SDK, set a variable like below to check and conditionally render the menu
  let isLoggedIn = false;

  // Host the menu content and return it at the end of the function
  let menu;

  const idToken = Cookies.get("IdToken");

  if (idToken != "") {
    isLoggedIn = true;
    var decode = jwt_decode(idToken)["email"];
  }

  // Conditionally render the following two links based on whether the user is logged in or not
  if (isLoggedIn) {
    menu = (
      <>
        <Nav>
          <Nav.Link href="#">{decode}</Nav.Link>

          <Nav.Link href="http://localhost:8000/signout">Sign out</Nav.Link>
        </Nav>
      </>
    );
  } else {
    menu = (
      <>
        <Nav>
          <Nav.Link href="http://localhost:8000/login">Login</Nav.Link>

          <Nav.Link href="http://localhost:8000/signout">Logout</Nav.Link>
        </Nav>
      </>
    );
  }
  return menu;
};

// Component to render the navigation bar
const PetStoreNav = () => {
  return (
    <>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">PetStore</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Link to="/" className="nav-link">
                Catalog
              </Link>
              <Link to="/mycart" className="nav-link">
                My Cart
              </Link>
              <Link to="/admin" className="nav-link">
                Admin
              </Link>
            </Nav>
          </Navbar.Collapse>
          <RightLoginSignupMenu />
        </Container>
      </Navbar>
    </>
  );
};

// Main app component
const App = () => {
  useEffect(() => {
    document.title = "PetStore";
  }, []);
  return (
    <>
      <BrowserRouter>
        <PetStoreNav />
        <Switch>
          <Route exact path="/">
            <Catalog />
          </Route>
          <Route path="/mycart">
            <MyCart />
          </Route>
          <Route path="/admin">
            <Admin />
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default App;
