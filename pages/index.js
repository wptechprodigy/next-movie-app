import React, { useState, useEffect } from 'react';

import SideMenu from '../components/sideMenu';
import Carousel from '../components/carousel';
import MovieList from '../components/movieList';

import { getMovies, getCategories } from '../actions';

const Home = ({ movies, images, categories }) => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-lg-3">
            <SideMenu name="Movie DB" categories={categories} />
          </div>

          <div className="col-lg-9">
            <Carousel images={images} />

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
  const categories = await getCategories();
  const images = movies.map((movie) => ({
    id: `image-${movie.id}`,
    url: movie.coverImage,
  }));

  return {
    movies,
    images,
    categories,
  };
};

export default Home;
