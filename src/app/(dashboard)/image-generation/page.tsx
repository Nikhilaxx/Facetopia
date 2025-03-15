import Configurations from '@/components/image-generation/Configurations'
import GeneratedImages from '@/components/image-generation/GeneratedImages'
import React from 'react'


const ImageGeneration = () => {
  return (
    <section className='container mx-auto grid gap-5 grid-cols-3 overflow-hidden'>
      <div  className='ml-10 -mt-0.8 col-span-1 w-[500px]' >
     <Configurations  />
      </div>
      <div className='col-span-2 p-4 rounded-xl flex items-center  h-fit pl-36'>
      <GeneratedImages />
      </div>
    </section>
  )
}

export default ImageGeneration