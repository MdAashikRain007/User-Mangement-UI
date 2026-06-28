import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import UserForm from '../components/UserForm';
import { getUserById, updateUser } from '../services/api';

const EditUser = () => {
  const { id } = useParams();
  const navigate = useNavigate();
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

  const handleUpdate = async (updatedUser) => {
    setError('');
    try {
      await updateUser(id, updatedUser);
      navigate('/');
    } catch (err) {
      setError(err?.response?.data?.message || 'Unable to update user. Make sure the backend is running and try again.');
    }
  };

  if (loading) return <p className="status-message">Loading user details...</p>;
  if (error) return <p className="status-message error">{error}</p>;
  if (!user) return <p className="status-message">User not found.</p>;

  return (
    <section className="page-container">
      <div className="page-header">
        <h1>Edit User</h1>
        <p>Change the user details and save the updates.</p>
      </div>
      <UserForm initialUser={user} submitLabel="Update User" onSubmit={handleUpdate} />
    </section>
  );
};

export default EditUser;
