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
          }}
        >
          <Typography variant="h1" align="center" gutterBottom>
            Shift Forward
          </Typography>
          <Typography variant="h5" align="center">
            A blog about my journey learning tech
          </Typography>
        </Paper>
        {/* Blog Posts */}
        {posts.map((post) => (
          <Paper key={post.id} elevation={1} sx={{ p: 3, mb: 4 }}>
            <Typography variant="h2" gutterBottom>
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