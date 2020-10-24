import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop: 60,
  },
}));

export const Projects = React.forwardRef((props, ref) => {
  const classes = useStyles();
  return (
    <Container className={classes.root} ref={ref}>
      <Typography align="center" variant="h3">
        Watch this space for write-ups on the projects which I took! Lorem ipsum
        dolor sit amet consectetur, adipisicing elit. Eligendi necessitatibus
        voluptatum explicabo consectetur autem dicta aspernatur, voluptatibus
        deleniti. Sapiente rerum mollitia aliquam, vitae omnis exercitationem
        soluta consectetur dolores aliquid delectus! Watch this space for
        write-ups on the projects which I took! Lorem ipsum dolor sit amet
        consectetur, adipisicing elit. Eligendi necessitatibus voluptatum
        explicabo consectetur autem dicta aspernatur, voluptatibus deleniti.
        Sapiente rerum mollitia aliquam, vitae omnis exercitationem soluta
        consectetur dolores aliquid delectus! Watch this space for write-ups on
        the projects which I took! Lorem ipsum dolor sit amet consectetur,
        adipisicing elit. Eligendi necessitatibus voluptatum explicabo
        consectetur autem dicta aspernatur, voluptatibus deleniti. Sapiente
        rerum mollitia aliquam, vitae omnis exercitationem soluta consectetur
        dolores aliquid delectus!
      </Typography>
    </Container>
  );
});

export default Projects;
