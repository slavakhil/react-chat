import React from 'react';
import Label from '../../atoms/Label/Label';
import logo from '../../../assets/logo.svg';
import './styles.scss';

const WelcomeField: React.FC = () => {
  return (
    <>
      <div className="block-welcomefield">
        <div>
          <img src={logo} />
        </div>
        <Label value="Wellcome to Chatty!" size="size42bold" />
      </div>
    </>
  );
};

export default WelcomeField;
