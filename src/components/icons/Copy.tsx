import React from 'react';

export const Copy: React.FC<{ width: number; height: number, color: string }> = ({ width, height, color }) => {
  return (
    <svg width={width} height={height} viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M19.4219 21.8672H8.42188V7.86719H19.4219M19.4219 5.86719H8.42188C7.89144 5.86719 7.38273 6.0779 7.00766 6.45297C6.63259 6.82805 6.42188 7.33675 6.42188 7.86719V21.8672C6.42188 22.3976 6.63259 22.9063 7.00766 23.2814C7.38273 23.6565 7.89144 23.8672 8.42188 23.8672H19.4219C19.9523 23.8672 20.461 23.6565 20.8361 23.2814C21.2112 22.9063 21.4219 22.3976 21.4219 21.8672V7.86719C21.4219 7.33675 21.2112 6.82805 20.8361 6.45297C20.461 6.0779 19.9523 5.86719 19.4219 5.86719ZM16.4219 1.86719H4.42188C3.89144 1.86719 3.38273 2.0779 3.00766 2.45297C2.63259 2.82805 2.42188 3.33675 2.42188 3.86719V17.8672H4.42188V3.86719H16.4219V1.86719Z" fill={color} />
    </svg>
  );
};