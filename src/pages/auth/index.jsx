import { auth, provider } from "../../config/firebase-config";
import { signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useGetUserInfo } from "../../hooks/useGetUserInfo";
import './style.css';

export const Auth = () => {
  const navigate = useNavigate();
  const { isAuth } = useGetUserInfo();

  const signInWithGoogle = async () => {
    const results = await signInWithPopup(auth, provider);
    // console.log(results);   // example result at end.
    const userInfo = {
      userId: results.user.uid,
      name: results.user.displayName,
      profilePhoto: results.user.photoURL,
      isAuth: true,
    };
    localStorage.setItem("auth", JSON.stringify(userInfo));
    navigate('/expense-tracker');
  }

  if (isAuth) {
    return <navigate to="/expense-tracker" />;
    // return navigate('/expense-tracker');
  }

  return (
    <div className="login-page">
      <p>Sign In With Google To Continue</p>
      <button className="login-with-google-btn" onClick={signInWithGoogle}>
        {"  "}
        Sign In With Google
      </button>
    </div>
  )
};


/*
signInWithPopup example : 

{
  "kind": "identitytoolkit#GetAccountInfoResponse",
  "users": [
    {
      "localId": "z8M0CSsVE6eDgzw8anCmLY76N0e2",
      "email": "12113059@nitkkr.ac.in",
      "displayName": "3059_SAHIL",
      "photoUrl": "https://lh3.googleusercontent.com/a/ACg8ocK9hFtaY1kx6gg9Q0sN2Ikww5tAF9UWTNB49dC57pBwgE5e88w=s96-c",
      "emailVerified": true,
      "providerUserInfo": [
        {
          "providerId": "google.com",
          "displayName": "3059_SAHIL",
          "photoUrl": "https://lh3.googleusercontent.com/a/ACg8ocK9hFtaY1kx6gg9Q0sN2Ikww5tAF9UWTNB49dC57pBwgE5e88w=s96-c",
          "federatedId": "118310926904009971806",
          "email": "12113059@nitkkr.ac.in",
          "rawId": "118310926904009971806"
        }
      ],
      "validSince": "1713800352",
      "lastLoginAt": "1713800352852",
      "createdAt": "1713800352851",
      "lastRefreshAt": "2024-04-22T15:39:12.852Z"
    }
  ]
}


*/