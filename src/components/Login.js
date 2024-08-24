import { GoogleLogin } from "react-google-login";

const clientId =
  "664078810118-0pradufihpmmk8j23doprg6vmfsqmiot.apps.googleusercontent.com";

function Login() {
  const onSuccess = (res) => {
    console.log("Login success! Current user: ", res.profileObj);
  };
  const onFailure = (res) => {
    console.log("Login failed! res: ", res);
  };

  return (
    <div id="signInButton">
      <GoogleLogin
        clientId={clientId}
        buttonText="Login with Google"
        onSuccess={onSuccess}
        onFailure={onFailure}
        cookiePolicy={"single_host_origin"}
        isSignedIn={true}
      />
    </div>
  );
}

export default Login;
