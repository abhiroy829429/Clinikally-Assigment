import React, { useEffect, useState } from 'react';
import logoImg from '../../assets/clinikally-logo.png';
import useDebounce from '../../hooks/useDebounce';
import { searchProducts } from '../../services/api';
import './Autocomplete.css';

const Autocomplete = () => {
  const [inputValue, setInputValue] = useState('');
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(0);
  const [hasMore, setHasMore] = useState(true);

  const debouncedSearchTerm = useDebounce(inputValue, 500);

  useEffect(() => {
    const fetchProducts = async () => {
      if (debouncedSearchTerm.length < 2) {
        setProducts([]);
        return;
      }

      try {
        setLoading(true);
        setError(null);
        const data = await searchProducts(debouncedSearchTerm, 10, page * 10);
        setProducts(data.products);
        setHasMore(data.products.length === 10);
      } catch (err) {
        setError('Failed to fetch products. Please try again.');
        setProducts([]);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [debouncedSearchTerm, page]);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
    setPage(0);
  };

  const handleClear = () => {
    setInputValue('');
    setProducts([]);
    setError(null);
  };

  const handleLoadMore = () => {
    setPage(prevPage => prevPage + 1);
  };

  const getRatingColor = (rating) => {
    if (rating >= 4.5) return 'rating-excellent';
    if (rating >= 4) return 'rating-very-good';
    if (rating >= 3.5) return 'rating-good';
    if (rating >= 3) return 'rating-fair';
    return 'rating-poor';
  };

  const getRatingLabel = (rating) => {
    if (rating >= 4.5) return 'Excellent';
    if (rating >= 4) return 'Very Good';
    if (rating >= 3.5) return 'Good';
    if (rating >= 3) return 'Fair';
    return 'Poor';
  };

  const renderLoadingState = () => (
    <div className="loading-container">
      <div className="loading-spinner"></div>
      <p className="loading-text">Searching products...</p>
    </div>
  );

  const renderProductInfo = (product) => (
    <div className="product-info">
      <h3>{product.title}</h3>
      <div className="product-details">
        <span className="product-price">${product.price}</span>
        <div className={`product-rating ${getRatingColor(product.rating)}`}>
          <span className="rating-stars">
            {'★'.repeat(Math.floor(product.rating))}
            {product.rating % 1 >= 0.5 && '½'}
            {'☆'.repeat(5 - Math.ceil(product.rating))}
          </span>
          <span className="rating-value">{product.rating}</span>
          <span className="rating-label">{getRatingLabel(product.rating)}</span>
        </div>
      </div>
      <p className="product-description">{product.description}</p>
      <div className="product-tags">
        <span className="product-category">{product.category}</span>
        <span className={`product-stock ${product.stock > 10 ? 'stock-high' : product.stock > 0 ? 'stock-low' : 'stock-out'}`}>
          {product.stock > 10 ? 'In Stock' : product.stock > 0 ? 'Low Stock' : 'Out of Stock'}
        </span>
      </div>
    </div>
  );

  const renderResults = () => {
    if (loading && page === 0) {
      return renderLoadingState();
    }

    if (products.length === 0 && !loading) {
      return (
        <div className="no-results">
          <div className="no-results-icon">🔍</div>
          <p>No products found</p>
          <p className="no-results-suggestion">Try different keywords or check your spelling</p>
        </div>
      );
    }

    return (
      <div className="results-container">
        <div className="results-header">
          <span className="results-count">{products.length} products found</span>
        </div>
        <ul className="results-list">
          {products.map((product) => (
            <li key={product.id} className={`result-item ${getRatingColor(product.rating)}`}>
              <div className="product-image-container">
                <img src={product.thumbnail} alt={product.title} className="product-thumbnail" />
              </div>
              {renderProductInfo(product)}
            </li>
          ))}
        </ul>
        {hasMore && (
          <button 
            onClick={handleLoadMore} 
            className="load-more-btn"
            disabled={loading}
          >
            {loading ? (
              <>
                <span className="load-more-spinner"></span>
                Loading...
              </>
            ) : (
              'Load More'
            )}
          </button>
        )}
      </div>
    );
  };

  return (
    <>
      <div className="company-header">
        <div className="company-logo"><img src={logoImg} alt="Clinikally Logo" className="company-logo-img" /></div>
        <h1 className="company-name">Clinikally</h1>
        <h2 className="search-title">Discover Your Perfect Products</h2>
      </div>
      <div className="autocomplete-container">
        <div className="search-wrapper">
          <div className="input-wrapper">
            <span className="search-icon">🔍</span>
            <input
              type="text"
              value={inputValue}
              onChange={handleInputChange}
              placeholder="Search Products..."
              className="search-input"
            />
          </div>
          {inputValue.length > 0 && (
            <button 
              className="clear-button"
              onClick={handleClear}
              title="Clear search"
            >
              <span className="clear-icon">×</span>
            </button>
          )}
        </div>

        {error && (
          <div className="error-message">
            <span className="error-icon">⚠️</span>
            {error}
          </div>
        )}

        {inputValue.length >= 2 && renderResults()}
      </div>
    </>
  );
};

export default Autocomplete; 