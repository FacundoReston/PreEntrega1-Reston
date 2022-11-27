import "./CartWidget.css"
import React from 'react'
import { BsCart2 } from "react-icons/bs"

const CartWidget = () => {
  return (
    <div>
        <BsCart2 size={35} color={"#001B38"} />
    </div>
  )
}

export default CartWidget