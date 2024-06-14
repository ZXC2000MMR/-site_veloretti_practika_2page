import React from 'react'
import '../style/Page4.css'
import R from '../pikchi/BIGR.svg'
import bike from '../pikchi/Bike.png'

import TheVerge from '../pikchi/TheVerge.png'
import Bright from '../pikchi/Bright.png'
import VOGUE_LOGO from '../pikchi/VOGUE_LOGO.png'


const ChistoText = () => {
  return (
    <div>
        <div class='ProstoText'>
            <div class='HHH'>
                <h1>Make your commute</h1>
                <h1>the best part of your day.</h1>
            </div>
            
            <div class='Bob'>
                <p>
                    Clean and timeless designs that make every ride a thrill.
                    Wherever you're heading, our bikes are made to make your daily commute a joy.
                </p>
                <img src={R} alt="" />
            </div>
            

        </div>

        <div class='TextMedia'>
            <div class='Text-and-button'>
                <h1>Discover your local Veloretti partner store</h1>
                <p>Our partner stores across the Netherlands are there for you. Whether you're looking to pick up a newly ordered bike, need a fix, or want to take a test ride on our Ivy or Ace Two, your ideal biking experience is closer than you think.</p>
                <button>Find a partner store near you</button>
            </div>
        </div>



        <div class='prosto-velik'>
            <div class="vel"><img src={bike} alt="" /></div>

            <div class='kusok-TEXTA-and-velik'>
                <h1>Leasing</h1>
                <p>Want to provide your organisation with mobility in a unique and creative way? Our Electric and City bikes are the perfect solution for healthier employees. So whether it's customised employee bicycles or standout promotional rides, both small and big organisations share the love of our Veloretti designs. Depending on the number of bikes, we will give you a customised quote.</p>
                <h6>Learn more</h6>
            </div>

        </div>



        <div class='Otzivi'>
            <h1>They talked about us</h1>
            <div class='blocksss'>
                <div class='block1s'>
                    <h3>"One of the best e-bikes available at any price and far and away my favourite ride of the year."</h3>
                    <img src={TheVerge} alt="" />
                </div>

                <div class='block1s'>
                    <h3>“This second-generation Ace is a superhero amongst urban e- bikes… 9/10.”</h3>
                    <img src={Bright} alt="" />
                </div>

                <div class='block1s'>
                    <h3>"The timeless, chic design and stunning craftsmanship make them the perfect way to get around the city."</h3>
                    <img src={VOGUE_LOGO} alt="" />
                </div>

            </div>
        </div>
      
    </div>
  )
}

export default ChistoText
