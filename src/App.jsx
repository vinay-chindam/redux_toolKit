

import './App.css'
import Header from '../src/Header'
import Products from './Products'

import productsData from '../src/constants/dummydata'


function App() {
 

  return (
    <>
      
      <Header/>
      <Products products={productsData}  />
      <Products products={productsData}  />
      <Products products={productsData}  />
      <Products products={productsData}  />
      <Products products={productsData}  />
      
    </>
  )
}

export default App
