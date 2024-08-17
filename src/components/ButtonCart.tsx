import { useContext } from "react"
import { ProductsContext } from "../context/productsContext"
import { IProduct } from "../interfaces/interfaces"
import CartIcon from "../assets/icons/CartIcon"
import PlusIcon from "../assets/icons/PlusIcon"
import MinusIcon from "../assets/icons/MinusIcon"


export default function ButtonCart({ product }: { product: IProduct }) {
    const { addToCart, incrementQuantity, decrementQuantity } = useContext(ProductsContext)

    return (
        <> {
            product.quantity == 0 ? (
                <button className="flex justify-center items-center gap-2 relative left-0 right-0 bottom-[21px] border border-rose-primary-500 py-2 px-6 rounded-3xl bg-white w-[200px] m-auto font-bold hover:text-red-primary transition-colors" onClick={() => addToCart(product)} >
                    <CartIcon />
                    Add to Cart
                </button>
            ) : (
                <button className="flex relative left-0 right-0 bottom-[21px] justify-between items-center gap-2 border border-rose-primary-500 py-2 px-6 rounded-3xl bg-red-primary w-[165px] m-auto text-white" >
                    <span className="group grid place-items-center item border border-white rounded-[50%] p-1 w-5 h-5 hover:bg-white transition-colors" onClick={() => decrementQuantity(product.id)}>
                        <MinusIcon className="group-hover:fill-red-primary"/>
                    </span>
                    {product.quantity}
                    <span className="group grid place-items-center item border border-white rounded-[50%] p-1 w-5 h-5 hover:bg-white transition-colors" onClick={()=> incrementQuantity(product.id)}>
                        <PlusIcon className="group-hover:fill-red-primary"/>
                    </span>
                </button>
            )
        }
        </>
    )
}