import React from 'react'
import Container from '../../../Components/Container'
import Card from '../../../Components/Card/Card'

function Menu() {
  return (
    <div className='py-12'>
      <Container>
        <h4 className='text-[36px] font-extrabold'>Explore All Yummy Menu</h4>
        <ul className='flex items-start space-x-2 py-3'>
          <li className='px-5 py-2 rounded font-semibold border-2 text-primary border-primary cursor-pointer'>All Menu</li>
          <li className='px-5 py-2 rounded font-semibold border-2 text-primary border-primary cursor-pointer'>Vegetarian</li>
          <li className='px-5 py-2 rounded font-semibold border-2 text-primary border-primary cursor-pointer'>Sandwiches</li>
          <li className='px-5 py-2 rounded font-semibold border-2 text-primary border-primary cursor-pointer'>dessert</li>
        </ul>
        <div className='pt-5 lg:grid grid-cols-4 gap-5'>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </Container>
    </div>
  )
}

export default Menu