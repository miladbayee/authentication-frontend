import { Switch, Route } from "react-router-dom";
import Home from "../pages/Home/Home";
import Login from "../components/login/Login";
import Post from "../components/post/Post";
import ProtectedRoute from "../components/protectedRoute/ProtectedRoute";
import useAuth from "../hooks/useAuth";

const Routes = () => {
 const [isUserLogin]=useAuth();

  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/login" component={Login} />
      <ProtectedRoute path="/post" component={Post} isLogin={isUserLogin} />
    </Switch>
  );
};

export default Routes;
