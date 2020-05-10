import React, {Component} from 'react';

import './shoppage.styles.scss';

import SectionTitle from '../../components/section-title/section-title.component';
import CustomButton from '../../components/custom-button/custom-button.component';
import FormInput from '../../components/form-input/form-input.components';
import ProductPreview from '../../components/product-preview/product-preview.component';

class ShopPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            max: 1000,
            min: 100
        }
    }

    priceFilter = () => {

    }

    render() {
        return(
            <div className='shop'>
                <div className='sidebar'>

                    <SectionTitle className='title' title='search' />

                    <div className='search-form'>
                        <FormInput placeholder='Search...' />
                        <CustomButton inverted>Search</CustomButton>
                    </div>

                    <div className='filter-price'>
                        <SectionTitle className='title' title='Filter by price' /> 
                
                    </div>

                    <div className='category-section'>
                        <SectionTitle className='title' title='Categories' />
                    </div>
                    
                    <SectionTitle className='title' title='Recently viewed products' />
                </div>

                <div className='products-section'>
                    <ProductPreview limit={3} />
                </div>
            </div>
        )
    }
}

export default ShopPage;