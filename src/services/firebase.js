import * as firebase from 'firebase';

import store from '../reducers';

import config from '../config/config';

import { signInSuccess, signOutSuccess } from '../actions/login';

firebase.initializeApp(config.firebase);

firebase.auth().onAuthStateChanged(user => {
  store.dispatch(user ? signInSuccess(user) : signOutSuccess(user));
});
