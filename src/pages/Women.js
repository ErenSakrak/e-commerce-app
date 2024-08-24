import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import "../css/Man.css";
import Footer from "../components/Footer";

const products = [
  { id: 7, name: "Beyaz Pantolon ", image: "/images/women/k1.jpg" },
  { id: 8, name: "Keten Pantolon", image: "/images/women/k2.jpg" },
  { id: 9, name: "Açık Mavi Kot Pantolon", image: "/images/women/k3.jpg" },
  { id: 10, name: "Standart Pantolon", image: "/images/women/k4.jpg" },
  { id: 11, name: "Paraşüt Pantolon", image: "/images/women/k5.jpg" },
  { id: 12, name: "Jogger Pantolon", image: "/images/women/k6.jpg" },
];

const Man = () => {
  return (
    <div>
      <Navbar />
      <div className="product-container">
        <h1>Men's Collection</h1>
        <div className="products">
          {products.map((product) => (
            <div key={product.id} className="product-card">
              <img
                src={product.image}
                alt={product.name}
                className="product-image"
              />
              <div className="product-info">
                <h2 className="product-name">{product.name}</h2>
                <p className="product-description">{product.description}</p>
                <Link to={`/urun-detay/${product.id}`} className="review-buttonmanwomen">
                  Ürünü İncele
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Man;
