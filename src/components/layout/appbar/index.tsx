import * as React from 'react';
import Button from '@mui/material/Button';

import ResumeButton from '../../routes/resume';
import { StylessLink } from '../../utils';

import * as UI from './styledComponents';

export default function ButtonAppBar() {
  const currentUrlRef = React.useRef<string>();
  React.useEffect(() => {
    currentUrlRef.current = window.location.href;
  });

  return (
    <UI.StyledAppBar color="primary" position="static">
      <UI.StyledToolbar disableGutters>
        <StylessLink to="/">
          <Button color="inherit">About</Button>
        </StylessLink>
        <StylessLink to="/project">
          <Button color="inherit">Projects</Button>
        </StylessLink>
        <StylessLink to="/blogs">
          <Button color="inherit">Blogs</Button>
        </StylessLink>
        <ResumeButton>
          <StylessLink to={currentUrlRef.current ?? '/'}>Resume</StylessLink>
        </ResumeButton>
      </UI.StyledToolbar>
    </UI.StyledAppBar>
  );
}
