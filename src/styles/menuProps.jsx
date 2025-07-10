export const menuProps = {
  PaperProps: {
    sx: {
      bgcolor: '#111', // fondo oscuro del menú desplegable
      color: '#00ffcc', // texto en neón
      borderRadius: 2,
      boxShadow: '0 0 15px #00ffcc88',
      '& .MuiMenuItem-root': {
        '&:hover': {
          bgcolor: '#00ffcc22',
          color: '#00ffcc',
        },
        '&.Mui-selected': {
          bgcolor: '#00ffcc44',
          color: '#000',
        },
      },
    },
  },
};