"use client"
import React from 'react';
import { Button, TextField, Container, Box, Typography } from '@mui/material';
import { useRouter } from 'next/navigation';

const Login: React.FC = () => {
  const router = useRouter();

  const handleSignIn = () => {
    // After successful sign-in, navigate to the dashboard
    router.push('/dashboard');
  };

  return (
    <Container maxWidth="xs">
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        minHeight="100vh"
      >
        <img
            src='https://bikeindex.org/assets/resources/logo_striped-af937709dee2ba8124298e6edd99a80412297a41e748b46aba9cabcef6b4097a.svg'
            alt='Logo'
            height='70px'
            loading="lazy"
        />
        <Typography sx={{mt: 2}} color='#404a86' variant="h4" gutterBottom>
          Welcome to Bike Index
        </Typography>
        <TextField
          label="Email"
          variant="outlined"
          margin="normal"
          fullWidth
        />
        <TextField
          label="Password"
          variant="outlined"
          margin="normal"
          type="password"
          fullWidth
        />
        <Button
          variant="contained"
          onClick={handleSignIn}
          fullWidth
          sx={{ mt: 2 ,p: 2, background: '#404a86'}}
        >
          Sign In
        </Button>
      </Box>
    </Container>
  );
};

export default Login;