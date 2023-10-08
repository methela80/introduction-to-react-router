import { useLoaderData } from "react-router-dom";
import User from "../User/User";
import './Users.css';

const Users = () => {
    const users = useLoaderData();
    console.log(users)
  return (
    <div>
      <h2>Our users: {users.length}</h2>
      <ul>
        <li>Rigoo</li>
        <li>Rigoo</li>
        <li>Rigoo</li>
      </ul>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur,
        sit.
      </p>
      <div className="users">
        {
            users.map(user => <User key={user.id} user={user}></User> )
        }
      </div>
    </div>
  );
};

export default Users;
