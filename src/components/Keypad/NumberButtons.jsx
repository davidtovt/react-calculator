import { useContext } from 'react';

import { CalculatorContext } from '../../contexts/calculator';
import { numSeparator } from '../../utils/numFormatter';
import Button from '../Button/Button';

const NumberButtons = () => {
  const { state, dispatch, CALCULATOR_ACTION_TYPES } =
    useContext(CalculatorContext);
  const { numSystem } = state;
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

  return (
    <div className="grid grid-cols-3">
      <Button mode="digit" handleClick={setOperand} disabled={numSystem < 16}>
        d
      </Button>
      <Button mode="digit" handleClick={setOperand} disabled={numSystem < 16}>
        e
      </Button>
      <Button mode="digit" handleClick={setOperand} disabled={numSystem < 16}>
        f
      </Button>
      <Button mode="digit" handleClick={setOperand} disabled={numSystem < 16}>
        a
      </Button>
      <Button mode="digit" handleClick={setOperand} disabled={numSystem < 16}>
        b
      </Button>
      <Button mode="digit" handleClick={setOperand} disabled={numSystem < 16}>
        c
      </Button>
      <Button mode="digit" handleClick={setOperand} disabled={numSystem < 10}>
        7
      </Button>
      <Button mode="digit" handleClick={setOperand} disabled={numSystem < 10}>
        8
      </Button>
      <Button mode="digit" handleClick={setOperand} disabled={numSystem < 10}>
        9
      </Button>
      <Button mode="digit" handleClick={setOperand} disabled={numSystem < 10}>
        4
      </Button>
      <Button mode="digit" handleClick={setOperand} disabled={numSystem < 10}>
        5
      </Button>
      <Button mode="digit" handleClick={setOperand} disabled={numSystem < 10}>
        6
      </Button>
      <Button mode="digit" handleClick={setOperand} disabled={numSystem < 2}>
        1
      </Button>
      <Button mode="digit" handleClick={setOperand} disabled={numSystem < 10}>
        2
      </Button>
      <Button mode="digit" handleClick={setOperand} disabled={numSystem < 10}>
        3
      </Button>
      <Button mode="digit" handleClick={setOperand} disabled={numSystem < 2}>
        0
      </Button>
      <Button
        mode="digit"
        handleClick={(e) => setOperand(e, decimalSeparator)}
        disabled={numSystem !== 10}
      >
        {decimalSeparator}
      </Button>
      <Button mode="digit" handleClick={toggleSigns}>
        +/-
      </Button>
    </div>
  );
};

export default NumberButtons;
