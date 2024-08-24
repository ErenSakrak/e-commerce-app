import React from "react";
import "../css/footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h2>İletişim</h2>
          <p>Adres: Örnek Mah. No: 123, İstanbul</p>
          <p>Telefon: +90 123 456 7890</p>
          <p>Email: info@ornekmail.com</p>
        </div>
        <div className="footer-section">
          <h2>Hızlı Linkler</h2>
          <ul>
            <li><a href="/anasayfa">Ana Sayfa</a></li>
            <li><a href="/hakkinda">Hakkında</a></li>
            <li><a href="/iletisim">İletişim</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h2>Sosyal Medya</h2>
          <ul>
            <li><a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a></li>
            <li><a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a></li>
            <li><a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 E-Ticaret Sitesi. Tüm Hakları Saklıdır.</p>
      </div>
    </footer>
  );
};

export default Footer;
