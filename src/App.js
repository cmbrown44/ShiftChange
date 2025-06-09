import React from 'react';
import { Container, Box, Typography, Paper } from '@mui/material';
import posts from './posts';

function App() {
  return (
    <Container maxWidth="md">
      <Box my={4}>
        {/* Blog Title Banner */}
        <Paper
          elevation={3}
          sx={{
            p: 3,
            mb: 4,
            background: 'linear-gradient(90deg, #1976d2 30%, #9c27b0 90%)',
            color: '#fff',
            borderRadius: 4,
          }}
        >
          <Typography variant="h1" align="center" gutterBottom>
            Shift Change
          </Typography>
          <Typography variant="h5" align="center">
            A blog where I discuss the stuff I'm learning about in tech.
          </Typography>
        </Paper>
        {/* Blog Posts */}
        {posts.map((post) => (
          <Paper
            key={post.id}
            elevation={4}
            sx={{
              p: 3,
              mb: 4,
              borderRadius: 3, // curved edges
              backgroundColor: "#faf7fd", // soft background
              boxShadow: '0 2px 16px rgba(60,40,110,0.08)', // subtle shadow
            }}
          >
            <Typography variant="h2" gutterBottom sx={{ fontSize: '2rem', fontWeight: 700 }}>
              {post.title}
            </Typography>
            <Typography variant="caption" color="text.secondary" gutterBottom>
              {post.date}
            </Typography>
            <Box mt={2}>{post.content}</Box>
          </Paper>
        ))}
      </Box>
    </Container>
  );
}

export default App;