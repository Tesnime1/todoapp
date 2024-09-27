import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';
import axios from 'axios';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState(''); // Ajouter un état pour les erreurs
  const navigate = useNavigate(); 

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage('');
  
    try {
      const res = await axios.post('http://localhost:3000/auth/login', { email, password });
      console.log(res.data);
      
      // Vérifie que le token est présent dans la réponse
      if (res.data.token) {
        localStorage.setItem('token', res.data.token); // Stocke le token
        console.log('Login successful, token stored:', res.data.token);
        navigate('/user');
      }
    } catch (err) {
      console.error(err);
      setErrorMessage('Invalid email or password');
    }
  };
  

  return (
    <>  
      <div className='containerAuth'>
        <div className='container'>
      <h2 style={{textAlign:'center'}}>LOGIN</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email:</label>
          <input className='INPUT'
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div  >
          <label>Password:</label>
          <input className='INPUT'
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

      
        {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}

        <button type="submit">Log in</button>
      </form>

    
      <button onClick={() => navigate('/register')}>Créer un compte</button>
      </div>
      </div>
    </>
  );
}
