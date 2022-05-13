/* eslint-disable prettier/prettier */
import { useState } from 'react';
// material
import BarChartIcon from '@material-ui/icons/BarChart';
import ShowChartIcon from '@material-ui/icons/ShowChart';
import PanToolIcon from '@material-ui/icons/PanTool'
import BookmarkIcon from '@material-ui/icons/Bookmark'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart'
import ShortcutIcon from '@material-ui/icons/Shortcut'
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import { experimentalStyled as styled, alpha } from '@material-ui/core/styles';
import { Box, Tab, Container, Stack,  MenuItem, Button, Menu, Typography } from '@material-ui/core';
import { TabContext, TabList, TabPanel } from '@material-ui/lab';
// components
import Page from '../components/Page';
import RankingTable from './rankingTable';


// ----------------------------------------------------------------------

const style = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexWrap: 'wrap',
  '& > *': { mx: '8px !important' }
};

const StyledButton = styled((props) => (
    <Button {...props} />
))(() => ({
    '& .MuiButton-label': {
        width: 170,
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

const SIMPLE_TAB = [
  { value: '1', icon: <BarChartIcon />, label: 'Rankings', disabled: false },
  { value: '2', icon: <ShowChartIcon />, label: 'Activity', disabled: false }
];

const RootStyle = styled(Page)(({ theme }) => ({
  paddingTop: theme.spacing(11),
  paddingBottom: theme.spacing(15)
}));

// ----------------------------------------------------------------------

export default function TabsComponent() {
  const [value, setValue] = useState('1');
  

  const handleChange = (event, newValue) => {
    setValue(newValue);
    console.log(newValue);
  };

  // Category Menu
  const [categoryAnchorEl, setCategoryAnchorEl] = useState(null);
  const categoryOpen = Boolean(categoryAnchorEl);
  const [selectedCategory, setSelectedCategory] = useState(0)
  const handleCategoryClick = (event) => {
    setCategoryAnchorEl(event.currentTarget);
  };
  const handleCategoryClose = (e) => {
    setCategoryAnchorEl(null);
    if(e.target.value) setSelectedCategory(e.target.value)
  };
  // Chain Menu
  const [chainAnchorEl, setChainAnchorEl] = useState(null);
  const chainOpen = Boolean(chainAnchorEl)
  const [selectedChain, setSelectedChain] = useState(0)
  const handleChainClick = (event) => {
    setChainAnchorEl(event.currentTarget);
  };
  const handleChainClose = (e) => {
    setChainAnchorEl(null);
    if(e.target.value) setSelectedChain(e.target.value)
  };
  // SevenDays Menu
  const [sevenDaysAnchorEl, setSevenDaysAnchorEl] = useState(null);
  const sevenDaysOpen = Boolean(sevenDaysAnchorEl)
  const [selectedSevenDays, setSelectedSevenDays] = useState(0)
  const handleSevenDaysClick = (event) => {
    setSevenDaysAnchorEl(event.currentTarget);
  };
  const handleSevenDaysClose = (e) => {
    setSevenDaysAnchorEl(null);
    if(e.target.value) setSelectedSevenDays(e.target.value)
  };

  // Activity Menu
  const [activityAnchorEl, setActivityAnchorEl] = useState(null);
  const activityOpen = Boolean(activityAnchorEl)
  const [selectedActivity, setSelectedActivity] = useState(0)
  const handleActivityClick = (event) => {
    setActivityAnchorEl(event.currentTarget);
  };
  const handleActivityClose = (e) => {
    setActivityAnchorEl(null);
    if(e.target.value) setSelectedActivity(e.target.value)
  };


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

  const chains = [
    {
        icon: "/static/stats/link-icon.jpg",
        title: "All chains"
    },{
        icon: "/static/stats/ethereum.png",
        title: "Ethereum"
    },{
        icon: "/static/stats/polygon.svg",
        title: "Polygon"
    },{
        icon: "/static/stats/klaytn.png",
        title: "Klaytn"
    },{
        icon: "/static/stats/solana.svg",
        title: "Solana"
    }
]
const sevenDays = [
  {
      title: "Seven day volume"
  },{
      title: "24h volume"
  },{
      title: "All-time volume"
  },{
      title: "Seven day change"
  },{
      title: "Average price"
  },{
      title: "Number of owners"
  },{
      title: "Total supply"
  }
]
const activities = [
  {
      icon: () => (<><BookmarkIcon /></>),
      title: "Listings"
  },{
      icon: () => (<><ShoppingCartIcon /></>),
      title: "Sales"
  },{
      icon: () => (<><ShortcutIcon /></>),
      title: "Transfers"
  },{
      icon: () => (<><PanToolIcon /></>),
      title: "Bids"
  }
]

  return (
    <RootStyle title="Components: Tabs | Minimal-UI">

      <Container maxWidth="lg">
        <Stack spacing={3}>
          <Stack spacing={3} direction={{ xs: 'column', md: 'row' }} sx={style}>
              <TabContext value={value}>
                <TabList onChange={handleChange}>
                  {SIMPLE_TAB.map((tab) => (
                    <Tab key={tab.value} icon={tab.icon} label={tab.label} value={String(tab.value)} disabled={tab.disabled} />
                  ))}
                </TabList>
                <Box
                  sx={{
                    p: 2,
                    mt: 2,
                    width: '100%',
                    borderRadius: 1,
                    bgcolor: 'grey.50012'
                  }}
                >
                    <TabPanel value='1'>
                        <Stack direction='row' spacing={2} justifyContent='center'>
                            <StyledButton
                                id='category-button'
                                aria-controls={categoryOpen ? 'category-menu' : undefined}
                                aria-haspopup="true"
                                aria-expanded={categoryOpen ? 'true' : undefined}
                                variant="outlined"
                                disableElevation
                                onClick={handleCategoryClick}
                                endIcon={<KeyboardArrowDownIcon />}
                            >
                                <Stack direction="row" alignItems="center">
                                    <img src={categories[selectedCategory].icon} alt={categories[selectedCategory].title} />
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
                                    <MenuItem onClick={handleCategoryClose} disableRipple key={index} value={index}>
                                        <img src={category.icon} alt={category.title} />
                                        {category.title}
                                    </MenuItem>
                                ))}
                            </StyledMenu>
                            <StyledButton
                                id="chain-button"
                                aria-controls={chainOpen ? 'chain-menu' : undefined}
                                aria-haspopup="true"
                                aria-expanded={chainOpen ? 'true' : undefined}
                                variant="outlined"
                                disableElevation
                                onClick={handleChainClick}
                                endIcon={<KeyboardArrowDownIcon />}
                            >
                                <Stack direction="row" alignItems="center">
                                    <img src={chains[selectedChain].icon} alt={chains[selectedChain].title} />
                                    {chains[selectedChain].title}
                                </Stack>
                            </StyledButton>
                            <StyledMenu
                                id="chain-menu"
                                MenuListProps={{
                                'aria-labelledby': 'chain-button',
                                }}
                                anchorEl={chainAnchorEl}
                                open={chainOpen}
                                onClose={handleChainClose}
                                ml={2}
                            >
                                {chains.map((chain, index) => (
                                    <MenuItem onClick={handleChainClose} disableRipple key={index} value={index}>
                                        <img src={chain.icon} alt={chain.title} />
                                        {chain.title}
                                    </MenuItem>
                                ))}
                            </StyledMenu>
                            <StyledButton
                                id='seven-days-button'
                                aria-controls={sevenDaysOpen ? 'seven-days-menu' : undefined}
                                aria-haspopup="true"
                                aria-expanded={sevenDaysOpen ? 'true' : undefined}
                                variant="outlined"
                                disableElevation
                                onClick={handleSevenDaysClick}
                                endIcon={<KeyboardArrowDownIcon />}
                            >
                                <Stack direction="row" alignItems="center">
                                    {sevenDays[selectedSevenDays].title}
                                </Stack>
                            </StyledButton>
                            <StyledMenu
                                id="seven-days-menu"
                                MenuListProps={{
                                'aria-labelledby': 'seven-days-button',
                                }}
                                anchorEl={sevenDaysAnchorEl}
                                open={sevenDaysOpen}
                                onClose={handleSevenDaysClose}
                                ml={2}
                            >
                                {sevenDays.map((sevenDay, index) => (
                                    <MenuItem onClick={handleSevenDaysClose} disableRipple key={index} value={index}>
                                        {sevenDay.title}
                                    </MenuItem>
                                ))}
                            </StyledMenu>
                        </Stack>
                        <Stack mt={4}>
                          <RankingTable />
                        </Stack>
                    </TabPanel>
                    <TabPanel value='2'>
                      <Stack direction='row' spacing={2} justifyContent='center'>
                          <StyledButton
                              id='activity-button'
                              aria-controls={activityOpen ? 'activity-menu' : undefined}
                              aria-haspopup="true"
                              aria-expanded={activityOpen ? 'true' : undefined}
                              variant="outlined"
                              disableElevation
                              onClick={handleActivityClick}
                              endIcon={<KeyboardArrowDownIcon />}
                          >
                              <Stack direction="row" alignItems="center" spacing={2}>
                                  {activities[selectedActivity].icon()}
                                  <Typography variant="p">{activities[selectedActivity].title}</Typography>
                              </Stack>
                          </StyledButton>
                          <StyledMenu
                              id="activity-menu"
                              MenuListProps={{
                              'aria-labelledby': 'activity-button',
                              }}
                              anchorEl={activityAnchorEl}
                              open={activityOpen}
                              onClose={handleActivityClose}
                          >
                              {activities.map((activity, index) => (
                                  <MenuItem onClick={handleActivityClose} disableRipple key={index} value={index}>
                                      {activity.icon()}
                                      {activity.title}
                                  </MenuItem>
                              ))}
                          </StyledMenu>
                          <StyledButton
                              aria-controls={chainOpen ? 'demo-customized-menu' : undefined}
                              aria-haspopup="true"
                              aria-expanded={chainOpen ? 'true' : undefined}
                              variant="outlined"
                              disableElevation
                              onClick={handleChainClick}
                              endIcon={<KeyboardArrowDownIcon />}
                          >
                              <Stack direction="row" alignItems="center">
                                  <img src={chains[selectedChain].icon} alt={chains[selectedChain].title} />
                                  {chains[selectedChain].title}
                              </Stack>
                          </StyledButton>
                          <StyledMenu
                              id="demo-customized-menu"
                              MenuListProps={{
                              'aria-labelledby': 'demo-customized-button',
                              }}
                              anchorEl={chainAnchorEl}
                              open={chainOpen}
                              onClose={handleChainClose}
                              ml={2}
                          >
                              {chains.map((chain, index) => (
                                  <MenuItem onClick={handleChainClose} disableRipple key={index} value={index}>
                                      <img src={chain.icon} alt={chain.title} />
                                      {chain.title}
                                  </MenuItem>
                              ))}
                          </StyledMenu>
                      </Stack>
                      <Stack mt={4}>
                        <RankingTable />
                      </Stack>
                    </TabPanel>
                </Box>
              </TabContext>
          </Stack>
        </Stack>
      </Container>
    </RootStyle>
  );
}
