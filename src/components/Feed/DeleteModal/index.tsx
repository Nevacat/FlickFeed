import axios from 'axios';
import { useMutation, useQuery } from 'react-query';
import * as S from './style';
import { deletePost, getMyPost, getPost } from '../../../api/data';
import { useFeed } from '../../../context/FeedContext';
import { Post } from '../../../interface/post';
function DeleteModal() {
  const { isDeleteModal, setIsDeleteModal, deleteTargetPostId } = useFeed();
  const refresh = () => window.location.reload();
  const { mutate, isLoading } = useMutation(deletePost);
  const { data: myPost, isLoading: isMyPostLoading } = useQuery('myPost', getMyPost, {
    select: (posts) => {
      return posts.map((post: Post) => post.id);
    },
  });

  const handleDeletePost = (postId: string) => {
    sessionStorage.setItem('user', JSON.stringify({ id: postId }));
    if (myPost.some((post: string) => post === postId)) {
      mutate(postId);
      alert('삭제되었습니다');
      refresh();
    } else {
      alert('자신이 작성한 게시물만 삭제할 수 있습니다');
    }
  };

  return (
    <S.DeleteModalOverlay>
      <S.DeleteModal toggle={isDeleteModal}>
        <S.Warning>
          정말 삭제하시겠습니까? <br />
          삭제된 게시물은 복구되지 않습니다
        </S.Warning>
        <S.ButtonGroup>
          <S.SubmitButton type="submit" onClick={() => handleDeletePost(deleteTargetPostId)}>
            삭제
          </S.SubmitButton>
          <S.DefaultButton type="button" onClick={() => setIsDeleteModal(false)}>
            취소
          </S.DefaultButton>
        </S.ButtonGroup>
      </S.DeleteModal>
    </S.DeleteModalOverlay>
  );
}

export default DeleteModal;
