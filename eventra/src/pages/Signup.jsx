import { ArrowRight } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';

export default function Signup() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ name: '', email: '', password: '', confirmPassword: '' });
  const [error, setError] = useState('');

  const submit = (event) => {
    event.preventDefault();
    if (!form.name || !form.email || !form.password || form.password !== form.confirmPassword) {
      setError('Please complete all fields and make sure passwords match.');
      return;
    }
    localStorage.setItem('eventra-user', JSON.stringify({ name: form.name, email: form.email, password: form.password }));
    navigate('/bookings');
  };

  return (
    <div className="page-shell container-eventra auth-page">
      <div className="auth-panel">
        <p className="eyebrow">Create account</p>
        <h1>Join <em>Eventra.</em></h1>
        <form onSubmit={submit}>
          <label>
            Name
            <input type="text" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
          </label>
          <label>
            Email
            <input type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
          </label>
          <label>
            Password
            <input type="password" value={form.password} onChange={(e) => setForm({ ...form, password: e.target.value })} />
          </label>
          <label>
            Confirm password
            <input type="password" value={form.confirmPassword} onChange={(e) => setForm({ ...form, confirmPassword: e.target.value })} />
          </label>
          {error && <p className="form-error">{error}</p>}
          <button className="button button-gold" type="submit">Create account <ArrowRight size={15} /></button>
        </form>
        <p className="auth-switch">Already have an account? <Link to="/login">Sign in</Link></p>
      </div>
    </div>
  );
}