import React from 'react'

function Cart() {
  return (
    <div className='px-4'>
      <div className='flex flex-col sm:flex-row min-h-screen pt-10'>
        <div className='sm:w-1/2 flex-1 sm:h-auto w-full order-1 flex bg-yellow-200 justify-center items-center'>
        <h1 className='text-center text-black text-5xl'>Cart</h1>
        </div>
        <div className='sm:w-1/2 flex-1 sm:h-auto w-full order-2 flex bg-green-400 justify-center items-center'>
        <h1 className='text-center text-black text-5xl'>Favorites</h1>
        </div>
      </div>
    </div>
  )
}

export default Cart
