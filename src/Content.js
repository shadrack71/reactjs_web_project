import React from 'react'
import { useState } from 'react'
import { FaTrashAlt} from 'react-icons/fa'



const Content = () => {
    const [name , setName] = useState('shadrack attaboy')
    const [count , setCount] = useState(0)
    const [ items , setItems] = useState([
      {
          id: 1,
          checked: true,
          item: "One half pound bag of Cocoa Covered Almonds Unsalted"
      },
      {
          id: 2,
          checked: false,
          item: "Item 2"
      },
      {
          id: 3,
          checked: false,
          item: "Item 3"
      }
  ]);
  const handleCheck = (id)=>{
    const listItems = items.map((item)=> item.id === id ? { ...item, checked: !item.checked} : item)
    setItems(listItems)
    localStorage.setItem('shoppinglist',JSON.stringify(listItems))

  }
  const handleDelete = (id) =>{
    const listItems = items.filter((item) =>item.id !== id)
    setItems(listItems)
    localStorage.setItem('shoppinglist',JSON.stringify(listItems))

  }
    
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
      {items.length ? (
        
     
        // {/* <p> Hello , {name}</p>
        // <p> Number count , {count}</p>
        // <button onClick={name_functions}>change name</button><br/>
        // <button onClick={handleClick}>add count</button><br/>
        // <button onClick={handleClick3}>sub count</button> */}

        // {/* <button onClick={(e)=> handleClick2(e)}>check it3</button> */}
        <ul>
          {items.map((item) => (
            <li className='item' key={item.id}>
              <input 
              type='checkbox'
              onChange={()=>handleCheck(item.id)}
              checked={item.checked}/>
              <label
                style={(item.checked) ? {textDecoration:'line-through'} :null}
                onDoubleClick={()=>handleCheck(item.id)}

              >{item.item}</label>

             <FaTrashAlt
              onClick={()=>handleDelete(item.id)}
              role='button'
              tabIndex='0'/>
            </li>

          ))}
        </ul>
 ):(
  <p style={{ marginTop: '2rem' }}>Your list is empty.</p>
 )}

    </main>
  )
}

export default Content