// src/components/Sidebar/Sidebar.jsx
import React from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css";   // shu papkada CSS bo‘lsa ishlaydi

function Sidebar() {
  return (
    <div className="sidebar">
      <ul className="category-list">
        <li><Link to="/category/women">Women's Fashion</Link></li>
        <li><Link to="/category/men">Men's Fashion</Link></li>
        <li><Link to="/category/electronics">Electronics</Link></li>
        <li><Link to="/category/home">Home & Lifestyle</Link></li>
        <li><Link to="/category/medicine">Medicine</Link></li>
        <li><Link to="/category/sport">Sports & Outdoor</Link></li>
        <li><Link to="/category/baby">Baby's & Toys</Link></li>
        <li><Link to="/category/pets">Groceries & Pets</Link></li>
        <li><Link to="/category/beauty">Health & Beauty</Link></li>
      </ul>
    </div>
  );
}

export default Sidebar;
