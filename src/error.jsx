import { Link, useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
      {
        error.status === 404 && <div>
          <h3>Page not found</h3>
          <p>Go back where are from</p>
          <Link to="/"><button>Back to Home</button></Link>
        </div>
      }
    </div>
  );
}