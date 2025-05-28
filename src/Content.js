import React from 'react'

const content = () => {
    const name_functions =() =>{
        const names = [ 'shadrack','kinsimba','kabazo']
        let rand_number = Math.floor(Math.random()*3)
        return names[rand_number]
      }
  return (
    <main>
        <p>
            {name_functions()}
        </p>
    </main>
  )
}

export default content