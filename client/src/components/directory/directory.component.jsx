import React, {Component} from 'react';
import './directory.styles.scss';
import DirectoryItem from '../directory-item/directory-item.component';


class Directory extends Component {
    constructor(props) {
        super(props);

        this.state = {
            sections: [
                {
                  title: 'phones',
                  imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
                  id: 1,
                  linkUrl: 'shop/phones'
                },
                {
                  title: 'laptops',
                  imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
                  id: 2,
                  linkUrl: 'shop/laptops'
                },
                {
                  title: 'headphones',
                  imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
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
                <div className='title-section'>
                    <p className='title'>Categories</p>
                    <div className='divider'></div>
                </div>
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