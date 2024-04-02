import data from "../../data.json";
import Comment from "./Comment";

export default function CommentWithReplies() {
  return (
    <div className="flex flex-col gap-4">
      {data.comments.map((comment) => (
        <Comment
          key={comment.id}
          content={comment.content}
          createdAt={comment.createdAt}
          score={comment.score}
          user={comment.user}
          replies={comment.replies}
        />
      ))}
    </div>
  );
}
