import { Routes, Route } from "react-router"
import Product from "./pages/products/Product"


function App() {

  return (
    <>
      <Routes>
        <Route path="/product" element={<Product />} />

        <h1>HEllllo</h1>
      </Routes>
    </>
  )
}

export default App
