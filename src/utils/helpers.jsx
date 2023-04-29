import getNumSeparator from '../i18n';
import { CALCULATOR_INITIAL_STATE } from '../reducers/calculatorReducer';

/**
 * Convert string number to float
 */
export const formatFloat = (number) => {
  // Add zero if number is undefined or decimal separator
  if (typeof number === 'undefined' || number === getNumSeparator('decimal')) {
    return 0;
  }

  return parseFloat(
    number
      .toString()
      .replace(getNumSeparator('thousand'), '')
      .replace(getNumSeparator('decimal'), '.')
  );
};

/**
 * Convert operand to string for display
 */
export const formatToDisplay = (operand, typing = false) => {
  const { before, number, after } = operand;
  let integer = null;
  let decimal = null;
  let result = '';
  let digitCount = 1;

  // Prevent format on empty number
  if (number === '') {
    return number;
  }

  // Get integer from number
  integer = formatFloat(number).toString().split('.')[0];

  // Separate thousand
  for (let i = integer.length - 1; i >= 0; i--) {
    result = integer.toString()[i] + result;
    if (digitCount % 3 === 0 && digitCount !== 0 && i !== 0) {
      result = getNumSeparator('thousand') + result;
    }
    digitCount++;
  }

  // Get decimal from number
  decimal = number
    .toString()
    .replace(getNumSeparator('decimal'), '.')
    .split('.')[1];

  // Add decimal on typing and there is decimal or the decimal is 0
  if (
    (typing || parseInt(decimal) > 0) &&
    (number.toString().slice(-1) === getNumSeparator('decimal') ||
      (typeof decimal !== 'undefined' && decimal.length > 0))
  ) {
    result += getNumSeparator('decimal') + decimal;
  }

  // Add content before number
  if (before) {
    result = before + result;
  }

  // Add content after number
  if (after) {
    result = result + after;
  }

  return result;
};

/**
 * Toogle plus and minus before number
 */
export const toggleNumSign = (number) => {
  const absNumber = Math.abs(formatFloat(number.toString()));

  return number.toString().includes('-') ? absNumber : -absNumber;
};

/**
 * Set error for display
 */
export const setError = (state, error) => {
  state = CALCULATOR_INITIAL_STATE;
  return { ...state, error };
};
