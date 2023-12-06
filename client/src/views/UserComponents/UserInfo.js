import React from 'react'
import Users from '../../components/Users';
import axios from 'axios'

const UserInfo = () => {
    return (

<div>

        <div class='user_info'>
        <h3>Your User Information</h3>
        </div>

        <div>
        <Users />
        </div>

</div>
    )

}

export default UserInfo;