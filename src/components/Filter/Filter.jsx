import PropTypes from 'prop-types';
import { Box } from 'components/Box/Box';
import { FilterInput } from './Filter.styled';

const Filter = ({ value, onChange }) => {
  return (
    <Box as="form" mb={5}>
      <label>
        {/* <FilterTitle>Find cocktail by name</FilterTitle> */}
        <FilterInput type="text" value={value} onChange={onChange} />
      </label>
    </Box>
  );
};

export default Filter;

Filter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};
