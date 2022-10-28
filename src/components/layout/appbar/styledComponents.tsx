import { styled } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';

export const StyledAppBar = styled(AppBar)(({ theme }) => ({
  background: theme.palette.primary.light,
  color: theme.palette.common.black,
  marginTop: 0,
  marginLeft: 0,
  marginRight: 0,
}));

export const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  padding: 0,
  margin: 0,
  border: 0,
  minWidth: '100%',
}));
