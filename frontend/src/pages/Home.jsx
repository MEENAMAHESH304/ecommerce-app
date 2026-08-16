import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import { API_BASE_URL } from "../utils/api";

function Home({ addToCart }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch(`${API_BASE_URL}/api/products`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch products");
        }

        return response.json();
      })
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
        setError("Unable to load products.");
        setLoading(false);
      });
  }, []);

  const featuredCategories = [
    {
      name: "Electronics",
      icon: "💻",
      description: "Laptops for building innovative technology.",
    },
    {
      name: "Wearables",
      icon: "⌚",
      description: "Smart devices designed for daily lifestyle tracking.",
    },
    {
      name: "Photography",
      icon: "📷",
      description: "Capture moments with premium, high-quality cameras.",
    },
  ];

  return (
    <div className="home-page">
      <section className="hero">
        <div className="container hero-content">
          <div className="hero-text">
            <span className="hero-badge">New arrivals every week</span>
            <h1>
              Smart tech for <span>everyday life</span>
            </h1>
            <p>
              Discover premium laptops, gadgets, wearables, and accessories at
              the best prices.
            </p>

            <div className="hero-buttons">
              <Link to="/products" className="button shop-button">
                Shop Now
              </Link>
              <Link to="/about" className="button secondary-button-home">
                Learn More
              </Link>
            </div>
          </div>

        </div>
      </section>

      <section className="section container">
        <div className="section-heading">
          <div>
            <span className="section-label">Categories</span>
            <h2>Shop by category</h2>
          </div>
        </div>

        <div className="category-grid">
          {featuredCategories.map((category) => (
            <Link to="/products" key={category.name} className="category-card">
              <div className="category-icon">{category.icon}</div>
              <h3>{category.name}</h3>
              <p>{category.description}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="section container">
        <div className="section-heading">
          <div>
            <span className="section-label">Best deals</span>
            <h2>Gadget catalog</h2>
          </div>
        </div>

        <div className="product-grid">
          {[
            { id: 101, name: "HP 15s", category: "Laptop", price: 45000, image: "/images/laptop.jpg" },
            { id: 102, name: "Lenovo IdeaPad Slim 3", category: "Laptop", price: 48000, image: "/images/laptop1.jpg" },
            { id: 103, name: "boAt Airdopes 141", category: "Earphones", price: 1300, image: "/images/headphones.jpg" },
            { id: 104, name: "OnePlus Nord Buds 3", category: "Earphones", price: 2300, image: "/images/headphones1.jpg" },
            { id: 105, name: "Noise ColorFit Pro 5", category: "Smart Watch", price: 3500, image: "/images/smartwatch.jpg" },
            { id: 106, name: "boAt Lunar Pro", category: "Smart Watch", price: 2500, image: "/images/smartwatch1.jpg" },
            { id: 107, name: "Canon EOS 1500D", category: "Camera", price: 40000, image: "/images/camera.jpg" },
            { id: 108, name: "Nikon D3500", category: "Camera", price: 38000, image: "/images/camera1.jpg" }
          ].map((item) => (
            <ProductCard
              key={item.id}
              product={item}
              addToCart={addToCart}
            />
          ))}
        </div>
      </section>
    </div>
  );
}

export default Home;