import Header from "../components/Header";
function AllCommits({ comments }) {
  console.log(comments);
  return (
    <section className="list-group p-3">
      <Header/>
      {comments.map((comment, index) => {
        if (index % 2 === 0) {
          return (
            <div key={index} className="list-group-item text-bg-dark p-3">
              {comment.message}.
            </div>
          );
        }else{
          return (
            <div key={index} className="list-group-item  p-3">
              {comment.message}.
            </div>
          );
        }
      })}
    </section>
  );
}
export default AllCommits;
