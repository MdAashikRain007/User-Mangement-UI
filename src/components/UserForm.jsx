import { useState, useEffect } from 'react';
import './UserForm.css';

const UserForm = ({ initialUser, onSubmit, submitLabel }) => {
  const [user, setUser] = useState({ name: '', email: '', phone: '' });

  useEffect(() => {
    if (initialUser) {
      setUser(initialUser);
    }
  }, [initialUser]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUser((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(user);
  };

  return (
    <form className="user-form" onSubmit={handleSubmit}>
      <label>
        Name
        <input
          type="text"
          name="name"
          value={user.name}
          onChange={handleChange}
          required
          placeholder="Enter full name"
        />
      </label>

      <label>
        Email
        <input
          type="email"
          name="email"
          value={user.email}
          onChange={handleChange}
          required
          placeholder="Enter email address"
        />
      </label>

      <label>
        Phone
        <input
          type="tel"
          name="phone"
          value={user.phone}
          onChange={handleChange}
          required
          placeholder="Enter phone number"
        />
      </label>

      <button type="submit" className="button button-primary">
        {submitLabel}
      </button>
    </form>
  );
};

export default UserForm;
