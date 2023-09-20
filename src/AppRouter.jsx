import { useRoutes } from 'react-router-dom';
import Home from './pages/Home/Home.jsx';
import Register from './pages/Auth/Auth.jsx';
import Events from './pages/Events/Events.jsx';
import AdminPanel from './pages/AdminPanel/AdminPanel.jsx';

function AppRouter() {
  return useRoutes([
    {
      element: <Home />,
      path: '/',
    },
    {
      element: <Register type = {"register"}/>,
      path: '/register',
    },
    {
      element: <Register type = {"login"}/>,
      path: '/login',
    },
    {
      element: <Events />,
      path: '/events',
    },
    {
      element: <AdminPanel />,
      path: '/admin',
    }
  ]);
}
export default AppRouter;
