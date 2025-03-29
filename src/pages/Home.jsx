import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      Home Page
      {/* <a href="http://localhost:5173/about">about</a> */}
      <Link to={"/"}>Home</Link>
      <Link to={"about"}>About</Link>
      <Link to={"cart"}>Cart</Link>
    </div>
  );
}

export default Home;
