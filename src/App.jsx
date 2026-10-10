import React from "react";
import "./App.css";
import { HashRouter, Routes, Route, Navigate } from "react-router-dom";
import Danh_sach_tuong from "./pages/Danh_sach_tuong";
import Danh_sach_bai_danh from "./pages/Danh_sach_bai_danh";
import Luat_khai_niem from "./pages/Luat_khai_niem";
import MainLayout from "./layouts/MainLayout";

const App = () => {
  return (
    <HashRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Navigate to="/tuong" replace />} />
          <Route path="/tuong" element={<Danh_sach_tuong />} />
          <Route path="/bai_danh" element={<Danh_sach_bai_danh />} />
          <Route path="/luat_khai_niem" element={<Luat_khai_niem />} />
        </Route>
      </Routes>
    </HashRouter>
  );
};

export default App;
