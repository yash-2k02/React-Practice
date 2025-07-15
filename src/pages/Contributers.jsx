import { useEffect, useState } from 'react'
import axios from 'axios'
export default function Contributers() {
    const [users, setUsers] = useState([])

    useEffect(()=>{
        axios.get('https://dummyjson.com/users')
        .then((res)=> setUsers(res.data.users))
        .catch((err)=> console.log(err.message) )
    },[])

  return (
    <>
    <ul>
    {users.map((user)=> <li key={user.id}>{user.firstName} {user.lastName}</li>
    )}
    </ul>
    </>
  )
}
