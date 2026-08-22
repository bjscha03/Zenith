import React from 'react';
import { ZENITH_LOGO_IMAGE } from '../../lib/brandAssets';

interface CompassMarkProps {
  className?: string;
  imageClassName?: string;
}

const CompassMark: React.FC<CompassMarkProps> = ({ className = '', imageClassName = '' }) => (
  <div aria-hidden="true" className={`pointer-events-none overflow-hidden ${className}`}>
    <img
      src={ZENITH_LOGO_IMAGE}
      alt=""
      className={`h-full w-auto max-w-none object-left ${imageClassName}`}
    />
  </div>
);

export default CompassMark;
