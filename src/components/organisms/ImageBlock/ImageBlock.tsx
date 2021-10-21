import React from 'react';
import image from '../../../assets/backgroundimage.svg';
import './styles.scss';

const ImageBlock: React.FC = () => {
  return <img className="image" src={image} />;
};

export default ImageBlock;
