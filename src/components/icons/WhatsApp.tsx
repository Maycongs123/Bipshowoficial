import React from 'react';

export const WhatsApp: React.FC<{
    width: number;
    height: number;
    color: string;
}> = ({ width, height, color }) => {
  return (
    <svg width={width} height={height} viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12.54 2C7.08 2 2.63 6.45 2.63 11.91C2.63 13.66 3.09 15.36 3.95 16.86L2.55 22L7.8 20.62C9.25 21.41 10.88 21.83 12.54 21.83C18 21.83 22.45 17.38 22.45 11.92C22.45 9.27 21.42 6.78 19.55 4.91C17.68 3.03 15.19 2 12.54 2ZM12.55 3.67C14.75 3.67 16.81 4.53 18.37 6.09C19.92 7.65 20.78 9.72 20.78 11.92C20.78 16.46 17.08 20.15 12.54 20.15C11.06 20.15 9.61 19.76 8.35 19L8.05 18.83L4.93 19.65L5.76 16.61L5.56 16.29C4.74 15 4.3 13.47 4.3 11.91C4.31 7.37 8 3.67 12.55 3.67ZM9.03 7.33C8.87 7.33 8.6 7.39 8.37 7.64C8.15 7.89 7.5 8.5 7.5 9.71C7.5 10.93 8.39 12.1 8.5 12.27C8.64 12.44 10.26 14.94 12.75 16C13.34 16.27 13.8 16.42 14.16 16.53C14.75 16.72 15.29 16.69 15.72 16.63C16.2 16.56 17.18 16.03 17.39 15.45C17.6 14.87 17.6 14.38 17.54 14.27C17.47 14.17 17.31 14.11 17.06 14C16.81 13.86 15.59 13.26 15.37 13.18C15.14 13.1 15 13.06 14.81 13.3C14.65 13.55 14.17 14.11 14.03 14.27C13.88 14.44 13.74 14.46 13.5 14.34C13.24 14.21 12.44 13.95 11.5 13.11C10.76 12.45 10.27 11.64 10.12 11.39C10 11.15 10.11 11 10.23 10.89C10.34 10.78 10.5 10.6 10.6 10.45C10.73 10.31 10.77 10.2 10.85 10.04C10.93 9.87 10.89 9.73 10.83 9.61C10.77 9.5 10.27 8.26 10.06 7.77C9.86 7.29 9.66 7.35 9.5 7.34C9.36 7.34 9.2 7.33 9.03 7.33Z" fill={color} />
    </svg>
  );
};