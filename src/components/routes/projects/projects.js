import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';

import ImageButton from './imageButton';
import tileData from './tileData';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    minHeight: window.innerHeight,
  },
  listRoot: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: 500,
    height: 450,
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
}));

export const Projects = React.forwardRef((props, ref) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Container ref={ref}>
        <Typography align="center" variant="h4">
          Projects
        </Typography>
        <Typography align="center" variant="h6">
          Here are some of my projects!
        </Typography>
        <Container>
          <Grid
            container
            direction="column"
            justify="flex-start"
            alignItems="center"
          >
            <Grid item>
              <GridList cellHeight={210} spacing={2}>
                {tileData.map((tile) => (
                  <GridListTile
                    onClick={(e) => {
                      e.preventDefault();
                      console.log('teset');
                    }}
                    key={tile.img}
                    cols={2}
                  >
                    <ImageButton images={[tile]} />
                  </GridListTile>
                ))}
              </GridList>
            </Grid>
          </Grid>
        </Container>
      </Container>
    </div>
  );
});

export default Projects;
