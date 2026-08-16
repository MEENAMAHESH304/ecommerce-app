import { useState } from "react";
import ProductCard from "../components/ProductCard";

function Products({ addToCart }) {
  const gadgetCatalog = [
    { id: 101, name: "HP 15s", category: "Laptop", price: 45000, image: "/images/laptop.jpg" },
    { id: 102, name: "Lenovo IdeaPad Slim 3", category: "Laptop", price: 48000, image: "/images/laptop1.jpg" },
    { id: 103, name: "boAt Airdopes 141", category: "Earphones", price: 1300, image: "/images/headphones.jpg" },
    { id: 104, name: "OnePlus Nord Buds 3", category: "Earphones", price: 2300, image: "/images/headphones1.jpg" },
    { id: 105, name: "Noise ColorFit Pro 5", category: "Smart Watch", price: 3500, image: "/images/smartwatch.jpg" },
    { id: 106, name: "boAt Lunar Pro", category: "Smart Watch", price: 2500, image: "/images/smartwatch1.jpg" },
    { id: 107, name: "Canon EOS 1500D", category: "Camera", price: 40000, image: "/images/camera.jpg" },
    { id: 108, name: "Nikon D3500", category: "Camera", price: 38000, image: "/images/camera1.jpg" }
  ];

  const [products] = useState(gadgetCatalog);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("featured");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = [
    "All",
    ...new Set(products.map((product) => product.category)),
  ];

  const filteredProducts = products
    .filter((product) => {
      const matchesSearch = product.name
        .toLowerCase()
        .includes(searchTerm.toLowerCase());
      const matchesCategory =
        selectedCategory === "All" || product.category === selectedCategory;

      return matchesSearch && matchesCategory;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case "az":
          return a.name.localeCompare(b.name);
        case "za":
          return b.name.localeCompare(a.name);
        case "price-low":
          return a.price - b.price;
        case "price-high":
          return b.price - a.price;
        default:
          return 0;
      }
    });

  if (filteredProducts.length === 0) {
    return (
      <div className="container section products-page">
        <h2>No products found</h2>
      </div>
    );
  }

  return (
    <div className="container section products-page">
      <div className="page-header">
        <h1>Our Products</h1>
      </div>

      <div className="filters">
        <div className="filter-group search-box">
          <label htmlFor="search">Search products</label>
          <input
            id="search"
            type="text"
            placeholder="Search by product name"
            value={searchTerm}
            onChange={(event) => setSearchTerm(event.target.value)}
          />
        </div>

        <div className="filter-group">
          <label htmlFor="sort">Sort by</label>
          <select
            id="sort"
            value={sortBy}
            onChange={(event) => setSortBy(event.target.value)}
          >
            <option value="featured">Featured</option>
            <option value="az">A - Z</option>
            <option value="za">Z - A</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
          </select>
        </div>

        <div className="filter-group">
          <label htmlFor="category">Category</label>
          <select
            id="category"
            value={selectedCategory}
            onChange={(event) => setSelectedCategory(event.target.value)}
          >
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="results-header">
        <p>
          Showing <strong>{filteredProducts.length}</strong> product
          {filteredProducts.length !== 1 ? "s" : ""}
        </p>
      </div>

      {filteredProducts.length === 0 ? (
        <div className="no-results">
          <h2>No products found</h2>
          <p>Try another keyword or category filter.</p>
        </div>
      ) : (
        <div className="product-grid">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              addToCart={addToCart}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default Products;