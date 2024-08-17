import { useContext } from "react"
import { ProductsContext } from "../context/productsContext"
import { IProduct, ICartProps } from "../interfaces/interfaces"
import DeleteItem from "../assets/icons/DeleteItem"

export default function Cart({ isConfirmedOrder }: ICartProps) {
    const { cart, removeFromCart } = useContext(ProductsContext)
    return (
        <>
            {
                !isConfirmedOrder ? (
                    <h2 className="font-bold text-4xl text-red-primary mb-4">Your Cart ({cart.reduce((acc: number, product: IProduct) => acc + product.quantity, 0)})</h2>
                ) : null
            }
            {
                cart && cart.length > 0 ? (
                    <div className={`${isConfirmedOrder ? 'bg-rose-primary-100 rounded-lg' : ''}`}>
                        {
                            cart.map((product: IProduct) => (
                                <div key={product.id} className="flex justify-between items-center mb-4 border-b-2 py-4 ">
                                    <div className={`${isConfirmedOrder ? 'flex gap-4 w-full px-4 overflow-auto' : 'flex gap-4 w-full'}`}>
                                        {
                                            isConfirmedOrder ? (
                                                <div className="flex items-center justify-between gap-4  text-sm w-full">
                                                    <div className="flex gap-4">
                                                        <img src={product.image.thumbnail} alt={product.name} className="rounded-lg w-[80px]" />
                                                        <div>
                                                            <h2 className="font-bold text-sm mb-3">{product.name}</h2>
                                                            <span className="text-red-primary font-bold mr-4">{product.quantity}x</span>
                                                            <span>@${product.price.toFixed(2)}</span>
                                                        </div>
                                                    </div>
                                                    <span className="relative font-medium text-rose-primary-500 text-xl xl:left-0">
                                                        ${(product.price * product.quantity).toFixed(2)}
                                                    </span>
                                                </div>
                                            ) : (
                                                <div>
                                                    <h2 className="font-bold">{product.name}</h2>
                                                    <span className="text-red-primary font-bold mr-4">{product.quantity}x</span>
                                                    <span>@${product.price.toFixed(2)}
                                                        <span className={`${isConfirmedOrder ? 'font-medium text-rose-primary-500 ml-2' : 'font-medium text-rose-primary-500 ml-2'}`}>
                                                            ${(product.price * product.quantity).toFixed(2)}
                                                        </span>
                                                    </span>
                                                </div>
                                            )
                                        }

                                    </div>
                                    {
                                        !isConfirmedOrder ? (
                                            <button onClick={() => removeFromCart(product.id)} className="group grid place-items-center border rounded-full w-6 h-6 border-rose-primary-400 text-rose-primary-400 hover:border-black transition-all">
                                                <DeleteItem className="group-hover:fill-black transition-all" />
                                            </button>
                                        ) : null
                                    }
                                </div>
                            ))
                        }
                        <div className={`${isConfirmedOrder ? 'flex justify-between items-center px-4 py-4' : 'flex justify-between items-center'}`}>
                            <span>Order Total</span>
                            <span className="font-medium ml-2 text-2xl">
                                ${(cart.reduce((acc: number, product: IProduct) => acc + (product.price * product.quantity), 0)).toFixed(2)}
                            </span>
                        </div>
                        {
                            !isConfirmedOrder ? (
                                <div className="flex gap-2 bg-rose-primary-100 rounded-md p-4 my-6">
                                    <img src="../assets/images/icon-carbon-neutral.svg" alt="" />
                                    <p className="text-sm">
                                        This is a <strong>carbon-natural</strong> delivery
                                    </p>
                                </div>
                            ) : null
                        }
                    </div>
                ) : (
                    <div>
                        <img src="../assets/images/illustration-empty-cart.svg" className="w-40 m-auto my-4" />
                        <p className="text-center text-rose-primary-500 font-medium">Your added items will appear here</p>
                    </div>
                )
            }
        </>
    )
}