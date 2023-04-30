import { useState } from 'react';

import { SwitcherWrapper } from './Switcher.styled';

const Switcher = ({ name, options, defaultValue, onChange }) => {
  const [defaultCheck, setDefaultCheck] = useState(parseInt(defaultValue));

  const handleChange = (e, value) => {
    setDefaultCheck(value);
    onChange(e);
  };

  return (
    <SwitcherWrapper>
      {options &&
        options.map(({ value, label }) => (
          <label key={name + value}>
            <input
              type="radio"
              name={name}
              value={value}
              onChange={(e) => handleChange(e, value)}
              checked={defaultCheck === value}
            />
            <span>{label} <span></span></span>
          </label>
        ))}
    </SwitcherWrapper>
  );
};

export default Switcher;
