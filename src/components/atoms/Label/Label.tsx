import React from 'react';
import './styles.scss';

interface ILabel {
  value: string;
  size: string;
  id?: string;
}

const Label: React.FC<ILabel> = ({ value, size, id }) => {
  return (
    <>
      <label className={size} htmlFor={id}>
        {value}
      </label>
    </>
  );
};

export default Label;
