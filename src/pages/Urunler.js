import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { products } from "../data/products";
import "../css/Urunler.css";

const Urunler = () => {
  return (
    <div>
      <Navbar />
      <div className="product-list-container">
        <br/>
        <br/>
        <br/>
        <div className="product-list">
          {products.map((product) => (
            <Link key={product.id} to={`/urunler/${product.id}`} className="product-card">
              <img src={product.image} alt={product.name} className="product-image" />
              <div className="product-info">
                <h2 className="product-name">{product.name}</h2>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Urunler;
