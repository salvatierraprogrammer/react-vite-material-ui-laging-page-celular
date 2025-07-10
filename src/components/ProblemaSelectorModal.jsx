import React, { useState } from 'react';
import {
  Box,
  Button,
  Typography,
  Modal,
  Grid,
  Card,
  CardActionArea
} from '@mui/material';
import { problemasComunes } from '../data/problemasComunes';

const ProblemaSelectorModal = ({ value, onChange }) => {
  const [open, setOpen] = useState(false);

  const handleSelect = (problema) => {
    onChange(`${problema.emoji} ${problema.texto}`);
    setOpen(false);
  };

  return (
    <>
      <Button
        fullWidth
        variant="outlined"
        onClick={() => setOpen(true)}
        sx={{
          mb: 2,
          color: '#00ffcc',
          borderColor: '#00ffcc',
          borderRadius: 2,
          fontWeight: 'bold',
          '&:hover': {
            backgroundColor: '#00ffcc11',
            borderColor: '#00e6b8',
          },
        }}
      >
        {value || 'Seleccionar problema'}
      </Button>

      <Modal open={open} onClose={() => setOpen(false)}>
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            bgcolor: '#111',
            border: '1px solid #00ffcc33',
            borderRadius: 4,
            boxShadow: 24,
            p: 4,
            maxWidth: 900,
            width: '95%',
            maxHeight: '90vh',
            overflowY: 'auto',
          }}
        >
          <Typography
            variant="h6"
            color="#00ffcc"
            gutterBottom
            align="center"
          >
            Selecciona un problema
          </Typography>

          <Box textAlign="center" mb={3}>
            <Button
              variant="outlined"
              onClick={() => setOpen(false)}
              sx={{
                color: '#00ffcc',
                borderColor: '#00ffcc',
                borderRadius: 2,
                fontWeight: 'bold',
                '&:hover': {
                  backgroundColor: '#00ffcc11',
                  borderColor: '#00e6b8',
                },
              }}
            >
              Cancelar
            </Button>
          </Box>

          <Grid
            container
            spacing={2}
            justifyContent="center"
          >
            {problemasComunes.map((problema, index) => (
              <Grid item xs={6} sm={4} md={3} key={index}>
                <Card
                  sx={{
                    minHeight: 160,
                    backgroundColor: '#1a1a1a',
                    color: '#00ffcc',
                    border: '1px solid #00ffcc44',
                    borderRadius: 2,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    transition: '0.3s',
                    '&:hover': {
                      backgroundColor: '#00ffcc22',
                      transform: 'scale(1.03)',
                    },
                  }}
                >
                  <CardActionArea
                    onClick={() => handleSelect(problema)}
                    sx={{
                      p: 2,
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'center',
                      alignItems: 'center',
                      height: '100%',
                    }}
                  >
                    <Box
                      sx={{
                        fontSize: '2.8rem',
                        mb: 1,
                        userSelect: 'none',
                        color: '#00ffcc',
                        textShadow: '0 0 8px #00ffcc, 0 0 12px #00ffcc88',
                        transition: '0.3s',
                        '&:hover': {
                          textShadow: '0 0 12px #00ffcc, 0 0 18px #00ffcc',
                        },
                      }}
                    >
                      {problema.emoji}
                    </Box>
                    <Typography
                      variant="body2"
                      align="center"
                      sx={{
                        color: '#ccc',
                        fontWeight: 600,
                        fontSize: '0.9rem',
                        lineHeight: 1.3,
                        wordBreak: 'break-word',
                      }}
                    >
                      {problema.texto}
                    </Typography>
                  </CardActionArea>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Modal>
    </>
  );
};

export default ProblemaSelectorModal;
