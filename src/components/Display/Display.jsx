import { useContext } from 'react';
import { useTranslation } from 'react-i18next';

import { CalculatorContext } from '../../contexts/calculator';
import { formatToDisplay } from '../../utils/numFormatter';

import './Display.scss';

const Display = () => {
  const { t } = useTranslation();
  const {
    state: {
      numSystem,
      prevOperand,
      operator,
      currOperand,
      calculation,
      error,
      memory,
    },
  } = useContext(CalculatorContext);

  let equationValue = '';
  let resultValue = '';

  if (prevOperand.number) {
    equationValue += formatToDisplay(prevOperand, numSystem);

    if (operator) {
      equationValue += ' ' + operator;

      if (currOperand.number && calculation) {
        equationValue += ' ' + formatToDisplay(currOperand, numSystem) + ' =';
      }
    }
  }

  if (!error) {
    resultValue = calculation
      ? formatToDisplay({ number: calculation }, numSystem, true)
      : formatToDisplay(currOperand, numSystem, true);
  } else {
    resultValue = error;
  }

  return (
    <div className="display">
      <div className="d-flex justify-between mb-05">
        <span>{t('Memory:')}</span>
        <span className="text-end">
          {memory ? formatToDisplay({ number: memory }, numSystem) : t('empty')}
        </span>
      </div>
      <input type="text" defaultValue={equationValue} />
      <input type="text" value={resultValue} readOnly />
    </div>
  );
};

export default Display;
