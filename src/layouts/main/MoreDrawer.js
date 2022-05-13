/* eslint-disable prettier/prettier */
import PropTypes from 'prop-types';
import { Icon } from '@iconify/react';
import { useState } from 'react';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import YouTubeIcon from '@material-ui/icons/YouTube';
import redditCircleFilled from '@iconify/icons-ant-design/reddit-circle-fill';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import MenuOpenOutlinedIcon from '@material-ui/icons/MenuOpenOutlined';
// material
import { experimentalStyled as styled } from '@material-ui/core/styles';
import {
  Box,
  Link,
  List,
  Stack,
  ListItem,
  Drawer,
  Divider,
  IconButton,
  Typography,
  Button,
  ListItemText,
  ListItemIcon
} from '@material-ui/core';

// ----------------------------------------------------------------------

const LinkStyle = styled(Link)(({ theme }) => ({
  ...theme.typography.subtitle2,
  color: theme.palette.text.primary,
  marginRight: theme.spacing(5),
  transition: theme.transitions.create('opacity', {
    duration: theme.transitions.duration.shortest
  }),
  '&:hover': {
    opacity: 0.48,
    textDecoration: 'none'
  }
}));

const BoxStyle = styled(Box)(() => ({
  width: 130,
  height: 130,
  borderRadius: 5,
  color: '#FFF',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'end',
  alignItems: 'start',
  cursor: 'pointer',
  padding: 10,
  '&:hover': {
    opacity: 0.9,
    textDecoration: 'none'
  }
}));

const ITEM_SIZE = 48;
const PADDING = 2.5;

const ListItemStyle = styled(ListItem)(({ theme }) => ({
    ...theme.typography.body2,
    height: ITEM_SIZE,
    textTransform: 'capitalize',
    paddingLeft: theme.spacing(PADDING),
    paddingRight: theme.spacing(2.5),
    color: theme.palette.text.secondary
  }));
  MoreDrawer.propTypes = {
    method: PropTypes.string,
    isHome: PropTypes.bool,
    isOffset: PropTypes.bool,
    isActive: PropTypes.bool
  };

