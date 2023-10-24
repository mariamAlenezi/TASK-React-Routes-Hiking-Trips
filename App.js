import "./App.css";
import Nav from "./components/Nav";
import Home from "./components/Home";
import TripsList from "./components/TripsList";
import TripDetail from "./components/TripDetail";
import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import Navigate from "react-router-dom";

function App() {
  return (
    <div id="page-top">
      <Nav />
      {/* <Home />
      <TripsList /> */}
      {/* <TripDetail /> */}

      <Routes>
        <Route path="/home" Component={Home} />
        <Route path="/tripslist" Component={TripsList} />
        <Route path="/tripdetail" Component={TripDetail} />
        <Route path="/details/:tripId" Component={TripDetail} />
      </Routes>
    </div>
  );
}

export default App;
