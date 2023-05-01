import { useRef } from 'react';

import Display from '../Display/Display';
import Keypad from '../Keypad/Keypad';
import useMousePosition from '../../hooks/useMousePosition';

import { CalculatorWrapper, Shadow } from './Calculator.styled';

const Calculator = () => {
  const calculator = useRef();
  const position = useMousePosition(calculator);

  return (
    <CalculatorWrapper ref={calculator}>
      <Display />
      <Keypad />
      <Shadow
        style={{
          top: position.top - position.offsetTop,
          left: position.left - position.offsetLeft,
        }}
      />
    </CalculatorWrapper>
  );
};

export default Calculator;
