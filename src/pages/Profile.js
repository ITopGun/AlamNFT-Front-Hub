/* eslint-disable prettier/prettier */
// material
import { useState } from 'react';
import { experimentalStyled as styled } from '@material-ui/core/styles';
import { Box, Container, Typography, Stack, Button, Link } from '@material-ui/core';
//
import { MotionInView, varFadeInDown } from '../components/animate';

// ----------------------------------------------------------------------

const Wallets = [
  {
    icon: '/static/profile-page/metamask-alternative.png',
    title: 'Art',
    link: '#'
  },{
    icon: '/static/profile-page/walletlink-alternative.png',
    title: 'Coinbase Wallet',
    link: '#'
  },{
    icon: '/static/profile-page/walletconnect-alternative.png',
    title: 'WalletConnect',
    link: '#'
  },{
    icon: '/static/profile-page/phantom.svg',
    title: 'Phantom',
    link: '#'
  },{
    icon: '/static/profile-page/fortmatic-alternative.png',
    title: 'Fortmatic',
    link: '#'
  },{
    icon: '/static/profile-page/kaikas-alternative.png',
    title: 'Kaikas',
    link: '#'
  },{
    icon: '/static/profile-page/bitski-alternative.png',
    title: 'Bitski',
    link: '#'
  },{
    icon: '/static/profile-page/glow.png',
    title: 'Glow',
    link: '#'
  },{
    icon: '/static/profile-page/venly.svg',
    title: 'Venly',
    link: '#'
  },{
    icon: '/static/profile-page/dapper-icon.png',
    title: 'Dapper',
    link: '#'
  },{
    icon: '/static/profile-page/authereum-alternative.png',
    title: 'Authereum',
    link: '#'
  },{
    icon: '/static/profile-page/torus-alternative.png',
    title: 'Torus',
    link: '#'
  },{
    icon: '/static/profile-page/portis-alternative.svg',
    title: 'Portis',
    link: '#'
  },{
    icon: '/static/profile-page/opera-touch-alternative.svg',
    title: 'OperaTouch',
    link: '#'
  },{
    icon: '/static/profile-page/trust-alternative.png',
    title: 'Trust',
    link: '#'
  },
];

const RootStyle = styled('div')(({ theme }) => ({
  paddingTop: theme.spacing(15),
  [theme.breakpoints.up('md')]: {
    paddingBottom: theme.spacing(15)
  }
}));

const LinkStyle = styled(Link)(({ theme }) => ({
    ...theme.typography.subtitle2,
    color: theme.palette.text.primary,
    maxWidth: 800,
    display: 'flex',
    justifyContent: 'space-between',
    margin: 'auto',
    border: 'solid 1px transparent',
    padding: '20px 10px',
    cursor: 'pointer',
    transition: theme.transitions.create('opacity', {
      duration: theme.transitions.duration.shortest
    }),
    '&:hover': {
      border: 'solid 1px #CCC',
      textDecoration: 'none'
    }
  }));

const StyledButton = styled(Button)(() => ({
    maxWidth: 800,
    display: 'block',
    margin: 'auto',
    width: '100%'
}))


// ----------------------------------------------------------------------

export default function LandingMinimalHelps() {
  const [sliceNum, setSliceNum] = useState(4)
  const [buttonStr, setButtonStr] = useState('Show more options')
  const showMore = () => {
    if(sliceNum === 4) {
        setSliceNum(Wallets.length)
        setButtonStr('Show fewer options')
    } else {
        setSliceNum(4)
        setButtonStr('Show more options')
    }
  }

  return (
    <RootStyle>
        <Stack justifyContent='center' direction='row'>
            <img src="/static/profile-page/profile-banner.png" alt="profile banner" style={{ maxWidth: 250 }} />
        </Stack>

      <Container maxWidth="lg">
        <Box sx={{ mb: 10, mt: 10 }}>
          <MotionInView variants={varFadeInDown}>
            <Typography variant="h2" sx={{ textAlign: 'center' }}>
              Connect with wallet
            </Typography>
            <Typography variant="p" sx={{ textAlign: 'center', display: 'block' }}>
              Your crypto wallet securely stores your digital goods and cryptocurrencies. <br/>
              Connect to one of our wallet provider or create a new one.
            </Typography>
          </MotionInView>
        </Box>
        <Box sx={{ mb: 5, mt: 5}}>
            <MotionInView variants={varFadeInDown}>
                {Wallets.slice(0, sliceNum).map(wallet => (
                    <LinkStyle to={wallet.link} key={wallet.title}>
                        <Typography variant="p" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <img src={wallet.icon} alt={wallet.title} style={{ width: 40, height: 40 }} />
                            <Typography variant="p" style={{ textAlign: 'center', marginLeft: 20, fontSize: 20 }}>{wallet.title}</Typography>
                        </Typography>
                    </LinkStyle>
                ))}
                <StyledButton variant="outlined" onClick={showMore}>{buttonStr}</StyledButton>
            </MotionInView>
        </Box>
      </Container>
    </RootStyle>
  );
}
