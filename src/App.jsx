import './index.css'
import { DataProvider } from './Data Provider Component/DataProvider'
import EStoreComponent from './Estore'
import ProductInfo from './Products/Product Info Component/ProductInfo'
import Header from './Home/Header Component/Header'
import MobileFooter from './Home/Mobile Footer Component/MobileFooter'

function App() {
  return (
    <>
      <EStore />
    </>
  )
}

function EStore() {
  return (
    <DataProvider>
      <EStoreComponent />
    </DataProvider>
  )
}

export default App
