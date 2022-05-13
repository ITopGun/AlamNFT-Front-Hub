/* eslint-disable prettier/prettier */
// material
import { useState } from 'react';
import { alpha, useTheme, experimentalStyled as styled } from '@material-ui/core/styles';
import { Box, Grid, Card, Container, Typography, useMediaQuery, Link, Paper, InputBase, Stack, IconButton } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import SearchIcon from '@material-ui/icons/Search';
//
import { varFadeInUp, MotionInView, varFadeInDown } from '../components/animate';

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
    padding: theme.spacing(10, 5, 0),
    boxShadow: `-40px 40px 80px 0 ${shadowCard(0.48)}`,
    [theme.breakpoints.up('md')]: {
      boxShadow: 'none',
      backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800]
    },
    '&.cardLeft': {
      [theme.breakpoints.up('md')]: { marginTop: -40 }
    },
    '&.cardCenter': {
      [theme.breakpoints.up('md')]: {
        marginTop: -80,
        backgroundColor: theme.palette.background.paper,
        boxShadow: `-40px 40px 80px 0 ${shadowCard(0.4)}`,
        '&:before': {
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: -1,
          content: "''",
          margin: 'auto',
          position: 'absolute',
          width: 'calc(100% - 40px)',
          height: 'calc(100% - 40px)',
          borderRadius: theme.shape.borderRadiusMd,
          backgroundColor: theme.palette.background.paper,
          boxShadow: `-20px 20px 40px 0 ${shadowCard(0.12)}`
        }
      }
    }
  };
});

const CardIconStyle = styled('img')(({ theme }) => ({
  width: '100%',
  margin: 'auto',
  marginBottom: theme.spacing(1),
  filter: shadowIcon(theme.palette.primary.main)
}));

// ----------------------------------------------------------------------

export default function LandingMinimalHelps() {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('lg'));
  const [searchValue, setSearchValue] = useState('')
  const searchChange = event => {
      setSearchValue(event.target.value)
  }

  return (
    <RootStyle>
        <Stack justifyContent='center' direction='row'>
            <Paper
                component="form"
                sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400, border: 'solid 1px #CCC', boxShadow: '0px 4px 10px #999;' }}
            >
                <IconButton sx={{ p: '10px' }} aria-label="menu" disabled>
                    <SearchIcon />
                </IconButton>
                <InputBase
                    sx={{ ml: 1, flex: 1 }}
                    placeholder="Search items, collections, and accounts"
                    value={searchValue}
                    onChange={searchChange}
                />
                { searchValue.length > 0? (
                    <IconButton sx={{ p: '10px' }} aria-label="search" onClick={() => setSearchValue('')}>
                        <CloseIcon />
                    </IconButton>
                ):<></>
                }
            </Paper>
        </Stack>

      <Container maxWidth="lg">
        <Box sx={{ mb: 10, mt: 10 }}>
          <MotionInView variants={varFadeInDown}>
            <Typography variant="h2" sx={{ textAlign: 'center' }}>
              All Categories
            </Typography>
          </MotionInView>
        </Box>

        <Grid container spacing={isDesktop ? 10 : 5}>
          {CARDS.map((card, index) => (
            <Grid key={card.title} item xs={12} md={4}>
              <MotionInView variants={varFadeInUp}>
                <Link href="#" underline="none">
                  <CardStyle className={(index % 3 === 0 && 'cardLeft') || (index % 3 === 1 && 'cardCenter')}>
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
                    <Typography variant="h5" paragraph pb={2}>
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
