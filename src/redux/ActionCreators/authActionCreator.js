import * as types from "../actionsTypes/authActionTypes.js";
import fire from "../../config/firebase.js";

const loginUser = (payload) => {
  return {
    type: types.LOGIN_USER,
    payload,
  };
};

const logoutUser = () => {
  return {
    type: types.SIGN_OUT_USER,
  };
};

//action creator
export const signInUser = (email, password) => {
  fire
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then((user) => {
      console.log(user);
    })
    .catch((error) => {
      console.log(error);
      alert("Invalid Email and/or Password.");
    });
};

export const signUpUser = (fName, lName, email, password) => {
  fire
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then((user) => {
      fire
        .auth()
        .currentUser.updateProfile({
          displayName: fName,
        })
        .then(() => {
          const currentUser = fire.auth().currentUser;
          loginUser({
            uid: currentUser.uid,
            name: currentUser.displayName,
            email: currentUser.email,
          });
          console.log("passed", currentUser);
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
