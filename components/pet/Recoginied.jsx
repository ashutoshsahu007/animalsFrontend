import Image from 'next/image'
import React from 'react'
import { Button } from '../ui/button'
import { ArrowRight } from 'lucide-react'


const Recoginied = () => {
  return (
    <div className="py-5">
      <h5 className="text-2xl font-bold mb-6 mt-5 text-center">Recognized by...</h5>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 justify-center items-center">
        <div className="flex justify-center">
          <Image src="/image 2.png" alt="Logo 1" width={200} height={100} />
        </div>
        <div className="flex justify-center">
          <Image src="/Group 72.png" alt="Logo 2" width={200} height={100} />
        </div>
        <div className="flex justify-center">
          <Image src="/image 4.png" alt="Logo 3" width={200} height={100} />
        </div>
        <div className="flex justify-center">
          <Image src="/image 5.png" alt="Logo 4" width={200} height={100} />
        </div>
      </div>
      <h5 className="text-2xl font-bold mb-6 mt-8 text-center">Our Happy Customer</h5>
      <div className="flex flex-col md:flex-row items-center justify-center gap-4">
        <div className="flex-shrink-0">
          <Image src="/R5.png" alt="Customer" width={300} height={300} />
        </div>
        <div className="flex flex-col">
          <h5 className="font-bold text-lg text-center">Pawan Kumar</h5>
          <p className="mb-2 text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, .
          </p>
          <p className="text-center">
            Ut enim ad minim veniam, quis nostrud exercitation ullamco .
          </p>
          <Button className="bg-white text-green-500  ml-8 text-center items-center justify-center mt-2">Learn More
            <ArrowRight className="ml-5"/>
          </Button>
        </div>
      </div>
    </div>
  )
}

export default Recoginied
