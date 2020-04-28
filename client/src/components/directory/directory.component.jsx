import React, {Component} from 'react';
import './directory.styles.scss';

import DirectoryItem from '../directory-item/directory-item.component';
import SectionTitle from '../section-title/section-title.component';

class Directory extends Component {
    constructor(props) {
        super(props);

        this.state = {
            sections: [
                {
                  title: 'phones',
                  imageUrl: '/images/phone.jpg',
                  id: 1,
                  linkUrl: 'shop/phones'
                },
                {
                  title: 'laptops',
                  imageUrl: '/images/laptop.jpg',
                  id: 2,
                  linkUrl: 'shop/laptops'
                },
                {
                  title: 'headphones',
                  imageUrl: '/images/headphones.jpg',
                  id: 3,
                  linkUrl: 'shop/headphones'
                },
                {
                  title: 'womens',
                  imageUrl: '/images/womens.jpg',
                  size: 'large',
                  id: 4,
                  linkUrl: 'shop/womens'
                },
                {
                  title: 'mens',
                  size: 'large',
                  imageUrl: '/images/mens.jpg',
                  id: 5,
                  linkUrl: 'shop/mens'
                }
            ]
        }
    }

    render() {
        return(
            <div>
                <SectionTitle title='Categories' />

                <div className='directory-menu'>
                    {this.state.sections.map(({id,...otherSectionProps}) => ( 
                        <DirectoryItem key={id} {...otherSectionProps} />
                    ))}
                </div>
            </div>
        );
    };
};

export default Directory;