import 'react';
import PropTypes from 'prop-types';

const Button = ({ label, onClick, type = 'button' }) => {
  return (
    <button type={type} onClick={onClick} className="btn">
      {label}
    </button>
  );
};
Button.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  type: PropTypes.string,
};

export default Button;
