import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import Root from "./pages/root/root"
import ErrorPage from "./pages/error/error"
import Home from "./pages/home/home"
import { RecoilRoot } from "recoil"
import Projects from "./pages/projects"


function App() {


  return (
    <>
      <RecoilRoot>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Root />} >
              <Route index element={<Navigate to="/home" replace />} />
              <Route path="home" element={<Home />} />
              <Route path="projects" element={<Projects />} />
            </Route>
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </BrowserRouter>
      </RecoilRoot>
    </>
  )
}

export default App
