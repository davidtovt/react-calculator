import getNumSeparator from '../i18n';
import { formatFloat, toggleNumSign, setError } from '../utils/helpers';

export const CALCULATOR_INITIAL_STATE = {
  prevOperand: {
    before: '',
    number: '',
    after: '',
  },
  operator: '',
  currOperand: {
    before: '',
    number: '',
    after: '',
  },
  calculation: '',
  lastCalculationType: '',
  memory: '',
  error: '',
};

export const CALCULATOR_ACTION_TYPES = {
  SET_OPERAND: 'SET_OPERAND',
  TOGGLE_SIGN: 'TOGGLE_SIGN',
  SET_OPERATOR: 'SET_OPERATOR',
  SET_CALCULATION: 'SET_CALCULATION',
  SET_UNARY_CALCULATION: 'SET_UNARY_CALCULATION',
  SET_PERCENTAGE_CALCULATION: 'SET_PERCENTAGE_CALCULATION',
  CLEAR_ALL: 'CLEAR_ALL',
  CLEAR_ENTERED: 'CLEAR_ENTERED',
  DELETE_DIGIT: 'DELETE_DIGIT',
  MEMORY_READ: 'MEMORY_READ',
  MEMORY_CHANGE: 'MEMORY_CHANGE',
  MEMORY_CLEAR: 'MEMORY_CLEAR',
};

const calculate = (firstDigit, operator, lastDigit) => {
  const first = formatFloat(firstDigit);
  const last = formatFloat(lastDigit);
  let calculation = '';

  switch (operator) {
    case '+':
      calculation = first + last;
      break;
    case '-':
      calculation = first - last;
      break;
    case '×':
      calculation = first * last;
      break;
    case '÷':
      calculation = first / last;
      break;
    case '^':
      calculation = Math.pow(first, last);
      break;
    case '√':
      calculation = Math.sqrt(first);
      break;
    default:
      throw new Error('Unknown operation.');
  }

  return calculation.toString();
};

const setOperand = (state, payload) => {
  const { currOperand, calculation } = state;

  // Reset display if exists calculation
  if (calculation) {
    state = CALCULATOR_INITIAL_STATE;
    return { ...state, currOperand: { ...state.currOperand, number: payload } };
  }

  // Prevent writing multiple decimal separators
  if (
    payload === getNumSeparator('decimal') &&
    currOperand.number.toString().includes(getNumSeparator('decimal'))
  ) {
    return state;
  }

  return {
    ...state,
    currOperand: { ...state.currOperand, number: currOperand.number + payload },
    error: '',
  };
};

const toggleSign = (state) => {
  const { currOperand, calculation } = state;

  // Toggle if calculation exists
  if (calculation) {
    return {
      ...state,
      calculation: toggleNumSign(calculation),
    };
  }

  // Toggle if current number exists
  if (currOperand.number) {
    return {
      ...state,
      currOperand: {
        ...state.currOperand,
        number: toggleNumSign(currOperand.number),
      },
    };
  }

  return state;
};

const setOperator = (state, payload) => {
  const {
    prevOperand,
    operator,
    currOperand,
    calculation,
    lastCalculationType,
  } = state;
  let newPrevOperand = currOperand.number;

  // Set previous operand as calculation if calculation exists or if it was previously a unary calculation
  if (
    calculation ||
    lastCalculationType === CALCULATOR_ACTION_TYPES.SET_UNARY_CALCULATION
  ) {
    newPrevOperand = calculation;

    // Recalculate previous operand if operator added instead of equal sign
  } else if (
    prevOperand.number &&
    operator &&
    currOperand.number &&
    !calculation
  ) {
    newPrevOperand = calculate(
      prevOperand.number,
      operator,
      currOperand.number
    );
  }

  // Update operator if the current number and calculation are still empty
  if (!currOperand.number && !calculation) {
    return {
      ...state,
      operator: payload,
    };
  }

  return {
    ...state,
    prevOperand: {
      ...state.prevOperand,
      before: '',
      number: newPrevOperand,
      after: '',
    },
    operator: payload,
    currOperand: CALCULATOR_INITIAL_STATE.currOperand,
    calculation: CALCULATOR_INITIAL_STATE.calculation,
    lastCalculationType: CALCULATOR_ACTION_TYPES.SET_CALCULATION,
  };
};

const setCalculation = (state) => {
  const { prevOperand, operator, currOperand, lastCalculationType } = state;

  if (currOperand.number === '0') {
    return setError(state, 'You cannot divide by zero.');
  }

  // Prevent calculation if it was previously a unary calculation
  if (lastCalculationType === CALCULATOR_ACTION_TYPES.SET_UNARY_CALCULATION) {
    return state;
  }

  // Prevent calculation if doesn't exist numbers or operator
  if (!prevOperand.number || !operator || !currOperand.number) {
    return state;
  }

  return {
    ...state,
    calculation: calculate(prevOperand.number, operator, currOperand.number),
    lastCalculationType: CALCULATOR_ACTION_TYPES.SET_CALCULATION,
  };
};

