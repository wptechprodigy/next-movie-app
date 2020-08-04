import { getMovieById } from '../../actions';

const Movie = ({ movie }) => {
  return (
    <div className="container">
      <div className="jumbotron">
        <h1 className="display-4">{movie.name}</h1>
        <p className="lead description">{movie.description}</p>
        <hr className="my-4" />
        <p>{movie.genre}</p>
        <a className="btn btn-primary btn-lg" href="/" role="button">
          Learn more
        </a>
      </div>
      <p className="long-desc">{movie.longDesc}</p>

      <style jsx>{`
        .description {
          font-size: 14px;
        }

        .long-desc {
          font-size: 16px;
        }
      `}
      </style>
    </div>
  );
};

Movie.getInitialProps = async (context) => {
  const { id } = context.query;
  const movie = await getMovieById(id);

  return {
    movie,
  };
};

export default Movie;
