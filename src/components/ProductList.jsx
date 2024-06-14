import React from 'react';
import ProductCard from './ProductCard';
import '../style/ProductList.css';

import black from "../pikchi/Black-ball.png"
import Gray from "../pikchi/Gray-ball.png"
import white from "../pikchi/White-ball.png"
import polBlack from "../pikchi/Pol-Black-ball.png"
import Polwhite from "../pikchi/Pol-white-Pol-white.png"

import VelikBlackOne from "../pikchi/image.png"
import Velikgreyone from "../pikchi/velik-grey.png"
import VelikbeliyOne from "../pikchi/velik-beliy.webp"
import VelikorangeOne from "../pikchi/velik-orange.webp"

import VelikBlackTwo from "../pikchi/image2.png"
import velikgrey2Two from "../pikchi/velik-grey2.png"
import velikwhite2Two from "../pikchi/velik-white2.png"
import velikorange2Two from "../pikchi/velik-orange2.png"



// Компонент ProductList отображает список продуктов
const ProductList = () => {
    const products = [
        {
            title: 'Electric Ace',
            subtitle: 'Two',
            price: '€69,07 NET/MONTH',
            images: [VelikBlackOne, Velikgreyone, VelikbeliyOne, VelikorangeOne],
            colorImages: [black, Gray, white, polBlack]
        },
        {
            title: 'Electric Ivy',
            subtitle: 'Two',
            price: '€69,07 NET/MONTH',
            images: [VelikBlackTwo,  velikgrey2Two, velikwhite2Two, velikorange2Two],
            colorImages: [black, Gray, white, Polwhite]
        }
    ];

    return (
        <div className="product-list">
            {products.map((product, index) => (
                <ProductCard
                    key={index}
                    title={product.title}
                    subtitle={product.subtitle}
                    price={product.price}
                    images={product.images}
                    colorImages={product.colorImages}
                />
            ))}
        </div>
    );
};

export default ProductList;
