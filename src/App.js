import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import Home from "./Pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter basename="/React_Landing_Page_1">
        <Routes>
          <Route exact path={"/"} element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
