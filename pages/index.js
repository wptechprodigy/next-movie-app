import React, { useState, useEffect } from 'react';

import SideMenu from '../components/sideMenu';
import Carousel from '../components/carousel';
import MovieList from '../components/movieList';

import { getMovies } from '../actions';

const Home = ({ movies }) => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-lg-3">
            <SideMenu name="Movie DB" />
          </div>

          <div className="col-lg-9">
            <Carousel />

            <div className="row">
              <MovieList movies={movies || []} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

Home.getInitialProps = async () => {
  const movies = await getMovies();

  return {
    movies,
  };
};

export default Home;
