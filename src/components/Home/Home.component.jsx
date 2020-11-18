import React, {useContext, useEffect} from 'react';
import Layout from '../layout/Layout.component';
import FeaturedSection from '../FeaturedSection/FeaturedSection.component';
import {MoviesContext} from '../../context/moviesContext';
import MyMoviesSection from '../MyMoviesSection/MyMoviesSection.component';
import UpcomingSection from '../UpcomingSection/UpcomingSection.component';
import PopularSection from '../PopularSection/PopularSection.component';

const Home = () => {
  const {movies, loadMovies} = useContext(MoviesContext);
  useEffect(() => {
    loadMovies();
  }, []);

  useEffect(() => {
    console.log(movies);
  }, [movies]);
  return (
    <Layout>
      <>
        {movies && (
          <>
            <FeaturedSection featuredMovie={movies.featured} />
            <UpcomingSection upcomingMovies={movies.upcomingMovies} />
            <MyMoviesSection myMovies={movies.myMovies} />
            <PopularSection popularMovies={movies.popularMovies} />
          </>
        )}
      </>
    </Layout>
  );
};

export default Home;
