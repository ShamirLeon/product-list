import { createContext } from "react";
import { IProductContext } from "../interfaces/interfaces";

const defaultProductsContext: IProductContext = {
    products: [],
    cart: [],
    addToCart: () => { },
    removeFromCart: () => { },
    emptyCart: () => { },
    incrementQuantity: () => { },
    decrementQuantity: () => { },
};

export const ProductsContext = createContext<IProductContext>(defaultProductsContext);