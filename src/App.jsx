import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ProductCard from './components/product-card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <ProductCard name="kalindu" img="https://picsum.dev/400/300" price="1000.00"/>
    <ProductCard name="chathuu" img="https://picsum.dev/400/300" price="2000.00"/>
    <ProductCard name="kanaka" img="https://picsum.dev/400/300" price ="3000.00"/>
    </>
  )
}

export default App
