import PostItem from '../../Feed/PostItem';
import * as S from './style';
import { useFeed } from '../../../context/FeedContext';
import { Post } from '../../../interface/post';
function PostList() {
  const { posts } = useFeed();
  const sortedPosts =
    posts &&
    posts.slice().sort((a: Post, b: Post) => {
      const dateA = new Date(a.createAt!);
      const dateB = new Date(b.createAt!);
      return dateB.getTime() - dateA.getTime();
    });
  return (
    <S.PostList>
      {posts &&
        sortedPosts.map((post: Post) => (
          <div key={post.id}>
            <PostItem post={post} />
          </div>
        ))}
    </S.PostList>
  );
}

export default PostList;
