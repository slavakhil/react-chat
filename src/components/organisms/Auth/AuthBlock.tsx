import React from 'react';
import AuthField from '../../molecules/AuthField/AuthField';
import WelcomeField from '../../molecules/WelcomeField/WelcomeField';
import './styles.scss';

const AuthBlock: React.FC = () => {
  return (
    <div className="block">
      <WelcomeField />
      <AuthField />
    </div>
  );
};

export default AuthBlock;
