import React from 'react'

const Header = ({title}) => {
    const stleFunction ={
         backgroundColor:'green',
    color:'white'

    }

  return (
   <header style={ stleFunction}>
    <h1>
      {title}
    </h1>
   </header>
  )
}
Header.defaultProps = {
  title:'Default title'
}

export default Header