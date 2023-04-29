const NUMBER_SEPARATORS = {
  'hu-HU': {
    thousand: ' ',
    decimal: ','
  },
  'en-US': {
    thousand: ',',
    decimal: '.'
  }
}

const CURR_LANG = 'hu-HU';

const getNumSeparator = (type = 'thousand') => {
  return NUMBER_SEPARATORS[CURR_LANG][type];
}

export default getNumSeparator;