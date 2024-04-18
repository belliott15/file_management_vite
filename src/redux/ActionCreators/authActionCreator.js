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
  console.log("name, email, password", fName, lName, email, password);
};

export const signOutUser = () => {
  logoutUser();
};
