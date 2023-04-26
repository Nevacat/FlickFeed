import axios from 'axios';
import { useMutation } from 'react-query';
import * as S from './style';
import { deletePost } from '../../../api/data';
import { useFeed } from '../../../context/FeedContext';

function DeleteModal() {
  const { isDeleteModal, setIsDeleteModal, deleteTargetPostId } = useFeed();
  const { mutate, isLoading } = useMutation(deletePost, {
    onSuccess: (res) => {
      console.log('mutation Response: ', { res });
    },
    onError: (res) => {
      console.log('error', { res });
    },
  });
  const handleDeletePost = (postId) => {
    sessionStorage.setItem('user', JSON.stringify({ id: postId }));

    mutate(postId);
  };
  return (
    // <Container>
    <S.DeleteModal toggle={isDeleteModal}>
      <S.Warning>
        정말 삭제하시겠습니까? <br />
        삭제된 게시물은 복구되지 않습니다
      </S.Warning>
      <S.ButtonGroup>
        <S.SubmitButton
          type='submit'
          onClick={() => handleDeletePost(deleteTargetPostId)}
        >
          삭제
        </S.SubmitButton>
        <S.DefaultButton type='button' onClick={() => setIsDeleteModal(false)}>
          취소
        </S.DefaultButton>
      </S.ButtonGroup>
    </S.DeleteModal>
  );
  // </Container>
}

export default DeleteModal;
