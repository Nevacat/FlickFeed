import { useEffect, useState } from 'react';
import { QueryClient, useMutation } from 'react-query';
import * as S from './style';
import { UserInput } from '../../../interface/user';
import { editUser } from '../../../api/data';

type ModalProps = {
  isModalOpen: boolean;
  setIsModalOpen: (isModalOpen: boolean) => void;
  user: { user: { username: string; userInfo: string } };
};

function UserInfoModal({ isModalOpen, setIsModalOpen, user }: ModalProps) {
  const queryClient = new QueryClient();

  const [userInput, setUserInput] = useState<UserInput>({
    username: user?.user.username,
    userInfo: user?.user.userInfo,
  });

  useEffect(() => {
    setUserInput((prevState) => ({
      ...prevState,
      username: user?.user.username,
      userInfo: user?.user.userInfo,
    }));
  }, [isModalOpen]);

  const { mutate } = useMutation(editUser, {
    onSuccess: (data) => {
      console.log(data);
      queryClient.setQueryData(['user'], data);
      window.location.reload();
    },
    onError: (error) => {
      console.log(error);
    },
  });

  const changeInputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    console.log(name, value);
    setUserInput((prevState) => ({ ...prevState, [name]: value }));
  };

  const submitInputHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    mutate(userInput);
    setUserInput({ username: '', userInfo: '' });
  };

  return (
    <S.Modal toggle={isModalOpen}>
      <S.Form onSubmit={submitInputHandler}>
        <S.inputContainer>
          <S.SingleInput>
            <label style={{ textAlign: 'left' }} htmlFor="username">
              닉네임
            </label>
            <input
              name="username"
              type="text"
              value={userInput.username}
              id="username"
              onChange={changeInputHandler}
            />
          </S.SingleInput>

          <S.SingleInput>
            <label style={{ textAlign: 'left' }} htmlFor="userInfo">
              상태 메시지
            </label>
            <input
              name="userInfo"
              type="text"
              value={userInput.userInfo}
              id="userInfo"
              onChange={changeInputHandler}
              style={{}}
            />
          </S.SingleInput>
        </S.inputContainer>

        <S.ButtonGroup>
          <S.SubmitButton type="submit">변경</S.SubmitButton>
          <S.DefaultButton
            type="button"
            onClick={() => setIsModalOpen(!isModalOpen)}
          >
            취소
          </S.DefaultButton>
        </S.ButtonGroup>
      </S.Form>
    </S.Modal>
  );
}

export default UserInfoModal;
