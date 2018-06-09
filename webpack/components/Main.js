import React, { Component } from 'react';
import firebase from './firebase';
import { FirebaseAuth } from 'react-firebaseui';
import Header from './Header';
import Grid from 'material-ui/Grid';

class Main extends Component {
  state = {};

  // Configure FirebaseUI.
  uiConfig = {
    // Popup signin flow rather than redirect flow.
    signInFlow: 'popup',
    // We will display Google and Facebook as auth providers.
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      firebase.auth.FacebookAuthProvider.PROVIDER_ID,
      firebase.auth.EmailAuthProvider.PROVIDER_ID
    ],
    // Sets the `signedIn` state property to `true` once signed in.
    callbacks: {
      signInSuccess: () => {
        this.setState({signedIn: true});
        return false; // Avoid redirects after sign-in.
      }
    }
  };

  render() {
    return (
      <div>
        <Header />
        <div style={{ flexGrow: 1, marginTop: 30 }}>
          <Grid container spacing={24}>
            <Grid item xs={12}>
              {/*<div style={{ textAlign: 'center' }}>Hello</div>*/}
              <FirebaseAuth uiConfig={this.uiConfig} firebaseAuth={firebase.auth()}/>
            </Grid>
          </Grid>
        </div>
      </div>
    )
  }
}

export default Main;
