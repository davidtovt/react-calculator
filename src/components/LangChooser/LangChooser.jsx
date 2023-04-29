import { useContext } from 'react';
import { useTranslation } from 'react-i18next';

import { CalculatorContext } from '../../contexts/calculator';

import "./LangChooser.scss";

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
    <ul className="list-link">
      {languages &&
        languages.map((language) => (
          <li key={language.id}>
            <button
              type="button"
              onClick={() => handleLangChange(language.id)}
              disabled={i18n.language === language.id}
            >
              {language.label}
            </button>
          </li>
        ))}
    </ul>
  );
};

export default LangChooser;
