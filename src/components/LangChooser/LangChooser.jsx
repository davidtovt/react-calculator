import { useContext } from 'react';
import { useTranslation } from 'react-i18next';

import { CalculatorContext } from '../../contexts/calculator';

import { ListLinkStyle } from '../../styles/Components.styled';

const LangChooser = ({ languages }) => {
  const { i18n } = useTranslation();

  const { dispatch, CALCULATOR_ACTION_TYPES } = useContext(CalculatorContext);

  const handleLangChange = (lang) => {
    dispatch({
      type: CALCULATOR_ACTION_TYPES.CLEAR_ALL,
    });

    i18n.changeLanguage(lang);
  };

  return (
    <ListLinkStyle>
      {languages &&
        languages.map(({ id, label }) => (
          <li key={id}>
            <button
              type="button"
              onClick={() => handleLangChange(id)}
              disabled={i18n.language === id}
            >
              {label}
            </button>
          </li>
        ))}
    </ListLinkStyle>
  );
};

export default LangChooser;
