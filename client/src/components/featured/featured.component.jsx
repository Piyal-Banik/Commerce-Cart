import React, {Component} from 'react';

import './featured.styles.scss';

import SectionTitle from '../section-title/section-title.component';
import ProductPreview from '../product-preview/product-preview.component';

class Featured extends Component {
    render() {
        return(
            <div className='featured-products'>
                <SectionTitle title='featured products' className='title'/>

                <ProductPreview className='product-preview' limit={8}/>
            </div>
        );
    };
};

export default Featured;