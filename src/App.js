import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { DashboardLayout } from './Layouts';
import { ComponentList, Dashboard } from './Pages';

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<DashboardLayout />}>
        <Route index element={<Dashboard />} />
        <Route path="/components" element={<ComponentList />} />
      </Route>
    </Routes>
  </BrowserRouter>
);

export default App;
