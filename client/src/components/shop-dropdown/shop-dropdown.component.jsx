import React from 'react';
import { NavLink } from 'react-router-dom';

import './shop-dropdown.styles.scss';

const ShopOptions = () => {
    return(
        <div className='shop-options'>
            <div className='shop-section'>
                <NavLink to='/shop/phones'><h3 className='title'>Phones</h3></NavLink>
                
                <div className='categories'>
                    <NavLink className='category' to='shop/phones/samsung'>Samsung</NavLink>
                    
                    <NavLink className='category' to='shop/phones/oppo'>Oppo</NavLink>
                    
                    <NavLink className='category' to='shop/phones/vivo'>Vivo</NavLink>
                   
                    <NavLink className='category' to='shop/phones/redmi'>Redmi</NavLink>
                    
                    <NavLink className='category' to='shop/phones/others'>Others</NavLink>
                </div>
            </div>

            <div className='shop-inverted-section'>
                <NavLink to='/shop/laptops'><h3 className='title'>Laptops</h3></NavLink>
               
                <div className='categories'>
                    <NavLink className='category' to='shop/laptops/Macintosh'>Macintosh</NavLink>
                    
                    <NavLink className='category' to='shop/laptops/dell'>Dell</NavLink>
                    
                    <NavLink className='category' to='shop/laptops/hp'>Hp</NavLink>
                   
                    <NavLink className='category' to='shop/laptops/lenevo'>Lenevo</NavLink>
                    
                    <NavLink className='category' to='shop/laptops/others'>Others</NavLink>
                </div>
            </div>

            <div className='shop-section'>
                <NavLink to='/shop/headphones'><h3 className='title'>Headphones</h3></NavLink>
                
                <div className='categories'>
                    <NavLink className='category' to='/shop/headphones/bose'>Bose</NavLink>
                    
                    <NavLink className='category' to='/shop/headphones/sony'>Sony</NavLink>
                    
                    <NavLink className='category' to='/shop/headphones/jbl'>Jbl</NavLink>
                   
                    <NavLink className='category' to='/shop/headphones/boat'>Boat</NavLink>
                    
                    <NavLink className='category' to='/shop/headphones/skullcandy'>Skullcandy</NavLink>
                </div>
            </div>

            <div className='shop-inverted-section'>
                <NavLink to='/shop/mens'><h3 className='title'>Mens</h3></NavLink>
                
                <div className='categories'>
                    <NavLink className='category' to='/shop/mens/topwear'>Topwear</NavLink>
                    
                    <NavLink className='category' to='/shop/mens/bottomwear'>Bottomwear</NavLink>
                    
                    <NavLink className='category' to='/shop/mens/footwear'>Footwear</NavLink>
                   
                    <NavLink className='category' to='/shop/mens/watches'>Watches</NavLink>
                    
                    <NavLink className='category' to='/shop/mens/accessories'>Accessories</NavLink>
                </div>
            </div>

            <div className='shop-section'>
                <NavLink to='/shop/womens'><h3 className='title'>Womens</h3></NavLink>
                
                <div className='categories'>
                    <NavLink className='category' to='/shop/womens/indian'>Indian Wear</NavLink>
                    
                    <NavLink className='category' to='/shop/womens/western'>Western Wear</NavLink>
                    
                    <NavLink className='category' to='/shop/womens/footwear'>Footwear</NavLink>
                    
                    <NavLink className='category' to='/shop/womens/makeup'>Makeup</NavLink>
                    
                    <NavLink className='category' to='/shop/womens/gadgets'>Gadgets</NavLink>
                </div>
            </div>
        </div>
    );
}

export default ShopOptions;