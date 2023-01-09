import { Box } from 'components/Box/Box';
import heroBg from 'images/hero/hero.jpg';
import { Container } from 'constants/GlobalStyle';
import { Overlay, HeroTitle, HeroButton } from './Hero.styled';

const Hero = () => {
  return (
    <Overlay bgImg={heroBg}>
      <Container>
        <HeroTitle>
          <Box as="span">Bring</Box> <br />
          <Box as="span" pl={6}>
            yourself
          </Box>{' '}
          <br />
          <Box></Box>
          <Box as="span" fontSize={[9, 9, 11, 11]}>
            to a
          </Box>{' '}
          world <br />
          <Box pl={5}>
            <Box as="span" fontSize={[9, 9, 11, 11]}>
              of
            </Box>{' '}
            tastes!
          </Box>
        </HeroTitle>
        <HeroButton type="button">Choose a cocktail</HeroButton>
      </Container>
    </Overlay>
  );
};

export default Hero;
