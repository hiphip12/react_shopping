// import Test from './Test';
import { RouterProvider } from "react-router-dom";

import './App.css';
import router from "./router/router";

// import Products from './Products';
// import Homepage from './Homepage';

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Homepage />,
//   },
//   {
//     path: "/test",
//     element: <Test />,
//   },
//   {
//     path: "/products",
//     element: <Products />,
//   },
// ]);

function App() {
  return (
    // <div className="App">
    <p>
      Something
      <RouterProvider router={router} />
    </p>
    // </div >
  );
}

export default App;
