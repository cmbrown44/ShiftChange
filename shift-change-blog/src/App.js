import React from 'react';
import { Container, Box, Typography, Paper } from '@mui/material';

function App() {
  return (
    <Container maxWidth="md">
      <Box my={4}>
        {/* Blog Title Banner */}
        <Paper elevation={3} sx={{ p: 3, mb: 4, background: 'linear-gradient(90deg, #1976d2 30%, #9c27b0 90%)', color: '#fff' }}>
          <Typography variant="h1" align="center" gutterBottom>
            Shift Forward
          </Typography>
          <Typography variant="h5" align="center">
            A blog about my journey learning tech
          </Typography>
        </Paper>
        {/* First Blog Post */}
        <Paper elevation={1} sx={{ p: 3 }}>
          <Typography variant="h2" gutterBottom>
            Welcome! How I Set Up This Blog
          </Typography>
          <Typography variant="body1" paragraph>
            Hi! I’m Charlie. This is my first blog post, and I’m excited to share my journey as a woman in tech. 
            I set up this blog using React, Material UI (Google’s React framework), and GitHub Pages for free static hosting. 
            Everything is managed with code and auto-deployed using GitHub Actions.
          </Typography>
          <Typography variant="body1" paragraph>
            Here’s a high-level overview of how I built this site:
            <ul>
              <li>Created a new React app using Create React App.</li>
              <li>Added Material UI for the design and layout.</li>
              <li>Pushed my code to GitHub and enabled GitHub Pages.</li>
              <li>Set up GitHub Actions to automatically deploy every time I update the code.</li>
            </ul>
            I’ll be documenting more details and what I learn as I go. Stay tuned for more posts!
          </Typography>
        </Paper>
      </Box>
    </Container>
  );
}

export default App;