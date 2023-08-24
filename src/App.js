// import Test from './Test';
import { RouterProvider } from "react-router-dom";

import './App.css';
import router from "./router/router";


function App() {
  return (
    // <div className="App">
    <div>
      < RouterProvider router={router} />
    </div >
    // </div >
  );
}

export default App;
