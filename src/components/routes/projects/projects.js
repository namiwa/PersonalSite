import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import InfoIcon from '@material-ui/icons/Info';
import IconButton from '@material-ui/core/IconButton';

import tileData from './tileData';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    minHeight: window.innerHeight,
    marginTop: 60,
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
    <Container className={classes.root} ref={ref}>
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
            <GridList cellHeight={400} spacing={4}>
              {tileData.map((tile) => (
                <GridListTile key={tile.img} cols={2}>
                  <img src={tile.img} alt={tile.title} />
                  <GridListTileBar
                    title={tile.title}
                    subtitle={<span>{tile.author}</span>}
                    actionIcon={
                      <IconButton
                        aria-label={`info about ${tile.title}`}
                        className={classes.icon}
                        href={tile.url}
                      >
                        <InfoIcon />
                      </IconButton>
                    }
                  />
                </GridListTile>
              ))}
            </GridList>
          </Grid>
        </Grid>
      </Container>
    </Container>
  );
});

export default Projects;
