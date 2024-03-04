import React, {useState} from 'react'

export default function index(props) {
  const [count, setcount] = useState(0);
  const handleIncrement = () => {
    if(count > setcount){
      setcount(count + 1)
    }
  }
  
  const handleDecrement = () => {
      // setcount (count -1)
      if(count > 0){
          setcount (count -1)
          count-- 
      }
    }
  return (
    <div>
    <div class="bg-pink-500 text-4xl  p-6 text-white">
    <h1 class="ml-10">Explore different images</h1>
</div>
<div class="px-14 w-[1150px] py-5 ml-24">
<img style={{display : count == true ? "display" : "" }} className="w-full h-[450px] rounded-xl" src={props.image}  alt="" />
</div>
<div class="text-center">
    <button onClick={handleIncrement} class="bg-pink-500 px-4 py-2 text-4xl text-white rounded hover:bg-pink-200">preview</button>
    <button onClick={handleDecrement} class="bg-pink-500 px-4 py-2 text-4xl text-white rounded hover:bg-pink-200 ml-4">next</button>
</div>
</div>
  )
}
