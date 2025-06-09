import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: { main: '#1976d2' },
    secondary: { main: '#9c27b0' },
    background: {
      default: '#cdc3dd', // matches your pattern
      paper: 'rgba(255,255,255,0.85)', // slightly translucent, looks good on pattern
    }
  },
  typography: {
    fontFamily: 'Roboto, Arial, sans-serif',
    h1: { fontWeight: 700, fontSize: '2.5rem', letterSpacing: '-1px' },
    h2: { fontWeight: 600, fontSize: '2rem' },
    body1: { fontSize: '1.1rem' },
  },
});

export default theme;