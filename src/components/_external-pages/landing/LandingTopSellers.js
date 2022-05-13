/* eslint-disable prettier/prettier */
import { useRef } from 'react';
import Slider from 'react-slick';
import PropTypes from 'prop-types';
// material
import { useTheme, experimentalStyled as styled } from '@material-ui/core/styles';
import { Box, Paper, Container, Typography, CardContent } from '@material-ui/core';
//
import { CarouselControlsArrowsBasic2 } from '../../carousel/controls';

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
      image: '/static/nftImages/art.png',
      title: 'Art'
    },
    {
      image: '/static/nftImages/collectibles.png',
      title: 'Collectibles'
    },
    {
      image: '/static/nftImages/domain-names.png',
      title: 'Domain Names'
    },
    {
      image: '/static/nftImages/music.png',
      title: 'Music'
    },
    {
      image: '/static/nftImages/photography-category.png',
      title: 'Photography'
    },
    {
      image: '/static/nftImages/sports.png',
      title: 'Sports'
    },
    {
      image: '/static/nftImages/trading-cards.png',
      title: 'Trading Cards'
    },
    {
      image: '/static/nftImages/utility.png',
      title: 'Utility'
    },
    {
      image: '/static/nftImages/virtual-worlds.png',
      title: 'Virtual Worlds'
    }
  ];

const RootStyle = styled('div')(({ theme }) => ({
  overflow: 'hidden',
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
        overflow: 'hidden',
        position: 'relative'
        }}
    >
        <Paper
        sx={{
            mx: 1,
            borderRadius: 2,
            overflow: 'hidden',
            paddingTop: 'calc(8 /9 * 100%)',
            position: 'relative',
            '&:hover img': {
            width: '120%',
            height: '120%'
            }
        }}
        >
        <CarouselImgStyle alt={title} src={image} />
        
        </Paper>
        <CardContent
            sx={{
            bottom: 0,
            zIndex: 9,
            width: '100%',
            textAlign: 'left',
            // position: 'absolute',
            color: 'common.black'
            }}
        >
            <Typography variant="h4" paragraph>
            {title}
            </Typography>
        </CardContent>
    </Paper>
  );
}

export default function LandingTopSellers() {
  const carouselRef = useRef();
  const theme = useTheme();

  const settings = {
    speed: 500,
    slidesToShow: 3,
    centerMode: true,
    centerPadding: '60px',
    rtl: Boolean(theme.direction === 'rtl'),
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
      <Box sx={{ mt: { xs: 10, md: 15 } }}>
        <Typography variant="h3" paragraph>Top Sellers</Typography>
        <RootStyle>
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
