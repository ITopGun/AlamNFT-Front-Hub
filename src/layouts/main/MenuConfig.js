import { Icon } from '@iconify/react';
import homeFill from '@iconify/icons-eva/home-fill';
import roundGrain from '@iconify/icons-ic/round-grain';
import MenuOpenOutlinedIcon from '@material-ui/icons/MenuOpenOutlined';
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';

// ----------------------------------------------------------------------

const ICON_SIZE = {
  width: 22,
  height: 22
};

const menuConfig = [
  {
    title: 'Home',
    icon: <Icon icon={homeFill} {...ICON_SIZE} />,
    path: '/'
  },
  {
    title: 'Stats',
    icon: <Icon icon={roundGrain} {...ICON_SIZE} />,
    path: '/stats'
  },
  // {
  //   title: 'Search',
  //   path: '/search',
  //   icon: <SearchIcon />
  // },
  {
    title: 'Profile',
    icon: <AccountCircleOutlinedIcon />,
    path: '/profile'
  },
  {
    title: 'More',
    icon: <MenuOpenOutlinedIcon />,
    path: '#'
    // ,
    // children: [
    //   {
    //     items: [
    //       { title: 'About', path: PATH_PAGE.about },
    //       { title: 'Blog', path: '#' },
    //       { title: 'Help Center', path: '#' }
    //     ]
    //   }
    // ]
  }
];

export default menuConfig;
