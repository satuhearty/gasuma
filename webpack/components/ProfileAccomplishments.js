import React from 'react';
import { withStyles } from 'material-ui/styles';
import List, { ListItem } from 'material-ui/List';
import Divider from 'material-ui/Divider';
import Chip from 'material-ui/Chip';
import Typography from 'material-ui/Typography';

const styles = theme => ({
  root: {
    width: '100%',
    background: theme.palette.background.paper,
  },
  listText: {
    marginLeft: 30,
    width: '100%',
    textAlign: 'left'
  },
  divider: {
    marginTop: 10,
    marginBottom: 10
  },
  chip: {
    margin: theme.spacing.unit
  },
  row: {
    display: 'flex',
    justifyContent: 'left',
    flexWrap: 'wrap'
  }
});

function ProfileAccomplishments(props) {
  const { classes, accomplishments = {} } = props;
  const { courses = {}, honors  = {}, languages = {}, organizations = {} } = accomplishments;

  return (
    <List className={classes.root}>
      <Typography type="headline" component="h1" align="left">
        Accomplishments
      </Typography>
      {Object.keys(courses).length !== 0 &&
        <div>
          <ListItem>
            <Typography type="headline" component="h1">
              {Object.keys(courses).length}
            </Typography>
            <div className={classes.listText}>
              <Typography type="title" component="h3">
                Courses
              </Typography>
              <Typography component="div" className={classes.row}>
                {Object.keys(courses).map(key => {
                  return (
                    <Chip key={key} label={courses[key]} className={classes.chip} />
                  )
                })}
              </Typography>
            </div>
          </ListItem>
          <Divider className={classes.divider} inset />
        </div>
      }
      {Object.keys(honors).length !== 0 &&
        <div>
          <ListItem>
            <Typography type="headline" component="h1">
              {Object.keys(honors).length}
            </Typography>
            <div className={classes.listText}>
              <Typography type="title" component="h3">
                Honors & Awards
              </Typography>
              <Typography component="div" className={classes.row}>
                {Object.keys(honors).map(key => {
                  return (
                    <Chip key={key} label={honors[key]} className={classes.chip} />
                  )
                })}
              </Typography>
            </div>
          </ListItem>
        </div>
      }
      {Object.keys(organizations).length !== 0 &&
        <div>
          <ListItem>
            <Typography type="headline" component="h1">
              {Object.keys(organizations).length}
            </Typography>
            <div className={classes.listText}>
              <Typography type="title" component="h3">
                Organizations
              </Typography>
              <Typography component="div" className={classes.row}>
                {Object.keys(organizations).map(key => {
                  return (
                    <Chip key={key} label={organizations[key]} className={classes.chip} />
                  )
                })}
              </Typography>
            </div>
          </ListItem>
        </div>
      }
      {Object.keys(organizations).length !== 0 &&
        <div>
          <ListItem>
            <Typography type="headline" component="h1">
              {Object.keys(languages).length}
            </Typography>
            <div className={classes.listText}>
              <Typography type="title" component="h3">
                Languages
              </Typography>
              <Typography component="div" className={classes.row}>
                {Object.keys(languages).map(key => {
                  return (
                    <Chip key={key} label={languages[key]} className={classes.chip} />
                  )
                })}
              </Typography>
            </div>
          </ListItem>
        </div>
      }
    </List>
  );
}

export default withStyles(styles)(ProfileAccomplishments);
