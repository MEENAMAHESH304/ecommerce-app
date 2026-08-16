import { Link } from "react-router-dom";

function NotFound() {
  return (
    <main className="container section not-found">

      <h1>404</h1>

      <h2>Page Not Found</h2>

      <p>
        Sorry, the page you are looking for does not exist.
      </p>

      <Link to="/" className="button">
        Go Home
      </Link>

    </main>
  );
}

export default NotFound;