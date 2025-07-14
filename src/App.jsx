

import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [hotels, setHotels] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState('');

  const fetchHotels = () => {
    setLoading(true);
    fetch('http://localhost:8000/api/hotels/')
      .then((res) => {
        if (!res.ok) throw new Error('Network response was not ok');
        return res.json();
      })
      .then((data) => {
        setHotels(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchHotels();
  }, []);


  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  return (
    <div className="container">
      <h1 style={{ fontSize: '3rem', fontWeight: 'bold', margin: '2rem 0 1rem', color: '#fff', textShadow: '0 2px 8px rgba(0,0,0,0.25)' }}>
        Find the Best Hotel
      </h1>
      <form
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: 12,
          background: '#fff',
          borderRadius: 12,
          boxShadow: '0 2px 16px rgba(0,0,0,0.08)',
          padding: 20,
          margin: '0 auto 32px',
          maxWidth: 900,
          alignItems: 'center',
          justifyContent: 'center',
        }}
        onSubmit={e => e.preventDefault()}
      >
        <input type="text" placeholder="Location" style={{ flex: 2, minWidth: 120, padding: 10, borderRadius: 6, border: '1px solid #ccc' }} />
        <input type="date" placeholder="Check In" style={{ flex: 1, minWidth: 120, padding: 10, borderRadius: 6, border: '1px solid #ccc' }} />
        <input type="date" placeholder="Check Out" style={{ flex: 1, minWidth: 120, padding: 10, borderRadius: 6, border: '1px solid #ccc' }} />
        <select style={{ flex: 1, minWidth: 100, padding: 10, borderRadius: 6, border: '1px solid #ccc' }}>
          <option>Rooms</option>
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
        </select>
        <select style={{ flex: 1, minWidth: 100, padding: 10, borderRadius: 6, border: '1px solid #ccc' }}>
          <option>Adults</option>
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
        </select>
        <button type="submit" style={{ flex: 1, minWidth: 120, padding: 12, borderRadius: 6, background: '#43b649', color: '#fff', fontWeight: 'bold', border: 'none', fontSize: 16, cursor: 'pointer' }}>
          Search
        </button>
      </form>
      {loading && <p>Loading...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <ul>
        {hotels
          .filter((hotel) =>
            hotel.name.toLowerCase().includes(search.toLowerCase()) ||
            hotel.city.toLowerCase().includes(search.toLowerCase())
          )
          .map((hotel) => (
            <li key={hotel.id}>
              <strong>{hotel.name}</strong> - {hotel.city}
              <br />
              <small>{hotel.address}</small>
              <p>{hotel.description}</p>
            </li>
          ))}
      </ul>
    </div>
  );
}

export default App;
