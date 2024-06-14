import React from 'react'
import logo from '../pikchi/logo.png'
import Gal from '../pikchi/galka.svg'
import '../style/header.css'
import UKflag from '../pikchi/EN.png'
import User from '../pikchi/user.png'
import Kor from '../pikchi/korzinka.svg'









const HeaderComponent = () => {
  return (
    <div class="div_logo">
        <p class="logo">VELORETTI</p>
        <div class="div_opitons">
            <select class="sel_1"><option>ELECTRIC</option></select>
            <select class="sel_2"><option>CITY</option></select>
            <select class="sel_3"><option>KIDS</option></select>
            <button class="but_1">ACCESSORIES</button>
            <button class="but_2">STORES</button>
            <select class="sel_4"><option>LEASING</option></select>

            <span class="span_items">
              <p class="en">EN</p>
              <img class="uk_lang" src={UKflag}></img>
              <img class="profile" src={User}></img>
              <img class="cart" src={Kor}></img>
            </span>

        </div>
    </div>
  )
}

export default HeaderComponent