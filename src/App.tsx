import ProductsProvider from './context/productsProvider'
import ProductList from './components/ProductList'
import Cart from './components/Cart'
import ModalConfirmOrder from './components/ModalConfirmOrder'
import './App.css'

function App() {
  return (
    <>
      <div className='px-6 py-6 xl:p-16 2xl:px-48'>
        <h1 className='font-bold text-4xl mb-6'>Desserts</h1>
        <ProductsProvider>
          <div className='grid xl:grid-cols-4'>
            <ProductList />
            <div className="p-6 bg-white rounded-md xl:col-span-1 xl:fixed xl:right-48 xl:w-[420px]">
              <Cart />
              <ModalConfirmOrder />
            </div>
          </div>
        </ProductsProvider>
      </div>
    </>
  )
}

export default App
