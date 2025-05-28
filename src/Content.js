import React from 'react'

const content = () => {
    const name_functions =() =>{
        const names = [ 'shadrack','kinsimba','kabazo']
        let rand_number = Math.floor(Math.random()*3)
        return names[rand_number]
      }
      const handleClick = () =>{
        console.log('you clicked it ')

      }
      const handleClick2 = (name) =>{
        console.log(`${name} was clicked` )

      }
      const handleClick3 = (e) =>{
        console.log(e.target)

      }
  return (
    <main>
        <p>
            {name_functions()}

        </p>
        <button onDoubleClick={handleClick}>
            check it1

        </button><br/>
        <button onClick={()=> handleClick2('attaboy43')}>
            check it2

        </button>
        <button onClick={(e)=> handleClick3(e)}>
            check it3

        </button>

    </main>
  )
}

export default content