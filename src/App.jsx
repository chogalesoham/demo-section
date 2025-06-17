import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ChoosePlan from "./pages/Choose-a-Plan";
import Payment from "./pages/payment";
import BoardPage from "./pages/board-page";
import Pathway from "./pages/Pathway";
import Pathway2 from "./pages/pathway2";
// import SingleComponent from "./pages/BoardDemo";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/chooseplan" element={<ChoosePlan />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/board" element={<BoardPage />} />
        <Route path="/pathway" element={<Pathway />} />
        <Route path="/pathway2" element={<Pathway2 />} />

        {/* <Route path="/boardnew" element={<SingleComponent />} /> */}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
