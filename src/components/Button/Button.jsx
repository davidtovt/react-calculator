import './Button.scss';

const Button = ({ children, handleClick, mode, ...attrs }) => {
  return (
    <button className="btn" type="button" onClick={handleClick} {...attrs}>{children}</button>
  );
};

export default Button;