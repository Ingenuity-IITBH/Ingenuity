import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const Nav = styled.nav`
    .navbar-list {
      display: flex;
      gap: 4.8rem;

      li {
        list-style: none;

        .navbar-link {
          &:link,
          &:visited {
            display: inline-block;
            text-decoration: none;
            font-size: 1.8rem;
            text-transform: uppercase;
            color: ${({ theme }) => theme.colors.black};
            transition: color 0.3s linear;
          }

          &:hover,
          &:active {
            color: ${({ theme }) => theme.colors.helper};
          }
        }
      }
    }

    .menu {
      display: none;
      position: absolute;
      top: 3.5rem;
      right: 2.5rem;
      flex-direction: column;
      justify-content: space-between;
      width: 2.25rem;
      height: 2rem;

      span {
        height: 0.4rem;
        width: 100%;
        border-radius: 0.2rem;
        background-color: gray;
      }
    }

    @media (max-width: 768px) {
      .menu {
        display: flex;
        flex-direction: column; 
      }
    
      .navbar-list {
        display: ${menuOpen ? "flex" : "none"};
        flex-direction: column;
        width: 100%;
        position: absolute;
        top: 6rem;
        left: 0;
        background-color: ${({ theme }) => theme.colors.bg}; 
        padding: 2rem; 
        box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
        border-radius: 0.5rem; 
        z-index: 100;
    
        .navbar-link {
          width: 100%;
          text-align: center;
          margin-bottom: 1rem; 
        }
      }
    }
    `;

  return (
    <Nav>
        <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <ul className="navbar-list" onClick={() => setMenuOpen(!menuOpen)}>
          <li>
            <NavLink className="navbar-link" to="/">
              Home()
            </NavLink>
          </li>
          <li>
            <NavLink className="navbar-link" to="/events">
              Events()
            </NavLink>
          </li>
          <li>
            <NavLink className="navbar-link" to="/team">
              Team()
            </NavLink>
          </li>
          <li>
            <NavLink className="navbar-link" to="/halloffame">
              Hall Of Fame()
            </NavLink>
          </li>
          <li>
            <NavLink className="navbar-link" to="/contactus">
              Contact Us()
            </NavLink>
          </li>
        </ul>
    </Nav>
  );
};

export default Navbar;












