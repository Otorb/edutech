import { useEffect, useState } from "react"
import GoogleLogin from "react-google-login"


const SessionGoogle = () => {

  const [user, setUser] = useState({})

  const clientID = '729444679755-k57vet7co92c1tletjjqtdv6grer9nkp.apps.googleusercontent.com';

  useEffect(() => {
    // Cargar el script de gapi
    const loadScript = () => {
      const script = document.createElement('script');
      script.src = 'https://apis.google.com/js/api.js';
      script.async = true;
      script.defer = true;
      script.onload = initClient;
      document.body.appendChild(script);
    };

    const initClient = () => {
      window.gapi.load('client:auth2', () => {
        window.gapi.auth2.init({
          client_id: clientID,
        });
      });
    };

    loadScript();
  }, [clientID]);

  const onSuccessLogin = (response) => {

    setUser(response.profileObj)
    console.log('Login Success: ', response.profileObj);
  };

  const onFailureLogin = (response) => {
    console.log('Login Failed: ', response);
  };

 

  return (
    <div>
   
        <GoogleLogin
          clientId={clientID}
          buttonText="Login with Google"
          onSuccess={onSuccessLogin}
          onFailure={onFailureLogin}
          cookiePolicy={'single_host_origin'}
        />
      
     
    </div>
  );
};

export default SessionGoogle;