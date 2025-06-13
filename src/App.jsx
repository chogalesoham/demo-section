import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ChoosePlan from "./pages/Choose-a-Plan";
import Payment from "./pages/payment";
import Board from "./pages/Board";
import SingleComponent from "./pages/Board";
// import SingleComponent from "./pages/BoardDemo";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/chooseplan" element={<ChoosePlan />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/board" element={<SingleComponent />} />
        {/* <Route path="/boardnew" element={<SingleComponent />} /> */}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
