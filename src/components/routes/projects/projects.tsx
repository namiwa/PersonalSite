import * as React from 'react';
import { styled } from '@material-ui/core/styles';
import ButtonBase from '@material-ui/core/ButtonBase';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

import ButtonAppBar from '../../layout/appbar';
import tileData from './tileData';

const PREFIX = 'Projects';

const classes = {
  root: `${PREFIX}-root`,
  listRoot: `${PREFIX}-listRoot`,
};

// TODO jss-to-styled codemod: The Fragment root was replaced by div. Change the tag if needed.
const Root = styled('div')(({ theme }) => ({
  [`& .${classes.root}`]: {
    flexGrow: 1,
  },

  [`& .${classes.listRoot}`]: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
}));

export const Projects = React.forwardRef(
  (props: any, ref: React.ForwardedRef<HTMLDivElement>) => {
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
      <Root>
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
      </Root>
    );
  },
);

export default Projects;
