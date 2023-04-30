import { useContext } from 'react';

import { CalculatorContext } from '../../contexts/calculator';
import { numSeparator } from '../../utils/numFormatter';
import Button from '../Button/Button';

const DigitButtons = () => {
  const { state, dispatch, CALCULATOR_ACTION_TYPES } =
    useContext(CalculatorContext);
  const { numSystem } = state;
  const { decimalSeparator } = numSeparator();

  const setOperand = (e, operand) => {
    dispatch({
      type: CALCULATOR_ACTION_TYPES.SET_OPERAND,
      payload: operand ? operand : e.target.innerText,
    });
  };

  const toggleSigns = () => {
    dispatch({
      type: CALCULATOR_ACTION_TYPES.TOGGLE_SIGN,
    });
  };

  return (
    <div className="grid grid-cols-3">
      <Button
        group="digit"
        handleClick={setOperand}
        disabled={numSystem < 16}
      >
        d
      </Button>
      <Button
        group="digit"
        handleClick={setOperand}
        disabled={numSystem < 16}
      >
        e
      </Button>
      <Button
        group="digit"
        handleClick={setOperand}
        disabled={numSystem < 16}
      >
        f
      </Button>
      <Button
        group="digit"
        handleClick={setOperand}
        disabled={numSystem < 16}
      >
        a
      </Button>
      <Button
        group="digit"
        handleClick={setOperand}
        disabled={numSystem < 16}
      >
        b
      </Button>
      <Button
        group="digit"
        handleClick={setOperand}
        disabled={numSystem < 16}
      >
        c
      </Button>
      <Button
        group="digit"
        handleClick={setOperand}
        disabled={numSystem < 10}
      >
        7
      </Button>
      <Button
        group="digit"
        handleClick={setOperand}
        disabled={numSystem < 10}
      >
        8
      </Button>
      <Button
        group="digit"
        handleClick={setOperand}
        disabled={numSystem < 10}
      >
        9
      </Button>
      <Button
        group="digit"
        handleClick={setOperand}
        disabled={numSystem < 10}
      >
        4
      </Button>
      <Button
        group="digit"
        handleClick={setOperand}
        disabled={numSystem < 10}
      >
        5
      </Button>
      <Button
        group="digit"
        handleClick={setOperand}
        disabled={numSystem < 10}
      >
        6
      </Button>
      <Button
        group="digit"
        handleClick={setOperand}
        disabled={numSystem < 2}
      >
        1
      </Button>
      <Button
        group="digit"
        handleClick={setOperand}
        disabled={numSystem < 10}
      >
        2
      </Button>
      <Button
        group="digit"
        handleClick={setOperand}
        disabled={numSystem < 10}
      >
        3
      </Button>
      <Button
        group="digit"
        handleClick={setOperand}
        disabled={numSystem < 2}
      >
        0
      </Button>
      <Button
        group="digit"
        handleClick={(e) => setOperand(e, decimalSeparator)}
        disabled={numSystem !== 10}
      >
        {decimalSeparator}
      </Button>
      <Button group="digit" handleClick={toggleSigns}>
        +/-
      </Button>
    </div>
  );
};

export default DigitButtons;
