import { BrowserRouter, Route, Routes } from "react-router-dom";
import Spinner from "./components/Spinner";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import NotFoundPage from "./pages/NotFoundPage";
import HomePage from "./pages/HomePage";
import CityPage from "./pages/CityPage";
import UserPage from "./pages/UserPage";
import MainLayout from "./layouts/MainLayout";
import RoomDetailPage from "./pages/RoomDetailPage";

function App() {
  return (
    <>
      <Spinner />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/city/:cityName' element={<CityPage />} />
          <Route
            path='/roomdetail/:roomId'
            element={
              <MainLayout>
                <RoomDetailPage />
              </MainLayout>
            }
          />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/register' element={<RegisterPage />} />
          <Route
            path='/personal-info'
            element={
              <MainLayout>
                <UserPage />
              </MainLayout>
            }
          />
          <Route path='*' element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
