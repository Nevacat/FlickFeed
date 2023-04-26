interface Post {
  id: string;
  place: string;
  content: string;
  postImg: string;
  comment?: PostComment[];
  likes: PostLikes[];
}

interface PostComment {
  id: string;
  comment: string;
  author: PostAuthor;
}

interface PostAuthor {
  id: string;
  username: string;
}

interface PostLikes {
  id: string;
  user: PostUser;
}

interface PostUser {
  id: string;
  username: string;
}

export interface PostCreate {
  postImg: File | null;
  place?: string;
  content: string;
}