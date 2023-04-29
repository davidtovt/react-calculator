import { useContext } from 'react';
import { useTranslation } from 'react-i18next';

import { CalculatorContext } from '../../contexts/calculator';
import { formatToDisplay } from '../../utils/helpers';

import './Display.scss';

const Display = () => {
  const { t } = useTranslation();
  const {
    state: { prevOperand, operator, currOperand, calculation, error, memory },
  } = useContext(CalculatorContext);
  
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
        <span>{t('Memory:')}</span>
        <span className="text-end">{memory || '-'}</span>
      </div>
      <input type="text" defaultValue={equationValue} />
      <input type="text" value={resultValue} readOnly />
    </div>
  );
};

export default Display;
