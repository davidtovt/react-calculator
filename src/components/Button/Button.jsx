import { Btn } from "./Button.styled";

const Button = ({ children, handleClick, group, ...attrs }) => {
  return (
    <Btn
      group={group}
      type="button"
      onClick={handleClick}
      {...attrs}
    >
      <span>{children}</span>
    </Btn>
  );
};

export default Button;
