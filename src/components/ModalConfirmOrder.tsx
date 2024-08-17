import { useContext, useEffect, useState } from 'react'
import { ProductsContext } from '../context/productsContext'
import Cart from './Cart'

export default function ModalConfirmOrder() {
    const { cart, emptyCart } = useContext(ProductsContext)
    const [showModal, setShowModal] = useState(false)

    const handleShowModal = () => setShowModal(true)
    const handleCloseModal = () => {
        emptyCart()
        setShowModal(false)
    }

    useEffect(() => { 
        if (showModal) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = 'auto'
        }
    }, [showModal])

    return (
        <div>
            {
                cart.length > 0 ? (
                    <button onClick={handleShowModal} className="bg-red-primary w-full py-4 rounded-full font-medium text-white tracking-widest hover:bg-rose-primary-500 transition-colors">Confirm order</button>
                ) : null
            }
            {showModal && (
                <div className="fixed inset-0 bg-black bg-opacity-50 w-full h-full overflow-auto backdrop-blur">
                    <div className="relative sm:top-[5%] bg-white p-6 rounded-lg xl:w-[600px] m-auto">
                        <img src="../assets/images/icon-order-confirmed.svg"/>
                        <h2 className="font-bold text-5xl leading-snug my-2">Order Confirmed</h2>
                        <p className='mb-8 text-rose-primary-400'>We hope you enjoy your food!</p>
                        <Cart isConfirmedOrder />
                        <button onClick={handleCloseModal} className="bg-red-primary w-full py-4 rounded-full font-medium text-white tracking-widest mt-4">Start New Order</button>
                    </div>
                </div>
            )}
        </div>
    )
}