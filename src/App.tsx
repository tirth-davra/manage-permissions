import { BrowserRouter, Route, Routes } from "react-router-dom";
import EmpTable from "./pages/EmpTable";

import EmployePerm from "./components/EmployeePerm";

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<EmpTable/>} />
        <Route path="/permission" element={<EmployePerm/>} />
      </Routes>
    </BrowserRouter>
    </div>
  );
};

export default App;
