import { useParams, Link, Outlet, useNavigate } from "react-router";
const BlogPost = () => {
    let { id } = useParams();
    let navigate = useNavigate();

    const goBack = () => {
        navigate("/blog")
    }

    return (
        <div>
            <h1 className="text-dark">Blog Post {id}</h1>
            <p>This is the content for blog post {id}.</p>
            <Link to={`/blog/${id}/comments`}>View Comments</Link>
            <Outlet />
            <br/>
            <button onClick={goBack}
            className="btn btn-warning mt-3">Back to Blog</button>
        </div>
    );
};

export default BlogPost;
