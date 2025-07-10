// src/components/HeroSection.jsx
import React from 'react';
import { Box, Typography, Button, Container } from '@mui/material';

const HeroSection = () => (
  <Box
    sx={{
      background: 'linear-gradient(145deg, #1a1a1a, #0d0d0d)',
      color: '#00ffcc',
      py: 12,
      borderBottom: '1px solid #2f2f2f',
      boxShadow: 'inset 0 0 20px #000000',
    }}
  >
    <Container sx={{ textAlign: 'center' }}>
      <Typography
        variant="h2"
        gutterBottom
        sx={{
          fontWeight: 'bold',
          textShadow: '0 0 10px #00ffcc',
        }}
      >
        ¡Reparamos tu celular!
      </Typography>
      <Typography
        variant="h6"
        gutterBottom
        sx={{ color: '#cccccc', mb: 4 }}
      >
        Rápido, seguro y al mejor precio
      </Typography>
      <Button
        variant="contained"
        size="large"
        href="#contacto"
        sx={{
          bgcolor: '#00ffcc',
          color: '#000',
          '&:hover': {
            bgcolor: '#00e6b8',
          },
          fontWeight: 'bold',
          borderRadius: '30px',
          px: 4,
          boxShadow: '0 0 15px #00ffcc',
        }}
      >
        Solicitar Servicio
      </Button>
    </Container>
  </Box>
);

export default HeroSection;



