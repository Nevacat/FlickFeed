import React, { useMemo } from 'react';
import { Background, UserInfo, CardList } from '../../components/MyProfile/';
import { useQuery } from 'react-query';
import { getPostsByUser } from '../../api/data';
import Loading from '../../components/Common/Loading';

function MyProfilePage() {
  const { data: posts, isLoading } = useQuery(['posts', 'me'], getPostsByUser);

  const memoizedPosts = useMemo(() => posts, [posts]);

  if (isLoading) return <Loading />;

  return (
    <main style={{ position: 'relative' }}>
      <Background />
      <UserInfo />
      <CardList posts={memoizedPosts} />
    </main>
  );
}

export default MyProfilePage;
