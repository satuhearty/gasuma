import * as firebase from 'firebase';

const config = {
  apiKey: "AIzaSyDJHkJIpqyXYdyNuAcxqieMbpf_MsmbQIY",
  authDomain: "gasuma-7777.firebaseapp.com",
  databaseURL: "https://gasuma-7777.firebaseio.com",
  projectId: "gasuma-7777",
  storageBucket: "gasuma-7777.appspot.com",
  messagingSenderId: "517413025694"
};

firebase.initializeApp(config);

export default firebase;