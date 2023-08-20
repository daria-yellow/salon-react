import type React from 'react';

export interface OpenedPhotoProps {
  photo: string;
  onClick: () => void;
}

export const OpenedPhoto: React.FC<OpenedPhotoProps> = ({
  photo,
  onClick,
}: OpenedPhotoProps) => {
  return (
    <div
      className="opened-photo"
      onClick={() => {
        onClick();
      }}
    >
      <img src={photo} alt="openedImage"></img>
    </div>
  );
};
