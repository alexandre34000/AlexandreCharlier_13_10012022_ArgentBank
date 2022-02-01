import { Route, Switch, useHistory } from 'react-router-dom';
import { useSelector  } from 'react-redux';
import { useEffect } from 'react';
import Logging from '../../Pages/LoginPage';
import Home from '../../Pages/Home';
import Profil from '../../Pages/Profil';
import  ProtectedRoute  from './ProtectedRoute';

const AuthRoute = ({ component: Component, ...rest }) => {
    const authState = useSelector((state) => state.authReducer);
    const history = useHistory();
  
    useEffect(() => {
      if (authState.isLogged) { 
        history.push("/profil");
      }
    }, [authState.isLogged]); 
  
    return (
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/home" component={Home} />
        <Route path="/logging" component={Logging} />
        <ProtectedRoute path="/profil" component={Profil} />
        <Route path="*" component={() => "404 Not found."} />
      </Switch>
    )
}
export default AuthRoute