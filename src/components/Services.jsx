import React, { useState } from 'react';
import {
  Box,
  Grid,
  Typography,
  Paper,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Button,
  Modal,
} from '@mui/material';
import BuildIcon from '@mui/icons-material/Build';
import BatteryChargingFullIcon from '@mui/icons-material/BatteryChargingFull';
import HeadsetMicIcon from '@mui/icons-material/HeadsetMic';
import CleaningServicesIcon from '@mui/icons-material/CleaningServices';
import SettingsApplicationsIcon from '@mui/icons-material/SettingsApplications';
import TerminalIcon from '@mui/icons-material/Terminal';
import cambiopantalla from '../assets/cambiopantalla.png';

const servicesData = [
  {
    category: 'Pantallas',
    icon: (
      <img
        src={cambiopantalla}
        alt="Pantalla"
        style={{ width: 40, height: 40, filter: 'drop-shadow(0 0 5px #00ffcc)' }}
      />
    ),
    tasks: [
      'Cambio de pantallas.',
      'Cambio de pantalla (cuando no está soldada).',
      'Pegado de pantalla nueva con pegamento T7000/B7000.',
      'Quitar pantalla rota con pistola de calor.',
      'Reinstalación de display mal colocado.',
    ],
  },
  {
    category: 'Baterías',
    icon: <BatteryChargingFullIcon sx={{ color: '#00ffcc', fontSize: 40 }} />,
    tasks: [
      'Cambio de baterías.',
      'Cambio de batería interna con conector.',
      'Limpieza de contactos de batería con alcohol.',
      'Revisión de carga con tester (verificación de voltaje).',
    ],
  },
  {
    category: 'Microcomponente',
    icon: <HeadsetMicIcon sx={{ color: '#00ffcc', fontSize: 40 }} />,
    tasks: [
      'Cambio de parlante (buzzer).',
      'Cambio de auricular.',
      'Cambio de auricular de llamada.',
      'Cambio de micrófono.',
      'Cambio de micrófono (modular, no soldado).',
      'Cambio de flex de botones (power, volumen).',
    ],
  },
  {
    category: 'Software',
    icon: <TerminalIcon sx={{ color: '#00ffcc', fontSize: 40 }} />,
    tasks: ['Flasheo de software.', 'Actualización de sistema operativo.'],
  },
  {
    category: 'Diagnóstico',
    icon: <CleaningServicesIcon sx={{ color: '#00ffcc', fontSize: 40 }} />,
    tasks: [
      'Revisión de componentes.',
      'Mantenimiento general.',
      'Verificación de continuidad con multímetro.',
      'Revisión de componentes visibles (flex cortado, pines rotos).',
      'Testeo general (micrófono, altavoz, botones, pantalla, etc.).',
    ],
  },
  {
    category: 'Otros trabajos',
    icon: <SettingsApplicationsIcon sx={{ color: '#00ffcc', fontSize: 40 }} />,
    tasks: [
      'Cambio de flex de carga (cuando no está soldado).',
      'Limpieza de puerto de carga (pelusa, humedad).',
      'Limpieza por humedad o sulfatación con alcohol.',
      'Limpieza profunda de placa (alcohol + cepillo antiestático).',
      'Reemplazo de tapa trasera (pegada o rota).',
      'Limpieza estética general del equipo.',
      'Cambio de módulo de cámara (tipo flex).',
    ],
  },
];


const Services = () => {
  const [open, setOpen] = useState(false);
  const [selectedService, setSelectedService] = useState(null);

  const handleOpen = (service) => {
    setSelectedService(service);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedService(null);
  };

  return (
    <Box
      id="servicios"
      sx={{
        py: 10,
        px: { xs: 2, sm: 4, md: 8 },
        backgroundColor: '#121212',
        borderTop: '2px solid #00ffcc',
        borderBottom: '2px solid #00ffcc',
      }}
    >
      <Typography
        variant="h4"
        align="center"
        gutterBottom
        sx={{
          color: '#00ffcc',
          fontWeight: 700,
          textShadow: '0 0 10px #00ffcc',
          mb: 6,
          letterSpacing: 1.5,
        }}
      >
        Servicios
      </Typography>
<Grid container spacing={3} justifyContent="center" alignItems="center">

  {servicesData.map((service, index) => (
    <Grid
      item
      xs={6}   // 2 tarjetas por fila en móviles
      sm={6}   // 2 tarjetas por fila en tablets
      md={4}   // 3 tarjetas por fila en desktop
      key={index}
      sx={{
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <Paper
        elevation={3}
        sx={{
          width: '90%',    // Menos ancho para caber mejor
          maxWidth: 280,  // Max ancho menor
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          p: 3,
          backgroundColor: '#1a1a1a',
          color: '#e0e0e0',
          borderRadius: 2,
          border: '1px solid #00ffcc',
          transition: 'transform 0.3s ease, box-shadow 0.3s ease',
          '&:hover': {
            transform: 'translateY(-4px)',
            boxShadow: '0 8px 16px rgba(0, 255, 204, 0.2)',
          },
        }}
      >
              <Box sx={{ textAlign: 'center' }}>
                {service.icon}
                <Typography
                  variant="subtitle1"
                  sx={{
                    mt: 1,
                    fontWeight: 600,
                    color: '#00ffcc',
                  }}
                >
                  {service.category}
                </Typography>
              </Box>

              <Button
                variant="outlined"
                sx={{
                  borderColor: '#00ffcc',
                  color: '#00ffcc',
                  mt: 2,
                  alignSelf: 'center',
                  '&:hover': {
                    backgroundColor: '#00ffcc',
                    color: '#000',
                  },
                }}
                onClick={() => handleOpen(service)}
              >
                Ver detalles
              </Button>
            </Paper>
          </Grid>
        ))}
      </Grid>

      {/* Modal */}
      <Modal open={open} onClose={handleClose}>
         <Box
    sx={{
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      bgcolor: '#1e1e1e',
      color: '#e0e0e0',
      p: { xs: 2, sm: 4 },
      borderRadius: 2,
      border: '2px solid #00ffcc',
      width: { xs: '90%', sm: 400 },
      maxWidth: '90vw',         // que no supere el 90% del ancho ventana
      maxHeight: '80vh',        // máximo alto 80% ventana
      overflowY: 'auto',
      boxShadow: 24,
      boxSizing: 'border-box',  // para que padding no aumente el tamaño
    }}
  >
          {selectedService && (
            <>
              <Box textAlign="center" mb={2}>
                {selectedService.icon}
                <Typography variant="h6" sx={{ mt: 1, color: '#00ffcc' }}>
                  {selectedService.category}
                </Typography>
              </Box>
              <List dense>
                {selectedService.tasks.map((task, i) => (
                  <ListItem key={i} sx={{ pl: 0 }}>
                    <ListItemIcon sx={{ minWidth: 28, color: '#00ffcc' }}>
                      <BuildIcon fontSize="small" />
                    </ListItemIcon>
                    <ListItemText
                      primary={task}
                      primaryTypographyProps={{
                        fontSize: 14,
                        color: '#ccc',
                      }}
                    />
                  </ListItem>
                ))}
              </List>
              <Box textAlign="center" mt={2}>
                <Button onClick={handleClose} sx={{ color: '#00ffcc' }}>
                  Cerrar
                </Button>
              </Box>
            </>
          )}
        </Box>
      </Modal>
    </Box>
  );
};

export default Services;
