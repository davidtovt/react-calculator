import i18next from 'i18next';

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
export const stringToFloat = (number) => {
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
 * Integer formatter
 */
const formatInteger = (integer, groupLength = 3, separator = ' ') => {
  let digitCount = 1;
  let result = '';

  for (let i = integer.length - 1; i >= 0; i--) {
    result = integer.toString()[i] + result;
    if (digitCount % groupLength === 0 && digitCount !== 0 && i !== 0) {
      result = separator + result;
    }
    digitCount++;
  }

  return result;
};

/**
 * Convert operand to string for display
 */
export const formatToDisplay = (operand, numSystem, typing = false) => {
  const { decimalSeparator, thousandSeparator } = numSeparator();
  const { before, number, after } = operand;

  let integer = null;
  let decimal = null;
  let result = '';

  // Prevent format on empty number
  if (number === '' || number === null) {
    return '';
  }

  // Get integer from number
  integer = stringToFloat(number).toString().split('.')[0];

  integer = parseInt(integer).toString(numSystem);

  // Format integer based on number system
  if (numSystem === 10) {
    result = formatInteger(integer, 3, thousandSeparator);

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
  } else {
    result = formatInteger(integer, 4, ' ');
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
