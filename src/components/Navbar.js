import { Link } from "react-router-dom";
import { GoogleLogout } from "react-google-login";
import { useNavigate } from "react-router-dom";

const clientId =
  "664078810118-0pradufihpmmk8j23doprg6vmfsqmiot.apps.googleusercontent.com";

const Navbar = () => {
  const navigate = useNavigate();

  const onLogoutSuccess = () => {
    console.log("Log Out Successfully");
    navigate("/");
  };

  return (
    <nav>
      <ul>
        <li>
          <Link to="/anasayfa">Anasayfa</Link>
        </li>
        <li>
          <Link to="/hakkinda">Hakkında</Link>
        </li>
        <li>
          <Link to="/iletisim">İletişim</Link>
        </li>
        <li className="logout">
          <GoogleLogout
            clientId={clientId}
            onLogoutSuccess={onLogoutSuccess}
            render={(renderProps) => (
              <button
                onClick={renderProps.onClick}
                disabled={renderProps.disabled}
                className="logout-button"
              >
                Çıkış Yap
              </button>
            )}
          />
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
