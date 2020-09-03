import React, {useState, useEffect} from "react";
import Blog from "./components/Blog";
import blogService from "./services/blogs";
import authService from "./services/auth";
import Login from "./components/Login";
import CreateBlog from "./components/CreateBlog";
import Alert from "./components/Alert";

const App = () => {
  const [blogs, setBlogs] = useState([]);
  const [user, setUser] = useState(null);
  const [alert, setAlert] = useState("");

  useEffect(() => {
    const getBlogs = async () => {
      const blogs = await blogService.getAll();
      setBlogs(blogs);
    };
    user !== null && getBlogs();
  }, [user]);

  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem("loggedUser");
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON);
      setUser(user);
      blogService.setToken(user.token);
    }
  }, []);

  const handleLogin = async (username, password) => {
    try {
      const user = await authService.login({username, password});

      window.localStorage.setItem("loggedUser", JSON.stringify(user));

      setUser(user);
      blogService.setToken(user.token);
    } catch (error) {
      setAlert("Invalid username or password");
    }
  };

  const handleLogout = () => {
    window.localStorage.removeItem("loggedUser");
    setUser(null);
  };

  const createBlog = async (newBlog) => {
    const blog = await blogService.create(newBlog);
    setBlogs([...blogs, blog]);
    setAlert("Blog Created Successfully");
  };

  return (
    <div>
      <Alert message={alert} setMessage={setAlert} />
      {user === null ? (
        <Login handleLogin={handleLogin} />
      ) : (
        <div>
          <h1>blogs</h1>
          <p>
            {user.username} logged in{" "}
            <button onClick={handleLogout}>logout</button>{" "}
          </p>
          <CreateBlog createBlog={createBlog} />

          {blogs.map((blog) => (
            <Blog key={blog.id} blog={blog} />
          ))}
        </div>
      )}
    </div>
  );
};

export default App;
