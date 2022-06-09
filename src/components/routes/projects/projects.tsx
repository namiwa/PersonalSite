import * as React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ButtonBase from '@material-ui/core/ButtonBase';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

import ButtonAppBar from '../../layout/appbar';
import tileData from './tileData';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  listRoot: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
}));

export const Projects = React.forwardRef(
  (props: any, ref: React.ForwardedRef<HTMLDivElement>) => {
    const classes = useStyles();
    const onClick = (
      e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
      link: string,
    ) => {
      e.preventDefault();
      if (!window) {
        return;
      }
      return window.open(link);
    };
    return (
      <>
        <ButtonAppBar />
        <Container className={classes.root} ref={ref}>
          <Container>
            <Typography align="center" variant="h2">
              Projects
            </Typography>
            <Container>
              <Grid
                container
                direction="column"
                alignItems="center"
                spacing={2}
              >
                {tileData.map((tile) => (
                  <React.Fragment key={tile.url}>
                    <Typography align="center" variant="h5">
                      {tile.author + ' - ' + tile.title}
                    </Typography>
                    <ButtonBase onClick={(e) => onClick(e, tile.url)}>
                      <img src={tile.image} alt={tile.title} />
                    </ButtonBase>
                  </React.Fragment>
                ))}
              </Grid>
            </Container>
          </Container>
        </Container>
      </>
    );
  },
);

export default Projects;
