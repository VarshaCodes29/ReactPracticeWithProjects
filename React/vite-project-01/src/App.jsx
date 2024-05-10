import React, { useState } from 'react';
import Product from './Product'


function App() {
  var [a,b] = useState(69);
  return (
    <>
      <div className='w-full h-screen bg-zinc-900 text-white'>
         <Product age="25" data={{age:24,name:"varsha"}} />
      </div>
    </>
  )
}

export default App
