import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import BankingAsPlatform from "./Components/BankingAsService.jsx";
import BankingAsService from "./Components/BankingAsService.jsx";
import Home from "./Components/Home.jsx";
import Payment from "./Components/Payment.jsx";
import Cronica from "./Components/Cronica.jsx";

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
        element: <BankingAsService />,
      },
      {
        path: "banking-as-platform",
        element: <BankingAsPlatform />,
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
