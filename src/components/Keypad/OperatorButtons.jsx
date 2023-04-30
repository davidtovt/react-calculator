import { useContext } from 'react';

import { CalculatorContext } from '../../contexts/calculator';
import Button from '../Button/Button';

const OperatorButtons = () => {
  const { dispatch, CALCULATOR_ACTION_TYPES } =
    useContext(CalculatorContext);

  const setOperator = (e, operator) => {
    dispatch({
      type: CALCULATOR_ACTION_TYPES.SET_OPERATOR,
      payload: operator ? operator : e.target.innerHTML,
    });
  };

  const calculate = () => {
    dispatch({
      type: CALCULATOR_ACTION_TYPES.SET_CALCULATION,
    });
  };

  const unaryCalculate = (e) => {
    dispatch({
      type: CALCULATOR_ACTION_TYPES.SET_UNARY_CALCULATION,
      payload: e.target.innerHTML,
    });
  };

  const calculatePercentage = () => {
    dispatch({
      type: CALCULATOR_ACTION_TYPES.SET_PERCENTAGE_CALCULATION,
    });
  };

  return (
    <>
      <div>
        <Button mode="operator" handleClick={setOperator}>
          ÷
        </Button>
        <Button mode="operator" handleClick={setOperator}>
          ×
        </Button>
        <Button mode="operator" handleClick={setOperator}>
          -
        </Button>
        <Button mode="operator" handleClick={setOperator}>
          +
        </Button>
      </div>

      <div>
        <Button mode="operator" handleClick={calculatePercentage}>
          %
        </Button>
        <Button mode="operator" handleClick={unaryCalculate}>
          √
        </Button>
        <Button mode="operator" handleClick={setOperator}>
          ^
        </Button>
        <Button mode="operator" handleClick={calculate}>
          =
        </Button>
      </div>
    </>
  );
};

export default OperatorButtons;
