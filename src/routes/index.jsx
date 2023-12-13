import { Routes, Route, BrowserRouter } from "react-router-dom";
import { HOME } from "./URLs";
import HOC from "../HOC";
import Menu from "../pages/menu";

export default function ApplicationRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={HOME} element={HOC(Menu)} />
      </Routes>
    </BrowserRouter>
  );
}
