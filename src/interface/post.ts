export interface Post {
  id: string;
  place: string;
  content: string;
  postImg: string;
  comments?: PostComment[];
  likes: PostLikes[];
  author: Author;
  createAt?: string;
}
export interface Author {
  email: string;
  id: string;
  userImg: string;
  username: string;
}
export interface PostComment {
  id: string;
  content: string;
  author: PostAuthor;
}

export interface PostAuthor {
  id: string;
  username: string;
}

export interface PostLikes {
  id: string;
  user: PostAuthor;
}

export interface PostCreate {
  postImg: File | null;
  place?: string;
  content: string;
}
