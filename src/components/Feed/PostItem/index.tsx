import PostHeader from '../PostHeader';
import UserImg from '../UserImg';
import LikeBtn from '../LikeBtn';
import PostBody from '../PostBody';
import * as S from './style';
import { StyledFaRegComment } from './style';
import { useFeed } from '../../../context/FeedContext';
import { useQuery } from 'react-query';
import { getPosts } from '../../../api/data';
import { Post } from '../../../interface/post';
import Loading from '../../Common/Loading';

interface PostItemProp {
  post: Post;
}

function PostItem({ post }: PostItemProp) {
  const { setIsCommentModal, setCommentTargetPostId } = useFeed();
  const { data: postContents, isLoading: isContentLoading, isError } = useQuery('posts', getPosts);

  if (isContentLoading) {
    return <Loading />;
  }

  return (
    <S.PostItem>
      <S.TopSection>
        <UserImg size="small" url={post.author.userImg} />

        <PostHeader post={post} />
      </S.TopSection>

      <S.PostImg
        style={{
          backgroundImage: `url(${post.postImg})`,
        }}
      />

      <S.Reaction>
        <LikeBtn postId={post.id} />
        <StyledFaRegComment
          onClick={() => {
            setCommentTargetPostId(post.id);
            setIsCommentModal(true);
          }}
        />
      </S.Reaction>

      <PostBody postId={post.id} postContent={post.content} />
    </S.PostItem>
  );
}

export default PostItem;
