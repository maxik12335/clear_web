import { Routes, Route, Navigate } from 'react-router-dom';
import Loader from "./loader/Loader";

// Импорты страниц
import Main from "../Pages/Main/Main"
import Creation from "../Pages/Creation/Creation"

const AppRouter = () => {

  return (
    <Routes>
      {/* Публичные */}

      {/* menu */}
        <Route path="/" element={<Main />} />
        <Route path="/creation" element={<Creation />} />

      {/* 404 */}
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};

export default AppRouter;