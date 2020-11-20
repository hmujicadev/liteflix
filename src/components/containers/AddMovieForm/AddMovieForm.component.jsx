import React, {useState, useEffect, useContext} from 'react';
import {func} from 'prop-types';
import * as yup from 'yup';
import {yupResolver} from '@hookform/resolvers/yup';
import {useForm} from 'react-hook-form';
import FileDropzone from '../../global/FileDropzone/FileDropzone.component';
import Input from '../../global/Input/Input.component';
import {MoviesContext} from '../../../context/moviesContext';
import {
  AddMovieFormWrapper,
  MovieForm,
  InputFormWrapper,
  UploadMovieButtonWrapper,
  UploadMovieButton,
  SuccessWrapper,
  SuccessText,
  SuccessCloseButton,
} from './AddMovieForm.styles';
import {MOVIE_CATEGORIES} from '../../../constants';
import Brand from '../../global/Brand/Brand.component';

const schema = yup.object().shape({
  movieName: yup.string().required(),
  movieCategory: yup.string().required(),
});

const AddMovieForm = ({onClose}) => {
  const [addedMovie, setAddedMovie] = useState(false);
  const [isFileLoaded, setIsFileLoaded] = useState(false);
  const [loadedFiles, setLoadedFiles] = useState([]);
  const {movies, refreshMyMovies} = useContext(MoviesContext);
  const {register, handleSubmit, errors, formState, setValue, trigger} = useForm({
    resolver: yupResolver(schema),
    mode: 'onChange',
  });
  const setMovieCategory = category => {
    setValue('movieCategory', category);
    trigger('movieCategory');
  };
  const onSubmit = async data => {
    let reader = new FileReader();
    reader.readAsDataURL(loadedFiles[0]);
    reader.onload = function () {
      let base64img = reader.result;
      let refreshResponse = refreshMyMovies({
        ...data,
        image: base64img,
      });
      if (refreshResponse) setAddedMovie(true);
    };
    reader.onerror = function (error) {
      console.log('Error: ', error);
    };
  };

  useEffect(() => {
    return () => {};
  }, [loadedFiles]);

  return (
    <AddMovieFormWrapper success={addedMovie}>
      {!addedMovie ? (
        <>
          <FileDropzone
            loadedFiles={loadedFiles}
            setLoadedFiles={setLoadedFiles}
            setIsFileLoaded={setIsFileLoaded}
          />
          <MovieForm autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
            <InputFormWrapper>
              <Input
                name="movieName"
                ref={register}
                label="NOMBRE DE LA PELÍCULA"
                errorMessage={errors?.movieName?.message ?? ''}
              />
              <Input
                name="movieCategory"
                type="select"
                setSelectValue={setMovieCategory}
                options={MOVIE_CATEGORIES}
                ref={register}
                label="CATEGORÍA"
                errorMessage={errors?.movieCategory?.message ?? ''}
              />
            </InputFormWrapper>
            <UploadMovieButtonWrapper>
              <UploadMovieButton type="submit" disabled={!formState.isValid || !isFileLoaded}>
                Cargar Película
              </UploadMovieButton>
            </UploadMovieButtonWrapper>
          </MovieForm>
        </>
      ) : (
        <SuccessWrapper>
          <Brand />
          <SuccessText>
            <span>Felicitaciones!</span>
            <br />
            <strong>{movies.myMovies[0].movieName}</strong> fue correctamente subido a la categoría{' '}
            <strong>{movies.myMovies[0].movieCategory}</strong>
          </SuccessText>
          <SuccessCloseButton onClick={() => onClose()}>Cerrar</SuccessCloseButton>
        </SuccessWrapper>
      )}
    </AddMovieFormWrapper>
  );
};

AddMovieForm.propTypes = {
  onClose: func,
};

export default AddMovieForm;
