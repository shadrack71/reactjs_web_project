import React from 'react'
import { useState } from 'react'



const Content = () => {
    const [name , setName] = useState('shadrack attaboy')
    const [count , setCount] = useState(0)
    
    const name_functions =() => {
        const names = [ 'shadrack','kinsimba','kabazo']
        let rand_number = Math.floor(Math.random()*3)
        setName( names[rand_number])
      }
      const handleClick = () =>{
        console.log(count)
        let i = count +1
        setCount(i)
    }
      const handleClick2 = (name) =>{
        console.log(`${name} was clicked` )

      }

      const handleClick3 = () =>{
        let i = count -1
        setCount(i)
    }
  return (
    <main>
        <p> Hello , {name}</p>
        <p> Number count , {count}</p>
        <button onClick={name_functions}>change name</button><br/>
        <button onClick={handleClick}>add count</button><br/>
        <button onClick={handleClick3}>sub count</button>
        <button onClick={(e)=> handleClick2(e)}>check it3</button>

    </main>
  )
}

export default Content