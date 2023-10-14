import { Navigate } from 'react-router-dom';
import { Login } from '../login/Login';
import { AppRoutes } from '../../routes/AppRoutes';
import { useAuthContext } from '../../hooks/useAuthContext';

export const LoginOutlet = () => {
  const { state } = useAuthContext();

  if (state.user) {
    // Render the actual components for the authenticated route
    return <Navigate to={AppRoutes.HOME} />;
  } else {
    // Redirect to the login route using <Navigate>
    return <>{<Login />}</>;
  }
};
