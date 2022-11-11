import "./Post.css";
function Post(props) {
  const { id, title, userId, text } = props;

  return (
    <div className="post">
      <div>{id}</div>
      <h1>{title}</h1>
      <h3>{text}</h3>
      <h3>Userid:{userId}</h3>
    </div>
  );
}
export default Post;
