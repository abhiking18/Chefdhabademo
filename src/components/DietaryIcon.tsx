import React from 'react';

interface DietaryIconProps {
  isVeg: boolean;
  className?: string;
  size?: number;
}

export const VEG_ICON_URL = '/assets/aistudio/images_bb6eea40.jpg';
export const NON_VEG_ICON_URL = '/assets/aistudio/New-Non-Logo_ef65d6b3.png';

export const DietaryIcon: React.FC<DietaryIconProps> = ({ isVeg, className = 'w-4 h-4', size }) => {
  return (
    <img
      src={isVeg ? VEG_ICON_URL : NON_VEG_ICON_URL}
      alt={isVeg ? 'Vegetarian dish' : 'Non-Vegetarian dish'}
      title={isVeg ? 'Vegetarian' : 'Non-Vegetarian'}
      width={size}
      height={size}
      className={`shrink-0 object-contain rounded-xs ${className}`}
      loading="lazy"
    />
  );
};
