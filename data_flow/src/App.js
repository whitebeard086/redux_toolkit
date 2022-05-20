import React from "react";
import AddPostsForm from "./features/posts/AddPostsForm";
import PostsLists from "./features/posts/PostsLists";


function App() {
  return (
    <main className="App">
      <AddPostsForm />
      <PostsLists />
    </main>
  );
}

export default App;
