import { Route, Redirect } from "react-router-dom";

const ProtectedRoute = ({ component: Component, isLogin, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        isLogin ? <Component {...props} /> : <Redirect to="/login" />
      }
    />
  );
};

export default ProtectedRoute;
