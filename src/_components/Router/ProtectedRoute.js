import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

const ProtectedRoute = ({ component: Component, ...rest }) => {
    const authState = useSelector((state) => state.authReducer);
const token = localStorage.token;

    return (
        <Route {...rest}
            render={props => (
                authState.isLogged || token
                    ? <Component {...props} />
                    : <Redirect to={{
                        pathname: "/logging",
                        state: {
                            from: props.location
                        }
                    }}
                    />
                    
            )
            }
            
        />
    )
}
export default ProtectedRoute
