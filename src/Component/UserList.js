import React, {useState, useEffect} from 'react';
import axios from "axios";
import User from "./User";

const UserList = () => {
    const [users, setUsers] = useState([])
    useEffect(()=>{
        async function getUsers() {
            try {
              const response = await axios.get("https://jsonplaceholder.typicode.com/users");
             setUsers(response.data);
            } 
            catch (error) {
            }
          }
          getUsers();
    }, []);
    return (
        <div className="userList">
            {users.map((e)=> (<User use={e}/>))}
        </div>
    )
}

export default UserList
