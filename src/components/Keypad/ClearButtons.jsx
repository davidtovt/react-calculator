import { useContext } from 'react';
import { useTranslation } from 'react-i18next';

import { CalculatorContext } from '../../contexts/calculator';
import Button from '../Button/Button';

const ClearButtons = () => {
  const { t } = useTranslation();

  const { dispatch, CALCULATOR_ACTION_TYPES } = useContext(CalculatorContext);

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

  return (
    <div className="grid grid-cols-3">
      <Button mode="clear" handleClick={clearAll} title={t('Clear all')}>
        CA
      </Button>
      <Button
        mode="clear"
        handleClick={clearEntered}
        title={t('Clear entered')}
      >
        CE
      </Button>
      <Button mode="clear" handleClick={deleteDigit} title={t('Delete digit')}>
        DEL
      </Button>
    </div>
  );
};

export default ClearButtons;
