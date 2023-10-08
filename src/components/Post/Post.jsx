import { Link, useNavigate } from 'react-router-dom';
import './post.css'
const Post = ({post}) => {

    const {id, title, body} = post;
    //useNavigate ---> hook using
    const navigate = useNavigate();

    const handleShowDetail = () =>{
        navigate(`/post/${id}`)
        
    }

    return (
        <div className='post-container'>
            <h2>post id: {id}</h2>
            <h3>post title: {title}</h3>
            <p>{body}</p>
            <Link to={`/post/${id}`}>Post Detail</Link>
            <Link to={`/post/${id}`}><button>Show Detail</button></Link>
            <button onClick={handleShowDetail}>Click to Show Details</button>
            
        </div>
    );
};

export default Post;