import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

export default function Footer() {
  return (
    <div>
      <CssBaseline />
      <Container fluid>
        <Typography variant='h6'>
          שי שלצברג , אהליהב 10 רמת גן , TVGRAM
        </Typography>
        <Typography component='div' style={{ backgroundColor: '#cfe8fc' }} />
      </Container>
    </div>
  );
}
