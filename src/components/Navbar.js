import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/anasayfa">Anasayfa</Link>
        </li>
        <li>
          <Link to="/ecommerce">Mağaza</Link>
        </li>
        <li>
          <Link to="/hakkinda">Hakkında</Link>
        </li>
        <li>
          <Link to="/iletisim">İletişim</Link>
        </li>
        <li className="logout">
          <Link to="/" className="logout-button">Çıkış Yap</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
