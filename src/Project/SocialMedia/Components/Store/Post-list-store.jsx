import React, { createContext, useReducer } from "react";

const Defalut_Post_List = [
  {
    id: "1",
    title: "Going To Lahore",
    body: "Finally graduate from Uet Lahore after facing many obstacles and geting experience from these",
    reaction: 10,
    userId: "user-20",
    tags: ["Graduate", "Pass out", "Uet Lahore"],
  },
  {
    id: "2",
    title: "Going To United State of America",
    body: "Finally graduate from Uet Lahore after facing many obstacles and geting experience from these",
    reaction: 13,
    userId: "user-09",
    tags: ["America", "Pass out", "Uet Lahore"],
  },
];

export const PostList = createContext({
  postList: Defalut_Post_List,
  addPost: () => {},
  deletePost: () => {},
});

const postListReducer = (currPostList, action) => {
  if (action.type === "Delete Post") {
    return currPostList.filter((post) => post.id !== action.payload.postId);
  }
  return currPostList;
};

const PostListProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(
    postListReducer,
    Defalut_Post_List
  );

  const addPost = () => {};
  const deletePost = (postId) => {
    console.log(`here is main ${postId}`);
    dispatchPostList({
      type: "Delete Post",
      payload: { postId },
    });
  };

  return (
    <>
      <PostList.Provider value={{ postList, addPost, deletePost }}>
        {children}
      </PostList.Provider>
    </>
  );
};

export default PostListProvider;
