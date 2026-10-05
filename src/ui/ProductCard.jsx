import React from 'react';
import product from "../img/product.png"
import arrow from "../img/Arrow.png"

const ProductCard = ({title}) => {
    return (
        <div>
            <div>
                <img src={product} alt="" />
            </div>
            <h3>Упаковка</h3>
            <p>Тираж: от 50 штук</p>
            <p>Сделано из крафт-бумаги или плотного картона. Упаковки имеют различные формы и расцветки, изготовим форму под заказ.</p>
            <a href="#">Подробнее
                <img src={arrow} alt="" />
            </a>
        </div>
    );
}

export default ProductCard;
