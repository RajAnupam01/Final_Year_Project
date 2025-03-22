import React from 'react'
import Card from './Card'
import { PreviewBook } from '../PreviewData'

function TestCourse() {
    
  return (
    <div className='px-4'>
        <div className='flex flex-col mt-10 sm:p-20 p-10 bg-yellow-100'>
        <h1 className='text-5xl font-bold text-center mb-12'>Prievew Books</h1>
        <div className='flex flex-col sm:flex-row sm:flex-wrap sm:justify-around gap-y-10'>
          {PreviewBook.map((book, index) => (
            <Card key={index} {...book} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default TestCourse