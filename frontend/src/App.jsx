import "./App.css"

import { Route, Routes, BrowserRouter } from "react-router-dom";
import MainComponent from "./MainComponent";
import Authentication from "./Auth/Authentication";

import { FirebaseProvider } from "./Context/FirebaseContext";

function App() {
  return (

    <>
      <FirebaseProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Authentication />}></Route>
            <Route path="/chat" element={<MainComponent />}></Route>
          </Routes>
        </BrowserRouter>
      </FirebaseProvider>
    </>
  );
}

export default App;
