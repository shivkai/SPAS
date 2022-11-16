import { useRouter } from "next/router";
import { useEffect, useState } from "react";
var jwt = require('jsonwebtoken')
// the below function could be any of your custom implementation for verifying the token. I've added it as means of explanantion


const withAuth = (WrappedComponent) => {
  return (props) => {
    const Router = useRouter();
    const [verified, setVerified] = useState(false);


useEffect(() => {
    async function fetchData() {
        const accessToken = localStorage.getItem("token");
        console.log("Inside useeffect isauth");
        // if no accessToken was found,then we redirect to "/" page.
        if (!accessToken) {
          Router.replace("/");
        } else {
          // we call the api that verifies the token.
          jwt.verify(accessToken, 'veryhighlevelsecret', function(err, decoded) {
            if (err) {
                localStorage.removeItem("token");
                Router.push('http://localhost:3000')
              setVerified(false);
            }
            else{
              setVerified(true);
            }
          });
        }
    }
          // if token was verified we set the state.
    
    fetchData();
  }, []); //



    // useEffect(async () => {
    //   const accessToken = localStorage.getItem("token");
    //   console.log("Inside useeffect isauth");
    //   // if no accessToken was found,then we redirect to "/" page.
    //   if (!accessToken) {
    //     Router.replace("/");
    //   } else {
    //     // we call the api that verifies the token.
    //     jwt.verify(accessToken, 'veryhighlevelsecret', function(err, decoded) {
    //       if (err) {
    //           localStorage.removeItem("token");
    //           Router.replace("/");
    //         setVerified(false);
    //       }
    //       else{
    //         setVerified(true);
    //       }
    //     });
    //     // if token was verified we set the state.
      
    //   }
    
    // }, []);

    if (verified) {
      return <WrappedComponent {...props} />;
    } else {
      return null;
    }
  };
};

export default withAuth;