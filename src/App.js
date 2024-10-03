import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import PostList from "./components/postList";
import Header from "./components/header";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/posts" element={<PostList />} />
      </Routes>
    </div>
  );
}

export default App;
