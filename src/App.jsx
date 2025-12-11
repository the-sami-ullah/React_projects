import Header from "./Project/SocialMedia/Components/Header";
import Footer from "./Project/SocialMedia/Components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import Siderbar from "./Project/SocialMedia/Components/Siderbar";
import "./App.css";
import CreatPost from "./Project/SocialMedia/Components/CreatPost";
import PostList from "./Project/SocialMedia/Components/PostList";
import { useState } from "react";
import Main from "./Project/React-Router/Main";

// Import the provider, NOT the context
import PostListProvider from "./Project/SocialMedia/Components/Store/Post-list-store";

export default function App() {
  const [selTab, setselTab] = useState("Home");

  return (
    // <PostListProvider>
    //   <div className="app-container">
    //     <Siderbar selTab={selTab} setselTab={setselTab} />
    //     <div className="content">
    //       <Header />
    //       {selTab === "Home" ? <PostList /> : <CreatPost />}
    //       <Footer />
    //     </div>
    //   </div>
    // </PostListProvider>

    <>
      <Main />
    </>
  );
}
