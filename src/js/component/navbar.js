import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext"

export const Navbar = () => {
  const { store, actions } = useContext(Context);
  const imageUrl = "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Star_Wars_Logo.svg/2560px-Star_Wars_Logo.svg.png";
  const url = "/";

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link to={url}>
          <img src={imageUrl} alt="Star Wars Logo" width="100" height="60" />
        </Link>

        {/* Favorites Button */}
        <div className="btn-group" style={{ marginRight: '75px' }}>
          <button type="button" className="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
            Favorites
          </button>
          <ul className="dropdown-menu">
            {store.favorites.map((item, index) => {
              return (
                <li key={index}>
                  <span className="dropdown-item">{item + " "}
                    <button onClick={() => actions.deleteFavorite(index)}>
                      Delete
                    </button>
                  </span>
                </li>
              )
            })}
          </ul>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;