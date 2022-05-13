import { Icon } from '@iconify/react';
import { motion } from 'framer-motion';
import flashFill from '@iconify/icons-eva/flash-fill';
import PlayCircleFilledWhiteIcon from '@material-ui/icons/PlayCircleFilledWhite';
import { Link as RouterLink } from 'react-router-dom';
// material
import { experimentalStyled as styled } from '@material-ui/core/styles';
import { Button, Box, Link, Container, Typography, Stack, Grid, useMediaQuery, useTheme } from '@material-ui/core';
//
import { varFadeIn, varFadeInRight } from '../../animate';

// ----------------------------------------------------------------------

const RootStyle = styled(motion.div)(({ theme }) => ({
  position: 'relative',
  backgroundColor: theme.palette.grey[400],
  // background: 'url("/static/home/hero.png")',
  backgroundSize: 'cover',
  backgroundPosition: '50% 50%',
  [theme.breakpoints.up('md')]: {
    top: 0,
    left: 0,
    width: '100%',
    // height: '100vh',
    display: 'flex',
    // position: 'fixed',
    alignItems: 'center'
  }
}));

const HeroOverlayDiv1Style = styled(motion.div)({
  zIndex: 9,
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  position: 'absolute',
  // background: 'linear-gradient(358deg, #ffffffdd, #ffffffcc, #ffffff00)',
  backgroundSize: 'cover',
  background: 'url("/static/home/hero-overaly-main.png")',
  filter: 'blur(5px)',
  opacity: '0.2 !important'
});

const HeroOverlayDiv2Style = styled(motion.div)({
  zIndex: 9,
  objectFit: 'cover',
  position: 'absolute',
  background: 'linear-gradient(358deg, #ffffffdd, #ffffff99, #ffffff00)',
  opacity: '1 !important',
  top: 0,
  bottom: '-20px',
  left: 0,
  right: 0
});

// ----------------------------------------------------------------------

export default function LandingHero() {
  const theme = useTheme();
  console.log(theme);
  const isDesktop = useMediaQuery(theme.breakpoints.up('lg'));
  const GridStyle = styled((props) => <Grid container spacing={isDesktop ? 10 : 5} {...props} />)(({ theme }) => ({
    zIndex: 10,
    position: 'relative',
    paddingTop: theme.spacing(20),
    paddingBottom: theme.spacing(0),
    [theme.breakpoints.down('md')]: {
      maxWidth: '550px',
      marginLeft: 'calc(50% - 295px)'
    },
    [theme.breakpoints.down('sm')]: {
      maxWidth: 'auto',
      marginTop: '-40px',
      marginLeft: '-40px'
    }
  }));
  return (
    <>
      <RootStyle>
        {/* <HeroOverlayStyle alt="overlay" src="/static/overlay.svg" variants={varFadeIn} /> */}
        <HeroOverlayDiv1Style variants={varFadeIn} />
        <HeroOverlayDiv2Style variants={varFadeIn} />

        {/* <HeroImgStyle alt="hero" src="/static/home/hero.png" variants={varFadeInUp} /> */}

        <Container maxWidth="lg">
          <GridStyle container spacing={isDesktop ? 10 : 5}>
            <Grid
              item
              xs={12}
              md={6}
              sx={{
                [theme.breakpoints.down('lg')]: {
                  textAlign: 'center'
                }
              }}
            >
              <motion.div variants={varFadeInRight}>
                <Typography variant="h2" color={theme.palette.grey['900']}>
                  Discover, collect, and sell extraordinary NFTs
                </Typography>
                <Typography variant="h4" color={theme.palette.grey['800']} mt={5}>
                  AlamNFT is the world's first and largest NFT marketplace
                </Typography>
              </motion.div>

              <motion.div variants={varFadeInRight}>
                <Stack
                  direction="row"
                  spacing={2}
                  mt={5}
                  sx={{
                    [theme.breakpoints.down('lg')]: {
                      justifyContent: 'center'
                    }
                  }}
                >
                  <Button
                    size="large"
                    variant="contained"
                    color="secondary"
                    component={RouterLink}
                    to="#"
                    startIcon={<Icon icon={flashFill} width={20} height={20} />}
                  >
                    Explore
                  </Button>
                  <Button
                    size="large"
                    variant="outlined"
                    color="secondary"
                    component={RouterLink}
                    to="#"
                    startIcon={<Icon icon={flashFill} width={20} height={20} />}
                  >
                    Create
                  </Button>
                </Stack>
                <Stack
                  mt={5}
                  sx={{
                    [theme.breakpoints.down('lg')]: {
                      justifyContent: 'center'
                    }
                  }}
                >
                  <Link
                    href="/#meetalamnft"
                    color="secondary"
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      textDecoration: 'none',
                      '&:hover': {
                        textDecoration: 'none',
                        opacity: 0.7
                      },
                      [theme.breakpoints.down('lg')]: {
                        justifyContent: 'center'
                      }
                    }}
                  >
                    <PlayCircleFilledWhiteIcon sx={{ marginRight: 2 }} />
                    Learn more about alamNFT
                  </Link>
                </Stack>
              </motion.div>
            </Grid>
            <Grid item xs={12} md={6}>
              <motion.div variants={varFadeInRight}>
                <Link
                  to="/collection"
                  sx={{
                    borderRadius: 1,
                    boxShadow: theme.shadows[1],
                    overflow: 'hidden',
                    display: 'block',
                    '&:hover': {
                      boxShadow: theme.shadows[23],
                      textDecoration: 'none',
                      cursor: 'pointer'
                    }
                  }}
                >
                  <img src="/static/home/hero-overaly-main.png" alt="hero overaly img" />
                  <Stack direction="row" alignItems="center" sx={{ background: '#FFF' }}>
                    <Box
                      component="img"
                      src="/static/home/hero-overaly-avatar.png"
                      sx={{ width: '38px', height: '38px', borderRadius: '50%', margin: '15px' }}
                      alt="hero overaly avatar"
                    />
                    <Stack direction="column" color={theme.palette.common.black}>
                      <Box component="h4">BEANZ Official</Box>
                      <Box component="p" sx={{ fontSize: 14 }}>
                        by Azuki
                      </Box>
                    </Stack>
                  </Stack>
                </Link>
              </motion.div>
            </Grid>
          </GridStyle>
        </Container>
      </RootStyle>
      {/* <Box sx={{ height: { md: '100vh' } }} /> */}
    </>
  );
}
