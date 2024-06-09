import "./App.css"

import { Route, Routes, BrowserRouter } from "react-router-dom";
import MainComponent from "./MainComponent";
import Authentication from "./Auth/Authentication";


function App() {
  return (

    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Authentication />}></Route>
          <Route path="/chat" element={<MainComponent />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
