import React from 'react';
import Button from '../../atoms/Button/Button';
import InputField from '../../atoms/InputField/InputField';
import Label from '../../atoms/Label/Label';
import './styles.scss';

const AuthField: React.FC = () => {
  return (
    <>
      <div className="block-info">
        <Label value={'Please, autorize yourself'} size={'size27'} />
      </div>
      <div className="block-field">
        <div className="block-field__label">
          <Label id={'username'} value={'User name'} size={'size13'} />
        </div>
        <div className="block-field__input">
          <InputField type={'text'} id={'username'} placeholder={'Input user name'} />
        </div>
      </div>
      <div className="block-field">
        <div className="block-field__label">
          <Label id={'password'} value={'Password'} size={'size13'} />
        </div>
        <div className="block-field__input">
          <InputField type={'password'} id={'password'} placeholder={'Input password'} />
        </div>
      </div>
      <div className="block-button">
        <Button value={'Log in'} />
      </div>
    </>
  );
};

export default AuthField;
