import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import "../css/anasayfa.css";
import Footer from "../components/Footer";

const categories = [
  { id: 1, name: "KADIN", image: "/images/kadin.jpg", path: "/women" },
  { id: 2, name: "ERKEK", image: "/images/erkek.jpg", path: "/man" },
];

const Anasayfa = () => {
  return (
    <div>
      <Navbar />
      <div className="category-container">
        <h1>Kategoriler</h1>
        <div className="categories">
          {categories.map((category) => (
            <Link key={category.id} to={category.path} className="category-card">
              <img src={category.image} alt={category.name} className="category-image" />
              <div className="category-overlay">
                <h2>{category.name}</h2>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <div className="product-container">
        <h1>Ürünlerimiz</h1>
        <div className="products">
          <Link to="/urunler" className="view-products-button">
            <button className="review-buttonmain">Ürünleri İncele</button>
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Anasayfa;
