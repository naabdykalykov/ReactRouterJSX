import { categories } from "../data/data";
import { Link, useLocation } from "react-router-dom";
function Home() {
  const location = useLocation();
  console.log(location);
  return (
    <div>
      <Link
        to="/category/Electronics"
        state={{ from: "Home page", maxPrice: 600 }}
      >
        Look at our chapest electrnics
      </Link>
      <h1>Categories</h1>
      <ul style={{ display: "flex" }}>
        {categories.map((category) => (
          <li key={category.id}>
            <Link to={`/category/${category.name}`}>
              {category.name}
              <img
                src={category.img}
                alt={category.name}
                style={{ width: "150px" }}
              />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Home;
