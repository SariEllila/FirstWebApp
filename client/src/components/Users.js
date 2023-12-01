import {useEffect, useState} from 'react'
import axios from 'axios'

function Users() {

        const {users, setUsers} = useState([])
    
    const fetchUsers = async () => {
        try {
            let res = await axios.get('http://localhost:4040/users')
            console.log(res);
        } catch (error) {
            console.log(error);
        }
    }
    
    useEffect(()=>{
    fetchUsers()
    },[])
    
    
      return (
        <div>{users}</div>
      )

}


export default Users;