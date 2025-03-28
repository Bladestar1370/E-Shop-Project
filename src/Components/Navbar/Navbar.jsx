import React from 'react';
import './Navbar.css';

import logo from '../Assets/logo1.jpg';

export const Navbar = ({ cartCount }) => { // Accept cartCount as a prop
  return (
    <header>
    <section id="header">
      <div className="logo">   
        <a href="#"><img src={logo} width="100" alt="Logo" /></a>
      </div>
      <div className="nav-search">
        <input placeholder="Search here" className="search-input" />
        <div className="search-icon">
          <i className="fa-solid fa-magnifying-glass"></i>
        </div>
      </div>
      <div>
        <ul id="navbar">
          <li className="border">
            <a href="Wishlist.html">
              <i className="fa-regular fa-heart"></i>
            </a>
          </li>
          <li className="border">
            <a href="Cart.html">
            <i className="fa-solid fa-cart-shopping"></i>
                <span className="cart-count">{cartCount}</span> {/* Always show count */}
              </a>
            </li>
          <li className="border">
            <a href="Profile.html">
              <i className="fa-regular fa-user"></i>
            </a>
          </li>
        </ul>
      </div>
    </section>
    <div class="panel">
            <div class="panel-all border">
                <i class="fa-solid fa-bars"></i>
                All
            </div>
            <div class="panel-ops">
                <p>Toys Sale</p>
                <p>Dogs</p>
                <p>Cats</p>
                <p>Small Animals</p>
                <p>Pharmacy</p>
            </div>
        </div>
    </header>
  );
};
