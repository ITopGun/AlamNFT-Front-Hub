/* eslint-disable prettier/prettier */
import { useRef, useState } from 'react';
import Slider from 'react-slick';
import PropTypes from 'prop-types';
import { Link as RouterLink } from 'react-router-dom';
// material
import { alpha, experimentalStyled as styled } from '@material-ui/core/styles';
import { Box, Paper, Container, Typography, Button, Menu, MenuItem, Link, useTheme, Stack } from '@material-ui/core';
import VerifiedIcon from '@material-ui/icons/Verified';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
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
  height: '48%',
  objectFit: 'cover',
  position: 'absolute',
  transition: theme.transitions.create('all')
}));

const StyledButton = styled((props) => (
    <Button {...props} />
))(({theme}) => ({
    color: theme.palette.secondary.main,
    fontSize: '1.25rem',
    fontWeight: 600,
    border: 'none',
    '&:hover': {
        border: 'none'
    },
    '& .MuiButton-label': {
        textAlign: 'left',
        justifyContent: 'space-between',
        '& img': {
            width: 30,
            height: 30,
            marginRight: 10
        }
    }
}))

const StyledMenu = styled((props) => (
    <Menu
      elevation={0}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'right',
      }}
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      {...props}
    />
  ))(({ theme }) => ({
    '& .MuiPaper-root': {
      borderRadius: 6,
      marginTop: theme.spacing(1),
      minWidth: 180,
      color:
        theme.palette.mode === 'light' ? 'rgb(55, 65, 81)' : theme.palette.grey[300],
      boxShadow:
        'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
      '& .MuiMenu-list': {
        padding: '4px 0',
      },
      '& .MuiMenuItem-root': {
        '& .MuiSvgIcon-root': {
          fontSize: 18,
          color: theme.palette.text.secondary,
          marginRight: theme.spacing(1.5),
        },
        '& img': {
            width: 30,
            height: 30,
            marginRight: 10
        },
        '&:active': {
          backgroundColor: alpha(
            theme.palette.primary.main,
            theme.palette.action.selectedOpacity,
          ),
        },
      },
    },
  }));

  const categories = [
    {
        icon: "/static/stats/allnfts-light.svg",
        title: "All categories"
    },{
        icon: "/static/stats/new-light.svg",
        title: "New"
    },{
        icon: "/static/stats/art-light.svg",
        title: "Art"
    },{
        icon: "/static/stats/collectibles-light.svg",
        title: "Collectibles"
    },{
        icon: "/static/stats/domain-names-light.svg",
        title: "Domain Names"
    },{
        icon: "/static/stats/virtual-worlds-light.svg",
        title: "Virtual Worlds"
    },{
        icon: "/static/stats/trading-cards-light.svg",
        title: "Trading Cards"
    },{
        icon: "/static/stats/music-light.svg",
        title: "Music"
    },{
        icon: "/static/stats/sports-light.svg",
        title: "Sports"
    },{
        icon: "/static/stats/utility-light.svg",
        title: "Utility"
    }
]

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
        paddingTop: 'calc(10 /9 * 100%)',
        position: 'relative'
      }}
    >
      <Link to="/collection" component={RouterLink}>
        <CarouselImgStyle alt={title} src={image} />
        <Box
          sx={{
            bottom: 0,
            zIndex: 9,
            width: '100%',
            textAlign: 'left',
            position: 'absolute',
            color: 'common.white',
            height: '52%',
            display: 'flex'
          }}
        >
            <Box sx={{ position: 'relative', width: '100%', height: '100%' }}>
                <img src="/static/home/unnamed (11).png" alt="avatar" style={{ width: 50, height: 50, borderRadius: '50%', border: 'solid 3px #FFF', position: 'absolute', top: 0, left: '50%', transform: 'translate(-50%, -50%)' }} />
                <Typography variant="h5" color={theme.palette.grey[800]} textAlign='center' mt={4} mb={3}>
                    {title}
                </Typography>
                <Box component="p" color={theme.palette.grey[700]} textAlign='center' sx={{ fontSize: '14px', fontWeight: 700 }}>
                    by &nbsp;&nbsp;
                    <Typography variant="p" color={theme.palette.secondary.main} textAlign='center'>THENFTSTAR <VerifiedIcon sx={{ fontSize: '14px', marginBottom: '-1px' }} /></Typography>
                </Box>
                <Box component="p" color={theme.palette.grey[700]} textAlign='center' sx={{ maxWidth: 300, margin: '30px auto 10px' }}>
                    Where My Vans Go is a collection comprised of 123 iconic images created over the span of three years...
                </Box>
            </Box>
        </Box>
      </Link>
    </Paper>
  );
}

export default function LandingTrending() {// Category Menu
    const [categoryAnchorEl, setCategoryAnchorEl] = useState(null);
    const categoryOpen = Boolean(categoryAnchorEl);
    const [selectedCategory, setSelectedCategory] = useState(0)
    const handleCategoryClick = (event) => {
      setCategoryAnchorEl(event.currentTarget);
    };
    const handleCategoryClose = (e) => {
      setCategoryAnchorEl(null);
      if(e.target.value) setSelectedCategory(e.target.value - 1)
    };
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
            <Typography variant='h4' textAlign='center' color={theme.palette.grey[900]} mb={5}>
                Trending in 
                <StyledButton
                    id='category-button'
                    aria-controls={categoryOpen ? 'category-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={categoryOpen ? 'true' : undefined}
                    variant="outlined"
                    disableElevation
                    onClick={handleCategoryClick}
                    endIcon={<KeyboardArrowDownIcon style={{ fontSize: 20 }} />}
                >
                    <Stack direction="row" alignItems="center">
                        {categories[selectedCategory].title}
                    </Stack>
                </StyledButton>
                <StyledMenu
                    id="category-menu"
                    MenuListProps={{
                    'aria-labelledby': 'category-button',
                    }}
                    anchorEl={categoryAnchorEl}
                    open={categoryOpen}
                    onClose={handleCategoryClose}
                >
                    {categories.map((category, index) => (
                        <MenuItem onClick={handleCategoryClose} disableRipple key={index} value={index + 1}>
                            <img src={category.icon} alt={category.title} />
                            {category.title}
                        </MenuItem>
                    ))}
                </StyledMenu>
            </Typography>
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
