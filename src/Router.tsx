import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Defaultlayout } from "./layouts/defaultLayouts";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Defaultlayout />}>
        <Route path="/" element={<Home />} />
      </Route>
    </Routes>
  );
}
