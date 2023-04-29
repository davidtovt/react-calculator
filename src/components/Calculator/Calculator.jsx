import { useContext } from 'react';

import { CalculatorContext } from '../../contexts/calculator';
import { numSeparator } from '../../utils/helpers';
import Display from '../Display/Display';
import Button from '../Button/Button';
import Switcher from '../Switcher/Switcher';

import './Calculator.scss';

const Calculator = () => {
  const { state, dispatch, CALCULATOR_ACTION_TYPES } =
    useContext(CalculatorContext);
  const { decimalSeparator } = numSeparator();

  const setOperand = (e, operand) => {
    dispatch({
      type: CALCULATOR_ACTION_TYPES.SET_OPERAND,
      payload: operand ? operand : e.target.innerHTML,
    });
  };

  const toggleSigns = () => {
    dispatch({
      type: CALCULATOR_ACTION_TYPES.TOGGLE_SIGN,
    });
  };

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

  const clearAll = () => {
    dispatch({
      type: CALCULATOR_ACTION_TYPES.CLEAR_ALL,
    });
  };

  const clearEntered = () => {
    dispatch({
      type: CALCULATOR_ACTION_TYPES.CLEAR_ENTERED,
    });
  };

  const deleteDigit = () => {
    dispatch({
      type: CALCULATOR_ACTION_TYPES.DELETE_DIGIT,
    });
  };

  const memoryClear = () => {
    dispatch({
      type: CALCULATOR_ACTION_TYPES.MEMORY_CLEAR,
    });
  };

  const memoryRead = () => {
    dispatch({
      type: CALCULATOR_ACTION_TYPES.MEMORY_READ,
    });
  };

  const memoryChange = (direction) => {
    dispatch({
      type: CALCULATOR_ACTION_TYPES.MEMORY_CHANGE,
      payload: direction,
    });
  };

  return (
    <div className="calculator">
      <Display />

      <div className="grid grid-cols-5 align-items-center">
        <div className="col-span-2">
          <Switcher />
        </div>

        <div className="col-span-3">
          <div className="grid grid-cols-3">
            <Button mode="clear" handleClick={clearAll}>
              CA
            </Button>
            <Button mode="clear" handleClick={clearEntered}>
              CE
            </Button>
            <Button mode="clear" handleClick={deleteDigit}>
              DEL
            </Button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-5">
        <div className="col-span-3">
          <div className="grid grid-cols-3">
            <Button mode="digit" handleClick={setOperand}>
              D
            </Button>
            <Button mode="digit" handleClick={setOperand}>
              E
            </Button>
            <Button mode="digit" handleClick={setOperand}>
              F
            </Button>
            <Button mode="digit" handleClick={setOperand}>
              A
            </Button>
            <Button mode="digit" handleClick={setOperand}>
              B
            </Button>
            <Button mode="digit" handleClick={setOperand}>
              C
            </Button>
            <Button mode="digit" handleClick={setOperand}>
              7
            </Button>
            <Button mode="digit" handleClick={setOperand}>
              8
            </Button>
            <Button mode="digit" handleClick={setOperand}>
              9
            </Button>
            <Button mode="digit" handleClick={setOperand}>
              4
            </Button>
            <Button mode="digit" handleClick={setOperand}>
              5
            </Button>
            <Button mode="digit" handleClick={setOperand}>
              6
            </Button>
            <Button mode="digit" handleClick={setOperand}>
              1
            </Button>
            <Button mode="digit" handleClick={setOperand}>
              2
            </Button>
            <Button mode="digit" handleClick={setOperand}>
              3
            </Button>
            <Button mode="digit" handleClick={setOperand}>
              0
            </Button>
            <Button
              mode="digit"
              handleClick={(e) => setOperand(e, decimalSeparator)}
            >
              {decimalSeparator}
            </Button>
            <Button mode="digit" handleClick={toggleSigns}>
              +/-
            </Button>
          </div>
        </div>

        <div className="col-span-2">
          <div className="grid grid-cols-2">
            <Button
              mode="memory"
              handleClick={memoryClear}
              disabled={!state.memory}
            >
              MC
            </Button>
            <Button
              mode="memory"
              handleClick={memoryRead}
              disabled={!state.memory}
            >
              MR
            </Button>
            <Button mode="memory" handleClick={() => memoryChange('+')}>
              M+
            </Button>
            <Button mode="memory" handleClick={() => memoryChange('-')}>
              M-
            </Button>
          </div>

          <div className="grid grid-cols-2">
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
