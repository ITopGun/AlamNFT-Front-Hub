/* eslint-disable prettier/prettier */
import { useRef } from 'react';
import Slider from 'react-slick';
import PropTypes from 'prop-types';
import { Link as RouterLink } from 'react-router-dom';
// material
import { alpha, useTheme, experimentalStyled as styled } from '@material-ui/core/styles';
import { Box, Paper, Container, Typography, CardContent, Link } from '@material-ui/core';
//
import { CarouselControlsArrowsBasic2, CarouselControlsPaging2 } from '../../carousel/controls';

// ----------------------------------------------------------------------

// const CAROUSELS = [...Array(5)].map((_, index) => {
//   const setIndex = index + 1;
//   return {
//     title: faker.name.title(),
//     description: faker.lorem.paragraphs(),
//     image: mockImgFeed(setIndex)
//   };
// });

const CAROUSELS = [
    {
      image: '/static/home/nftstar-promocard.jpg',
      title: '‘Every Body’ NFT Collection'
    },
    {
      image: '/static/home/powerfuliceland-promocard.jpg',
      title: '‘Every Body’ NFT Collection'
    },
    {
      image: '/static/home/signsoftimes-promocard.jpg',
      title: '‘Every Body’ NFT Collection'
    },
    {
      image: '/static/home/surge-promocard.jpg',
      title: '‘Every Body’ NFT Collection'
    },
    {
      image: '/static/home/hmson-promocard.jpg',
      title: '‘Every Body’ NFT Collection'
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
  height: '100%',
  objectFit: 'cover',
  position: 'absolute',
  transition: theme.transitions.create('all')
}));

// ----------------------------------------------------------------------

CarouselItem.propTypes = {
  item: PropTypes.object
};

function CarouselItem({ item }) {
  const { image, title } = item;

  return (
    <Paper
      sx={{
        mx: 1,
        borderRadius: 2,
        overflow: 'hidden',
        paddingTop: 'calc(13 /9 * 100%)',
        position: 'relative'
      }}
    >
      <Link to="/collection" component={RouterLink}>
        <CarouselImgStyle alt={title} src={image} />
        <CardContent
          sx={{
            bottom: 0,
            zIndex: 9,
            width: '100%',
            textAlign: 'left',
            position: 'absolute',
            color: 'common.white',
            backgroundImage: (theme) =>
              `linear-gradient(to top, ${theme.palette.grey[900]} 0%,${alpha(theme.palette.grey[900], 0)} 100%)`
          }}
        >
          <Typography variant="h4" paragraph>
            {title}
          </Typography>
        </CardContent>
        <Typography variant="p" sx={{ position: 'absolute', top: 10, right: 10, border: 'solid 2px #EEE', borderRadius: 1, padding: '2px 10px', fontSize: '14px !important', color: '#FFFFFF', background: 'rgba(50, 50, 50, 0.5)' }}>
          Live
        </Typography>
      </Link>
    </Paper>
  );
}

export default function LandingCategoryCarousel() {
  const carouselRef = useRef();
  const theme = useTheme();

  const settings = {
    speed: 500,
    slidesToShow: 3,
    // centerMode: true,
    dots: true,
    centerPadding: '60px',
    rtl: Boolean(theme.direction === 'rtl'),
    ...CarouselControlsPaging2({
      sx: { mt: 3 }
    }),
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 }
      },
      {
        breakpoint: 600,
        settings: { slidesToShow: 2 }
      },
      {
        breakpoint: 480,
        settings: { slidesToShow: 1, centerPadding: '0' }
      }
    ]
  };

  const handlePrevious = () => {
    carouselRef.current.slickPrev();
  };

  const handleNext = () => {
    carouselRef.current.slickNext();
  };

  return (
    
    <Container maxWidth="lg">
      <Box sx={{ mt: { xs: 5, md: 10 } }}>
        <RootStyle>
          <Typography variant="h4" color={theme.palette.grey[900]} textAlign="center" mb={5}>Notable Drops</Typography>
            <Slider ref={carouselRef} {...settings}>
                {CAROUSELS.map((item) => (
                  <CarouselItem key={item.title} item={item} />
                ))}
            </Slider>
            <CarouselControlsArrowsBasic2 onNext={handleNext} onPrevious={handlePrevious} />
        </RootStyle>
      </Box>
    </Container>
  );
}
