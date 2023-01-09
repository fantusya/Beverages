import React from 'react';
import PropTypes from 'prop-types';
import { Box } from 'components/Box/Box';
import CocktailItem from 'components/CocktailItem';

const CocktailsList = ({ cocktailsArray }) => {
  return (
    <Box
      as="ul"
      display="flex"
      flexWrap="wrap"
      justifyContent="center"
      gridGap={5}
    >
      {cocktailsArray.map(cocktail => (
        <CocktailItem key={cocktail.id} cocktail={cocktail} />
      ))}
    </Box>
  );
};

export default CocktailsList;

CocktailsList.propTypes = {
  cocktailsArray: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ),
};
