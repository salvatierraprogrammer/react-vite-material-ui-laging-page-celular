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
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';

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
  ];

  return (
  <AppBar
  position="static"
  sx={{
    bgcolor: '#111',
    boxShadow: 'none !important',
    borderBottom: '0 !important',
    border: 'none !important',
    outline: 'none !important',
    zIndex: 1300,
    position: 'relative',
    backgroundClip: 'padding-box',
  }}
>
  <Toolbar disableGutters sx={{ px: 2 }}>
    <Typography
      variant="h6"
      sx={{
        flexGrow: 1,
        fontWeight: 'bold',
        color: '#00ffcc',
        textShadow: '0 0 6px #00ffcc',
      }}
    >
      Reparación de Celular
    </Typography>

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
