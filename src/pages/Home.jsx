import { useEffect, useState } from 'react';
import { getUsers, deleteUser } from '../services/api';
import UserList from '../components/UserList';

const Home = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const loadUsers = async () => {
    setLoading(true);
    setError('');
    try {
      const response = await getUsers();
      setUsers(response.data);
    } catch (err) {
      setError(err?.response?.data?.message || 'Unable to load users. Please make sure the backend is running.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadUsers();
  }, []);

  const handleDelete = async (id) => {
    const confirmed = window.confirm('Delete this user?');
    if (!confirmed) return;

    try {
      await deleteUser(id);
      setUsers((prev) => prev.filter((user) => user.id !== id));
    } catch (err) {
      setError('Could not delete the user.');
    }
  };

  return (
    <section className="page-container">
      <div className="page-header">
        <h1>Users</h1>
        <p>View, edit, and remove users from the system.</p>
      </div>
      <UserList users={users} loading={loading} error={error} onDelete={handleDelete} />
    </section>
  );
};

export default Home;
