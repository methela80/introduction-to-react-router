import { useLoaderData, useNavigate, useParams } from "react-router-dom";

const PostDetails = () => {
    const post = useLoaderData();
    const navigate = useNavigate();
    const {postId} = useParams();
    const {id, title, body} = post;

    console.log(postId)

    const handleGoBack = () =>{
        navigate(-1);

    }
    return (
        <div>
            <h2>Here are all details of posts</h2>
            <h1>post id : {id}</h1>
            <h3>Title of the Post : {title}</h3>
            <h6>{body}</h6>
            <button onClick={handleGoBack}>Go back</button>
            
        </div>
    );
};

export default PostDetails;