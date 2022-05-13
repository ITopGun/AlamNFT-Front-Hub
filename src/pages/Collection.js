/* eslint-disable prettier/prettier */
// material
import { experimentalStyled as styled } from '@material-ui/core/styles';
import VerifiedIcon from '@material-ui/icons/Verified';
import SegmentIcon from '@material-ui/icons/Segment';
import TwitterIcon from '@material-ui/icons/Twitter';
import WebAssetIcon from '@material-ui/icons/WebAsset';
import { Link as RouterLink } from 'react-router-dom';
import { Box, Container, Typography, Stack, Link } from '@material-ui/core';
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
    height: 300,
    position: 'relative',
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
            <img src="/static/collection/roger_banner.jpg" alt="collection banner" style={{ width:'100%', height:'100%', objectFit:'cover' }} />
        </BannerStyle>

      <Container maxWidth="lg">
        <Box sx={{ mb: 5, mt: 0 }}>
          <MotionInView variants={varFadeInDown}>
            <Stack direction="row" justifyContent="space-between" alignItems="center">
              <Stack direction="row" justifyContent="center" alignItems="center">
                <Link to="/product-detail" component={RouterLink}>
                  <img src="/static/collection/roger_logo.jpg" alt="collection logo" style={{ width: 100, height: 100, borderRadius: '50%', marginRight: 20 }} />
                </Link>
                <Typography variant="h2">Non-Fungible Heros</Typography>
              </Stack>
              <VerifiedIcon color="secondary" />
            </Stack>
          </MotionInView>
          <MotionInView variants={varFadeInDown}>
            <Stack direction="row" justifyContent="start" alignItems="center" spacing={4} sx={{mt:5}}>
              <Stack direction="column" justifyContent="center" alignItems="center">
                <Typography variant="h5">8.89K</Typography>
                <Typography variant="p">Items</Typography>
              </Stack>
              <Stack direction="column" justifyContent="center" alignItems="center">
                <Typography variant="h5">2.69K</Typography>
                <Typography variant="p">Owners</Typography>
              </Stack>
              <Stack direction="column" justifyContent="center" alignItems="center">
                <Stack direction="row" justifyContent="center" alignItems="center">
                  <SegmentIcon />
                  <Typography variant="h5">0.1</Typography>
                </Stack>
                <Typography variant="p">floor Price</Typography>
              </Stack>
              <Stack direction="column" justifyContent="center" alignItems="center">
                <Stack direction="row" justifyContent="center" alignItems="center">
                  <SegmentIcon />
                  <Typography variant="h5">620</Typography>
                </Stack>
                <Typography variant="p">Traded</Typography>
              </Stack>
            </Stack>
          </MotionInView>
        </Box>
        <Box style={{ maxWidth: 800, margin: '30px auto' }}>
            <MotionInView variants={varFadeInDown}>
                <Typography variant="p" sx={{ textAlign: 'center', display: 'block' }}>
                  The Non-Fungible Heroes are an NFT collection brought to you by the BBCo team to educate, entertain, and inspire.
                  Spawned through community engagement, the creative universe.
                </Typography>
            </MotionInView>
        </Box>
        <Box>
          <Stack direction="row" justifyContent="start" alignItems="center" spacing={3} style={{ color: '#666', textAlign: 'center' }}>
            <Box>
              <Box>
                <svg fill="#666" viewBox="0 0 22 16" style={{ height: 24, width: 24 }}><path d="M8.11.5c-.28.002-2.574.067-4.996 1.873 0 0-2.584 4.665-2.584 10.408 0 0 1.507 2.593 5.473 2.719 0 0 .664-.792 1.202-1.477-2.278-.685-3.14-2.108-3.14-2.108s.18.126.502.307c.018 0 .035.019.07.036.055.035.108.054.162.09.448.252.896.45 1.31.611.736.307 1.615.576 2.639.774 1.346.252 2.925.342 4.646.019a12.954 12.954 0 002.603-.774 10.118 10.118 0 002.062-1.063s-.896 1.458-3.247 2.125c.538.666 1.185 1.439 1.185 1.439 3.965-.126 5.473-2.72 5.473-2.7 0-5.746-2.584-10.409-2.584-10.409C16.32.446 13.861.5 13.861.5l-.251.288c3.05.918 4.468 2.27 4.468 2.27a14.856 14.856 0 00-5.4-1.711 15.048 15.048 0 00-3.626.036c-.107 0-.197.019-.306.035-.628.072-2.153.288-4.073 1.135-.663.288-1.059.505-1.059.505S5.088 1.635 8.317.717L8.137.5h-.028zm-.457 6.645c1.022 0 1.849.882 1.83 1.981 0 1.1-.808 1.982-1.83 1.982-1.005 0-1.83-.883-1.83-1.982s.806-1.981 1.83-1.981zm6.55 0c1.004 0 1.83.882 1.83 1.981 0 1.1-.809 1.982-1.83 1.982-1.006 0-1.83-.883-1.83-1.982s.806-1.981 1.83-1.981z" /></svg>
              </Box>
              <Typography variant="p">Discord</Typography>
            </Box>
            <Box>
              <Box>
                <TwitterIcon />
              </Box>
              <Typography variant="p">Twitter</Typography>
            </Box>
            <Box>
              <Box>
                <WebAssetIcon />
              </Box>
              <Typography variant="p">Website</Typography>
            </Box>
          </Stack>
        </Box>
      </Container>
    </RootStyle>
  );
}
