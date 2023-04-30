import { useState } from 'react';
import './Switcher.scss';

const Switcher = ({ name, options, defaultValue, onChange }) => {
  const [defaultCheck, setDefaultCheck] = useState(parseInt(defaultValue));

  const handleChange = (e, value) => {
    setDefaultCheck(value);
    onChange(e);
  };

  return (
    <div className="switcher">
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
            {label}
          </label>
        ))}
    </div>
  );
};

export default Switcher;
