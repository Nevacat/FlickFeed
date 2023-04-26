import React, {useState} from 'react';
import UploadImg from '../../components/CreatePosts/UploadImg';
import * as S from './style';
import SubmitBtn from '../../components/CreatePosts/Btn';
import { useMutation } from 'react-query';
import { createPost } from '../../api/data';
import { PostCreate } from '../../interface/post';
import { useNavigate } from 'react-router';
function CreatePost() {
  const navigate = useNavigate()
  const { mutate } = useMutation((formData:FormData) => createPost(formData),{
    onSuccess: ()=>{
      navigate(-1)
    }
  });
  const [post, setPost] = useState<PostCreate>({postImg: null , place:'', content:''})

  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setPost((Post) => ({ ...Post, [name]: value }));
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const {postImg, place, content} = post;
    const formData = new FormData();

    formData.append('postImg', postImg!);
    formData.append('place', place!);
    formData.append('content', content);

    mutate(formData);
  }

  return (
    <S.Form onSubmit={onSubmit}>
      <UploadImg setPost={setPost}/>
      <div>
        <S.Input placeholder='이곳은 어딘가요?' name='place' onChange={onChange}/>
        <S.TextArea placeholder='내용' name='content' onChange={onChange}/>
      </div>
      <SubmitBtn/>
    </S.Form>
  );
}

export default CreatePost;
