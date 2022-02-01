import { Link, useHistory } from "react-router-dom";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import allActions from "../../_actions";
import '../../styles/_components/NavBar.css';

const Navbar = () => {

  const items = useSelector((state) => state.usersReducer.currentUser);
  const [isLogged, setIsLogged] = useState({ firstName: "", isRegister: false })
  const dispatch = useDispatch()
  const history = useHistory();

  useEffect(() => {
    if (Object.keys(items).length > 0) {
      setIsLogged((prevState) => ({
        ...prevState,
        firstName: items.firstName,
        isRegister: true
      }))
    }
  }, [items])


  const handleLogout = event => {
    event.preventDefault()
    setIsLogged((prevState) => ({
      ...prevState,
      firstName: "",
      isRegister: false
    }))
    dispatch(allActions.auth.logoutUser())
    history.push("/home");
  }

  return (
    <nav className="main-nav">
      <Link className="main-nav-logo" to="/home">
        <img
          className="main-nav-logo-image"
          src={`${process.env.PUBLIC_URL}/argentBankLogo.png`}
          alt="Argent Bank Logo"
        />
        <h1 className="sr-only">Argent Bank</h1>
      </Link>
      <div>
        {isLogged.isRegister
          ? <div>
            <Link className="main-nav-item" to="/profil">
              <i className="fa fa-user-circle"></i> {isLogged.firstName} </Link>
            <Link className="main-nav-item" to="/home" onClick={handleLogout} >
              <i className="fa fa-sign-out"></i> Sign Out 
            </Link>
          </div>
          : <Link className="main-nav-item" to="/logging">
            <i className="fa fa-user-circle"></i> Sign In 
          </Link>
        }
      </div>
    </nav>
  )
}

export default Navbar
