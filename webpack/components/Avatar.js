import React from 'react';
import { withStyles } from 'material-ui/styles';
import Avatar from 'material-ui/Avatar';
import deepPurple from 'material-ui/colors/deepPurple';

const styles = {
  purpleAvatar: {
    margin: 30,
    color: '#fff',
    backgroundColor: deepPurple[500],
    width: '6em',
    height: '6em'
  },
  row: {
    display: 'flex',
    justifyContent: 'center',
  },
};

function LetterAvatars(props) {
  const { classes, initials } = props;
  return (
    <div className={classes.row}>
      <Avatar className={classes.purpleAvatar}>{initials}</Avatar>
    </div>
  );
}

export default withStyles(styles)(LetterAvatars);
