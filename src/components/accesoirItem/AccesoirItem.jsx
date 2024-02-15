import React from 'react'
import MyMainButton from '../buttons/myMainButton/MyMainButton'

const AccesoirItem = ( {item} ) => {
  return (
    <div>
        <div>{item.image}</div>
        <div>
            <h2>{item.name}</h2>
            <h3>{item.cost}</h3>
        </div>
        <MyMainButton />
    </div>
  )
}

export default AccesoirItem