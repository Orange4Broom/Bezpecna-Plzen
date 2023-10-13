import { Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { DefaultLayout } from './components/defaultLayouts/DefaultLayout';
import { AppRoutes } from './routes/AppRoutes';

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
              <div className="home">Home</div>
            </DefaultLayout>
          }
        />
        <Route
          path={AppRoutes.LOGIN}
          element={
            <DefaultLayout>
              <div className="home">Home</div>
            </DefaultLayout>
          }
        />
        <Route
          path={AppRoutes.REGISTRATION}
          element={
            <DefaultLayout>
              <div className="home">Home</div>
            </DefaultLayout>
          }
        />
      </Routes>
    </>
  );
};
