import React from "react";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import { products } from "../data/products";
import "../css/UrunDetay.css";

const UrunDetay = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id, 10));

  console.log('Product ID:', id);
  console.log('Products:', products);
  console.log('Found Product:', product);

  return (
    <div>
      <Navbar />
      {product ? (
        <div className="product-detail-container">
          <div className="product-detail-content">
            <img src={product.image} alt={product.name} className="product-detail-image" />
            <div className="product-detail-info">
              <h1>{product.name}</h1>
              <p className="product-detail-description">{product.description}</p>
              <p className="product-detail-details">{product.details}</p>
              <p className="product-detail-price">Fiyat: {product.price}</p>
              <h3>Beden Tablosu</h3>
              <table className="size-table">
                <thead>
                  <tr>
                    <th>Beden</th>
                    <th>Stok</th>
                  </tr>
                </thead>
                <tbody>
                  {product.sizes.map((size) => (
                    <tr key={size.size}>
                      <td>{size.size}</td>
                      <td>{size.stock}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <button className="reviewbuttondetay">Satın Al</button>
            </div>
          </div>
        </div>
      ) : (
        <p>Ürün bulunamadı</p>
      )}
    </div>
  );
};

export default UrunDetay;
