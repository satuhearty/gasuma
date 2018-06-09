import React from 'react';
import firebase from './firebase';
import Header from './Header';
import Grid from 'material-ui/Grid';
import ProfileHeader from './ProfileHeader';
import ProfileContent from './ProfileContent';
import ReactQueryParams from 'react-query-params';

class Profile extends ReactQueryParams {
  state = {
    profile: {}
  };

  componentWillMount() {
    const profileId = this.queryParams.id;
    firebase.database().ref(`people/${profileId}`).on('value', snapshot => {
      this.setState({ profile: snapshot.val() })
    });
  }

  render() {
    const { profile } = this.state;

    return (
      <div>
        <Header />
        <div style={{ flexGrow: 1, margin: 30 }}>
          <Grid
            container
            alignItems={'center'}
            direction={'row'}
            justify={'center'}
            spacing={24}
          >
            <ProfileHeader profile={profile} />
          </Grid>
        </div>
        <div style={{ flexGrow: 1, margin: 30 }}>
          <Grid
            container
            alignItems={'center'}
            direction={'row'}
            justify={'center'}
            spacing={24}
          >
            <ProfileContent profile={profile} />
          </Grid>
        </div>
      </div>
    )
  }
}

export default Profile;
