import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { DashboardLayout } from './Layouts';
import { getDashboardRoutes } from './Routes';

const dashboardRoutes = getDashboardRoutes();

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<DashboardLayout />}>
        {dashboardRoutes.map(
          (route) =>
            !route.isDisabled && (
              <Route
                index={route.isIndex}
                caseSensitive={route.isCaseSensitive}
                path={route.path}
                element={route.element}
              />
            )
        )}
      </Route>
    </Routes>
  </BrowserRouter>
);

export default App;
