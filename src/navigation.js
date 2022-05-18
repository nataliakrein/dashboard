import { Routes, Route } from "react-router-dom";
import { Dashboard } from "./pages/Dashboard";
import { List } from "./pages/List";
import { Register } from "./pages/Register";
import { Edit } from "./pages/Edit";

const Navigation = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Dashboard />} />
      <Route exact path="/lista" element={<List />} />
      <Route exact path="/cadastrar" element={<Register />} />
      <Route exact path="/editar/:id" element={<Edit />} />
    </Routes>
  );
};

export default Navigation;
