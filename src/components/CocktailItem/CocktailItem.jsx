import React from 'react';
// import { Box } from 'components/Box/Box';
import PropTypes from 'prop-types';
import {
  CocktailCard,
  ImgContainer,
  CocktailImg,
  CocktailName,
  CocktailBack,
} from './CocktailItem.styled';

const CocktailItem = ({ cocktail: { img, composition, name, fact } }) => {
  return (
    <CocktailCard>
      <ImgContainer>
        <CocktailImg src={img} alt={name} />
        <CocktailName>{name}</CocktailName>
      </ImgContainer>

      <CocktailBack>
        <ul>
          <li>
            <p>
              Composition: <span>{composition}</span>
            </p>
          </li>
          <li>
            <p>
              <span>Did you know that...</span>
              {/* <br /> */}
              <span>{fact}</span>
            </p>
          </li>
        </ul>
      </CocktailBack>
    </CocktailCard>
  );
};

export default CocktailItem;

CocktailItem.propTypes = {
  name: PropTypes.string,
  fact: PropTypes.string,
  composition: PropTypes.string,
  img: PropTypes.string,
};
