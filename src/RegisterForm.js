import React, { useState } from 'react';

export default function RegisterForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      setError('As senhas não correspondem');
      return;
    }
    console.log('Registrado com sucesso:', formData);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-lg shadow-md w-full max-w-md"
      >

        <h2 className="text-2xl font-bold text-center mb-6">Welcome to Onboard!</h2>
        <p className="text-sm text-gray-600 text-center mb-9">
          Let’s help to meet up your
          <br />
          tasks.
        </p>
        <input
          type="text"
          name="name"
          placeholder="Enter your full name"
          value={formData.name}
          onChange={handleChange}
          className="w-full p-3 mb-6 border rounded-lg"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Enter your Email"
          value={formData.email}
          onChange={handleChange}
          className="w-full p-3 mb-6 border rounded-lg"
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Enter Password"
          value={formData.password}
          onChange={handleChange}
          className="w-full p-3 mb-6 border rounded-lg"
          required
        />
        <input
          type="password"
          name="confirmPassword"
          placeholder="Confirm password"
          value={formData.confirmPassword}
          onChange={handleChange}
          className="w-full p-3 mb-6 border rounded-lg"
          required
        />
        <button
          type="submit"
          className="bg-blue-400 text-white w-full py-3 rounded-lg hover:bg-blue-400 transition-colors"
        >
          Registrar
        </button>

        <footer className="text-center mt-6">
          <p className="text-sm text-gray-600">
            Already have an account?{' '}
            <a href="/signin" className="text-blue-500 hover:text-blue-700">
              Sign In
            </a>
          </p>
        </footer>

      </form>
    </div>
  );
}
