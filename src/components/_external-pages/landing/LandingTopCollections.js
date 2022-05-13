/* eslint-disable prettier/prettier */
import { motion } from 'framer-motion';
import { useState } from 'react';
// material
import { experimentalStyled as styled, alpha } from '@material-ui/core/styles';
import { Container, Typography, Stack, Grid, useTheme, Link, Box, Button, Menu, MenuItem } from '@material-ui/core';
import VerifiedIcon from '@material-ui/icons/Verified';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
// routes
//
import { varWrapEnter } from '../../animate';

// ----------------------------------------------------------------------

const RootStyle = styled(motion.div)(({ theme }) => ({
  position: 'relative',
  paddingTop: theme.spacing(10),
  backgroundColor: theme.palette.common.white
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
    maxHeight: 500,
    '& .MuiPaper-root': {
      borderRadius: 6,
      marginTop: theme.spacing(1),
      minWidth: 180,
      maxHeight: '300px !important',
      color:
        theme.palette.mode === 'light' ? 'rgb(55, 65, 81)' : theme.palette.grey[300],
      boxShadow:
        'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
      '& .MuiMenu-list': {
        padding: '4px 0',
      },
      '& ul': {
          maxHeight: 300
      },
      '& .MuiMenuItem-root': {
        borderBottom: 'solid 1px #CCC',
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

const nfts = [
    {
        image: '/static/nft-images/azuki.jpg',
        title: '111Otherdeed for Ot',
        verified: true,
        active: true,
        floorPrice: 20,
        unit: 1,
        price: 200000,
        delta: 150
    },{
        image: '/static/nft-images/azuki.jpg',
        title: '222Otherdeed for Ot',
        verified: true,
        active: true,
        floorPrice: 20,
        unit: 1,
        price: 200000,
        delta: -150
    },{
        image: '/static/nft-images/azuki.jpg',
        title: '333Otherdeed for Ot',
        verified: true,
        active: true,
        floorPrice: 20,
        unit: 1,
        price: 200000,
        delta: -150
    },{
        image: '/static/nft-images/azuki.jpg',
        title: '444Otherdeed for Ot',
        verified: true,
        active: true,
        floorPrice: 20,
        unit: 1,
        price: 200000,
        delta: 150
    },{
        image: '/static/nft-images/azuki.jpg',
        title: '555Otherdeed for Ot',
        verified: true,
        active: true,
        floorPrice: 20,
        unit: 1,
        price: 200000,
        delta: 150
    },{
        image: '/static/nft-images/azuki.jpg',
        title: '666Otherdeed for Ot',
        verified: true,
        active: true,
        floorPrice: 20,
        unit: 1,
        price: 200000,
        delta: -150
    },{
        image: '/static/nft-images/azuki.jpg',
        title: '777Otherdeed for Ot',
        verified: true,
        active: true,
        floorPrice: 20,
        unit: 1,
        price: 200000,
        delta: 150
    },{
        image: '/static/nft-images/azuki.jpg',
        title: '888Otherdeed for Ot',
        verified: true,
        active: true,
        floorPrice: 20,
        unit: 1,
        price: 200000,
        delta: 150
    },{
        image: '/static/nft-images/azuki.jpg',
        title: '999Otherdeed for Ot',
        verified: true,
        active: true,
        floorPrice: 20,
        unit: 1,
        price: 200000,
        delta: 150
    },{
        image: '/static/nft-images/azuki.jpg',
        title: 'aaaOtherdeed for Ot',
        verified: true,
        active: true,
        floorPrice: 20,
        unit: 1,
        price: 200000,
        delta: -150
    },{
        image: '/static/nft-images/azuki.jpg',
        title: 'bbbOtherdeed for Ot',
        verified: true,
        active: true,
        floorPrice: 20,
        unit: 1,
        price: 200000,
        delta: 150
    },{
        image: '/static/nft-images/azuki.jpg',
        title: 'cccOtherdeed for Ot',
        verified: true,
        active: true,
        floorPrice: 20,
        unit: 1,
        price: 200000,
        delta: 150
    },{
        image: '/static/nft-images/azuki.jpg',
        title: 'dddOtherdeed for Ot',
        verified: true,
        active: true,
        floorPrice: 20,
        unit: 1,
        price: 200000,
        delta: -150
    },{
        image: '/static/nft-images/azuki.jpg',
        title: 'eeeeOtherdeed for Ot',
        verified: true,
        active: true,
        floorPrice: 20,
        unit: 1,
        price: 200000,
        delta: 150
    },{
        image: '/static/nft-images/azuki.jpg',
        title: 'fffOtherdeed for Ot',
        verified: true,
        active: true,
        floorPrice: 20,
        unit: 1,
        price: 200000,
        delta: 150
    },{
        image: '/static/nft-images/azuki.jpg',
        title: 'gggOtherdeed for Ot',
        verified: true,
        active: true,
        floorPrice: 20,
        unit: 1,
        price: 200000,
        delta: 150
    },{
        image: '/static/nft-images/azuki.jpg',
        title: 'hhhOtherdeed for Ot',
        verified: true,
        active: true,
        floorPrice: 20,
        unit: 1,
        price: 200000,
        delta: -150
    }
];

const categories = [
    {
        title: "last 24 hours"
    },{
        title: "last 7 days"
    },{
        title: "last 30 days"
    }
];

// ----------------------------------------------------------------------

export default function LandingTopCollections() {

    // Category Menu
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
  const theme = useTheme();
  const GridStyle = styled((props) => <Grid container {...props} />)(({ theme }) => ({
    // zIndex: 10,
    // position: 'relative',
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
    [theme.breakpoints.up('lg')]: {
        width: 'calc(100% + 50px)',
        marginLeft: '-50px',
        '&>div': {
            paddingLeft: 50
        }
    },
    [theme.breakpoints.down('lg')]: {
      maxWidth: '550px',
      margin: 'auto'
    }
  }));
  return (
    <>
      <RootStyle initial="initial" animate="animate" variants={varWrapEnter}>
        <Container maxWidth="lg">
          <Typography variant='h4' textAlign='center' color={theme.palette.grey[900]}>
              Top collections over 
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
                    <MenuItem onClick={handleCategoryClose} disableRipple key={index} value={index + 1} sx={{ borderBottom: 'solid 1px #CCC' }}>
                        {category.title}
                    </MenuItem>
                ))}
            </StyledMenu>
          </Typography>
          <GridStyle>
              {[0, 1, 2].map(order => (
                <Grid key={order} item xs={12} md={12} lg={4}>
                    {nfts.filter((nft, index) => (index >= order * Math.ceil(nfts.length / 3)) && (index < (order + 1) * Math.ceil(nfts.length / 3))).map((nft, index) => (
                        <Link key={index} href="#" sx={{ color: '#121212', '&>div': { border: 'solid 2px transparent', borderBottom: 'solid 1px #D8D8D8' }, '&:hover': { textDecoration: 'none', '&>div': { boxShadow: theme.shadows[20], borderColor: '#CCC', borderRadius: 1 } } }}>
                            <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ padding: '16px' }}>
                                <Stack direction="row" alignItems="center">
                                    <Typography variant="p" sx={{ fontWeight: 700, color: theme.palette.grey[800] }}>{ (order * Math.ceil(nfts.length / 3)) + index + 1 }</Typography>
                                    <Box sx={{ position: 'relative', width: '50px', height: '50px', margin: '0 10px' }}>
                                        <img src={ nft.image } alt="nft" style={{ borderRadius: '50%' }} />
                                        <span style={{ position: 'absolute', top: '2px', right: '2px', backgroundColor: 'rgb(52, 199, 123)', width: '10px', height: '10px', borderRadius: '50%', border: 'solid 1px #FFFFFF' }} />
                                        <VerifiedIcon color="secondary" sx={{ position: 'absolute', bottom: 0, right: 0, fontSize: '16px', background: '#FFFFFF', borderRadius: '50%' }} />
                                    </Box>
                                    <Box>
                                        <Typography variant="p" sx={{ fontWeight: 700, color: theme.palette.grey[800] }}>{ nft.title }</Typography>
                                        <Stack direction="row" alignItems="center">
                                            <Typography variant="p" style={{ color: theme.palette.grey[700], fontWeight: 700, fontSize: '12px' }}>Floor price: </Typography>
                                            <img src="/static/nft-images/ethereum.svg" alt="ethereum" style={{ width: '14px', height: '14px' }} />
                                            <Typography variant="p" style={{ color: theme.palette.grey[700], fontWeight: 700, fontSize: '14px' }}>{ nft.floorPrice }</Typography>
                                        </Stack>
                                    </Box>
                                </Stack>
                                <Box sx={{ textAlign: 'right' }}>
                                    {
                                        (nft.delta > 0) ? (<Typography variant="p" color="primary">+{ nft.delta }</Typography>) : (<Typography variant="p" color={theme.palette.error.light}>{ nft.delta }</Typography>)
                                    }
                                    <Stack direction="row" alignItems="center" justifyContent="end">
                                        <img src="/static/nft-images/ethereum.svg" alt="ethereum" style={{ width: '14px', height: '14px' }} />
                                        <Typography variant="p" style={{ color: theme.palette.grey[700], fontWeight: 700, fontSize: '14px' }}>{ nft.price }</Typography>
                                    </Stack>
                                </Box>
                            </Stack>
                        </Link>
                    ))}
                </Grid>
              ))}
          </GridStyle>
          <Stack justifyContent="center" alignItems="center" pt={2} pb={2}>
              <Button
                size="large"
                variant="contained"
                color="secondary"
                >
                Go to Rankings
              </Button>
          </Stack>
        </Container>
      </RootStyle>
    </>
  );
}
