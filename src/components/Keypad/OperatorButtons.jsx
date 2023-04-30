import { useContext } from 'react';

import { CalculatorContext } from '../../contexts/calculator';
import Button from '../Button/Button';

const OperatorButtons = () => {
  const { dispatch, CALCULATOR_ACTION_TYPES } = useContext(CalculatorContext);

  const setOperator = (e, operator) => {
    dispatch({
      type: CALCULATOR_ACTION_TYPES.SET_OPERATOR,
      payload: operator ? operator : e.target.innerText,
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
      payload: e.target.innerText,
    });
  };

  const calculatePercentage = () => {
    dispatch({
      type: CALCULATOR_ACTION_TYPES.SET_PERCENTAGE_CALCULATION,
    });
  };

  return (
    <>
      <div className="grid">
        <Button group="operator" handleClick={setOperator}>
          ÷
        </Button>
        <Button group="operator" handleClick={setOperator}>
          ×
        </Button>
        <Button group="operator" handleClick={setOperator}>
          -
        </Button>
        <Button group="operator" handleClick={setOperator}>
          +
        </Button>
      </div>

      <div className="grid">
        <Button group="operator" handleClick={calculatePercentage}>
          %
        </Button>
        <Button group="operator" handleClick={unaryCalculate}>
          √
        </Button>
        <Button group="operator" handleClick={setOperator}>
          ^
        </Button>
        <Button group="operator" equal handleClick={calculate}>
          =
        </Button>
      </div>
    </>
  );
};

export default OperatorButtons;
