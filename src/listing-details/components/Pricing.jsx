import { Button } from '@/components/ui/button'
import React from 'react'
import { MdLocalOffer } from 'react-icons/md'

const Pricing = ({carDetails}) => {
  return (
    <div className='p-10 md:p-5 lg:p-10 rounded-xl shadow-md border'>
    <h2>Our Price</h2>
    <h2 className='font-bold text-4xl'>${carDetails.sellingPrice}</h2>
    <Button className="w-full  mt-4 flex items-center gap-4  " size="lg" >
        <MdLocalOffer className='text-lg' /> Make an offer price
    </Button>
    </div>
  )
}

export default Pricing
