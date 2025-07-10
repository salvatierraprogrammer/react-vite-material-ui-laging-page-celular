import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Menu,
  MenuItem,
  useMediaQuery,
  useTheme,
  Box,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import BuildIcon from '@mui/icons-material/Build';
import { Link } from 'react-router-dom';
import logocolor from '../../assets/logocolor.png'

const Header = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenuOpen = (event) => setAnchorEl(event.currentTarget);
  const handleMenuClose = () => setAnchorEl(null);

  const navLinks = [
    { label: 'Inicio', to: '/' },
    { label: 'Servicios', to: '/#servicios' },
    { label: 'Contacto', to: '/#contacto' },
    { label: 'Formulario', to: '/formulario' },
  ];

  return (
    <AppBar
      position="static"
      sx={{
        bgcolor: '#111',
        boxShadow: 'none',
        borderBottom: 'none',
        zIndex: 1300,
        position: 'relative',
      }}
    >
      <Toolbar disableGutters sx={{ px: 2 }}>
        {/* Logo en código */}
      

        <Box
          component={Link}
          to="/"
          sx={{
            display: 'flex',
            alignItems: 'center',
            textDecoration: 'none',
            flexGrow: 1,
            gap: 1,
          }}
        >
          <Box
            component="img"
            src={logocolor}
            alt="Logo Foucault"
            sx={{
              height: 90,
              width: 100,
              objectFit: 'contain',
            }}
          />

          <Box sx={{ display: 'flex', flexDirection: 'column', lineHeight: 1 }}>
            <Typography
              variant="h6"
              sx={{
                fontWeight: 'bold',
                color: '#00ffcc',
                textShadow: '0 0 6px #00ffcc',
                fontSize: { xs: '1rem', sm: '1.5rem' },
                lineHeight: 1.1,
              }}
            >
              FOUCAULT
            </Typography>

            <Typography
              variant="body2"
              sx={{
                color: '#00ffcc',
                opacity: 0.8,
                fontSize: { xs: '0.65rem', sm: '0.9rem' },
                fontWeight: 500,
                lineHeight: 1.1,
                marginTop: '-4px',
              }}
            >
              Reparación de Celulares
            </Typography>
          </Box>
        </Box>



        {/* Navegación */}
        {isMobile ? (
          <>
            <IconButton
              edge="end"
              aria-label="menu"
              onClick={handleMenuOpen}
              sx={{ color: '#00ffcc' }}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleMenuClose}
              PaperProps={{
                sx: {
                  bgcolor: '#111',
                  border: '1px solid #00ffcc33',
                  color: '#ccc',
                },
              }}
            >
              {navLinks.map((link) => (
                <MenuItem
                  key={link.label}
                  onClick={handleMenuClose}
                  component={Link}
                  to={link.to}
                  sx={{
                    '&:hover': {
                      bgcolor: '#00ffcc22',
                      color: '#00ffcc',
                    },
                  }}
                >
                  {link.label}
                </MenuItem>
              ))}
            </Menu>
          </>
        ) : (
          navLinks.map((link) => (
            <Button
              key={link.label}
              component={Link}
              to={link.to}
              sx={{
                color: '#ccc',
                fontWeight: 'bold',
                '&:hover': {
                  color: '#00ffcc',
                  textShadow: '0 0 6px #00ffcc',
                },
              }}
            >
              {link.label}
            </Button>
          ))
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Header;