export default function MoreDrawer({ method, isHome, isOffset, isActive }) {
  const [moreOpen, setMoreOpen] = useState(false);
  const [helpCenterOpen, setHelpCenterOpen] = useState(false);
  const toggleDrawer = (flag) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setMoreOpen(flag);
  };
  const showHelpCenter = () => {
    setHelpCenterOpen(true);
  };
  const hideHelpCenter = () => {
    setHelpCenterOpen(false);
  };
    return (
      <>
        {method === 'desktop' ? (
            <>
                <LinkStyle
                onClick={toggleDrawer(true)}
                style={{ cursor: 'pointer' }}
                sx={{
                  ...(isHome && { color: 'common.white' }),
                  ...(isOffset && { color: 'text.primary' }),
                  ...(isActive && { color: 'primary.main' })
                }}
                >
                More
                </LinkStyle>
            </>
        ) : (
            <>
                <ListItemStyle
                onClick={toggleDrawer(true)}
                button
                target="_blank"
                component={Link}
                >
                <ListItemIcon>
                    <MenuOpenOutlinedIcon />
                </ListItemIcon>
                <ListItemText disableTypography primary="More" />
                </ListItemStyle>
            </>
        )}
        <Drawer anchor="right" open={moreOpen} onClose={toggleDrawer(false)}>
          <Box
            sx={{ width: 320 }}
            role="presentation"
            /* onClick={toggleDrawer(false)} */ onKeyDown={toggleDrawer(false)}
          >
            {!helpCenterOpen ? (
              <>
                <List>
                  <ListItem button>
                    <LinkStyle to="about-us">About</LinkStyle>
                  </ListItem>
                  <ListItem button>
                    <LinkStyle to="#">Blog</LinkStyle>
                  </ListItem>
                  <ListItem button>
                    <LinkStyle onClick={showHelpCenter}>Help Center</LinkStyle>
                  </ListItem>
                </List>
                <Divider />
                <Typography variant="p" style={{ padding: 20 }}>
                  Follow us
                </Typography>
                <Stack direction="column" spacing={2} justifyContent="start" alignItems="start" sx={{ pl: '22px' }}>
                  <Stack direction="row" spacing={2} justifyContent="start">
                    <BoxStyle style={{ background: '#1a8ed6' }}>
                      <TwitterIcon />
                      <Typography sx={{ color: '#FFF' }} variant="p">
                        Twitter
                      </Typography>
                    </BoxStyle>
                    <BoxStyle style={{ background: '#b2317a' }}>
                      <InstagramIcon />
                      <Typography sx={{ color: '#FFF' }} variant="p">
                        Instagram
                      </Typography>
                    </BoxStyle>
                  </Stack>
                  <Stack direction="row" spacing={2} justifyContent="start">
                    <BoxStyle style={{ background: '#6c82cf' }}>
                      <svg className="" fill="#FFFFFF" viewBox="0 0 22 16" style={{ width: 24, height: 24 }}>
                        <path d="M8.11.5c-.28.002-2.574.067-4.996 1.873 0 0-2.584 4.665-2.584 10.408 0 0 1.507 2.593 5.473 2.719 0 0 .664-.792 1.202-1.477-2.278-.685-3.14-2.108-3.14-2.108s.18.126.502.307c.018 0 .035.019.07.036.055.035.108.054.162.09.448.252.896.45 1.31.611.736.307 1.615.576 2.639.774 1.346.252 2.925.342 4.646.019a12.954 12.954 0 002.603-.774 10.118 10.118 0 002.062-1.063s-.896 1.458-3.247 2.125c.538.666 1.185 1.439 1.185 1.439 3.965-.126 5.473-2.72 5.473-2.7 0-5.746-2.584-10.409-2.584-10.409C16.32.446 13.861.5 13.861.5l-.251.288c3.05.918 4.468 2.27 4.468 2.27a14.856 14.856 0 00-5.4-1.711 15.048 15.048 0 00-3.626.036c-.107 0-.197.019-.306.035-.628.072-2.153.288-4.073 1.135-.663.288-1.059.505-1.059.505S5.088 1.635 8.317.717L8.137.5h-.028zm-.457 6.645c1.022 0 1.849.882 1.83 1.981 0 1.1-.808 1.982-1.83 1.982-1.005 0-1.83-.883-1.83-1.982s.806-1.981 1.83-1.981zm6.55 0c1.004 0 1.83.882 1.83 1.981 0 1.1-.809 1.982-1.83 1.982-1.006 0-1.83-.883-1.83-1.982s.806-1.981 1.83-1.981z" />
                      </svg>
                      <Typography sx={{ color: '#FFF' }} variant="p">
                        Discord
                      </Typography>
                    </BoxStyle>
                    <BoxStyle style={{ background: '#f74300' }}>
                      <Icon icon={redditCircleFilled} width={24} height={24} />
                      <Typography sx={{ color: '#FFF' }} variant="p">
                        Reddit
                      </Typography>
                    </BoxStyle>
                  </Stack>
                  <Stack direction="row" spacing={2} justifyContent="start">
                    <BoxStyle style={{ background: '#f50000' }}>
                      <YouTubeIcon />
                      <Typography sx={{ color: '#FFF' }} variant="p">
                        Youtube
                      </Typography>
                    </BoxStyle>
                  </Stack>
                </Stack>
              </>
            ) : (
              <>
                <Box style={{ position: 'relative', marginTop: 20, paddingTop: 10, paddingBottom: 20 }}>
                  <IconButton style={{ position: 'absolute', top: 0, left: 10 }} onClick={hideHelpCenter}>
                    <ArrowBackIosIcon />
                  </IconButton>
                  <Typography variant="h5" textAlign="center">
                    Help Center
                  </Typography>
                </Box>
                <Stack direction="column" spacing={2} justifyContent="start" alignItems="start" sx={{ pl: '22px' }}>
                  <Stack direction="row" spacing={2} justifyContent="start">
                    <BoxStyle style={{ background: '#3a74c8' }}>
                      <Typography sx={{ color: '#FFF' }} variant="p">
                        Getting Started
                      </Typography>
                      <Typography
                        sx={{ color: '#FFF' }}
                        variant="p"
                        style={{ lineHeight: 1.2, fontSize: 12, paddingTop: 10 }}
                      >
                        Create an account, set up your wallet, and more
                      </Typography>
                    </BoxStyle>
                    <BoxStyle style={{ background: '#5030d1' }}>
                      <Typography sx={{ color: '#FFF' }} variant="p">
                        Buy
                      </Typography>
                      <Typography
                        sx={{ color: '#FFF' }}
                        variant="p"
                        style={{ lineHeight: 1.2, fontSize: 12, paddingTop: 10 }}
                      >
                        Purchase your first NFT, understand gas fees and what's free
                      </Typography>
                    </BoxStyle>
                  </Stack>
                  <Stack direction="row" spacing={2} justifyContent="start">
                    <BoxStyle style={{ background: '#c93fae' }}>
                      <Typography sx={{ color: '#FFF' }} variant="p">
                        Sell
                      </Typography>
                      <Typography
                        sx={{ color: '#FFF' }}
                        variant="p"
                        style={{ lineHeight: 1.2, fontSize: 12, paddingTop: 10 }}
                      >
                        List your NFTs for sell with a set price, as an auction
                      </Typography>
                    </BoxStyle>
                    <BoxStyle style={{ background: '#cc5b57' }}>
                      <Typography sx={{ color: '#FFF' }} variant="p">
                        Create
                      </Typography>
                      <Typography
                        sx={{ color: '#FFF' }}
                        variant="p"
                        style={{ lineHeight: 1.2, fontSize: 12, paddingTop: 10 }}
                      >
                        Create your first NFT and collection to start selling and
                      </Typography>
                    </BoxStyle>
                  </Stack>
                  <Stack direction="row" spacing={2} justifyContent="start">
                    <BoxStyle style={{ background: '#d89455' }}>
                      <Typography sx={{ color: '#FFF' }} variant="p">
                        FAQs
                      </Typography>
                      <Typography
                        sx={{ color: '#FFF' }}
                        variant="p"
                        style={{ lineHeight: 1.2, fontSize: 12, paddingTop: 10 }}
                      >
                        Learn answers to frequently asked questions an
                      </Typography>
                    </BoxStyle>
                    <BoxStyle style={{ background: '#61bb7d' }}>
                      <Typography sx={{ color: '#FFF' }} variant="p">
                        User Safety
                      </Typography>
                      <Typography
                        sx={{ color: '#FFF' }}
                        variant="p"
                        style={{ lineHeight: 1.2, fontSize: 12, paddingTop: 10 }}
                      >
                        Learn more about anti-froud and user safety processes
                      </Typography>
                    </BoxStyle>
                  </Stack>
                  <Box style={{ width: 'calc(100% - 22px)' }}>
                    <Button variant="contained" color="secondary" size="large" style={{ width: '100%' }}>
                      Visit support.opensea.io
                    </Button>
                  </Box>
                </Stack>
              </>
            )}
          </Box>
        </Drawer>
      </>
    );
  }
