
import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [hotels, setHotels] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [form, setForm] = useState({ name: '', city: '', address: '', description: '' });
  const [submitting, setSubmitting] = useState(false);

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

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitting(true);
    setError(null);
    fetch('http://localhost:8000/api/hotels/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    })
      .then((res) => {
        if (!res.ok) throw new Error('ثبت هتل موفق نبود');
        return res.json();
      })
      .then(() => {
        setForm({ name: '', city: '', address: '', description: '' });
        fetchHotels();
      })
      .catch((err) => setError(err.message))
      .finally(() => setSubmitting(false));
  };

  return (
    <div className="container">
      <h1>Hotel List</h1>
      <form onSubmit={handleSubmit} style={{ marginBottom: 24 }}>
        <input name="name" value={form.name} onChange={handleChange} placeholder="Hotel Name" required />{' '}
        <input name="city" value={form.city} onChange={handleChange} placeholder="City" required />{' '}
        <input name="address" value={form.address} onChange={handleChange} placeholder="Address" required />{' '}
        <input name="description" value={form.description} onChange={handleChange} placeholder="Description" />{' '}
        <button type="submit" disabled={submitting}>Add Hotel</button>
      </form>
      {loading && <p>Loading...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <ul>
        {hotels.map((hotel) => (
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
