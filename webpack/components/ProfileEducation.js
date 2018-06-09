import React from 'react';
import { withStyles } from 'material-ui/styles';
import List, { ListItem } from 'material-ui/List';
import Avatar from 'material-ui/Avatar';
import Divider from 'material-ui/Divider';
import AccountBalance from 'material-ui-icons/AccountBalance';
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
  }
});

function ProfileEducation(props) {
  const { classes, education = {} } = props;

  return (
    <List className={classes.root}>
      <Typography type="headline" component="h1" align="left">
        Education
      </Typography>
      {Object.keys(education).map(key => {
        const { school, title, grade, description, startYear, endYear } = education[key];
        let divider;
        if (parseInt(key) !== Object.keys(education).length) {
          divider = <Divider className={classes.divider} inset />
        }
        return (
          <div key={key}>
            <ListItem>
              <Avatar>
                <AccountBalance />
              </Avatar>
              <div className={classes.listText}>
                <Typography type="title" component="h2">
                  {school}
                </Typography>
                <Typography type="subheading" component="h3">
                  {title}, {grade}
                </Typography>
                <Typography component="p">
                  {startYear} - {endYear}<br />
                  {description}
                </Typography>
              </div>
            </ListItem>
            {divider}
          </div>
        )
      })}
    </List>
  );
}

export default withStyles(styles)(ProfileEducation);
