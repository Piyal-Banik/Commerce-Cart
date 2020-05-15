import React from 'react';
import './product-preview.styles.scss';

import Product from '../product/product.component';

const items = [
    {
      category: 'Hat',  
      id: 1,
      name: 'Brown Brim',
      imageUrl: 'https://i.ibb.co/ZYW3VTp/brown-brim.png',
      price: 25,
      discount: 30
    },
    {
        id: 18,
        name: 'Black Jean Shearling',
        imageUrl: 'https://i.ibb.co/XzcwL5s/black-shearling.png',
        price: 125,
        discount: 20,
        category: 'Jackets'
    },
    {
        id: 19,
        name: 'Blue Jean Jacket',
        imageUrl: 'https://i.ibb.co/mJS6vz0/blue-jean-jacket.png',
        price: 90,
        discount: 40,
        category: 'Jackets'
    },
    {
        id: 30,
        name: 'Camo Down Vest',
        imageUrl: 'https://i.ibb.co/xJS0T3Y/camo-vest.png',
        price: 325,
        discount: 10,
        category: 'Mens'
      },
      {
        id: 31,
        name: 'Floral T-shirt',
        imageUrl: 'https://i.ibb.co/qMQ75QZ/floral-shirt.png',
        price: 20,
        category: 'Jackets'
    },
    {
      id: 4,
      name: 'Grey Brim',
      imageUrl: 'https://i.ibb.co/RjBLWxB/grey-brim.png',
      price: 25,
      discount: 30,
      category: 'Hat'
    },
    {
        id: 12,
        name: 'Black Converse',
        imageUrl: 'https://i.ibb.co/bPmVXyP/black-converse.png',
        price: 110,
        discount: 15,
        category: 'Shoe'
    },
    {
        id: 13,
        name: 'Nike White AirForce',
        imageUrl: 'https://i.ibb.co/1RcFPk0/white-nike-high-tops.png',
        price: 160,
        discount: 30,
        category: 'Shoe'
    }    
  ];

const ProductPreview = ({limit}) => (
    <div className='product-preview'>
        {items
            .filter((item, idx) => idx < limit)
            .map((item) => (
                <Product key={item.id} item={item} />
        ))}
    </div>
);

export default ProductPreview;