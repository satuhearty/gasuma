import React from 'react';
import { withStyles } from 'material-ui/styles';
import Card, { CardHeader, CardContent, CardActions } from 'material-ui/Card';
import Avatar from 'material-ui/Avatar';
import IconButton from 'material-ui/IconButton';
import Typography from 'material-ui/Typography';
import red from 'material-ui/colors/red';
import ArrowForwardIcon from 'material-ui-icons/ArrowForward';
import ShareIcon from 'material-ui-icons/Share';
import MoreVertIcon from 'material-ui-icons/MoreVert';

const styles = () => ({
  container: {
    padding: 10
  },
  card: {
    maxWidth: 320,
    minWidth: 320,
    height: 220,
    position: 'relative'
  },
  avatar: {
    backgroundColor: red[500],
  },
  actionButtons: {
    position: 'absolute',
    bottom: 0
  }
});

class RecipeReviewCard extends React.Component {

  render() {
    const { classes, id, person } = this.props;

    return (
      <div key={id} className={classes.container}>
        <Card className={classes.card}>
          <CardHeader
            avatar={
              <Avatar aria-label="Recipe" className={classes.avatar}>
                {person.firstName.charAt(0)}
              </Avatar>
            }
            action={
              <IconButton>
                <MoreVertIcon />
              </IconButton>
            }
            title={person.firstName}
            subheader={person.title}
          />
          <CardContent>
            <Typography component="p">
              {person.shortBio}
            </Typography>
          </CardContent>
          <CardActions disableActionSpacing className={classes.actionButtons}>
            <IconButton aria-label="Share">
              <ShareIcon />
            </IconButton>
            <IconButton href={`/gasuma/profile/?id=${id}`} aria-label="Add to favorites">
              <ArrowForwardIcon />
            </IconButton>
          </CardActions>
        </Card>
      </div>
    );
  }
}

export default withStyles(styles)(RecipeReviewCard);
