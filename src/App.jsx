import { useState } from 'react'

import './index.css'
import Test from './components/product-card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="w-[600px] h-[600px]  border border-amber-300 bg-blue-900">
      <Test/>
    </div>
    
    
  );
}

export default App
