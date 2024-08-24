import { GoogleLogout } from "react-google-login";

const clientId =
  "664078810118-0pradufihpmmk8j23doprg6vmfsqmiot.apps.googleusercontent.com";

function Logout() {
  const onSuccess = () => {
    console.log("Log Out Successfully");
  };

  return (
    <div id="signOutButton">
      <GoogleLogout
        clientId={clientId}
        buttonText="Logout"
        onLogoutSuccess={onSuccess}
      />
    </div>
  );
}

export default Logout;
