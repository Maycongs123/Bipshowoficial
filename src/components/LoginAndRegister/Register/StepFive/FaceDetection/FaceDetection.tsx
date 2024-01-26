import React, { useState } from 'react';
import { useAuth } from '@/shared/hooks/useAuth';
import { ContainerFaceDetection } from './styles';
import { CameraDetection } from './CameraDetection';
import { Check, Close } from '@mui/icons-material';

export const FaceDetectionComponent: React.FC = () => {
  const { onToPhoto, onAddPhoto } = useAuth();
  const [isImageSrc, setIsImageSrc] = useState<string>();
  const [isIdentification, setIsIdentification] = useState<boolean>(false);

  return (
    <ContainerFaceDetection>
      <div />
      {isImageSrc && (
        <img src={isImageSrc} alt="Avatar" id="avatar" className="image" />
      )}
      {!isImageSrc && (
        <CameraDetection setIsIdentification={setIsIdentification} isIdentification={isIdentification} setIsImageSrc={setIsImageSrc} />
      )}
      {!isImageSrc && (
        <p className="help">
          {isIdentification ? (
            'Rosto identificado'
          ) : (
            'Alinhe sua face ao centro da tela'
          )}

        </p>
      )}
      {isImageSrc && (
        <div className={`actions ${!isImageSrc ? 'margin' : ''}`}>
          <button type="button" className="not-photo" onClick={() => setIsImageSrc(undefined)}>
            <Close width={24} height={24} className="text-danger" />
          </button>
          <p>Confirmar?</p>
          <button
            type="button"
            className="success-photo"
            onClick={() => {
              onAddPhoto(isImageSrc);
              onToPhoto(false);
            }}
          >
            <Check width={24} height={24} className="text-primary" />
          </button>
        </div>
      )}
    </ContainerFaceDetection>
  );
};
