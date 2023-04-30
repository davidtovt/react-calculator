import { useContext } from 'react';

import { CalculatorContext } from '../../contexts/calculator';
import Display from '../Display/Display';
import Switcher from '../Switcher/Switcher';
import ClearButtons from '../Keypad/ClearButtons';
import NumberButtons from '../Keypad/NumberButtons';
import MemoryButtons from '../Keypad/MemoryButtons';
import OperatorButtons from '../Keypad/OperatorButtons';

import './Calculator.scss';

const Calculator = () => {
  const { dispatch, CALCULATOR_ACTION_TYPES } = useContext(CalculatorContext);

  const numSystemChange = (e) => {
    dispatch({
      type: CALCULATOR_ACTION_TYPES.SET_NUM_SYSTEM,
      payload: parseInt(e.target.value),
    });
  };

  return (
    <div className="calculator">
      <Display />

      <div className="grid grid-cols-5 align-items-center">
        <div className="col-span-2">
          <Switcher
            name="numeral-system"
            defaultValue="10"
            options={[
              { value: 2, label: 'BIN' },
              { value: 10, label: 'DEC' },
              { value: 16, label: 'HEX' },
            ]}
            onChange={numSystemChange}
          />
        </div>

        <div className="col-span-3">
          <ClearButtons />
        </div>
      </div>

      <div className="grid grid-cols-5">
        <div className="col-span-3">
          <NumberButtons />
        </div>

        <div className="col-span-2">
          <MemoryButtons />

          <div className="grid grid-cols-2">
            <OperatorButtons />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
