import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import "../css/Man.css";
import Footer from "../components/Footer";

const products = [
  { id: 1, name: "Mavi Pantolon", image: "/images/man/1.jpeg" },
  { id: 2, name: "Siyah Pantolon", image: "/images/man/2.jpeg" },
  { id: 3, name: "Gri Pantolon", image: "/images/man/3.jpeg" },
  { id: 4, name: "Gri Normal Kalıp Pantolon", image: "/images/man/4.jpg" },
  { id: 5, name: "Cep Kumaş Pantolon", image: "/images/man/5.jpg" },
  { id: 6, name: "Yeşil Kargo Pantolon", image: "/images/man/6.jpg" },
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
