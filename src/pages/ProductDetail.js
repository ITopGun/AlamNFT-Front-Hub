/* eslint-disable prettier/prettier */
// material
import { experimentalStyled as styled } from '@material-ui/core/styles';
import VerifiedIcon from '@material-ui/icons/Verified';
import { Box, Container, Typography, Stack, Button } from '@material-ui/core';
//
import { MotionInView, varFadeInDown } from '../components/animate';

// ----------------------------------------------------------------------


const RootStyle = styled('div')(({ theme }) => ({
  paddingTop: theme.spacing(15),
  [theme.breakpoints.up('md')]: {
    paddingBottom: theme.spacing(15)
  }
}));

const BannerStyle = styled('div')(() => ({
    maxWidth: '100%',
    width: '100%',
    height: 350,
    textAlign: 'center',
    background: 'radial-gradient(#efac17, #e1da8c)',
    position: 'relative',
    paddingTop: 20,
    '&::after': {
        content: "''",
        position: 'absolute',
        width: '100%',
        height: '100px',
        background: 'linear-gradient(rgba(255, 255, 255, 0), #FFF)',
        bottom: 0,
        left: 0
    }
}));


// ----------------------------------------------------------------------

export default function LandingMinimalHelps() {

  return (
    <RootStyle>
        <BannerStyle>
            <img src="/static/collection/roger_item (1).jpg" alt="collection banner" style={{ width:300, height: 300, borderRadius: 10, margin: 'auto' }} />
        </BannerStyle>

      <Container maxWidth="lg">
        <Box sx={{ mb: 5, mt: 0 }}>
          <MotionInView variants={varFadeInDown}>
            <Stack direction="row" justifyContent="space-between" alignItems="center">
                <Typography variant="h2">Non-Fungible Heros 3122</Typography>
            </Stack>
          </MotionInView>
          <MotionInView variants={varFadeInDown}>
            <Stack direction="row" justifyContent="start" alignItems="center" spacing={4} sx={{mt:5}}>
              <Stack direction="column" justifyContent="center" alignItems="center">
                <Typography variant="h5">1</Typography>
                <Typography variant="p">Owner</Typography>
              </Stack>
              <Stack direction="column" justifyContent="center" alignItems="center">
                <Typography variant="h5">1</Typography>
                <Typography variant="p">Edition</Typography>
              </Stack>
              <Stack direction="column" justifyContent="center" alignItems="center">
                <Stack direction="row" justifyContent="center" alignItems="center">
                  <Typography variant="h5">199</Typography>
                </Stack>
                <Typography variant="p">Views</Typography>
              </Stack>
            </Stack>
          </MotionInView>
        </Box>
        <Box sx={{ mb: 3 }}>
            <Stack direction="row" justifyContent="space-between" alignItems="center">
              <Stack direction="row" justifyContent="center" alignItems="center">
                <img src="/static/collection/roger_logo.jpg" alt="collection logo" style={{ width: 100, height: 100, borderRadius: '50%', marginRight: 20 }} />
                <Typography variant="h4" color="secondary">Non-Fungible Heros</Typography>
              </Stack>
              <VerifiedIcon color="secondary" />
            </Stack>
        </Box>
        <Box>
            <MotionInView variants={varFadeInDown}>
                <Button color='secondary' variant='contained' size='large' style={{ width: '100%' }}>Share</Button>
            </MotionInView>
        </Box>
      </Container>
    </RootStyle>
  );
}
