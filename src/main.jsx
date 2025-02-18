import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Components/Home.jsx";
import Payment from "./Components/Payment.jsx";
import BankingasPlatform from "./Components/BankingasPlatform.jsx";
import BankingasService from "./Components/BankingasService.jsx";
import Cronica from "./Components/cronica.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "banking-as-service",
        element: <BankingasService />,
      },
      {
        path: "banking-as-platform",
        element: <BankingasPlatform />,
      },
      {
        path: "payment-as-service",
        element: <Payment />,
      },
      {
        path: "cronica",
        element: <Cronica />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
