import { useContext } from 'react';
import { useTranslation } from 'react-i18next';

import { CalculatorContext } from '../../contexts/calculator';
import Button from '../Button/Button';

const MemoryButtons = () => {
  const { t } = useTranslation();

  const { state, dispatch, CALCULATOR_ACTION_TYPES } =
    useContext(CalculatorContext);

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
    <div className="grid grid-cols-2">
      <Button
        mode="memory"
        handleClick={memoryClear}
        disabled={!state.memory}
        title={t('Memory clear')}
      >
        MC
      </Button>
      <Button
        mode="memory"
        handleClick={memoryRead}
        disabled={!state.memory}
        title={t('Memory read')}
      >
        MR
      </Button>
      <Button
        mode="memory"
        handleClick={() => memoryChange('+')}
        title={t('Add to memory')}
      >
        M+
      </Button>
      <Button
        mode="memory"
        handleClick={() => memoryChange('-')}
        title={t('Remove from memory')}
      >
        M-
      </Button>
    </div>
  );
};

export default MemoryButtons;
