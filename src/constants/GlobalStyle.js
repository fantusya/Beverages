import styled, { createGlobalStyle } from 'styled-components';
import 'modern-normalize';
import { device } from './breakpoints';
import img from 'images/img5.jpg';

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: 'Josefin Sans', 'Arial', sans-serif;
    letter-spacing: ${p => p.theme.letterSpacing.normal};
    color: ${p => p.theme.colors.mainText};
  }

  main {
background-image: linear-gradient(to left,#decba4e0,#3e5151db), url(${img});
  background-attachment: fixed;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }

  h1,h2,h3,h4,h5,h6,p {
    margin: 0;
  }

  ul, ol {
    list-style: none;
    margin: 0;
    padding: 0;
  }
`;

export const Section = styled.div`
  padding-top: ${p => p.theme.space[5]}px;
`;

export const Container = styled.div`
  margin-left: auto;
  margin-right: auto;

  padding-left: ${p => p.theme.space[4]}px;
  padding-right: ${p => p.theme.space[4]}px;

  @media ${device.miniMobile} {
    width: 320px;
  }
  @media ${device.mobile} {
    width: 480px;
  }
  @media ${device.tablet} {
    width: 768px;
  }
  @media ${device.desktop} {
    width: 1200px;
    padding-left: ${p => p.theme.space[5]}px;
    padding-right: ${p => p.theme.space[5]}px;
  }
`;

export const SectionTitle = styled.h2`
  margin-bottom: ${p => p.theme.space[5]}px;
  padding: ${p => p.theme.space[2]}px;

  font-family: 'Quicksand', sans-serif;
  font-size: ${p => p.theme.fontSizes[8]};
  font-weight: ${p => p.theme.fontWeights.normal};
  line-height: ${p => p.theme.lineHeights.heading};
  text-align: center;

  border-radius: ${p => p.theme.radii.rounded};

  color: ${p => p.theme.colors.sectionTitle};
  text-shadow: -3px 1px 4px rgb(0 35 9 / 55%);

  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(4px);
`;
