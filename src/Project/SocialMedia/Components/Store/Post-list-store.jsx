import React, { createContext, useReducer } from "react";

const Default_Post_List = [
  {
    id: "1",
    title: "Going To Lahore",
    body: "Finally graduate from Uet Lahore after facing many obstacles and getting experience from these",
    reaction: 10,
    userId: "user-20",
    tags: ["Graduate", "Pass out", "Uet Lahore"],
  },
  {
    id: "2",
    title: "Going To United State of America",
    body: "Finally graduate from Uet Lahore after facing many obstacles and getting experience from these",
    reaction: 13,
    userId: "user-09",
    tags: ["America", "Pass out", "Uet Lahore"],
  },
];

export const PostList = createContext({
  postList: Default_Post_List,
  addPost: () => {},
  deletePost: () => {},
});

const postListReducer = (currPostList, action) => {
  if (action.type === "DELETE_POST") {
    return currPostList.filter((post) => post.id !== action.payload.postId);
  }

  if (action.type === "ADD_POST") {
    return [action.payload.newPost, ...currPostList];
  }

  return currPostList;
};

const PostListProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(
    postListReducer,
    Default_Post_List
  );

  const addPost = (newPost) => {
    dispatchPostList({
      type: "ADD_POST",
      payload: { newPost },
    });
  };

  const deletePost = (postId) => {
    dispatchPostList({
      type: "DELETE_POST",
      payload: { postId },
    });
  };

  return (
    <PostList.Provider value={{ postList, addPost, deletePost }}>
      {children}
    </PostList.Provider>
  );
};

export default PostListProvider;
