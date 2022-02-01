import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import allActions from "../../_actions";
import '../../styles/_components/Login.css'

const LoginPage = () => {

  const [userLogin, setUserLogin] = useState({ email: "", password: "" });
  const [error, setError] = useState(null)
  const dispatch = useDispatch();
  const items = useSelector((state) => state.authReducer.currentInfoLog);

  useEffect(() => {
    setError(items.message)
  }, [items])

  const handleChange = (e) => {
    e.persist();
    const { name, value } = e.target;
    setUserLogin((prevState) => ({
      ...prevState,
      [name]: value
    }));
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (userLogin.email === null || userLogin.password === null) {
      setError("Fields are required");
    }
    else {
      dispatch(allActions.auth.loginUser(userLogin))
    }
  }

  return (

    <div className="login bg-dark">
      <section className="sign-in-content">
        <i className="fa fa-user-circle sign-in-icon"></i>
        <h1>Sign In</h1>
        <form onSubmit={handleSubmit}>
          <div className="input-wrapper">
            <label htmlFor="username" >Username</label>
            <input type="email" name='email' id="username" autoComplete="username" required
              placeholder='Username'
              value={userLogin.email}
              onChange={handleChange} />
          </div>
          <div className="input-wrapper">
            <label htmlFor="password">Password</label>
            <input type="password" name='password' id="password" autoComplete="current-password" required
              placeholder='Password'
              value={userLogin.password}
              onChange={handleChange} />
          </div>
          <div className="input-remember">
            <input type="checkbox" id="remember-me" />
            <label htmlFor="remember">Remember me</label>
          </div>
          {error
            ? <p className="login-error">{error}</p>
            : null}
          <button className="sign-in-button" type='submit'>Sign In</button>
        </form>
      </section>
    </div>
  );
}

export default LoginPage
