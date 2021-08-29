import { useState } from "react";
import { Link } from "react-router-dom";
import { logOutingUserAction } from "../../context/userAction";
import useAuth from "../../hooks/useAuth";
import useDispatchContext from "../../hooks/useDispatchContext";
import logOutingUser from "../../services/logout";

const Header = () => {
  const [collapse, setCollapse] = useState(false);
  const [isUserLogin] = useAuth();
  const { dispatch } = useDispatchContext();

  const handleLogoutClick = () => {
    logOutingUser().then((res) => dispatch(logOutingUserAction(res)));
  };

  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <Link to="/" className="navbar-brand">
            Auth Concepts
          </Link>
          <button
            onClick={() => setCollapse((perState) => !perState)}
            className={`navbar-toggler ${collapse ? "" : "collapsed"}`}
            type="button"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className={`collapse navbar-collapse ${
              collapse ? "show" : ""
            } ms-5 d-lg-flex justify-content-between`}
          >
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to="/" className="nav-link">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/post" className="nav-link">
                  Post
                </Link>
              </li>
            </ul>
            <ul className="navbar-nav me-3 mb-2 mb-lg-0 mt-4 mt-lg-0">
              {isUserLogin ? (
                <li className="nav-item">
                  <button
                    onClick={handleLogoutClick}
                    className="btn btn-danger px-3 py-1"
                  >
                    Logout
                  </button>
                </li>
              ) : (
                <li className="nav-item">
                  <Link to="/login" className="nav-link">
                    Login
                  </Link>
                </li>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
