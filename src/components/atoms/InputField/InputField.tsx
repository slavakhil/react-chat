import React, { useState } from 'react';
import './styles.scss';

interface IInputField {
  placeholder: string;
  type: string;
  id: string;
}

const InputField: React.FC<IInputField> = ({ placeholder, id, type }) => {
  const [flag, setFlag] = useState(true);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.value) {
      setFlag(true);
    } else {
      setFlag(false);
    }
  };
  return (
    <>
      <input
        className={'text-field__input'}
        type={type}
        id={id}
        placeholder={placeholder}
        onChange={handleChange}
        required={flag}
      />
      {flag && <div className="text-field__input--error">Something goes wrong</div>}
    </>
  );
};

export default InputField;
