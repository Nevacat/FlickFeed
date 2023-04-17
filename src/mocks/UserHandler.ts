import { rest } from 'msw';
import { Users } from './constants/UserData';

const token =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywidXNlcm5hbWUiOiJhbGljZSIsImVtYWlsIjoidGVzdEBuYXZlci5jb20iLCJpYXQiOjE2ODE1MzY5MzAsImV4cCI6MTY4MTU0MDUzMH0.s0km3UHRLyTh8pR2sKxludFTbmRH_nNvvp0x_kDxpVI';

export const UserHanlder = [
  // 회원가입
  rest.post('/auth/register', async (req, res, ctx) => {
    const body = await req.json();
    const { username, email, password, userImage, userInfo } = body;
    if(!username || !email || !password){
      return res(
        ctx.status(400),
        ctx.json({
          message: "Username, email and password are required"
        })
      )
    }
    const newUser = {
      id: Users.length + 1,
      username: username,
      email: email,
      password: password,
      userImage: userImage || '',
      userInfo: userInfo || '',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };

    Users.push(newUser);

    const headers = { Authorization: `Bearer ${token}` };
    return res(ctx.status(201), ctx.json({ token }), ctx.set(headers));
  }),
  // 로그인
  rest.post('/auth/login', async (req, res, ctx) => {
    const body = await req.json();
    const { email, password } = body;

    const user = Users.find((user) => user.email === email && user.password === password);

    sessionStorage.setItem('user', JSON.stringify(user));

    if (user) {
      const headers = { Authorization: `Bearer ${token}` };
      return res(ctx.status(200), ctx.json({ token }), ctx.set(headers));
    } else {
      return res(ctx.status(401), ctx.json({message: "이메일 또는 비밀번호를 확인해주세요."}));
    }
  }),
  //로그아웃
  rest.post('/logout', async (req, res, ctx) => {
    sessionStorage.removeItem('user');
    return res(ctx.status(200));
  }),
  //인증확인
  rest.post('/auth/me', (req, res, ctx) => {
    const getToken = req.headers.get('Authorization')?.replace('Bearer ', '');
    if (!getToken) {
      return res(ctx.status(401), ctx.json({ message: 'Unauthorized' }));
    }
  
    if (token !== getToken) {
      return res(ctx.status(404), ctx.json({ message: 'User not found' }));
    }
    
    return res(ctx.status(200), ctx.json(JSON.parse(sessionStorage.getItem('user') || '{}')));
  }),
  //모든 유저 조회
  rest.get("/users",(req,res,ctx)=>{
    return res(ctx.status(200), ctx.json({Users}))
  }),
  
  //유저 정보 변경
  rest.put("/users", async (req, res, ctx) => {
    const getToken = req.headers.get("Authorization")?.replace("Bearer ", "");
    if (token !== getToken) {
      return res(ctx.status(401), ctx.json({ message: "Unauthorized" }));
    }
  
    const body = await req.json()
    const user = JSON.parse(sessionStorage.getItem("user") || "{}");
  
    const updatedUser = {
      ...user,
      ...body,
      updatedAt: new Date().toISOString(),
    };
  
    sessionStorage.setItem("user", JSON.stringify(updatedUser));
  
    return res(ctx.status(200), ctx.json({ user: updatedUser }));
  })
];