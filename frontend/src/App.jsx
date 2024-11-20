import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Root from "./pages/root/root"
import ErrorPage from "./pages/error/error"
import Home from "./pages/home/home"
import { RecoilRoot } from "recoil"


function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Root />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "home",
          element: <Home />
        }
      ]
    }
  ])

  return (
    <>
      <RecoilRoot>
        <RouterProvider router={router} />
      </RecoilRoot>
    </>
  )
}

export default App
