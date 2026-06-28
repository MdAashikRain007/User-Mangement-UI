import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import UserForm from '../components/UserForm';
import { createUser } from '../services/api';

const AddUser = () => {
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleCreate = async (user) => {
    setLoading(true);
    setError('');

    try {
      await createUser(user);
      navigate('/');
    } catch (err) {
      setError(err?.response?.data?.message || 'Unable to save user. Make sure the backend is running and try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="page-container">
      <div className="page-header">
        <h1>Add User</h1>
        <p>Enter the new user information and save.</p>
      </div>
      {error && <p className="status-message error">{error}</p>}
      <UserForm submitLabel={loading ? 'Saving...' : 'Save User'} onSubmit={handleCreate} />
    </section>
  );
};

export default AddUser;
