import i18next from 'i18next';

import { CALCULATOR_INITIAL_STATE } from '../hooks/useCalculator';

/**
 * Translated number separators
 */
export const numSeparator = () => {
  return {
    decimalSeparator: i18next.t('decimal_separator'),
    thousandSeparator: i18next.t('thousand_separator'),
  };
};

/**
 * Convert string number to float
 */
export const formatFloat = (number) => {
  const { decimalSeparator, thousandSeparator } = numSeparator();

  // Add zero if number is undefined or decimal separator
  if (typeof number === 'undefined' || number === decimalSeparator) {
    return 0;
  }

  return parseFloat(
    number
      .toString()
      .replace(decimalSeparator, '.')
      .replace(thousandSeparator, '')
  );
};

/**
 * Convert operand to string for display
 */
export const formatToDisplay = (operand, typing = false) => {
  const { decimalSeparator, thousandSeparator } = numSeparator();

  const { before, number, after } = operand;
  let integer = null;
  let decimal = null;
  let result = '';
  let digitCount = 1;

  // Prevent format on empty number
  if (number === '' || number === null) {
    return '';
  }

  // Get integer from number
  integer = formatFloat(number).toString().split('.')[0];

  // Separate thousand
  for (let i = integer.length - 1; i >= 0; i--) {
    result = integer.toString()[i] + result;
    if (digitCount % 3 === 0 && digitCount !== 0 && i !== 0) {
      result = thousandSeparator + result;
    }
    digitCount++;
  }

  // Get decimal from number
  decimal = number.toString().replace(decimalSeparator, '.').split('.')[1];

  // Add decimal on typing and there is decimal or the decimal is 0
  if (
    (typing || parseInt(decimal) > 0) &&
    (number.toString().slice(-1) === decimalSeparator ||
      (typeof decimal !== 'undefined' && decimal.length > 0))
  ) {
    result += decimalSeparator + decimal;
  }

  //result = number;

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
