import { useContext } from "react"
import { ProductsContext } from "../context/productsContext"
import { IProduct } from "../interfaces/interfaces"

/* Components */
import Product from "./Product"

export default function ProductList() {
    const { products } = useContext(ProductsContext)
    return (
        <div className="flex flex-col xl:flex-row xl:flex-wrap xl:gap-4 xl:col-span-3">
            {
            products.map((product: IProduct) => (
              <div key={product.id}>
                <Product product={product} />
              </div>
            ))
          }
        </div>
    )
}