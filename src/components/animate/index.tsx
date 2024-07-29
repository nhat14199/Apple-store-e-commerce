import React from 'react';

import animationData from '../../assets/Animation - 1721881713592.json'; // Đường dẫn đến file JSON của bạn
import Lottie from 'react-lottie'; // Ignore lỗi TypeScript

const LottieAnimation = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  return (
    <div className='w-screen '>
      <Lottie options={defaultOptions} height={400} width={400} />
    </div>
  );
};

export default LottieAnimation;