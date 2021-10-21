import React from 'react';
import AuthBlock from '../../organisms/Auth/AuthBlock';
import ImageBlock from '../../organisms/ImageBlock/ImageBlock';
import './styles.scss';

const Auth: React.FC = () => {
  return (
    <div className="container">
      <div className="">
        <AuthBlock />
      </div>
      <div>
        <ImageBlock />
      </div>
    </div>
  );
};

export default Auth;
