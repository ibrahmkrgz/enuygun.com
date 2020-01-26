import React from 'react';
import ContentLoader from 'react-content-loader';
import './imageLoaderStyles.scss';

const ImageLoader = () => (
  <div className="image-loader-wrapper">
    <ContentLoader
      height={295}
      width={210}
      speed={2}
      primaryColor="rgba(0, 141, 246, 0.09)"
      secondaryColor="rgba(0, 84, 234, 0.09)"
    >
      <rect x="0" y="1" rx="3" ry="3" width="210" height="290" />
    </ContentLoader>
  </div>
);

export default ImageLoader;
