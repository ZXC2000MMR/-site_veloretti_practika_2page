import React from 'react'
import "../style/Page5.css"
import vesind from "../pikchi/veseliyIndus.png"

const DvaBlokaVmeste = () => {
  return (
    <div>
        <div class='reddot'>
            <div class='reddot-Text'>
                <a href="">Red Dot Award</a>
                <p>Good design is what drives us, and we're proud to share that Veloretti Electric Two has already won the prestigious Red Dot Design Award 2023, as judged by the world's best product designers.</p>
            </div>

        </div>
        <div class='And-snova-indus'>
            <div class='And-snova-indus-Text'>
                <a href="" class='And-snova-indus-Text-a1'>Ride carefree</a>
                <p>Our Qover x Veloretti insurance plan has got you covered. It offers comprehensive coverage against theft, provides assistance in case of any issues, and covers any damages to your bike.</p>
                <a href="">Learn more</a>
            </div>
            <img class='And-snova-indus-img' src={vesind} alt="" />
        </div>
    </div>
  )
}

export default DvaBlokaVmeste