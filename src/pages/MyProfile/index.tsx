import React, { useMemo } from 'react';
import { Background, UserInfo, CardList } from '../../components/MyProfile/';
import { useQuery } from 'react-query';
import { getPostsByUser } from '../../api/data';

function MyProfilePage() {
  const { data: posts } = useQuery(['posts', 'me'], getPostsByUser, {
    onSuccess: (data) => {
      console.log(data);
    },
  });

  const memoizedPosts = useMemo(() => posts, [posts]);

  return (
    <main style={{ position: 'relative' }}>
      <Background />
      <UserInfo />
      <CardList posts={memoizedPosts} />
    </main>
  );
}

export default MyProfilePage;
