import "./login.css";
import { useState } from "react";
import { Redirect } from "react-router-dom";
import userLogin from "../../services/login";
import useDispatchContext from "../../hooks/useDispatchContext";
import { userLoginAction } from "../../context/userAction";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isRedirect, setIsRedirect] = useState(false);
  const [loading, setLoading] = useState(false);
  const { dispatch } = useDispatchContext();

  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    userLogin(email, password)
      .then(({ data }) => {
        if (data.message !== "success") {
          setLoading(false);
        }
        if (data.message === "success") {
          setEmail("");
          setPassword("");
          setIsRedirect(true);
          setLoading(false);
          dispatch(userLoginAction({ isLogin: true, userInfo: {} }));
        }
      })
      .catch((err) => console.log(err));
  };

  if (isRedirect) {
    return <Redirect to="/" />;
  }

  return (
    <main className="container ">
      <form onSubmit={handleSubmit} className="form-signin ">
        <h1 className="h3 mb-3 fw-normal text-center">Login</h1>

        <div className="form-floating mb-2">
          <input
            type="email"
            id="email"
            className="form-control"
            placeholder="name@example.com"
            value={email}
            onChange={handleChangeEmail}
          />
          <label forhtml="email">Email</label>
        </div>
        <div className="form-floating mb-4">
          <input
            type="password"
            className="form-control"
            id="password"
            placeholder="Password"
            value={password}
            onChange={handleChangePassword}
          />
          <label forhtml="password">Password</label>
        </div>
        <button
          className="w-100 btn btn-lg btn-primary"
          type="submit"
          disabled={loading}
        >
          {loading && (
            <span className="spinner-border spinner-border-sm"></span>
          )}
          {!loading && <span>Sing In</span>}
        </button>
      </form>
    </main>
  );
};

export default Login;
