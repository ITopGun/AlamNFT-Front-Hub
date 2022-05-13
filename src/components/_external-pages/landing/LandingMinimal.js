// material
import { alpha, useTheme, experimentalStyled as styled } from '@material-ui/core/styles';
import { Box, Grid, Card, Container, Typography, useMediaQuery, Link } from '@material-ui/core';
//
import { varFadeInUp, MotionInView, varFadeInDown } from '../../animate';

// ----------------------------------------------------------------------

const CARDS = [
  {
    icon: '/static/nftImages/art.png',
    title: 'Art'
  },
  {
    icon: '/static/nftImages/collectibles.png',
    title: 'Collectibles'
  },
  {
    icon: '/static/nftImages/domain-names.png',
    title: 'Domain Names'
  },
  {
    icon: '/static/nftImages/music.png',
    title: 'Music'
  },
  {
    icon: '/static/nftImages/photography-category.png',
    title: 'Photography'
  },
  {
    icon: '/static/nftImages/sports.png',
    title: 'Sports'
  },
  {
    icon: '/static/nftImages/trading-cards.png',
    title: 'Trading Cards'
  },
  {
    icon: '/static/nftImages/utility.png',
    title: 'Utility'
  },
  {
    icon: '/static/nftImages/virtual-worlds.png',
    title: 'Virtual Worlds'
  }
];

const shadowIcon = (color) => `drop-shadow(2px 2px 2px ${alpha(color, 0.48)})`;

const RootStyle = styled('div')(({ theme }) => ({
  paddingTop: theme.spacing(15),
  [theme.breakpoints.up('md')]: {
    paddingBottom: theme.spacing(15)
  }
}));

const CardStyle = styled(Card)(({ theme }) => {
  const shadowCard = (opacity) =>
    theme.palette.mode === 'light'
      ? alpha(theme.palette.grey[500], opacity)
      : alpha(theme.palette.common.black, opacity);

  return {
    maxWidth: 380,
    margin: 'auto',
    textAlign: 'center',
    padding: theme.spacing(2, 2, 0),
    boxShadow: `-40px 40px 80px 0 ${shadowCard(0.48)}`,
    [theme.breakpoints.up('md')]: {
      boxShadow: 'none',
      backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800]
    }
  };
});

const CardIconStyle = styled('img')(({ theme }) => ({
  width: '100%',
  margin: 'auto',
  marginBottom: theme.spacing(1),
  borderTopRightRadius: theme.spacing(1),
  borderTopLeftRadius: theme.spacing.apply(1),
  filter: 'none'
}));

// ----------------------------------------------------------------------

export default function LandingMinimalHelps() {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('lg'));

  return (
    <RootStyle>
      <Container maxWidth="lg">
        <Box mb={3}>
          <MotionInView variants={varFadeInDown}>
            <Typography variant="h4" sx={{ textAlign: 'center', color: theme.palette.grey[900] }}>
              Browse by category
            </Typography>
          </MotionInView>
        </Box>

        <Grid container spacing={isDesktop ? 1 : 1}>
          {CARDS.map((card, index) => (
            <Grid key={card.title} item xs={12} md={4}>
              <MotionInView variants={varFadeInUp}>
                <Link
                  href="#"
                  underline="none"
                  sx={{
                    '&>div': { border: 'solid 2px transparent', borderRadius: theme.spacing(1) },
                    '&:hover>div': { borderColor: '#CCC' }
                  }}
                >
                  <CardStyle>
                    <CardIconStyle
                      src={card.icon}
                      alt={card.title}
                      sx={{
                        ...(index === 0 && {
                          filter: (theme) => shadowIcon(theme.palette.info.main)
                        }),
                        ...(index === 1 && {
                          filter: (theme) => shadowIcon(theme.palette.error.main)
                        })
                      }}
                    />
                    <Typography variant="h5" paragraph pb={1} pt={1}>
                      {card.title}
                    </Typography>
                  </CardStyle>
                </Link>
              </MotionInView>
            </Grid>
          ))}
        </Grid>
      </Container>
    </RootStyle>
  );
}
