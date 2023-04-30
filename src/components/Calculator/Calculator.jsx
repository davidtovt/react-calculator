import Display from '../Display/Display';
import Keypad from '../Keypad/Keypad';

import { CalculatorWrapper } from "./Calculator.styled";

const Calculator = () => {
  return (
    <CalculatorWrapper>
      <Display />
      <Keypad />
    </CalculatorWrapper>
  );
};

export default Calculator;
