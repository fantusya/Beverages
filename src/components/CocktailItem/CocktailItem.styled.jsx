import styled from 'styled-components';
// import { device } from 'constants/breakpoints';

export const CocktailImg = styled.img`
  width: 100%;
  height: 100%;
  transition: 1s;
  backface-visibility: hidden;
  border-radius: ${p => p.theme.radii.moreRounded};
`;

export const CocktailBack = styled.div`
  padding: 30px 20px;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: ${p => p.theme.radii.moreRounded};
  backface-visibility: hidden;
  background-color: #4f8465;
  background-image: linear-gradient(120deg, #4f8465 10%, #fffda8 100%);
  /* linear-gradient(192deg,#cf000e 40%,rgb(4 0 0 / 57%) 100%) */
  /* linear-gradient(175deg,#80ddff 0%,#231049 100%) */

  transform: rotateY(180deg);
  transition: 1s;
`;

export const CocktailCard = styled.li`
  position: relative;
  perspective: 1000px;

  border-radius: ${p => p.theme.radii.moreRounded};

  :hover ${CocktailImg}, :focus ${CocktailImg} {
    transform: rotateY(180deg);
  }

  :hover ${CocktailBack}, :focus ${CocktailBack} {
    transform: rotateY(360deg);
  }
`;

export const ImgContainer = styled.div`
  position: relative;
`;

export const CocktailName = styled.p`
  position: absolute;
  bottom: 0;
  left: 0;
  font-family: 'Quicksand', sans-serif;
  font-size: ${p => p.theme.fontSizes[4]};
  color: ${p => p.theme.colors.hero};
  background-color: ${p => p.theme.colors.buttonBg};
`;
