import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import AppLayout from './views/AppLayout/AppLayout';
import Gallery from './views/Gallery/Gallery';
import Create from './views/Create/Create';
import Community from './views/Community/Community';
import Profile from './views/Profile/Profile';
import Rewards from './views/Rewards/Rewards';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<Navigate replace to="gallery" />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="create" element={<Create />} />
          <Route path="community" element={<Community />} />
          <Route path="profile" element={<Profile />} />
          <Route path="rewards" element={<Rewards />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
