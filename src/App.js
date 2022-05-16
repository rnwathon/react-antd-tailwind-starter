import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { DashboardLayout } from './Layouts';
import { Dashboard } from './Pages';

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<DashboardLayout />}>
        <Route index element={<Dashboard />} />
      </Route>
    </Routes>
  </BrowserRouter>
);

export default App;
