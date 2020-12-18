import PropTypes from 'prop-types';

function childrenOf(...types) {
  const fieldType = PropTypes.shape({
    type: PropTypes.oneOf(types).isRequired,
  });

  return PropTypes.oneOfType([
    fieldType,
    PropTypes.arrayOf(fieldType),
  ]);
}

export default {
  childrenOf,
};
