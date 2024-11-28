import React, { useState, useEffect } from 'react';
import './App.css';

// Render Props Pattern
const DataFetcher = ({ endpoint, render }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(endpoint);
        const result = await response.json();
        setData(result);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };
    fetchData();
  }, [endpoint]);

  if (loading) return <p>Loading...</p>;
  return render(data);
};

// HOC Pattern
const withLayoutToggle = (WrappedComponent) => {
  return (props) => {
    const [isGrid, setIsGrid] = useState(true);

    const toggleLayout = () => setIsGrid(!isGrid);

    return (
      <div>
        <button onClick={toggleLayout}>
          Switch to {isGrid ? "List" : "Grid"} View
        </button>
        <WrappedComponent isGrid={isGrid} {...props} />
      </div>
    );
  };
};

// Compound Pattern
function PhotoExplorer({ children }) {
  const [query, setQuery] = useState("");

  return React.Children.map(children, (child) => {
    if (typeof child.type === "function") {
      return React.cloneElement(child, { query, setQuery });
    }
    return child;
  });
}

const SearchBar = ({ query, setQuery }) => (
  <input
    type="text"
    placeholder="Search photos..."
    value={query}
    onChange={(e) => setQuery(e.target.value)}
  />
);

const PhotoList = ({ photos, isGrid }) => (
  <div className={isGrid ? "photo-grid" : "photo-list"}>
    {photos.map((photo) => (
      <div className="photo-item" key={photo.id}>
        <img src={photo.urls.small} alt={photo.alt_description} />
        <p>{photo.alt_description || "No description available"}</p>
      </div>
    ))}
  </div>
);

// Hook Pattern
const usePhotos = (query) => {
  const [endpoint, setEndpoint] = useState(
    "https://api.unsplash.com/photos?client_id=qAxviPZRzgcD3IYkICvWeUxpGkrE80mpDWDVOxvW_PE"
  );

  useEffect(() => {
    if (query.trim() === "") {
      setEndpoint(
        "https://api.unsplash.com/photos?client_id=qAxviPZRzgcD3IYkICvWeUxpGkrE80mpDWDVOxvW_PE"
      );
    } else {
      setEndpoint(
        `https://api.unsplash.com/search/photos?query=${query}&client_id=qAxviPZRzgcD3IYkICvWeUxpGkrE80mpDWDVOxvW_PE`
      );
    }
  }, [query]);

  return endpoint;
};

// Combine All Patterns
function App() {
  const [query, setQuery] = useState("");
  const endpoint = usePhotos(query);

  const PhotoListWithToggle = withLayoutToggle(PhotoList);

  return (
    <PhotoExplorer>
      <h1>PhotoExplorer</h1>
      <SearchBar query={query} setQuery={setQuery} />
      <DataFetcher
        endpoint={endpoint}
        render={(data) =>
          query.trim()
            ? <PhotoListWithToggle photos={data.results || []} />
            : <PhotoListWithToggle photos={data} />
        }
      />
    </PhotoExplorer>
  );
}

export default App;
