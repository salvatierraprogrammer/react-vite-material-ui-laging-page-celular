import React, { useState } from 'react';
import {
  Box,
  TextField,
  Button,
  Typography,
  useTheme,
  useMediaQuery,
  MenuItem,
} from '@mui/material';

import { modelosPorMarca } from '../data/modelosPorMarca';
import { problemasComunes } from '../data/problemasComunes.jsx';
import {menuProps} from '../styles/menuProps.jsx';
import ProblemaSelectorModal from './ProblemaSelectorModal.jsx';
const marcas = Object.keys(modelosPorMarca);

const ContactForm = () => {
  const theme = useTheme();
  const isXs = useMediaQuery(theme.breakpoints.down('sm'));

  const [marcaSeleccionada, setMarcaSeleccionada] = useState('');
  const [modeloSeleccionado, setModeloSeleccionado] = useState('');
  const [modeloPersonalizado, setModeloPersonalizado] = useState('');
  const [usarModeloPersonalizado, setUsarModeloPersonalizado] = useState(false);
  const [problemaSeleccionado, setProblemaSeleccionado] = useState('');
  
  const [nombre, setNombre] = useState('');
  const [telefono, setTelefono] = useState('');
  const [detalleProblema, setDetalleProblema] = useState('');

  const handleMarcaChange = (e) => {
    setMarcaSeleccionada(e.target.value);
    setModeloSeleccionado('');
    setModeloPersonalizado('');
    setUsarModeloPersonalizado(false);
  };

  const handleModeloChange = (e) => {
    if (e.target.value === '__otro__') {
      setUsarModeloPersonalizado(true);
      setModeloSeleccionado('');
      setModeloPersonalizado('');
    } else {
      setModeloSeleccionado(e.target.value);
      setUsarModeloPersonalizado(false);
      setModeloPersonalizado('');
    }
  };

  // Valida que todos los campos requeridos estén completos
  const validarCampos = () => {
    const modeloFinal = usarModeloPersonalizado ? modeloPersonalizado.trim() : modeloSeleccionado;
    return (
      marcaSeleccionada &&
      modeloFinal &&
      problemaSeleccionado &&
      nombre.trim() &&
      telefono.trim() &&
      detalleProblema.trim()
    );
  };
const crearMensaje = () => {
  const modeloFinal = usarModeloPersonalizado ? modeloPersonalizado.trim() : modeloSeleccionado;
  return `📋 *Reporte de problema*\n\n` +
         `🏷️ *Marca:* ${marcaSeleccionada}\n` +
         `📱 *Modelo:* ${modeloFinal}\n` +
         `🛠️ *Problema:* ${problemaSeleccionado}\n` +
         `🧾 *Detalle:* ${detalleProblema}\n` +
         `🙋‍♂️ *Nombre:* ${nombre}\n` +
         `📲 *Teléfono:* ${telefono}`;
};

const enviarWhatsapp = () => {
  if (!validarCampos()) {
    alert('Por favor completa todos los campos antes de enviar.');
    return;
  }
  const mensaje = encodeURIComponent(crearMensaje());
  const numeroWhatsapp = '5491131034391';
  window.open(`https://api.whatsapp.com/send?phone=${numeroWhatsapp}&text=${mensaje}`, '_blank');
};

  const enviarEmail = () => {
    if (!validarCampos()) {
      alert('Por favor completa todos los campos antes de enviar.');
      return;
    }
    const asunto = encodeURIComponent('Reporte de problema técnico');
    const cuerpo = encodeURIComponent(crearMensaje());
    // Cambia este email por el tuyo o el destinatario real
    const emailDestino = 'salvatierradev@gmail.com';
    window.location.href = `mailto:${emailDestino}?subject=${asunto}&body=${cuerpo}`;
  };

  return (
    <Box
      id="contacto"
      sx={{
        maxWidth: { xs: '95%', sm: 600 },
        mx: 'auto',
        mt: 10,
        py: { xs: 6, sm: 10 },
        px: { xs: 2, sm: 4 },
        backgroundColor: '#111',
        border: '1px solid #00ffcc33',
        borderRadius: 4,
        boxShadow: '0 0 25px rgba(0, 255, 204, 0.08)',
        boxSizing: 'border-box',
      }}
    >
      <Typography
        variant={isXs ? 'h5' : 'h4'}
        align="center"
        gutterBottom
        sx={{
          color: '#00ffcc',
          fontWeight: 'bold',
          textShadow: '0 0 8px #00ffcc',
          mb: 4,
          fontFamily: 'Roboto, sans-serif',
        }}
      >
        Envia tu problema
      </Typography>

      <form noValidate autoComplete="off" onSubmit={e => e.preventDefault()}>
        {/* Marca */}
        <TextField
          id="marca"
          label="Marca"
          select
          required
          fullWidth
          margin="normal"
          value={marcaSeleccionada}
          onChange={handleMarcaChange}
          variant="outlined"
          SelectProps={{ MenuProps: menuProps }}
          InputProps={{ style: { color: '#fff', backgroundColor: '#1a1a1a', borderRadius: 8 } }}
          InputLabelProps={{ style: { color: '#888' } }}
          sx={{
            mb: 2,
            '& .MuiOutlinedInput-root': {
              '& fieldset': { borderColor: '#333' },
              '&:hover fieldset': { borderColor: '#00ffcc' },
              '&.Mui-focused fieldset': { borderColor: '#00ffcc' },
            },
          }}
        >
          {marcas.map((marca) => (
            <MenuItem key={marca} value={marca}>
              {marca}
            </MenuItem>
          ))}
        </TextField>

        {/* Modelo */}
        {!usarModeloPersonalizado ? (
          <TextField
            id="modelo"
            label="Modelo"
            select
            required
            fullWidth
            margin="normal"
            value={modeloSeleccionado}
            onChange={handleModeloChange}
            disabled={!marcaSeleccionada}
            variant="outlined"
            SelectProps={{ MenuProps: menuProps }}
            InputProps={{
              style: {
                color: modeloSeleccionado ? '#fff' : '#555',
                backgroundColor: '#1a1a1a',
                borderRadius: 8,
              },
            }}
            InputLabelProps={{ style: { color: '#888' } }}
            sx={{
              mb: 2,
              '& .MuiOutlinedInput-root': {
                '& fieldset': { borderColor: '#333' },
                '&:hover fieldset': { borderColor: '#00ffcc' },
                '&.Mui-focused fieldset': { borderColor: '#00ffcc' },
              },
            }}
          >
            {marcaSeleccionada &&
              modelosPorMarca[marcaSeleccionada].map((modelo) => (
                <MenuItem key={modelo} value={modelo}>
                  {modelo}
                </MenuItem>
              ))}
            <MenuItem value="__otro__" sx={{ fontStyle: 'italic' }}>
              Otro...
            </MenuItem>
          </TextField>
        ) : (
          <TextField
            id="modeloPersonalizado"
            label="Ingresar modelo"
            required
            fullWidth
            margin="normal"
            value={modeloPersonalizado}
            onChange={(e) => setModeloPersonalizado(e.target.value)}
            variant="outlined"
            InputProps={{ style: { color: '#fff', backgroundColor: '#1a1a1a', borderRadius: 8 } }}
            InputLabelProps={{ style: { color: '#888' } }}
            SelectProps={{ MenuProps: menuProps }}
            sx={{
              mb: 2,
              '& .MuiOutlinedInput-root': {
                '& fieldset': { borderColor: '#333' },
                '&:hover fieldset': { borderColor: '#00ffcc' },
                '&.Mui-focused fieldset': { borderColor: '#00ffcc' },
              },
            }}
          />
        )}

        {/* Problema */}
    <ProblemaSelectorModal
  value={problemaSeleccionado}
  onChange={setProblemaSeleccionado}
/>

        {/* Otros campos */}
        <TextField
          id="nombre"
          label="Nombre completo"
          type="text"
          required
          fullWidth
          margin="normal"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          variant="outlined"
          InputProps={{ style: { color: '#fff', backgroundColor: '#1a1a1a', borderRadius: 8 } }}
          InputLabelProps={{ style: { color: '#888' } }}
          sx={{
            mb: 2,
            '& .MuiOutlinedInput-root': {
              '& fieldset': { borderColor: '#333' },
              '&:hover fieldset': { borderColor: '#00ffcc' },
              '&.Mui-focused fieldset': { borderColor: '#00ffcc' },
            },
          }}
        />
        <TextField
          id="telefono"
          label="Teléfono"
          type="text"
          required
          fullWidth
          margin="normal"
          value={telefono}
          onChange={(e) => setTelefono(e.target.value)}
          variant="outlined"
          InputProps={{ style: { color: '#fff', backgroundColor: '#1a1a1a', borderRadius: 8 } }}
          InputLabelProps={{ style: { color: '#888' } }}
          sx={{
            mb: 2,
            '& .MuiOutlinedInput-root': {
              '& fieldset': { borderColor: '#333' },
              '&:hover fieldset': { borderColor: '#00ffcc' },
              '&.Mui-focused fieldset': { borderColor: '#00ffcc' },
            },
          }}
        />
        <TextField
          id="detalleProblema"
          label="Detalle del problema"
          type="text"
          required
          fullWidth
          margin="normal"
          value={detalleProblema}
          onChange={(e) => setDetalleProblema(e.target.value)}
          variant="outlined"
          multiline
          minRows={3}
          InputProps={{ style: { color: '#fff', backgroundColor: '#1a1a1a', borderRadius: 8 } }}
          InputLabelProps={{ style: { color: '#888' } }}
          sx={{
            mb: 2,
            '& .MuiOutlinedInput-root': {
              '& fieldset': { borderColor: '#333' },
              '&:hover fieldset': { borderColor: '#00ffcc' },
              '&.Mui-focused fieldset': { borderColor: '#00ffcc' },
            },
          }}
        />

        <Box
          textAlign="center"
          mt={4}
          display="flex"
          justifyContent="center"
          gap={2}
          flexWrap="wrap"
        >
          <Button
            variant="contained"
            size={isXs ? 'medium' : 'large'}
            sx={{
              bgcolor: '#00ffcc',
              color: '#000',
              px: isXs ? 5 : 6,
              py: 1.5,
              borderRadius: '30px',
              fontWeight: 'bold',
              boxShadow: '0 0 15px #00ffcc99',
              minWidth: isXs ? 150 : 180,
              transition: 'all 0.3s ease',
              '&:hover': {
                bgcolor: '#00e6b8',
                boxShadow: '0 0 20px #00ffccbb',
              },
            }}
            onClick={enviarWhatsapp}
          >
            Enviar por WhatsApp
          </Button>

          <Button
            variant="outlined"
            size={isXs ? 'medium' : 'large'}
            sx={{
              borderColor: '#00ffcc',
              color: '#00ffcc',
              px: isXs ? 5 : 6,
              py: 1.5,
              borderRadius: '30px',
              fontWeight: 'bold',
              minWidth: isXs ? 150 : 180,
              transition: 'all 0.3s ease',
              '&:hover': {
                borderColor: '#00e6b8',
                color: '#00e6b8',
                backgroundColor: '#00ffcc11',
              },
            }}
            onClick={enviarEmail}
          >
            Enviar por Email
          </Button>
        </Box>
      </form>
    </Box>
  );
};

export default ContactForm;
