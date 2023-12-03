import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// import { useHistory } from 'react-router-dom';

const LogIn = () => {

//   const history = useHistory();

//   const [formData, setFormData] = useState({
//     username: '',
//     password: '',
//     passwordConf: ''
//   });

//   function handleChange(event) {
//     const { name, value } = event.target;
//     setFormData((prevFormData) => ({
//       ...prevFormData,
//       [name]: value,
//     }));
//   }

//   function handleSubmit(event) {
//     event.preventDefault();
//     if (formData.password === formData.passwordConf) {
//       history.push('/user');
//     } else {
//       alert('Passwords do not match');
//     }
//   }

  return (
    <div className="loginAll">
      <h2>If you're already a user, enter login details:</h2>
      <form className="loginForm" 
//       onSubmit={handleSubmit}
      >
        <h3 className="login_items">Username</h3>
        <input
          type="text"
        //   onChange={handleChange}
        //   name="username"
        //   value={formData.username}
        />
        <h3 className="login_items">Password</h3>
        <input
          type="password"
        //   onChange={handleChange}
        //   name="password"
        //   value={formData.password}
        />
        <h3 className="login_items">Password Confirmation</h3>
        <input
          type="password"
        //   onChange={handleChange}
        //   name="passwordConf"
        //   value={formData.passwordConf}
        />
        <button className="login_items">LOG IN</button>
      </form>

      <div className="notMember">
        <h2>Not a member?</h2>
        <Link to="/register"><button>CLICK TO REGISTER</button></Link>
      </div>
    </div>
  );
};

export default LogIn;