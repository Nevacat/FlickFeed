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
