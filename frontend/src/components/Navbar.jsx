import { Link } from "react-router-dom";

function Navbar({ cart }) {

  const cartCount = cart.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <header className="navbar">

      <div className="container nav-content">

        <Link
          to="/"
          className="logo"
        >
          ShopEase
        </Link>

        <nav>

          <Link to="/">
            Home
          </Link>

          <Link to="/products">
            Products
          </Link>

          <Link to="/about">
            About
          </Link>

          <Link
            to="/cart"
            className="cart-link"
          >
            🛒 Cart ({cartCount})
          </Link>

        </nav>

      </div>

    </header>
  );
}

export default Navbar;