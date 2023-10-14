import { Routes, Route } from 'react-router-dom';
import { DefaultLayout } from './components/defaultLayouts/DefaultLayout';
import { AppRoutes } from './routes/AppRoutes';
import { Home } from './components/home/Home';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { RegistrationOutlet } from './components/registration/RegistrationOutlet';
import { LoginOutlet } from './components/login/LoginOutlet';
import 'aos/dist/aos.css';
import { Default } from 'node_modules/react-toastify/dist/utils';
import { Quiz } from './components/quiz/Quiz';

export const App = () => {

  return (
    <>
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />

      <Routes>
        <Route
          path={AppRoutes.HOME}
          element={
            <DefaultLayout>
              <Home />
            </DefaultLayout>
          }
        />
        <Route
          path={AppRoutes.LOGIN}
          element={
            <DefaultLayout>
              <LoginOutlet />
            </DefaultLayout>
          }
        />
        <Route
          path={AppRoutes.REGISTRATION}
          element={
            <DefaultLayout>
              <RegistrationOutlet />
            </DefaultLayout>
          }
        />

        <Route
          path={AppRoutes.QUIZ}
          element={
            <DefaultLayout>
              <Quiz />
            </DefaultLayout>
          }
        />
      </Routes>
    </>
  );
};
