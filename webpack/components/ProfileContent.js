import React from 'react';
import { withStyles } from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import ProfileExperience from './ProfileExperience';
import ProfileEducation from './ProfileEducation';
import ProfileAccomplishments from './ProfileAccomplishments';

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

function ProfileContent(props) {
  const { classes, profile } = props;
  const { experience = {}, education = {}, accomplishments = {} } = profile;

  return (
    <div className={classes.container}>
      {Object.keys(experience).length !== 0 &&
        <Paper className={classes.root} elevation={4}>
          <ProfileExperience experience={experience} />
        </Paper>
      }
      {Object.keys(education).length !== 0 &&
        <Paper className={classes.root} elevation={4}>
          <ProfileEducation education={education} />
        </Paper>
      }
      {Object.keys(accomplishments).length !== 0 &&
        <Paper className={classes.root} elevation={4}>
          <ProfileAccomplishments accomplishments={accomplishments} />
        </Paper>
      }
    </div>
  );
}

export default withStyles(styles)(ProfileContent);
