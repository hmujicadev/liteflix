import React, {useContext, useEffect, useState} from 'react';
import Layout from '../layout/Layout.component';
import FeaturedSection from '../FeaturedSection/FeaturedSection.component';
import {MoviesContext} from '../../context/moviesContext';
import MyMoviesSection from '../MyMoviesSection/MyMoviesSection.component';
import UpcomingSection from '../UpcomingSection/UpcomingSection.component';
import PopularSection from '../PopularSection/PopularSection.component';
import Modal from '../global/Modal/Modal.component';
import AddMovieForm from '../containers/AddMovieForm/AddMovieForm.component';

const Home = () => {
  const [openModal, setOpenModal] = useState(true);
  const {movies, loadMovies} = useContext(MoviesContext);
  useEffect(() => {
    loadMovies();
  }, []);

  useEffect(() => {
    console.log('movies', movies);
  }, [movies]);
  return (
    <Layout>
      <>
        {movies && (
          <>
            <FeaturedSection featuredMovie={movies.featured} />
            <UpcomingSection upcomingMovies={movies.upcoming} />
            <MyMoviesSection myMovies={movies.myMovies} />
            <PopularSection popularMovies={movies.popular} />
          </>
        )}
        <Modal isOpen={openModal} setOpen={setOpenModal}>
          <AddMovieForm onClose={() => setOpenModal(false)} />
        </Modal>
      </>
    </Layout>
  );
};

export default Home;