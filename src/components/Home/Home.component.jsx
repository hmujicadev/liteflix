import React, {useContext, useEffect} from 'react';
import Layout from '../layout/Layout.component';
import FeaturedSection from '../FeaturedSection/FeaturedSection.component';
import {MoviesContext} from '../../context/moviesContext';
import MyMoviesSection from '../MyMoviesSection/MyMoviesSection.component';
import UpcomingSection from '../UpcomingSection/UpcomingSection.component';
import PopularSection from '../PopularSection/PopularSection.component';
import Modal from '../global/Modal/Modal.component';
import AddMovieForm from '../containers/AddMovieForm/AddMovieForm.component';

const Home = () => {
  const {movies, loadMovies,openModal,setOpenModal} = useContext(MoviesContext);
  useEffect(() => {
    loadMovies();
  }, []);

  return (
    <Layout openModal={() => setOpenModal(true)}>
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