import PropTypes from 'prop-types';
import { Icon } from '@iconify/react';
import arrowLeftFill from '@iconify/icons-eva/arrow-left-fill';
import arrowRightFill from '@iconify/icons-eva/arrow-right-fill';
// material
import { useTheme, experimentalStyled as styled } from '@material-ui/core/styles';
//
import { MIconButton } from '../../@material-extend';

// ----------------------------------------------------------------------

const SIZE = 40;

const RootStyle = styled('div')(() => ({
  top: 0,
  bottom: 0,
  zIndex: 19,
  height: SIZE,
  width: 'calc(100% + 40px)',
  margin: 'auto',
  marginLeft: '-20px',
  display: 'flex',
  position: 'absolute',
  padding: 0,
  justifyContent: 'space-between'
}));

const ArrowStyle = styled(MIconButton)(({ theme }) => ({
  width: SIZE,
  height: SIZE,
  opacity: 1,
  display: 'flex',
  cursor: 'pointer',
  alignItems: 'center',
  justifyContent: 'center',
  color: theme.palette.grey[500],
  background: theme.palette.common.white,
  borderRadius: '50%',
  '&:hover': {
    opacity: 1,
    background: theme.palette.common.white,
    color: theme.palette.grey[900]
  }
}));

// ----------------------------------------------------------------------

CarouselControlsArrowsBasic2.propTypes = {
  onNext: PropTypes.func,
  onPrevious: PropTypes.func
};

export default function CarouselControlsArrowsBasic2({ onNext, onPrevious, ...other }) {
  const theme = useTheme();
  const isRTL = theme.direction === 'rtl';

  return (
    <RootStyle {...other}>
      <ArrowStyle size="small" onClick={onPrevious}>
        <Icon width={20} height={20} icon={isRTL ? arrowRightFill : arrowLeftFill} />
      </ArrowStyle>

      <ArrowStyle size="small" onClick={onNext}>
        <Icon width={20} height={20} icon={isRTL ? arrowLeftFill : arrowRightFill} />
      </ArrowStyle>
    </RootStyle>
  );
}
