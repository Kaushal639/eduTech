import React, { useState} from 'react';
import './signup.css';

function Signupform() {

  const [Username, setUsername] = useState('');
  const [Email, setEmail] = useState('');
  const [Password, setPassword] = useState('');
  const [Course, setCourse] = useState('');
  const [City, setCity] = useState('');
  const [College, setCollege] = useState('');

  const submithandler = (e) => {
    e.preventDefault();

    const Adduser = { Username, Email, Password, Course, City, College };
    const Storeddata = JSON.parse(localStorage.getItem('Userdata')) || [];
    Storeddata.push(Adduser);
    localStorage.setItem('Userdata', JSON.stringify(Storeddata));

    console.log(Adduser);
    alert('Registration Successful!');

   
    
};
  

  return (
    <div className="signup-container">
      <h2>Sign Up</h2>

      <div className="form-group">
        <label htmlFor="username">Username</label>
        
        <input type="text" id="username" onChange={e => setUsername(e.target.value)} />
      </div>

      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input type="email" id="email" onChange={e => setEmail(e.target.value)} />
      </div>

      <div className="form-group">
        <label htmlFor="password">Password</label>
        <input type="password" id="password" onChange={e => setPassword(e.target.value)} />
      </div>

      <div className="form-group">
        
        <select id="course" onChange={e => setCourse(e.target.value)}>
          <option value="">Select Course</option>
          <option value="btech">B.Tech</option>
          <option value="mca">MCA</option>
          <option value="bca">BCA</option>
          <option value="mba">MBA</option>
        </select>
      </div>

      <div className="form-group">
        
        <select id="city" onChange={e => setCity(e.target.value)}>
          <option value="">Select City</option>
          <option value="bareilly">Bareilly</option>
          <option value="delhi">Delhi</option>
          <option value="lucknow">Lucknow</option>
          <option value="mumbai">Mumbai</option>
        </select>
      </div>

      <div className="form-group">
        
        <select id="college" onChange={e => setCollege(e.target.value)}>
          <option value="">Select College</option>
          <option value="itm">ITM College</option>
          <option value="mit">MIT</option>
          <option value="amity">Amity University</option>
          <option value="du">Delhi University</option>
        </select>   
        <button onClick={submithandler}>Register</button>
      </div>
 
  
    </div>
  );
}

export default Signupform;
