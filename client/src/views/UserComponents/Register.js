import React from 'react'

const Register = () => {
    return (

<div class="reg_form">
    
<h1>Register User</h1>

<form class='register_inputs'>

<div class="userInfo">
<h3>Username</h3>
<input type="text"/>
<h3>Password</h3>
<input type="text"/>
<h3>Re-input Password</h3>
<input type="text"/>
<h3>Email</h3>
<input type="text"></input>
<h3>First Name</h3>
<input type="text"></input>
<h3>Last Name</h3>
<input type="text"></input>
<h3>Age</h3>
<input type="number"></input>
</div>

<h2>Billing Information</h2>

<div class="billingInfo">
<h3>Address</h3>
<input type="text"></input>
<h3>Zipcode</h3>
<input type="text"></input>
<h3>Country</h3>
<input type="text"></input>
<h3>Card Number</h3>
<input type="number"></input>
<h3>Card Expiry Date</h3>
<input type="number"></input>
<h3>Card Security Code</h3>
<input type="number"></input>
</div>

<button class="reg_submit_button">SUBMIT</button>

</form>

</div>

    )}

export default Register;