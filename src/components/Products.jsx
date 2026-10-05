import React from 'react';
import ProductCard from '../ui/ProductCard';
const Products = () => {
    return (
        <div className='container product_cont'>
            <ProductCard title="Упаковка"/>
            <ProductCard title="Пакеты"/>
            <ProductCard title="Кейсы"/>
            <ProductCard title="Другие изделия"/>
        </div>
    );
}

export default Products;
