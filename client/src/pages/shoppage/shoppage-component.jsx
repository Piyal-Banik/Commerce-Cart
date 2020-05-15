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
                        <div className='filter-section'>
                            <FormInput placeholder='Min' />
                            <FormInput placeholder='Max' />
                            <CustomButton inverted>Filter</CustomButton>
                        </div>
                    </div>

                    <div className='category-section'>
                        <SectionTitle className='title' title='Categories' />
                        <select className='category-selector' >
                            <option value="category">Select A Category</option>
                            <option value="phones">Phones</option>
                            <option value="laptops">Laptops</option>
                            <option value="headphones">Headphones</option>
                            <option value="mens">Mens</option>
                            <option value="womens">Womens</option>
                        </select>
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