import { useRouter } from 'next/router';

const Movie = () => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div className="container">
      <div className="jumbotron">
        <h1 className="display-4">Movie Title</h1>
        <p className="lead">This is a simple hero unit.</p>
        <hr className="my-4" />
        <p>It uses some blah blah blah</p>
        <a className="btn btn-primary btn-lg" href="/" role="button">
          Learn more
        </a>
      </div>
      <p>Some movie description will go here as well.</p>
    </div>
  );
};

export default Movie;
