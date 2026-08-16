import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { API_BASE_URL } from "../utils/api";

function ProductDetails({ addToCart }) {
  const { id } = useParams();

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch(`${API_BASE_URL}/api/products/${id}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Product not found");
        }
        return response.json();
      })
      .then((data) => {
        setProduct(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return <h2>Loading product...</h2>;
  }

  if (error) {
    return <h2>{error}</h2>;
  }

  return (
    <div className="container section">
      <div className="product-details">
        <img src={product.image} alt={product.name} />

        <div>
          <span className="section-label">{product.category}</span>
          <h1>{product.name}</h1>

          <h2 className="large-price">
            ₹{product.price.toLocaleString("en-IN")}
          </h2>

          <p>
            {product.description ||
              `This is a high-quality ${product.name} available in our e-commerce store.`}
          </p>

          <div className="product-actions single-product-actions">
            <button className="button" onClick={() => addToCart(product)}>
              Add to Cart
            </button>

            <Link to="/products" className="button outline-button">
              Continue Shopping
            </Link>
          </div>

          <br />

          <Link to="/cart" className="back-link">
            Go to Cart
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;