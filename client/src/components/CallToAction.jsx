import { Button } from 'flowbite-react';

export default function CallToAction() {
  return (
    <div className='flex flex-col sm:flex-row p-3 border border-teal-500 justify-center items-center rounded-tl-3xl rounded-br-3xl text-center'>
        <div className="flex-1 justify-center flex flex-col">
            <h2 className='text-2xl'>
                Want to learn about Data Structures & Algorithms.
            </h2>
            <p className='text-gray-400 my-2'>
                Checkout various resources like  Data Structures & Algorithms, CP , DBMS , System Design etc.
            </p>
            <Button gradientDuoTone='greenToBlue' className='rounded-tl-xl rounded-bl-none'>
                <a href="https://takeuforward.org/" target='_blank' >
                takeUforward
                </a>
            </Button>
        </div>
{/*         <div className="p-7 flex-1">
            <img src="src/image/tuff.png" />
        </div> */}
    </div>
  )
}
