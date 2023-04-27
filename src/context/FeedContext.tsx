import React, { createContext, useState, useContext, Context } from 'react';
import { useQuery } from 'react-query';
import { getPosts } from '../api/data';
import { Post } from '../interface/post';

interface FeedContextType {
  isCommentModal: boolean;
  setIsCommentModal: React.Dispatch<React.SetStateAction<boolean>>;
  isDeleteModal: boolean;
  setIsDeleteModal: React.Dispatch<React.SetStateAction<boolean>>;
  deleteTargetPostId: string;
  setDeleteTargetPostId: React.Dispatch<React.SetStateAction<string>>;
  commentTargetPostId: string;
  setCommentTargetPostId: React.Dispatch<React.SetStateAction<string>>;
  posts: Post[];
  isLoading: boolean;
}

export const FeedContext = createContext<FeedContextType | null>(null);

function FeedContextProvider({ children }: { children: React.ReactNode }) {
  const [isCommentModal, setIsCommentModal] = useState(false);
  const [isDeleteModal, setIsDeleteModal] = useState(false);
  const [deleteTargetPostId, setDeleteTargetPostId] = useState('');
  const [commentTargetPostId, setCommentTargetPostId] = useState('');
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
  } = useContext<FeedContextType>(FeedContext as Context<FeedContextType>);
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
