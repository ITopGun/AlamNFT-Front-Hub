// material
import { experimentalStyled as styled } from '@material-ui/core/styles';
// components
import Page from '../components/Page';
import {
  LandingHero,
  LandingMinimal,
  LandingHugePackElements,
  LandingCategoryCarousel,
  LandingSolana,
  LandingTopCollections,
  LandingTrending,
  LandingResources,
  LandingMeet
} from '../components/_external-pages/landing';

// ----------------------------------------------------------------------

const RootStyle = styled(Page)({
  height: '100%'
});

const ContentStyle = styled('div')(({ theme }) => ({
  overflow: 'hidden',
  position: 'relative',
  backgroundColor: theme.palette.background.default
}));

// ----------------------------------------------------------------------

export default function LandingPage() {
  return (
    <RootStyle title="The starting point for your next project | Minimal-UI" id="move_top">
      <ContentStyle>
        <LandingHero />
        <LandingSolana />
        <LandingCategoryCarousel />
        <LandingTopCollections />
        <LandingTrending />
        <LandingHugePackElements />
        <LandingResources />
        <LandingMinimal />
        <LandingMeet />
      </ContentStyle>
    </RootStyle>
  );
}
