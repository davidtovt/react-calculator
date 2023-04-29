import { formatToDisplay } from '../../utils/helpers';

import './Display.scss';

const Display = ({ state }) => {
  const { prevOperand, operator, currOperand, calculation, error, memory } =
    state;
  let equationValue = '';
  let resultValue = '';

  if (prevOperand.number) {
    equationValue += formatToDisplay(prevOperand);

    if (operator) {
      equationValue += ' ' + operator;

      if (currOperand.number && calculation) {
        equationValue += ' ' + formatToDisplay(currOperand) + ' =';
      }
    }
  }

  if (!error) {
    resultValue = calculation
      ? formatToDisplay({ number: calculation }, true)
      : formatToDisplay(currOperand, true);
  } else {
    resultValue = error;
  }

  return (
    <div className="display">
      <div className="d-flex justify-between mb-05">
        <span>Memory:</span>
        <span className="text-end">{memory || '-'}</span>
      </div>
      <input type="text" defaultValue={equationValue} />
      <input type="text" value={resultValue} readOnly />
    </div>
  );
};

export default Display;
