import { useParams } from "react-router";

const BlogDetails = () => {
  const { id } = useParams();

  return (
    <div className="blog-details">
      <h3>Blog Details</h3>
      <p>Ref : {id}</p>
    </div>
  );
};

export default BlogDetails;
