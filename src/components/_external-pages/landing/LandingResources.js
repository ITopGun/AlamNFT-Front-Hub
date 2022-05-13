/* eslint-disable prettier/prettier */
import { useRef } from 'react';
import Slider from 'react-slick';
import PropTypes from 'prop-types';
import { Link as RouterLink } from 'react-router-dom';
// material
import { experimentalStyled as styled } from '@material-ui/core/styles';
import { Box, Paper, Container, Typography, Link, useTheme, Stack } from '@material-ui/core';
//
import { CarouselControlsPaging2 } from '../../carousel/controls';

// ----------------------------------------------------------------------

const CAROUSELS = [
    {
      image: '/static/home/image-13.png',
      title: 'How to Easily Setup a MetaMask Wallet'
    },
    {
      image: '/static/home/76edde93ea6402d5818fbc03767aeda0.jpg',
      title: 'How to Fund MetaMask with ETH'
    },
    {
      image: '/static/home/image-10.png',
      title: 'How to Find an NFT You Love'
    }
  ];

const RootStyle = styled('div')(({ theme }) => ({
  // overflow: 'hidden',
  position: 'relative',
  '&:before, &:after': {
    top: 0,
    left: 0,
    zIndex: 8,
    width: 48,
    content: "''",
    height: '100%',
    display: 'none',
    position: 'absolute',
    // backgroundImage: 'linear-gradient(to right, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 100%)',
    [theme.breakpoints.up(480)]: {
      display: 'block'
    }
  },
  '&:after': {
    right: 0,
    left: 'auto',
    transform: 'scaleX(-1)'
  }
}));

const CarouselImgStyle = styled('img')(({ theme }) => ({
  top: 0,
  width: '100%',
  height: '80%',
  objectFit: 'cover',
  position: 'absolute',
  transition: theme.transitions.create('all')
}));

// ----------------------------------------------------------------------

CarouselItem.propTypes = {
  item: PropTypes.object
};

function CarouselItem({ item }) {
  const theme = useTheme();
  const { image, title } = item;

  return (
    <Paper
      sx={{
        mx: 1,
        borderRadius: 2,
        overflow: 'hidden',
        paddingTop: 'calc(7 /9 * 100%)',
        position: 'relative',
        margin: '5px',
        border: 'solid 1px #DDD',
        '&:hover': {
            boxShadow: '2px 2px 2px #ccc, -2px -2px 2px #ccc'
        }
      }}
    >
      <Link to="#" component={RouterLink}>
        <CarouselImgStyle alt={title} src={image} />
        <Box
          sx={{
            bottom: 0,
            zIndex: 9,
            width: '100%',
            textAlign: 'left',
            position: 'absolute',
            color: 'common.white',
            height: '20%',
            display: 'flex',
            borderTop: 'solid 1px #DDD'
          }}
        >
            <Stack sx={{ position: 'relative', width: '100%', height: '100%' }}>
                <Typography variant="p" textAlign='left' pt={2} mb={3} ml={2} color={theme.palette.grey[800]} sx={{ fontWeight: 700 }}>
                    {title}
                </Typography>
            </Stack>
        </Box>
      </Link>
    </Paper>
  );
}

export default function LandingResources() {
  const carouselRef = useRef();
  const theme = useTheme();

  const settings = {
    speed: 500,
    slidesToShow: 3,
    // centerMode: true,
    dots: false,
    centerPadding: '60px',
    arrows: false,
    draggable: false,
    rtl: Boolean(theme.direction === 'rtl'),
    responsive: [
        {
            breakpoint: 960,
            settings: {
                slidesToShow: 2,
                dots: true,
                draggable: true,
                ...CarouselControlsPaging2({
                  sx: { mt: 2 }
                })
            }
        }, {
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
                centerPadding: '0',
                ...CarouselControlsPaging2({
                  sx: { mt: 2 }
                })
            }
        }
    ]
  };

  return (
    
    <Container maxWidth="lg">
      <Box sx={{ mt: { xs: 5, md: 10 } }}>
        <RootStyle>
            <Typography variant='h4' textAlign='center' color={theme.palette.grey[900]} mb={5}>
                Resources for getting started
            </Typography>
            <Slider ref={carouselRef} {...settings}>
                {CAROUSELS.map((item) => (
                  <CarouselItem key={item.title} item={item} />
                ))}
            </Slider>
        </RootStyle>
      </Box>
    </Container>
  );
}
