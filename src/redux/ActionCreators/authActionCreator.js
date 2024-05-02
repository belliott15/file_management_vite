import * as types from "../actionsTypes/authActionTypes.js";
import fire from "../../config/firebase.js";

const loginUser = (payload) => {
  return {
    type: types.SIGN_IN,
    payload,
  };
};

const logoutUser = () => {
  return {
    type: types.SIGN_OUT,
  };
};

//action creator
export const signInUser = (email, password, setSuccess) => {
  fire
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then((user) => {
      loginUser({
        uid: user.user.uid,
        email: user.user.email,
        displayName: user.user.displayName,
      });
      setSuccess(true);
      // console.log(user, "authAction Creator signin");
    })
    .catch((error) => {
      console.log(error);
      alert("Invalid Email and/or Password.");
    });
};

export const signUpUser = (fName, lName, email, password, setSuccess) => {
  fire
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then((user) => {
      fire
        .auth()
        .currentUser.updateProfile({
          displayName: fName,
        })
        .then(async () => {
          const currentUser = await fire.auth().currentUser;
          loginUser({
            uid: currentUser.uid,
            name: currentUser.displayName,
            email: currentUser.email,
          });
          setSuccess(true);
          console.log("user object in signupUser", user);
        })
        .catch((error) => {
          console.log(error);
        });
    })
    .catch((error) => {
      if (error.code === "auth/email-already-in-use") {
        alert("Email already in use. Please sign in.");
      }
      if (error.code === "auth/invalid-email") {
        alert("Invalid Email.");
      }
      if (error.code === "auth/weak-password") {
        alert("Weak Password. Please create a new password");
      }
    });
};

export const signOutUser = () => {
  logoutUser();
};

export const checkIsLoggedIn = () => {
  fire.auth().onAuthStateChanged((user) => {
    if (user) {
      loginUser({
        uid: user.uid,
        email: user.email,
        displayName: user.displayName,
      });
    }
  });
};
