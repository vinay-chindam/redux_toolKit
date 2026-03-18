

import './App.css'
import Header from '../src/Header'
import Products from './Products'

import productsData from '../src/constants/dummydata'
const handleAddToCart = (product) => {
    setCart([...cart, product]);
    console.log("Cart:", cart);
  };

function App() {
 

  return (
    <>
      
      <Header/>
      <Products products={productsData} onAddToCart={handleAddToCart} />
      <Products products={productsData} onAddToCart={handleAddToCart} />
      <Products products={productsData} onAddToCart={handleAddToCart} />
      <Products products={productsData} onAddToCart={handleAddToCart} />
      <Products products={productsData} onAddToCart={handleAddToCart} />
    </>
  )
}

export default App
