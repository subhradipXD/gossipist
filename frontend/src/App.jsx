import "./App.css";

import { Route, Routes, BrowserRouter } from "react-router-dom";
import MainComponent from "./MainComponent";
import Authentication from "./Auth/Authentication";
import ContextProvider from "./context/ContextProvider";

function App() {
  return (
    <>
      <BrowserRouter>
        <ContextProvider>
          <Routes>
            <Route path="/" element={<Authentication />}></Route>
            <Route path="/chat" element={<MainComponent />}></Route>
          </Routes>
        </ContextProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
