import { ArrowRight } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';

export default function Login() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: '', password: '' });
  const [error, setError] = useState('');

  const submit = (event) => {
    event.preventDefault();
    const user = JSON.parse(localStorage.getItem('eventra-user') || 'null');
    if (!user || user.email !== form.email || user.password !== form.password) {
      setError('Please use a valid saved account or create one first.');
      return;
    }
    navigate('/bookings');
  };

  return (
    <div className="page-shell container-eventra auth-page">
      <div className="auth-panel">
        <p className="eyebrow">Welcome back</p>
        <h1>Sign in to <em>Eventra.</em></h1>
        <form onSubmit={submit}>
          <label>
            Email
            <input type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
          </label>
          <label>
            Password
            <input type="password" value={form.password} onChange={(e) => setForm({ ...form, password: e.target.value })} />
          </label>
          {error && <p className="form-error">{error}</p>}
          <button className="button button-gold" type="submit">Sign in <ArrowRight size={15} /></button>
        </form>
        <p className="auth-switch">Don’t have an account? <Link to="/signup">Create account</Link></p>
      </div>
    </div>
  );
}