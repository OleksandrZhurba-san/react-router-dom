import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import { Header, Post, PostList } from "./components";

const postsDataList = [
  {
    id: 0,
    title: "Exploring the Depths of the Ocean",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum. Cras venenatis euismod malesuada.",
  },
  {
    id: 1,
    title: "A Journey Through Time: Ancient Civilizations",
    body: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis.",
  },
  {
    id: 2,
    title: "The Rise of AI: Transforming the Future",
    body: "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur.",
  },
  {
    id: 3,
    title: "Mastering the Art of Photography",
    body: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.",
  },
  {
    id: 4,
    title: "The Mysteries of Space Exploration",
    body: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi.",
  },
];
function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/posts" element={<PostList posts={postsDataList} />} />
        <Route path="/post/:id" element={<Post posts={postsDataList} />} />
      </Routes>
    </div>
  );
}

export default App;
