import React, { useState } from "react"
import { ProductsContext } from "./productsContext"
import { IProduct} from "../interfaces/interfaces"
import productsData from '../data/products.json'

export default function ProductsProvider({ children }: {    children: React.ReactNode
}) {

    /* STATES */
    const [products, setProducts] = useState<IProduct[]>([...productsData])
    const [cart, setCart] = useState<IProduct[]>([])

    /* FUNCTIONS */
    /* Add proucts to cart */
    const addToCart = (product: IProduct) => {
        const newCart = [...cart]
        const index = newCart.findIndex((item) => item.id === product.id)
        if (index === -1) {
            newCart.push({ ...product, quantity: 1 })
        }
        setCart(newCart)

        const newProducts = products.map((item) =>
            item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
        setProducts(newProducts);
    }

    /* Remove product from cart */
    const removeFromCart = (id: number) => {
        const newCart = cart.filter((item) => item.id !== id)
        setCart(newCart)
        const newProducts = products.map((item) =>
            item.id === id ? { ...item, quantity: 0 } : item
        );
        setProducts(newProducts);
    }

    /* Clean cart */
    const emptyCart = () => {
        setCart([])
        setProducts(productsData)
    }
    
    /* Increment product quantity */
    const incrementQuantity = (id: number) => {
        const newProducts = products.map((item) =>
            item.id === id ? { ...item, quantity: item.quantity + 1 } : item
        );
        setProducts(newProducts);
        const newCart = [...cart]
        const index = newCart.findIndex((item) => item.id === id)
        newCart[index].quantity++
        setCart(newCart)
    }
    
    /* Decrement product quantity */
    const decrementQuantity = (id: number) => {
        const newProducts = products.map((item) =>
            item.id === id ? { ...item, quantity: item.quantity - 1 } : item
        );
        setProducts(newProducts);
        const newCart = [...cart]
        const index = newCart.findIndex((item) => item.id === id)
        newCart[index].quantity--
        if (newCart[index].quantity === 0) {
            newCart.splice(index, 1)
        }
        setCart(newCart)
    }

    return ( 
        <ProductsContext.Provider value = {
            {
                products: products,
                cart: cart,
                addToCart: addToCart,
                removeFromCart: removeFromCart,
                emptyCart: emptyCart,
                incrementQuantity: incrementQuantity,
                decrementQuantity: decrementQuantity
            }
        } > { children } </ProductsContext.Provider>
    )
}