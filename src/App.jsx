// import Props from "./Concepts/Props";
import { Home } from "./Project/Calculator/Home";
import Formm from "./Concepts/Formm";
import Main from "./Project/ContextApi/Main";
import Counter from "./Concepts/UserReducer/Counter";
import Header from "./Project/SocialMedia/Components/Header";
import Footer from "./Project/SocialMedia/Components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import Siderbar from "./Project/SocialMedia/Components/Siderbar";
import "./App.css";
import CreatPost from "./Project/SocialMedia/Components/CreatPost";
import PostList from "./Project/SocialMedia/Components/PostList";
import { useState } from "react";

export default function App() {
  const [selTab, setselTab] = useState("Create Post");
  return (
    <div className="app-container">
      <Siderbar selTab={selTab} setselTab = {setselTab} />
      <div className="content">
        <Header />
        {selTab === "Home" ? <PostList /> : <CreatPost />}

        <Footer />
      </div>
    </div>
  );
}
