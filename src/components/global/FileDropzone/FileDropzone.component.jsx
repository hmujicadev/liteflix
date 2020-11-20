import React, {useState, useEffect} from 'react';
import {array, func} from 'prop-types';
import {useDropzone} from 'react-dropzone';
import {AiOutlinePaperClip} from 'react-icons/ai';
import {
  DzWrapper,
  DzTextWrapper,
  IconWrapper,
  DzLoaderWrapper,
  LoadingText,
  LoadingBarWrapper,
  LoadingBar,
  CancelButton,
} from './FileDropzone.styles';
import {getRandomIntervalStep} from '../../../utils';

const FileDropzone = ({loadedFiles, setLoadedFiles, setIsFileLoaded}) => {
  const [uploadProgress, setUploadProgress] = useState(0);
  const {getRootProps, getInputProps} = useDropzone({
    accept: 'image/jpeg, image/png',
    maxFiles: 1,
    onDrop: acceptedFiles => {
      setUploadProgress(1);
      setLoadedFiles(
        acceptedFiles.map(file =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          }),
        ),
      );
    },
  });

  useEffect(() => {
    const incrementProgress = () => {
      if (0 < uploadProgress && uploadProgress < 100)
        setTimeout(() => {
          const nextStep = getRandomIntervalStep();
          setUploadProgress(100 <= uploadProgress + nextStep ? 100 : uploadProgress + nextStep);
          if (100 <= uploadProgress + nextStep) setIsFileLoaded(true);
        }, 300);
    };
    incrementProgress();
  }, [uploadProgress, loadedFiles]);

  const cancelUpload = () => {
    setUploadProgress(0);
    setIsFileLoaded(false);
    setLoadedFiles([]);
  };

  return (
    <div>
      {!loadedFiles.length ? (
        <DzWrapper {...getRootProps()}>
          <input {...getInputProps()} />
          <DzTextWrapper>
            <IconWrapper>
              <AiOutlinePaperClip />
            </IconWrapper>
            <span>Agregar archivo </span>
            <p>o arrastrarlo y soltarlo aquí</p>
          </DzTextWrapper>
        </DzWrapper>
      ) : (
        <DzLoaderWrapper>
          <LoadingText>{`${uploadProgress}% Cargado`}</LoadingText>
          <LoadingBarWrapper>
            <LoadingBar progress={uploadProgress} />
          </LoadingBarWrapper>
          <CancelButton onClick={() => cancelUpload()}>Cancelar</CancelButton>
        </DzLoaderWrapper>
      )}
    </div>
  );
};

FileDropzone.propTypes = {
  loadedFiles: array.isRequired,
  setLoadedFiles: func.isRequired,
  setIsFileLoaded: func.isRequired,
};

export default FileDropzone;
