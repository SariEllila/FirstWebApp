import React, {useState, useEffect} from 'react'

const LogIn = () => {

    const [login, setLogin] = useState('');
    
    return (

        <div>

        <div>

<form class="loginForm">
<h3>Username</h3>
        <input type="text"></input>
<h3>Password</h3>
        <input type="text"></input>
<button>LOG IN</button>
</form>


        </div>

<h2>Not a member?</h2>
    <button>CLICK TO REGISTER</button>

    </div>

    )}

    export default LogIn;