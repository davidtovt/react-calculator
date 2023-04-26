import './Button.scss';

const Button = ({ children, handleClick }) => {
  return (
    <button className="btn" type="button" onClick={handleClick}>{children}</button>
  );
};

export default Button;