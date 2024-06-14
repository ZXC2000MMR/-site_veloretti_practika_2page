import React from 'react'
import "../style/Page1.css"
import pageimg2 from "../pikchi/bike2page.png"

const Page2 = () => {
  return (
    <div class='mainpage2'>
        <img class="imgpage2" src={pageimg2}></img>
        <p class="textpage2">VELORETTI ELECTRIC</p>
        <p class="textpage3">This is Two.</p>
        <p class="textpage4">Introducing the all-new Ivy and Ace</p>
    </div>
  )
}

export default Page2