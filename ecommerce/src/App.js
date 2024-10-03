import React, { useState, useEffect, useRef } from "react";
import "./App.css";

const API_URL = "https://fakestoreapi.com/products";

function App() {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const loader = useRef(null);

  const fetchProducts = async () => {
    setLoading(true);
    const res = await fetch(`${API_URL}?limit=6&page=${page}`);
    const data = await res.json();
    setProducts((prevProducts) => [...prevProducts, ...data]);
    setLoading(false);
  };

  useEffect(() => {
    fetchProducts();
  }, [page]);

  const handleObserver = (entities) => {
    const target = entities[0];
    if (target.isIntersecting) {
      setPage((prev) => prev + 1);
    }
  };

  useEffect(() => {
    const option = {
      root: null,
      rootMargin: "20px",
      threshold: 1.0,
    };
    const observer = new IntersectionObserver(handleObserver, option);
    if (loader.current) {
      observer.observe(loader.current);
    }
  }, []);

  return (
    <div className="app">
      <h1>Product List</h1>
      <div className="product-list">
        {products.map((product) => (
          <div key={product.id} className="product">
            <img src={product.image} alt={product.title} />
            <h3>{product.title}</h3>
            <p>{product.price}</p>
          </div>
        ))}
      </div>
      <div ref={loader} className="loading">
        {loading && <p>Loading...</p>}
      </div>
    </div>
  );
}

export default App;
