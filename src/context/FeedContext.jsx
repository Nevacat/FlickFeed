import React, { createContext, useState, useContext } from 'react';
import { useQuery } from 'react-query';
import { getPosts } from '../api/data';

export const FeedContext = createContext();

function FeedContextProvider({ children }) {
  const [isCommentModal, setIsCommentModal] = useState(false);
  const [isDeleteModal, setIsDeleteModal] = useState(false);
  const [deleteTargetPostId, setDeleteTargetPostId] = useState(null);
  const [commentTargetPostId, setCommentTargetPostId] = useState(null);
  const { isLoading, data: posts, error } = useQuery('posts', getPosts);

  return (
    <FeedContext.Provider
      value={{
        isCommentModal,
        setIsCommentModal,
        isDeleteModal,
        setIsDeleteModal,
        posts,
        deleteTargetPostId,
        setDeleteTargetPostId,
        commentTargetPostId,
        setCommentTargetPostId,
        isLoading,
      }}
    >
      {children}
    </FeedContext.Provider>
  );
}
export default FeedContextProvider;

export function useFeed() {
  const {
    isCommentModal,
    setIsCommentModal,
    isDeleteModal,
    setIsDeleteModal,
    posts,
    isLoading,
    deleteTargetPostId,
    setDeleteTargetPostId,
    commentTargetPostId,
    setCommentTargetPostId,
  } = useContext(FeedContext);
  return {
    isCommentModal,
    setIsCommentModal,
    isDeleteModal,
    setIsDeleteModal,
    posts,
    isLoading,
    deleteTargetPostId,
    setDeleteTargetPostId,
    commentTargetPostId,
    setCommentTargetPostId,
  };
}
