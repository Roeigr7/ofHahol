import { createTheme } from '@material-ui/core/styles';

const theme = createTheme({
  root: {
    alignItems: 'flex-end',
  },
  palette: {
    primary: {
      main: '#614b0e',
    },
    secondary: {
      main: '#ffffff',
    },
    navColor: {
      main: 'rgba(97, 75, 14,0.4)',
    },
  },
});

export default theme;
