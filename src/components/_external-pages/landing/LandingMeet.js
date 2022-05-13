/* eslint-disable prettier/prettier */
import { motion } from 'framer-motion';
// material
import { experimentalStyled as styled } from '@material-ui/core/styles';
import { Container, Typography, Stack, useTheme, Box, Button } from '@material-ui/core';
// routes
//
import { varWrapEnter } from '../../animate';

// ----------------------------------------------------------------------

const RootStyle = styled(motion.div)(({ theme }) => ({
  position: 'relative',
  paddingTop: theme.spacing(5),
  backgroundColor: theme.palette.common.white
}));

// ----------------------------------------------------------------------

export default function LandingMeet() {
  const theme = useTheme();
  return (
    <>
      <RootStyle initial="initial" animate="animate" variants={varWrapEnter} id="meetalamnft">
        <Container maxWidth="lg">
          <Typography variant='h3' textAlign='center' color={theme.palette.grey[900]}>
              Meet AlamNFT
          </Typography>
          <Box component='p' textAlign='center' color={theme.palette.grey[600]} mt={3}>
            The NFT marketplace with everything for everyone
          </Box>
          <Stack sx={{
              background: 'url("/static/home/video-background.svg")', backgroundSize: '100% 100%', padding: '40px 100px 80px',
              [theme.breakpoints.down('sm')]: {
                  padding: 0
              }
          }}>
            <Stack xs={12} md={12} lg={12} sx={{ margin: '40px', [theme.breakpoints.down('sm')]: { margin: 0 } }} style={{ paddingBottom: '57%', position: 'relative' }}>
                <iframe
                    src='https://www.youtube.com/embed/gfGuPd1CELo?playlist=gfGuPd1CELo&autoplay=0&controls=1&loop=1&modestbranding=1&rel=0'
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    title="Embedded youtube"
                    style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                />
            </Stack>
          </Stack>
          <Box component='p' textAlign='center' color={theme.palette.grey[600]} mt={3} sx={{ fontSize: '14px' }}>
            Fiat on-ramp and profile customization is coming soon.
          </Box>
          <Stack justifyContent="center" alignItems="center" pt={5} pb={2}>
              <Button
                size="large"
                variant="contained"
                color="secondary"
                >
                Explore the marketplace
              </Button>
          </Stack>
        </Container>
      </RootStyle>
    </>
  );
}
