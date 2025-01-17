import { Box, Typography, Button } from '@mui/material';
import { useModalStore } from '../storeZustand/authStore';
import ContactModal from './ContactModal';
import mapa from '../images/mariel.png';
const AboutUs = () => {
  const { openContactModal } = useModalStore();

  return (
    <Box sx={{ bgcolor: 'background.paper', p: 4, mt: 4 }} id='about-section'>
      <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' } }}>
        <Box sx={{ flex: 1, pr: { md: 4 } }}>
          <Typography variant="h5" gutterBottom fontWeight="bold">
            Proveedores de Insumos y Logística
          </Typography>
          <Typography variant="body1" paragraph>
            La empresa <strong>ASCYXL SERVICE & REPRESENTATION</strong> está ubicada en el puerto de Mariel, Cuba, y se especializa en la importación de insumos por contenedores.
          </Typography>
          <Typography variant="body1" paragraph>
            El puerto de Mariel es una infraestructura clave en Cuba, diseñada para manejar grandes volúmenes de carga y atraer inversiones extranjeras.
          </Typography>

          <Box sx={{ mt: 2 }}>
            <Typography variant="subtitle1" fontWeight="bold">
              Dirección:
            </Typography>
            <Typography variant="body2">
              Zona Especial de Desarrollo Mariel, Cuba
            </Typography>

            <Typography variant="subtitle1" fontWeight="bold" sx={{ mt: 2 }}>
              Horario de atención:
            </Typography>
            <Typography variant="body2">
              Lunes a Viernes: 9:00 AM - 6:00 PM
            </Typography>
          </Box>

          <Button
            variant="contained"
            color="primary"
            onClick={openContactModal}
            sx={{ mt: 2 }}
          >
            Contact Us
          </Button>
        </Box>

        <Box sx={{ flex: 2, mt: { xs: 4, md: 4 } }}>
          <img
            src={mapa}
            alt="Company Location"
            style={{ width: '100%', height: '80%', borderRadius: '8px' , marginTop: '-20px'}}
          />
        </Box>
      </Box>

      {/* Modal de contacto */}
      <ContactModal />
    </Box>
  );
};

export default AboutUs;