import { IProduct, Breakpoints } from "../interfaces/interfaces"
import { useContext } from "react"
import { ProductsContext } from "../context/productsContext"
import ButtonCart from "./ButtonCart"

export default function Product({ product }: { product: IProduct }) {
    const defaultImageStyle = "relative rounded-md border-2 border-transparent transition-all duration-300 ease-in-out xl:max-w-[300px]"
    const selectedImageStyle = "relative rounded-md border-2 border-red-primary transition-all duration-300 ease-in-out xl:max-w-[300px]"
    const { products } = useContext(ProductsContext)
    const currentProduct = products.find((item) => item.id === product.id)
    const imageType = window.innerWidth > parseInt(Breakpoints.tablet)
        ? "desktop"
        : (window.innerWidth > parseInt(Breakpoints.mobile)
            ? "tablet" : "mobile")  

    return (
        <div className="mb-6">
            <div className="relative">
                <img src={currentProduct?.image[imageType]} alt={currentProduct?.name} className={`${currentProduct && currentProduct.quantity > 0 ? selectedImageStyle : defaultImageStyle}`} />
                <ButtonCart product={currentProduct!} />
            </div>
            <h2 className="text-rose-primary-300">{currentProduct?.category}</h2>
            <h2 className="font-bold text-lg">{currentProduct?.name}</h2>
            <span className="text-red-primary font-bold">${currentProduct?.price.toFixed(2)}</span>
        </div>
    )
} 