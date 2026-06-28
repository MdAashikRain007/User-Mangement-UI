import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getUserById } from '../services/api';

const UserDetails = () => {
  const { id } = useParams();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const loadUser = async () => {
      try {
        const response = await getUserById(id);
        setUser(response.data);
      } catch (err) {
        setError(err?.response?.data?.message || 'Unable to load user details. Make sure the backend is running.');
      } finally {
        setLoading(false);
      }
    };

    loadUser();
  }, [id]);

  if (loading) return <p className="status-message">Loading user details...</p>;
  if (error) return <p className="status-message error">{error}</p>;
  if (!user) return <p className="status-message">User not found.</p>;

  return (
    <section className="page-container">
      <div className="page-header">
        <h1>User Details</h1>
        <p>Complete profile information for this user.</p>
      </div>
      <div className="details-card">
        <div className="details-row">
          <span className="label">Name</span>
          <span>{user.name}</span>
        </div>
        <div className="details-row">
          <span className="label">Email</span>
          <span>{user.email}</span>
        </div>
        <div className="details-row">
          <span className="label">Phone</span>
          <span>{user.phone}</span>
        </div>
        <Link to="/" className="button button-secondary details-back">
          Back to list
        </Link>
      </div>
    </section>
  );
};

export default UserDetails;
