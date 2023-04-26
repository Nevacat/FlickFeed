export interface Post {
  id: number;
  place: string;
  content: string;
  postImage: string;
  likes: Like[];
}

export interface UserType {
  id: number;
  username: string;
}

export interface Like {
  userId: number;
  user: User;
}

export interface PostLike {
  Id: string;
  user: User;
}

export interface PostComment {
  id: string;
  content: string;
  author: User;
}

export interface PostCommentsParams {
  postId: string;
  content: string;
}

export interface User {
  id: string;
  username: string;
}

export interface Props {
  post: Post;
}
