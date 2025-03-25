import { createBrowserRouter, RouterProvider } from "react-router-dom"
import LandingPage from "./pages/LandingPage"

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <LandingPage />
    },
    {
      path: "/Prediction",
      element: <div>Prediction</div>
    }
  ])


  return (<RouterProvider router={router}/>)
}

export default App
