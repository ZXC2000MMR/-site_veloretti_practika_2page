import React from 'react'
import "../style/Page2.css"

import ace from '../pikchi/ACE.png'
import ivy from '../pikchi/IVY.png'
import black from '../pikchi/image.png'
import black2 from '../pikchi/image2.png'
import left from '../pikchi/VectorLeft.png'
import right from '../pikchi/VectorRight.png'

const FeaturedBikeTwoV = () => {
  return (
    <div>
        <div class='dva-velika'>

            <div class='velik1'>

                <div class='panel-top'> <img src={ace} alt="" /> <h3>Rider height: 173-200cm</h3> </div>

                <div class='nachinka'>
                    <div class='vlevo'><img src={left} alt="" /></div>
                    <div class='black-vel'><img src={black} alt="" /></div>
                    <div class='vpravo'><img src={right} alt="" /></div>

                </div>

                <div class='block-s-cvetami-and-buttons'>

                    <div class='buttonsi'>
                        <button>Buy Now</button>
                        <div class='buttonsi-A'><a href="">Learn more</a></div>
                    </div>

                    <div class='cveta'>

                        <div class='cvet1'>
                            <button></button>
                        </div>

                        <div class='cvet2'>
                            <button></button>
                        </div>

                        <div class='cvet3'>
                            <button></button>
                        </div>

                        <div class='cvet4'>
                            <button></button>
                        </div>
                            
                    </div>

                </div>

            </div>

            <div class='velik2'>

                <div class='panel-top'> <img src={ace} alt="" /> <h3>Rider height: 173-200cm</h3> </div>

                <div class='nachinka'>
                    <div class='vlevo'><img src={left} alt="" /></div>
                    <div class='black-vel2'><img src={black2} alt="" /></div>
                    <div class='vpravo'><img src={right} alt="" /></div>

                </div>

                <div class='block-s-cvetami-and-buttons'>

                    <div class='buttonsi'>
                        <button>Buy Now</button>
                        <div class='buttonsi-A'><a href="">Learn more</a></div>
                    </div>

                    <div class='cveta'>

                        <div class='cvet1'>
                            <button></button>
                        </div>

                        <div class='cvet2'>
                            <button></button>
                        </div>

                        <div class='cvet3'>
                            <button></button>
                        </div>

                        <div class='cvet5'>
                            <button></button>
                        </div>
                            
                    </div>

                </div>

            </div>




        </div>
    </div>
  )
}

export default FeaturedBikeTwoV
