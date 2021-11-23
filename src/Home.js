import { useState } from "react";
import Bloglist from "./BlogList";

const Home = () => {
  const [blogs, setBlogs] = useState([
    {
      title: "My new website",
      body: "lorem ipsum...",
      author: "Mario",
      id: "1",
    },
    {
      title: "Welcome party!",
      body: "lorem ipsum...",
      author: "Yoshi",
      id: "2",
    },
    {
      title: "Web dev top tips",
      body: "lorem ipsum",
      author: "Princess",
      id: "3",
    },
    {
      title: "Web new one",
      body: "lorem ipsum",
      author: "Mario",
      id: "4",
    },
    {
      title: "Last tips",
      body: "lorem ipsum",
      author: "Princess",
      id: "5",
    },
  ]);

  const handleClick = (id) => {
    const newBlogs = blogs.filter((blog) => blog.id !== id);
    setBlogs(newBlogs);
  };

  return (
    <div className="home">
      <Bloglist blogs={blogs} title="All Blogs" handleClick={handleClick} />
    </div>
  );
};

export default Home;
