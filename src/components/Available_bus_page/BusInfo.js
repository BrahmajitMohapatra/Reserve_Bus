import React,{useState} from 'react'
import ViewSeats from './ViewSeats'


function BusInfo() {
    const [Show,setShow] = useState(false)
  return (
    <div className='drop-shadow-lg'>
        <div className='flex  mx-4 -my-1 space-x-96 border-stone-300 border-2 rounded-lg py-2 px-9 '>
            <div>
                <ul >
                    <li>Intrcity</li>
                    <li>A/C Sleeper 2+3 | 2 Seats Left | 1 Window Left</li>  
                    <li>22:45 ,16 Jan - 07hrs 50min - 06:20, 17 Jan</li>
                    <li>22:45 ,16 Jan - 07hrs 50min - 06:20, 17 Jan</li>
                </ul>
               
            </div>
            <div className=' w-36'>
                <ul>
                <li >trip cost</li>
                <li >899</li>
                <li ><button className='bg-red-400 mx-3 px-4 py-1 rounded-md ' onClick={()=>setShow(!Show)}>view seats</button></li>
                </ul>
            </div> 
        </div>
        <div>{Show?<ViewSeats />:null}</div>  
        </div>
  )
}

export default BusInfo