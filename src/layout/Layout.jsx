import { BrowserRouter as Router } from "react-router-dom";
import Header from "../components/header/Header";
import Routes from "../routes/Routes";

const Layout = ({ children }) => {
  return (
    <div>
      <Router>
        <Header />
        <main className='container mt-4'>
        <Routes>{children}</Routes>
        </main>
      </Router>
    </div>
  );
};

export default Layout;
