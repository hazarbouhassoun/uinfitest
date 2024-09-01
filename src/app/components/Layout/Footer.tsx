import React from 'react';
import { Box, Container, Typography, Link, IconButton } from '@mui/material';
import Grid from '@mui/material/Grid2';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Footer: React.FC = () => {
  return (
    <Box
      sx={{
        backgroundColor: '#404a86',
        color: '#fff',
        py: 4,
        mt: 8,
      }}
    >
      <Container>
        <Grid container spacing={4} sx={{justifyContent: 'space-between'}}>
          <Grid size={4}>
            <Typography variant="h6" gutterBottom>
              About Us
            </Typography>
            <Typography variant="body2" sx={{ color: '#bbb' }}>
              We are a team of passionate developers creating amazing web experiences. Our goal is to deliver high-quality software to our clients and contribute to the community.
            </Typography>
          </Grid>
          <Grid size={4} sx={{width: 'fit-content'}}>
            <Typography variant="h6" gutterBottom>
              Quick Links
            </Typography>
            <Link href="#" variant="body2" sx={{ display: 'block', mb: 1, textDecoration: 'none', color: '#bbb' }}>
              Home
            </Link>
            <Link href="#" variant="body2" sx={{ display: 'block', mb: 1, textDecoration: 'none', color: '#bbb' }}>
              About
            </Link>
            <Link href="#" variant="body2" sx={{ display: 'block', mb: 1, textDecoration: 'none', color: '#bbb' }}>
              Services
            </Link>
            <Link href="#" variant="body2" sx={{ display: 'block', mb: 1, textDecoration: 'none', color: '#bbb' }}>
              Contact
            </Link>
          </Grid>
          <Grid size={4} sx={{width: 'fit-content'}}>
            <Typography variant="h6" gutterBottom>
              Follow Us
            </Typography>
            <Box>
              <IconButton sx={{color: '#bbb', pl: 0}} href="https://facebook.com">
                <FacebookIcon />
              </IconButton>
              <IconButton sx={{color: '#bbb'}} href="https://twitter.com">
                <TwitterIcon />
              </IconButton>
              <IconButton sx={{color: '#bbb'}} href="https://instagram.com">
                <InstagramIcon />
              </IconButton>
              <IconButton sx={{color: '#bbb'}} href="https://linkedin.com">
                <LinkedInIcon />
              </IconButton>
            </Box>
          </Grid>
        </Grid>
        <Box mt={4} textAlign="center">
          <Typography variant="body2" sx={{ color: '#bbb' }}>
            © {new Date().getFullYear()} My Company. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;