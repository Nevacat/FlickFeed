import axios from 'axios';
import { useEffect, useState } from 'react';
import { QueryClient, useMutation } from 'react-query';
import * as S from './style';

type UserInput = {
  username: string;
  userInfo: string;
};

type ModalProps = {
  isModalOpen: boolean;
  setIsModalOpen: () => void;
  user: { username: string; userInfo: string };
};

function Modal({ isModalOpen, setIsModalOpen, user }: ModalProps) {
  const queryClient = new QueryClient();

  const [userInput, setUserInput] = useState<UserInput>({
    username: user?.username,
    userInfo: user?.userInfo,
  });

  const editUser = async (input: UserInput) => {
    const response = await axios({
      method: 'PUT',
      url: '/users',
      headers: {
        'Content-Type': 'application/json',
        Authorization:
          'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywidXNlcm5hbWUiOiJhbGljZSIsImVtYWlsIjoidGVzdEBuYXZlci5jb20iLCJpYXQiOjE2ODE1MzY5MzAsImV4cCI6MTY4MTU0MDUzMH0.s0km3UHRLyTh8pR2sKxludFTbmRH_nNvvp0x_kDxpVI',
      },
      data: input,
    });
    return response.data;
  };

  useEffect(() => {
    setUserInput((prevState) => ({
      ...prevState,
      username: user?.username,
      userInfo: user?.userInfo,
    }));
  }, [isModalOpen]);

  const { mutate } = useMutation(editUser, {
    onSuccess: (data) => {
      console.log(data);
      queryClient.setQueryData('user', data);
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
            <label htmlFor="username">닉네임</label>
            <input
              name="username"
              type="text"
              value={userInput.username}
              id="username"
              onChange={changeInputHandler}
            />
          </S.SingleInput>

          <S.SingleInput>
            <label htmlFor="userInfo">상태 메시지</label>
            <input
              name="userInfo"
              type="text"
              value={userInput.userInfo}
              id="userInfo"
              onChange={changeInputHandler}
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

export default Modal;
