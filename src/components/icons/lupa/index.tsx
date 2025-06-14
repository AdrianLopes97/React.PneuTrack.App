import React from 'react';
// Import the SVG as a URL for the img src attribute
import lupaSvgUrl from '../../../assets/lupa.svg';

interface LupaIconProps extends Omit<React.ImgHTMLAttributes<HTMLImageElement>, 'src'> {
  /**
   * Sets both width and height of the icon.
   * Overridden by explicit width/height props if provided.
   */
  size?: string | number;
  alt?: string;
}

const LupaIcon: React.FC<LupaIconProps> = ({
  size,
  width,
  height,
  className,
  alt = 'Lupa Icon', // Default alt text
  ...rest
}) => {
  const iconWidth = width ?? size ?? '24px'; // Default to 24px if no size is given
  const iconHeight = height ?? size ?? '24px'; // Default to 24px if no size is given

  return (
    <img
      src={lupaSvgUrl}
      width={iconWidth}
      height={iconHeight}
      className={className}
      alt={alt}
      {...rest} // Passes other img props like onClick, style, etc.
    />
  );
};

export default LupaIcon;
