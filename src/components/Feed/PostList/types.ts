export type Post = {
  id: number;
  place: string;
  content: string;
  postImage: string;
  likes: Like[];
};

export type User = {
  id: number;
  username: string;
};

export type Like = {
  userId: number;
  user: User;
};

export type PostLike = {
  Id: string;
  user: User;
};

export type PostComment = {
  id: string;
  content: string;
  author: User;
};

export type PostCommentsParams = {
  postId: string;
  content: string;
};
