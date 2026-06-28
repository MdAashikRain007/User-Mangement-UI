import { Link } from 'react-router-dom';
import './UserList.css';

const UserList = ({ users, onDelete, loading, error }) => {
  if (loading) return <p className="status-message">Loading users...</p>;
  if (error) return <p className="status-message error">{error}</p>;
  if (!users.length) return <p className="status-message">No users found yet.</p>;

  return (
    <div className="user-grid">
      {users.map((user) => (
        <div key={user.id} className="user-card">
          <div className="user-card-header">
            <h3>{user.name}</h3>
            <span>{user.email}</span>
          </div>
          <p className="user-phone">Phone: {user.phone}</p>
          <div className="user-actions">
            <Link to={`/users/${user.id}`} className="button button-secondary">
              Details
            </Link>
            <Link to={`/edit/${user.id}`} className="button button-primary">
              Edit
            </Link>
            <button className="button button-danger" onClick={() => onDelete(user.id)}>
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default UserList;
