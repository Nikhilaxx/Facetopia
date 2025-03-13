import Configurations from '@/components/image-generation/Configurations'
import React from 'react'


const ImageGeneration = () => {
  return (
    <section className='container mx-auto grid gap-4 grid-cols-3 overflow-hidden'>
      <div  className='ml-10 -mt-0.8' >
     <Configurations  />
      </div>
      <div className='col-span-2 p-4 rounded-xl flex items-center justify-center'>
        Output Images
      </div>
    </section>
  )
}

export default ImageGeneration