import { CALCULATOR_INITIAL_STATE } from '../hooks/useCalculator';
import { stringToFloat } from '../utils/numFormatter';

/**
 * Toogle plus and minus before number
 */
export const toggleNumSign = (number) => {
  const absNumber = Math.abs(stringToFloat(number.toString()));

  return number.toString().includes('-') ? absNumber : -absNumber;
};

/**
 * Decimal to other number system
 */
export const decimalToOtherSystem = (number, numSystem) => {
  if(number) {
    return parseFloat(number).toString(numSystem);
  }

  return number;
}

/**
 * Set error for display
 */
export const setError = (state, error) => {
  state = CALCULATOR_INITIAL_STATE;
  return { ...state, error };
};
