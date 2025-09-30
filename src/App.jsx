import {createBrowserRouter, createRoutesFromElements, RouterProvider, Route} from "react-router-dom"

import Home from "./pages/Home"
import Cart from "./pages/Cart"
import SignIn from "./pages/SignIn"
import Layout from "./components/layout/Layout"


function App() {
  const router = createBrowserRouter(createRoutesFromElements(
    <Route element={<Layout />}>
      <Route path="/" element={<Home />} />
      <Route path="cart" element={<Cart />} />
      <Route path="signIn" element={<SignIn />}/>
    </Route>
  ))

  return (
    <div className="flex flex-col min-h-screen">
      <RouterProvider router={router} />
    </div>
  )
}

export default App