const setUnaryCalculation = (state, payload) => {
  const { prevOperand, operator, currOperand, calculation } = state;

  // Error if current number or calculation less that 0
  if (
    (currOperand.number < 0 && !calculation) ||
    (calculation && calculation < 0)
  ) {
    return setError(state, 'A negative number has no square root!');
  }

  // Prevent calculation with empty number
  if (currOperand.number === '' && calculation === '') {
    return state;
  }

  // Unary calculation with current number if exists previous number
  if (prevOperand.number && currOperand.number && !calculation) {
    return {
      ...state,
      currOperand: {
        ...state.currOperand,
        before: payload,
        number: currOperand.number,
      },
      calculation: calculate(
        prevOperand.number,
        operator,
        calculate(currOperand.number, payload)
      ),
      lastCalculationType: CALCULATOR_ACTION_TYPES.SET_UNARY_CALCULATION,
    };
  }

  // Unary calculation with result
  if (calculation) {
    return {
      ...state,
      prevOperand: {
        ...state.prevOperand,
        before: payload,
        number: calculation,
      },
      operator: '',
      currOperand: CALCULATOR_INITIAL_STATE.currOperand,
      calculation: calculate(calculation, payload),
      lastCalculationType: CALCULATOR_ACTION_TYPES.SET_UNARY_CALCULATION,
    };
  }

  return {
    ...state,
    prevOperand: {
      ...state.prevOperand,
      before: payload,
      number: currOperand.number,
    },
    calculation: calculate(currOperand.number, payload),
    lastCalculationType: CALCULATOR_ACTION_TYPES.SET_UNARY_CALCULATION,
  };
};

const setPercentageCalculation = (state) => {
  const { prevOperand, currOperand, calculation } = state;

  // Prevent calculation if doesn't exist previous or current number or exists calculation
  if (!prevOperand.number || !currOperand.number || calculation) {
    return state;
  }

  return {
    ...state,
    operator: '→',
    currOperand: { ...state.currOperand, after: '%' },
    calculation:
      parseFloat(prevOperand.number) / (100 / parseFloat(currOperand.number)),
  };
};

const clearEntered = (state) => {
  const { calculation } = state;

  // Clear entered number if there is no calculation yet
  if (!calculation) {
    return {
      ...state,
      currOperand: CALCULATOR_INITIAL_STATE.currOperand,
      error: '',
    };
  }

  return CALCULATOR_INITIAL_STATE;
};

const deleteDigit = (state) => {
  const { currOperand, calculation } = state;
  let newNumber = null;

  // Clear all if there is calculation
  if (calculation) {
    return CALCULATOR_INITIAL_STATE;
  }

  // Remove digits
  newNumber =
    currOperand.number.length > 1
      ? currOperand.number.slice(0, -1)
      : CALCULATOR_INITIAL_STATE.currOperand.number;

  return {
    ...state,
    currOperand: {
      ...state.currOperand,
      number: newNumber,
    },
    error: '',
  };
};

const memoryRead = (state) => {
  const { calculation, memory } = state;

  // Prevent read memory if it doesn't exist
  if (!memory) {
    return state;
  }

  // Crear calculation and read memory for current number
  if (calculation) {
    return {
      ...CALCULATOR_INITIAL_STATE,
      currOperand: { ...state.currOperand, number: memory },
      memory: memory,
    };
  }

  return { ...state, currOperand: { ...state.currOperand, number: memory } };
};

const memoryChange = (state, payload) => {
  const { currOperand, calculation, memory } = state;
  let amount = 0;
  let currentMemory = memory ? parseFloat(memory) : 0;

  // Set the amount as value of calculation or current number
  if (calculation) {
    amount = parseFloat(calculation);
  } else if (currOperand.number) {
    amount = parseFloat(currOperand.number);
  }

  return {
    ...state,
    memory: payload === '-' ? currentMemory - amount : currentMemory + amount,
  };
};

const memoryClear = (state) => {
  return { ...state, memory: CALCULATOR_INITIAL_STATE.memory };
};

export const calculatorReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case CALCULATOR_ACTION_TYPES.SET_OPERAND:
      return setOperand(state, payload);

    case CALCULATOR_ACTION_TYPES.TOGGLE_SIGN:
      return toggleSign(state);

    case CALCULATOR_ACTION_TYPES.SET_OPERATOR:
      return setOperator(state, payload);

    case CALCULATOR_ACTION_TYPES.SET_CALCULATION:
      return setCalculation(state);

    case CALCULATOR_ACTION_TYPES.SET_UNARY_CALCULATION:
      return setUnaryCalculation(state, payload);

    case CALCULATOR_ACTION_TYPES.SET_PERCENTAGE_CALCULATION:
      return setPercentageCalculation(state);

    case CALCULATOR_ACTION_TYPES.CLEAR_ALL:
      return CALCULATOR_INITIAL_STATE;

    case CALCULATOR_ACTION_TYPES.CLEAR_ENTERED:
      return clearEntered(state);

    case CALCULATOR_ACTION_TYPES.DELETE_DIGIT:
      return deleteDigit(state);

    case CALCULATOR_ACTION_TYPES.MEMORY_READ:
      return memoryRead(state);

    case CALCULATOR_ACTION_TYPES.MEMORY_CHANGE:
      return memoryChange(state, payload);

    case CALCULATOR_ACTION_TYPES.MEMORY_CLEAR:
      return memoryClear(state);

    default:
      throw new Error('Unknown action in calculatorReducer.');
  }
};
