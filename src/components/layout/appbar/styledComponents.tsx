import { styled } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';

export const StyledAppBar = styled(AppBar)(({ theme }) => ({
  background: theme.palette.primary.light,
  color: theme.palette.common.black,
  marginTop: 0,
  marginLeft: 0,
  marginRight: 0,
}));

export const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  alignItems: 'center',
  justifyContent: 'center',
}));

export const StyledBox = styled(Box)(() => ({
  flexGrow: 1,
}));
