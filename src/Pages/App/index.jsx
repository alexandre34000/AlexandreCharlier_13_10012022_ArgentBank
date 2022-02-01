import '../../styles/App.css';
import { HashRouter as Router } from 'react-router-dom';
import AuthRoute from '../../_components/Router/AuthRoute';
import Navbar from '../../_components/NavBar';
import Footer from '../../_components/Footer';
import { useDispatch } from "react-redux";
import allActions from "../../_actions";

const App = () => {

  const token = localStorage.token;
  const dispatch = useDispatch();

  if (token) {
    dispatch(allActions.user.getProfileFetch())
  }

  return (
    <Router>
      <div className="app">
        <Navbar />
        <AuthRoute />
        <Footer />
      </div>
    </Router>
  )
}

export default App;
