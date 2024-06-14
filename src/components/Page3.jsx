import React from 'react'
import "../style/Page3.css"
import strelkaVlevo from "../pikchi/strelkaVlevo.svg"
import strelkaVpravo from "../pikchi/strelkaVpravo.svg"


const Kataloge = () => {
  return (
    <div>
        <div class='Exploreourbikes'>
            <h2>Explore our bikes</h2>
            <div class="strelki">
                <button><img src={strelkaVpravo} alt="" /></button>
                <button><img src={strelkaVlevo} alt="" /></button>
            </div>
        </div>

        <div class="bloks">

            <div class='block1'>
                <div class="zagalovovok-and-evro">
                    <h1>City Bikes</h1>
                    <a href="">From €399</a>
                </div>

                <div class="Women">
                    <div class='woman-A'><a href="">Women</a></div>
                    <div class='man-A'><a href="">Men</a></div>

                </div>

                <div class='buttonsin'>
                    <button>Buy Now</button>
                    <div class='buttonsin-A'><a href="">Learn more</a></div>
                </div>
                
            </div>

            <div class='block1'>
                <div class="zagalovovok-and-evro">
                    <h1>Kids' Bikes</h1>
                    <a href="">From €119</a>
                </div>

                <div class="Women">
                    <div class='age'><a href="">Ages 1,5 to 8</a></div>

                </div>

                <div class='buttonsin'>
                    <button>Buy Now</button>
                    <div class='buttonsin-A'><a href="">Learn more</a></div>
                </div>
                
            </div>
            
        </div>        
    </div>
  )
}

export default Kataloge