import React from 'react';
import * as S from './style';
import { StyledRxCross2 } from './style';
import { useFeed } from '../../../context/FeedContext';
import { getComments } from '../../../api/data';
import { useQuery } from 'react-query';
function CommentModal() {
  const { isCommentModal, setIsCommentModal, commentTargetPostId, posts } =
    useFeed();
  const {
    isCommentLoading,
    data: comments,
    isError,
  } = useQuery(
    ['comments', commentTargetPostId],
    () => getComments(commentTargetPostId),
    {
      select: (post) => {
        post.comments;
        return post.comments;
      },
    }
  );

  return (
    <S.ModalOverlay>
      <S.Modal>
        <div style={{ color: 'white' }}>
          {comments &&
            comments.map((comment) => (
              <S.CommentWrapper key={comment.id}>
                <h4 style={{ fontSize: '9px' }}>
                  작성자: {comment.author.username}
                </h4>
                <h1>{comment.content} </h1>
              </S.CommentWrapper>
            ))}
        </div>

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
