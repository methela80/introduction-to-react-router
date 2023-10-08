import { Link, NavLink } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div>
            <nav>
                <span>My website</span>
                <Link to="/">Home</Link>
                <NavLink to="/About">About</NavLink>
                {/* <Link to="/About">About</Link> */}
                <NavLink to="/posts">Posts</NavLink>
                {/* <Link to="/posts">Posts</Link> */}
                <NavLink to="/Contact">Contact</NavLink>
                {/* <Link to="/Contact">Contact</Link> */}
                <NavLink to="/Users">Users</NavLink>
                {/* <Link to="/Users">Users</Link> */}
                
            </nav>
            
        </div>
    );
};

export default Header;