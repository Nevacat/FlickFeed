## 배포 사이트

**[Flick Feed](http://myfron-env.eba-uvx9t8hw.ap-northeast-2.elasticbeanstalk.com/)**

## 작업기간
23.04.13 ~ 23.04.27

## 테스트 아이디
ID: test1@naver.com<br>
PW: test1234<br>
**(회원가입을 이용하여 쓰셔도 무방합니다.!)**

## 프로젝트 멤버 및 작업 목록

| <center>박희수<조장></center> | <center>이혜원</center>|<center>표승연</center>  | <center>이희서</center> |
|:--:|:--:|:--:|:--:|
| <img src="https://avatars.githubusercontent.com/u/110139098?v=4" width="200"> | <img src="https://avatars.githubusercontent.com/u/117172983?v=4" width=200> | <img src="https://avatars.githubusercontent.com/u/92071025?v=4" width=200> | <img src="https://avatars.githubusercontent.com/u/21377593?v=4" width=200> |
| [박희수](https://github.com/Nevacat) | [이혜원](https://github.com/Hana-Korea)  |   [표승연](https://github.com/pyozz)                     | [이희서](https://github.com/hlee686)   |
| 백엔드 서버<br/>게시물 작성 페이지 |  피드 페이지<br>좋아요<br>댓글<br>캐러셀  | 프로필 페이지<br>레이아웃<br>로그아웃<br>로딩  |  로그인 페이지<br>회원가입 페이지 |

## 사이트 설명
### 로그인 화면
> 사이트에 접속 후 가장 먼저 보여지는 페이지입니다.<br>유저의 이메일과 비밀번호를 이용하여, 해당 사이트를 이용하실 수 있습니다.
![스크린샷 2023-04-27 223924](https://user-images.githubusercontent.com/110139098/234886641-978674a4-9877-4328-b94a-173201b3e28c.png)

---
### 회원가입
>사이트를 이용하기 전에 먼저 유저의 아이디를 생성하는 회원가입 페이지 입니다.<br>
해당 사이트의 유저가 아니라면, 이 페이지에서 유저 정보를 등록합니다.

![스크린샷 2023-04-27 223937](https://user-images.githubusercontent.com/110139098/234886669-d7fd03ac-fb3f-468d-9a44-dfbdb92a31ce.png)

---
### 메인 페이지
>유저 생성 후 로그인까지 완료하시면 보실 수 있는 메인 피드 페이지 입니다.<br>
다른 유저와 여러 피드를 주고 받으며, 일상을 공유하고 댓글과 좋아요 등을 남길 수 있습니다.

![스크린샷 2023-04-27 224008](https://user-images.githubusercontent.com/110139098/234886692-41cd3ca4-5fe7-4d83-a132-ed5ed64a2683.png)

---
### 게시물 작성
>해당 페이지에서 게시물을 작성하여 다른 유저에게 공유할 수 있습니다.<br>
장소는 선택적으로 입력하셔도 되지만, 사진은 필수로 입력되도록 만들었습니다.(a.k.a. instagram)

![스크린샷 2023-04-27 224034](https://user-images.githubusercontent.com/110139098/234886755-12a4c1fa-1fef-4813-af47-cf7935742ac0.png)

---
### 프로필 페이지
>사용자의 정보를 수정하거나, 작성했던 게시물을 볼 수 있는 곳입니다.
해당 페이지에서 나의 상태를 수정하거나, 이름을 수정할 수 있습니다.

![스크린샷 2023-04-27 224020](https://user-images.githubusercontent.com/110139098/234886782-50274f91-305c-41e6-931f-821ce23764a8.png)


### 프로젝트의 기능구현 사항

📌 필수사항

- [x] React 혹은 Next 중에 선택해서 개발을 진행하시고, Typescript 사용은 필수입니다.
- [x] 글 / 유저 / 댓글 등의 정보는 모두 백엔드와의 통신을 통해서 받아와야 합니다. (rtk query 나 react query 사용 권장)
- [x] 글쓰기 / 댓글 달기 / 좋아요 기능도 모두 `백엔드와의 통신`을 통해서 구현되어야 합니다.
- [x] 회원가입 / 로그인 기능은 JWT 토큰을 활용하도록 구현 (access token 만 활용해도 무방)
- [x] 게시글 컴포넌트에 좋아요 등록/해제를 위한 버튼을 만들고, 좋아요 등록 여부에 따라 버튼의 형태가 달라지도록 구현 (ex. 좋아요된 글은 꽉 찬 하트, 좋아요되지 않은 글은 빈 하트)
- [x] redux 를 통해서 상태 관리
- [x] (옵션) useCallback, useMemo 등을 통한 컴포넌트 렌더링 최적화

### 프로젝트 기술 스택

- Basic: `HTML` `styled-components` `TypeScript` `React`

- Library: `axios` `express` `msw` `redux` `react-multi-carousel` `react-query` `react-router-dom` `react-icons` `react-cookie`

- Deploy: `AWS`

- Bundler: `Vite`

