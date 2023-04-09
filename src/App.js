import { Routes, Route } from "react-router-dom";
import { ROUTES } from "./constants";
import Login from './views/Login/index'
import './App.css';
import ForgotPassword from "./views/ForgotPassword";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import RecoverPassword from "./views/RecoverPassword";
import Dashboard from "./views/Dashboard";
import Bet from "./components/Bet";

function App() {
  return (
    <div className="App">
      <ToastContainer />
      <Routes>
        <Route exact path={ROUTES.login} element={<Login />}></Route>
        <Route exact path={ROUTES.forgot_password} element={<ForgotPassword />}></Route>
        <Route exact path={ROUTES.recover_password} element={<RecoverPassword />}></Route>
        <Route exact path={ROUTES.dashboard} element={<Dashboard />}>
        </Route>
        <Route exact path="/dashboard/CreateBet" element={<Bet/>} />
        <Route exact path="/dashboard/CancelBet" element={<Bet CancelBet={true}/>} />
        <Route exact path="/dashboard/PremiumPayment" element={<Bet PremiumPayment={true}/>} />

        <Route exact path="/TicketCode" element={<Bet TicketCode={true} CancelBet={true}/>} />
      </Routes>
    </div>
  );
}

export default App;
