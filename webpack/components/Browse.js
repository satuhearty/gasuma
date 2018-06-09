import React, { Component } from 'react';
import firebase from './firebase';
import Header from './Header';
import Grid from 'material-ui/Grid';
import ProfileCard from './ProfileCard';

class Browse extends Component {
  state = {
    people: []
  };

  componentDidMount() {
    firebase.database().ref('people').on('value', snapshot => {
      this.setState({ people: snapshot.val() });
      window.hello = this.state.people;
    });
  }

  render() {
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
            {Object.keys(this.state.people).map(key => {
              return (
                <ProfileCard
                  key={key}
                  id={key}
                  person={this.state.people[key]}
                />
              );
            })}
          </Grid>
        </div>
      </div>
    )
  }
}

export default Browse;
