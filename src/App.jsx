
import { Route, Routes } from "react-router-dom";
import { NavBar } from "./components/NavBar";
import { Home } from "./pages/Home";
import { Plan } from "./pages/Plan";
import { PlanDetail } from "./pages/PlanDetail";


function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/react-crud-app/" element={<Home/>}/>
        <Route path="/react-crud-app/plans" element={<Plan/>}/>
        <Route path="/react-crud-app/plans/:sku" element={<PlanDetail/>}/>
      </Routes>
    </>
  );
}

export default App;

