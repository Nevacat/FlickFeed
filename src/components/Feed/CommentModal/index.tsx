import * as S from './style';
import { StyledRxCross2 } from './style';
import { useFeed } from '../../../context/FeedContext';
import { getComments } from '../../../api/data';
import { useQuery } from 'react-query';
import { PostComment } from '../../../interface/post';
function CommentModal() {
  const { setIsCommentModal, commentTargetPostId } = useFeed();
  const {
    data: comments,
    isLoading: isCommentLoading,
    isError,
  } = useQuery(['comments', commentTargetPostId], () => getComments(commentTargetPostId), {
    select: (post) => {
      post.comments;
      return post.comments;
    },
  });

  return (
    <S.ModalOverlay>
      <S.Modal>
        {comments &&
          comments.map((comment: PostComment) => (
            <S.CommentWrapper key={comment.id}>
              <S.Author>작성자: {comment.author.username}</S.Author>
              <h1>{comment.content} </h1>
            </S.CommentWrapper>
          ))}

        <StyledRxCross2
          onClick={() => {
            setIsCommentModal(false);
          }}
        />
      </S.Modal>
    </S.ModalOverlay>
  );
}

export default CommentModal;
