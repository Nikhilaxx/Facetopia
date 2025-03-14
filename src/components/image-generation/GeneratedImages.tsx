import React from 'react'
import { Card, CardContent } from '../ui/card'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel"
  import Image from 'next/image'

const images=[{
    src:'/hero-images/Charismatic Young Man with a Warm Smile and Stylish Tousled Hair.jpeg',
    alt:'some alt text'
},
{
    src:'/hero-images/Confident Businesswoman on Turquoise Backdrop.jpeg',
    alt:'some alt text'
},
{
    src:'/hero-images/Confident Woman in Red Outfit.jpeg',
    alt:'some alt text'
},
{
    src:'/hero-images/Confident Woman in Urban Setting.jpeg',
    alt:'some alt text'
}]
const GeneratedImages = () => {
    if(images.length===0){
        return <Card className='w-[500px] h-[700px] bg-muted'>
            <CardContent className='flex aspect-square items-center justify-center p-6'>
                <span className='text-2xl'>
                    No Images Generated
                </span>
            </CardContent>
        </Card>
    }
  return (
    <Carousel
      className="w-full max-w-2xl"
    >
      <CarouselContent>
        {images.map((image, index) => (
          <CarouselItem key={index} >
            <div className="flex items-center justify-center rounded-lg overflow-hidden aspect-square">
            <Image
  src={image.src}
  alt={image.alt}
  width={500}
  height={800}
  className="object-cover rounded-lg"
/>

            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}

export default GeneratedImages