export const Posts = [
  {
    id: 1,
    place: 'seoul',
    content: "It's so good, we are korean!!",
    postImage: '',
    author: {
      id: 1,
      email: 'test@naver.com',
      username: 'alice',
      createAt: '2023-04-14T19:00:13.450Z',
      updateAt: '2023-04-14T19:00:13.450Z',
    },
    comments:[],
    likes:[]
  },
  {
    id: 2,
    place: 'newyork',
    content: 'we are young~~',
    postImage: '',
    author: {
      id: 2,
      email: 'test1@naver.com',
      username: 'react',
      createAt: '2023-04-14T19:00:13.450Z',
      updateAt: '2023-04-14T19:00:13.450Z',
    },
    comments: [
      {
        id: 1,
        content: 'no!!!!!',
        createAt: '2023-04-14T19:00:13.450Z',
        updateAt: '2023-04-14T19:00:13.450Z',
        author: {
          id: 1,
          username: 'alice',
        },
      },
      {
        id: 2,
        content: '우린 젋어~~~',
        createAt: '2023-04-14T19:00:13.450Z',
        updateAt: '2023-04-14T19:00:13.450Z',
        author: {
          id: 2,
          username: 'react',
        },
      },
    ],
    likes: [
      {
        id: 1,
        user: {
          id: 4,
          username: 'alice',
        },
      },
      {
        id: 2,
        user: {
          id: 2,
          username: 'react',
        },
      },
    ],
  },
];
