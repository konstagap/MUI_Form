import { Container, Grid, Link, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import React from 'react';

const Layout = ({ children }) => {
  return (
    <Container maxWidth='md' sx={{ boxShadow: 1 }}>
      <Grid container direction={'column'} flexWrap='nowrap' sx={{ height: '100vh' }}>
        <Grid item component='header' sx={{ mt: 3 }}>
          <Typography variant='h5' component={'h1'} gutterBottom>
            Welcome to CAR-O-BUY
          </Typography>
          <Typography variant='subtitle1' component={'h2'} gutterBottom>
            Please fill out a form and our representative will contact you shortly
          </Typography>
        </Grid>
        <Grid item component='main' flexGrow={1} sx={{ overflow: 'auto' }}>
          {children}
        </Grid>
        <Grid item component='footer'>
          <Box
            sx={{
              py: 2,
              textAlign: 'right',
            }}
          >
            <Link href='tel:+19292945554' sx={{ mr: 3 }}>
              +1 (929) 924-55-54
            </Link>
            CAR-O-BUY 2022™
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Layout;
