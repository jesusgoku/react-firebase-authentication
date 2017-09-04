import * as firebase from 'firebase';

import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  SIGNUP_REQUEST,
  SIGNUP_SUCCESS,
  SIGNUP_ERROR,
  SIGNOUT_REQUEST,
  SIGNOUT_SUCCESS,
  SIGNOUT_ERROR,
} from '.';

const signInRequest = () => ({
  type: LOGIN_REQUEST,
});

export const signInSuccess = res => ({
  type: LOGIN_SUCCESS,
  payload: res,
});

const signInError = err => ({
  type: LOGIN_ERROR,
  payload: err,
  error: true,
});

const signUpRequest = () => ({
  type: SIGNUP_REQUEST,
});

const signUpSuccess = res => ({
  type: SIGNUP_SUCCESS,
  payload: res,
});

const signUpError = err => ({
  type: SIGNUP_ERROR,
  payload: err,
  error: true,
});

const signOutRequest = () => ({
  type: SIGNOUT_REQUEST,
});

export const signOutSuccess = res => ({
  type: SIGNOUT_SUCCESS,
  payload: res,
});

const signOutError = err => ({
  type: SIGNOUT_ERROR,
  payload: err,
  error: true,
});

export const signIn = (email, password) => dispatch => {
  dispatch(signInRequest());
  return firebase.auth().signInWithEmailAndPassword(email, password)
    .then(
      res => dispatch(signInSuccess(res)),
      err => dispatch(signInError(err)),
    )
  ;
};

export const signUp = (email, password) => dispatch => {
  dispatch(signUpRequest());
  return firebase.auth().createUserWithEmailAndPassword(email, password)
    .then(
      res => dispatch(signUpSuccess(res)),
      err => dispatch(signUpError(err)),
    )
  ;
};

export const signOut = () => dispatch => {
  dispatch(signOutRequest());
  return firebase.auth().signOut()
    .then(
      res => dispatch(signOutSuccess(res)),
      err => signOutError(signOutError(err),)
    )
  ;
};
