import { useLoaderData } from "react-router-dom";

const UserDetails = () => {
    const user = useLoaderData();
    const {name, website} = user;
    return (
        <div>
            <h2>Details about user</h2>
            <p> user name: {name}</p>
            <p>Website: {website}</p>
            
        </div>
    );
};

export default UserDetails;