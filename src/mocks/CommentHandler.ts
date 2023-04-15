import { rest } from 'msw';
import { Posts } from './constants/PostsData';

export const CommentHandler = [
  // 댓글 작성
  rest.post('/comments', async (req, res, ctx) => {
    const body = await req.json();
    const {postId, content} = body
    const user = JSON.parse(sessionStorage.getItem('user') || '{}');
    const post = Posts.find(post => post.id === Number(postId))
    if(!post){
      return res(ctx.status(404), ctx.json({message: '게시글을 찾을 수 없습니다.'}))
    }
    const newComment = {
      id: post.comments.length + 1,
      content,
      createAt: new Date().toISOString(),
      updateAt:new Date().toISOString(),
      author: user
    }
    post.comments.push(newComment)
    return res(ctx.status(200), ctx.json(post))
  }),
  
  // 댓글 수정
  rest.put("/comments/:id", async (req, res, ctx) => {
    const commentId = req.params.id
    const { content, postId } = await req.json();
    const user = JSON.parse(sessionStorage.getItem('user') || '{}');
  
    const post = Posts.find(post => post.id === Number(postId) && post.comments.find(comment => comment.id === Number(commentId) && comment.author.id === user.id));
    if (!post) {
      return res(ctx.status(404), ctx.json({ message: '작성자 또는 게시물을 확인해주세요.' }));
    }
  
    const comment = post.comments.find(comment => comment.id === Number(commentId));
    if(!comment){
      return res(ctx.status(404), ctx.json({ message: '댓글을 찾을 수 없습니다.' }))
    }
    comment.content = content;
    comment.updateAt = new Date().toISOString();
  
    return res(ctx.status(200), ctx.json(post));
  }),

  //댓글 삭제
  rest.delete("/comments/:id", async (req, res, ctx) => {
    const { postId } = await req.json();
    const commentId = req.params.id
    const user = JSON.parse(sessionStorage.getItem('user') || '{}');
  
    const post = Posts.find(post => post.id === Number(postId) && post.comments.find(comment => comment.id === Number(commentId) && comment.author.id === user.id));
    if (!post) {
      return res(ctx.status(404), ctx.json({ message: '작성자 또는 게시물을 확인해주세요.' }));
    }
      post.comments = post.comments.filter(comment => comment.id !== Number(commentId));
  
    return res(ctx.status(200), ctx.json(post));
  })
];
