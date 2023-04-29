import useCalculator, { CALCULATOR_ACTION_TYPES } from '../hooks/useCalculator';

import { createContext } from 'react';

export const CalculatorContext = createContext({});

const CalculatorProvider = ({ children }) => {
  const [state, dispatch] = useCalculator();

  return (
    <CalculatorContext.Provider
      value={{ state, dispatch, CALCULATOR_ACTION_TYPES }}
    >
      {children}
    </CalculatorContext.Provider>
  );
};

export default CalculatorProvider;
