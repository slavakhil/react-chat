import React, { useState } from 'react';
import './styles.scss';

interface IButton {
  value: string;
}

const Button: React.FC<IButton> = ({ value }) => {
  const [flag, setFlag] = useState(false);
  const clickButton = () => {
    setFlag(true);
  };
  return (
    <div>
      <button id="buttonLogin" className="button-2" onClick={clickButton} disabled={flag}>
        {value}
      </button>
    </div>
  );
};

export default Button;
