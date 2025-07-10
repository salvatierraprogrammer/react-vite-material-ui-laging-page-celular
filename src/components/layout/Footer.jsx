// src/components/layout/Footer.jsx
import React from 'react';
import { Box, Typography } from '@mui/material';

const Footer = () => (
  <Box
    component="footer"
    sx={{
      mt: 6,
      py: 3,
      px: 2,
      textAlign: 'center',
      backgroundColor: '#0d0d0d',
      borderTop: '1px solid #222',
      color: '#999',
      boxShadow: 'inset 0 0 10px rgba(0, 255, 204, 0.1)',
    }}
  >
    <Typography
      variant="body2"
      sx={{
        fontSize: '0.9rem',
        color: '#888',
      }}
    >
      &copy; {new Date().getFullYear()} <span style={{ color: '#00ffcc' }}>Reparación Celular</span> — Todos los derechos reservados.
    </Typography>
  </Box>
);

export default Footer;
