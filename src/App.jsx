import { createBrowserRouter, RouterProvider } from "react-router-dom"
import LandingPage from "./pages/LandingPage"
import Prediciton from "./pages/Prediciton"

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <LandingPage />
    },
    {
      path: "/Prediction",
      element: <Prediciton/>
    }
  ])


  return (<RouterProvider router={router}/>)
}

export default App
