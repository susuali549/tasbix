import React, {useState} from 'react'
function Tasbix() {
    const [count, setcount] = useState(0);
    const handleIncrement = () => (
        setcount(count + 1)
    )
    const handleDecrement = () => {
        // setcount (count -1)
        if(count > 0){
            setcount (count -1)
            count-- 
        }
        
      
       
    }
    const handleReset = () => {
      setcount(0)
     }
  return (
    <div>
      <div>
        <p className='text-center text-7xl mt-32'>{count}</p>
        <div className=' text-center text-3xl mt-20 text-white'>
            <button onClick={handleIncrement} className=' bg-blue-500 py-2 px-5 mr-3 rounded'>Increase</button>
            <button onClick={handleDecrement} className=' bg-red-500 py-2 px-5 rounded'>Decrease</button>
            <button onClick={handleReset}  className=' bg-green-500 py-2 px-5 ml-3 rounded'>Reset</button>
        </div>
      </div>
    </div>
  )
}

export default Tasbix