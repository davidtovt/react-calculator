import { useContext } from 'react';
import { useTranslation } from 'react-i18next';

import { CalculatorContext } from '../../contexts/calculator';
import { formatToDisplay } from '../../utils/numFormatter';

import {
  DisplayWrapper,
  Memory,
  MemorySing,
  EquationInput,
  NumberInput,
} from './Display.styled.jsx';

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
    <DisplayWrapper>
      <Memory>
        <span>{t('Memory:')}</span>
        <span className="text-end">
          {memory ? formatToDisplay({ number: memory }, numSystem) : ''}
        </span>
      </Memory>
      <EquationInput type="text" defaultValue={equationValue} />
      {memory ? <MemorySing>M</MemorySing> : ''}
      <NumberInput type="text" value={resultValue} placeholder="0" readOnly />
    </DisplayWrapper>
  );
};

export default Display;
