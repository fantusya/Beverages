import styled from 'styled-components';
// import { device } from 'constants/breakpoints';

export const Overlay = styled.section`
  margin-left: auto;
  margin-right: auto;

  max-width: 564px;
  width: 100%;
  height: 700px;

  background-image: linear-gradient(
      to left,
      rgba(60, 59, 63, 0.4),
      rgba(96, 92, 60, 0.4)
    ),
    url(${props => props.bgImg});

  background-color: ${p => p.theme.colors.fallbackHero};
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;

  /* @include mq(new-hero) {
    background-image: linear-gradient(
        to left,
        rgba(60, 59, 63, 0.4),
        rgba(96, 92, 60, 0.5)
      ),
      url('images/hero/big-hero.jpg');
    max-width: 6000px;
  } */
`;

export const HeroTitle = styled.h1`
  margin-bottom: ${p => p.theme.space[6]}px;
  padding-top: ${p => p.theme.space[3]}px;

  font-family: 'Cormorant Garamond', serif;
  font-size: ${p => p.theme.fontSizes[12]};
  font-style: italic;
  font-weight: ${p => p.theme.fontWeights.normal};
  line-height: ${p => p.theme.lineHeights.hero};
  /* letter-spacing: ${p => p.theme.letterSpacing.normal}; */

  color: ${p => p.theme.colors.hero};
`;

export const HeroButton = styled.button`
  margin-left: auto;
  margin-right: auto;
  padding: ${p => p.theme.space[4]}px;

  display: block;

  font-family: 'Quicksand', sans-serif;
  font-size: ${p => p.theme.fontSizes[4]};
  line-height: inherit;
  letter-spacing: inherit;

  border: ${p => p.theme.borders.normal} ${p => p.theme.colors.hero};
  border-radius: 30px;

  color: ${p => p.theme.colors.hero};
  background-color: ${p => p.theme.colors.buttonBg};

  &:hover,
  &:focus {
    background-color: #8fbc8b;
    color: ${p => p.theme.colors.hero};
    border: 1px solid transparent;
  }
`;
