import { useState } from "react"
import { Products } from "./components/Products"
import { products as productsJson } from "./mocks/products.json"
import { Header } from "./components/Header"
import { Footer } from "./components/Footer"
import { useFilters } from "./hooks/useFilters"

function App() {
  const { filterProducts } = useFilters()
  const [products] = useState(productsJson)
  const filteredProducts = filterProducts(products)

  return (
    <>
      <Header/>
      <Products products={filteredProducts} />
      <Footer></Footer>
    </>
  )
}

export default App
