import { Link } from "react-router-dom";

function ProductCard({ product, addToCart }) {

  return (
    <article className="product-card">

      <img
        src={product.image}
        alt={product.name}
        loading="lazy"
      />

      <div className="product-info">

        <span className="category">
          {product.category}
        </span>

        <h3>
          {product.name}
        </h3>

        <p className="price">
          ₹{product.price.toLocaleString("en-IN")}
        </p>

        <div className="product-actions">

          <Link
            to={`/products/${product.id}`}
            className="button"
          >
            View Product
          </Link>

          <button
            className="button secondary-button"
            onClick={() => addToCart(product)}
          >
            Add to Cart
          </button>

        </div>

      </div>

    </article>
  );
}

export default ProductCard;