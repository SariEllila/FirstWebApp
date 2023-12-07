import React from 'react'
import axios from 'axios'
import Users from '../components/Users';


const EditUserInfo = () => {
return (

<div class="edit_user_info">

<h1>Edit User Information</h1>

<form class='edit_user_info'>

<div class="userInfo_edit">
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

<div class="billingInfo_edit">
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

<button>SUBMIT</button>

</form>

</div>

)
 }

export default EditUserInfo;