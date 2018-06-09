import React from 'react';
import { withStyles } from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import Divider from 'material-ui/Divider';
import Typography from 'material-ui/Typography';
import Avatar from './Avatar';

const styles = theme => ({
  container: {
    width: '100%',
    textAlign: 'center'
  },
  divider: {
    margin: '1.5em 3em',
    height: 2
  },
  root: theme.mixins.gutters({
    padding: '2em',
    marginTop: theme.spacing.unit * 3,
    width: '90%',
    margin: '0 auto'
  }),
});

function ProfileHeader(props) {
  const { classes, profile } = props;
  const { firstName, lastName, email, phone, shortBio, experience } = profile;

  if (Object.keys(profile).length === 0) {
    return null;
  }

  const initials = `${firstName.charAt(0).toUpperCase()}${lastName.charAt(0).toUpperCase()}`;

  let position, company, location;
  if (experience !== undefined) {
    position = experience[1].position;
    company = experience[1].company;
    location = experience[1].location;
  }

  return (
    <div className={classes.container}>
      <Paper className={classes.root} elevation={4}>
        <Avatar initials={initials} />
        <Typography type="title" component="h2">
          {firstName} {lastName}
        </Typography>
        <Typography type="subheading" component="h3">
          {position} @ {company}
        </Typography>
        <Typography type="subheading" component="h3">
          {location}
        </Typography>
        <Typography type="subheading" component="h3">
          <a href="mailto:nikamirulmukmeen@gmail.com">{email}</a>
        </Typography>
        <Typography type="subheading" component="h3">
          <a href={`tel:${phone}`}>{phone}</a>
        </Typography>
        <Divider className={classes.divider} inset />
        <Typography component="p">
          {shortBio}
        </Typography>
      </Paper>
    </div>
  );
}

export default withStyles(styles)(ProfileHeader);
