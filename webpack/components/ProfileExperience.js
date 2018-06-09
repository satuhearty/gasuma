import React from 'react';
import { withStyles } from 'material-ui/styles';
import List, { ListItem } from 'material-ui/List';
import Avatar from 'material-ui/Avatar';
import Divider from 'material-ui/Divider';
import WorkIcon from 'material-ui-icons/Work';
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

function ProfileExperience(props) {
  const { classes, experience = {} } = props;

  return (
    <List className={classes.root}>
      <Typography type="headline" component="h1" align="left">
        Experience
      </Typography>
      {Object.keys(experience).map(key => {
        const { company, description, endMonth, endYear, location, position, startMonth, startYear } = experience[key];
        let divider;
        if (parseInt(key) !== Object.keys(experience).length) {
          divider = <Divider className={classes.divider} inset />
        }
        return (
          <div key={key}>
            <ListItem>
              <Avatar>
                <WorkIcon />
              </Avatar>
              <div className={classes.listText}>
                <Typography type="title" component="h2">
                  {position}
                </Typography>
                <Typography type="subheading" component="h3">
                  {company}
                </Typography>
                <Typography component="p">
                  {startMonth} {startYear} - {endMonth} {endYear}<br />
                  {location}<br /><br />
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

export default withStyles(styles)(ProfileExperience);
