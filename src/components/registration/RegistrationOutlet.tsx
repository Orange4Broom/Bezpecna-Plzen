import { Navigate } from 'react-router-dom';
import { Registration } from './Registration';
import { AppRoutes } from '../../routes/AppRoutes';
import { useAuthContext } from '../../hooks/useAuthContext';

export const RegistrationOutlet = () => {
  const { state } = useAuthContext();

  console.log('Bruh' + state);

  if (state.user) {
    // Render the actual components for the authenticated route
    return <Navigate to={AppRoutes.HOME} />;
  } else {
    // Redirect to the login route using <Navigate>
    return <>{<Registration />}</>;
  }
};
