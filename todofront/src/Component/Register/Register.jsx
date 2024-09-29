import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Register.css'
export default function Register() {
  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')
  const [username,setUsername]=useState('')
  const navigate = useNavigate();
  const validatePassword = (password) => {
    const passwordRegex = /^(?=.*[0-9])(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;
    return passwordRegex.test(password);
  };
  const handleSubmit= async (e)=>{
    e.preventDefault();
    if (!validatePassword(password)) {
      alert("Le mot de passe doit contenir au moins 8 caractères, un chiffre et un caractère spécial.");
      return;
    }
    try{
       const res = await axios.post('http://localhost:3000/auth/register', {
        username,
        email,
        password
      });
      console.log('Register successful', res.data);
      // Redirection après "connexion réussie"
      navigate('/login');

    }
    catch(err) {
      console.error(err);

      alert("Une erreur s'est produite lors de l'inscription. Vérifiez les données et réessayez.");
    }
  }
  
  return (
    <>
    <div className='container'>
      <h2 style={{textAlign:'center'}}>Register</h2>
    <form onSubmit={handleSubmit}>
    <div>
      <label>Username:</label>
      <input type='text'className='INPUT' value={username} onChange={(e)=>setUsername(e.target.value)} required></input>
     </div>
     <div>
      <label>Email:</label>
      <input type='email' className='INPUT' value={email} onChange={(e)=>setEmail(e.target.value)} required></input>
     </div>
     <div>
      <label>Password:</label>
      <input type='password' className='INPUT' value={password} onChange={(e)=>setPassword(e.target.value)} required></input>
     </div>
     <button type='submit'>Register</button>
    </form>
     </div>
    </>
   )
}

