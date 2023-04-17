import { rest } from 'msw';
import { Posts } from './constants/PostsData';

export const PostHandler = [
  // 모든 게시글 조회
  rest.get('/posts', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(Posts));
  }),

  // 단일 게시글 조회
  rest.get('/posts/:id', (req, res, ctx) => {
    const id = req.params.id;
    const post = Posts.find((post) => post.id === Number(id));
    if (!post) {
      return res(ctx.status(404), ctx.json({ message: 'Post not found' }));
    }
    return res(ctx.status(200), ctx.json(post));
  }),

  // 게시글 등록
  rest.post('/posts', async (req, res, ctx) => {
    const body = await req.json();
    if (!req.headers.get('Authorization')) {
      return res(ctx.status(401), ctx.json('forbidden'));
    }
    const user = JSON.parse(sessionStorage.getItem('user')||"{}")
    const newPost = {
      id:Posts.length+1,
      ...body,
      author:user,
      comment:[],
      likes:[]
    }
    console.log({ body });
    const payload = [...Posts, newPost];
    return res(ctx.status(201), ctx.json({ payload }));
  }),

  // 게시글 수정
  rest.put('/posts/:id', async (req, res, ctx) => {
    const body = await req.json();
    const id = req.params.id;
    const post = Posts.find((post) => post.id === Number(id));
    const { id: userId } = JSON.parse(sessionStorage.getItem('user') || '{}');
    if (post?.author.id !== userId) {
      return res(ctx.status(401), ctx.json('옳바른 유저가 아닙니다.'));
    }
    const updatePost = {
      ...post,
      ...body,
      updatedAt: new Date().toISOString(),
    };
    const updatedPosts = Posts.map((post) => (post.id === updatePost.id ? updatePost : post));
    return res(ctx.status(200), ctx.json(updatedPosts));
  }),

  // 게시글 삭제
  rest.delete('/posts/:id', async (req, res, ctx) => {
    const id = req.params.id;
    const post = Posts.find((post) => post.id === Number(id));
    const { id: userId } = JSON.parse(sessionStorage.getItem('user') || '{}');
    if (post?.author.id !== userId) {
      return res(ctx.status(401), ctx.json('옳바른 유저가 아닙니다.'));
    }
    return res(ctx.status(200), ctx.json({ message: '게시글이 삭제되었습니다.' }), ctx.json({ post }));
  }),

  // 좋아요
  rest.post('/posts/:id', (req, res, ctx) => {
    const id = req.params.id;
    const post = Posts.find((post) => post.id === Number(id));
    if (!post) {
      return res(ctx.status(404), ctx.json({ message: '게시글을 찾을 수 없습니다.' }));
    }
    const user = JSON.parse(sessionStorage.getItem('user') || '{}');
    const index = post.likes.findIndex((like) => like.user.id === user.id);
    if (index > -1) {
      post.likes.splice(index, 1);
    } else {
      post.likes.push({
        id: post.likes.length,
        user: {
          id: user.id,
          username: user.username
        }
      });
    }
    return res(ctx.status(200), ctx.json(post));
  }),
];
