import * as React from 'react';
import ButtonBase from '@mui/material/ButtonBase';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

import tileData from './tileData';

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

export const Projects = () => {
  return (
    <Container>
      <Container>
        <Container>
          <Typography align="center" variant="h2">
            Projects
          </Typography>
          <Container>
            <Grid container direction="column" alignItems="center" spacing={2}>
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
    </Container>
  );
};

export default Projects;
