

/*
import React, { useRef } from "react"
function App() {

 const input = useRef ()
 const ChangePlaceholder = (e) =>{
  e.preventDefault()
input.current.placeholder = "Hey There..." 
  input.current.focus()  Here Focus automatically point the area 
 input.current.value="heyyyyy" /* To change the value we given
  
 } 
  return (
<div className=" ">

   <div>
<form  className=" flex flex-col items-center justify-center mb-6">
          <input ref ={input}  value="My Name" className="w-64 border px-4 py-2 rounded" type="text" placeholder="Enter Something...."/>
          <button className="border " onClick={ChangePlaceholder}>Change the placeholder</button>
          </form>
</div>



</div> 
    
  )
}

export default App
 
*/

import Contact from "./components/Contact"
const App = () =>{
  return (
    <div>
      <Contact/>
    </div>
  )
}
export default App