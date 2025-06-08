import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2', // You can customize this color
    },
    secondary: {
      main: '#9c27b0',
    },
    background: {
      default: '#f9f9f9',
    },
  },
  typography: {
    fontFamily: 'Roboto, Arial, sans-serif', // Uses Google Fonts
    h1: {
      fontWeight: 700,
      fontSize: '2.5rem',
      letterSpacing: '-1px',
    },
    h2: {
      fontWeight: 600,
      fontSize: '2rem',
    },
    body1: {
      fontSize: '1.1rem',
    },
  },
});

export default theme;