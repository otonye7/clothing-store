import React from 'react';
import {  NewBalanceCategoriesContainer } from './new-balance-arrival-categories.styles';
import MenuItems from '../menu-items/menu-items.component';
import Refine from '../../components/refine/refine.component';
import Color from '../../components/color/color.component';
import Brands from '../../components/brands-sidebar/brands-sidebar.component.jsx';




class NewBalanceCategories extends React.Component  {
    constructor() {
        super();
        this.state = {
            sections: [{
                
                title: 'Mens New Balance Shando Shoes Black',
                imageUrl: 'https://5.kixify.com/sites/default/files/imagecache/product_full/product/2020/08/31/p_30948261_178352216_2661011.jpg',
                id: 1,
                color: 'WHITE',
                brands: 'NEW BALANCE',
                linkUrl: 'Mens-adidas-Originals-Gazelle-Shoes-Burgundy',
                description: 'Some good gist about this brand is as follows..., I\'ll tell tou the entire story at a later date',
                price: 75
            },
            {
                title: 'Mens New Balance All Coasts Sea Salt',
                imageUrl: 'https://www.tactics.com/a/a5ne/9/new-balance-288-skate-shoes-sea-salt-gum.jpg',
                id: 2,
                color: 'GRAY',
                brands: 'NEW BALANCE',
                linkUrl: 'Mens-adidas-Originals-Tri-Color-Strapback-Hat-Black',
                description: 'Some good gist about this brand is as follows..., I\'ll tell tou the entire story at a later date',
                price: 55
            },
            {
                title: 'Mens New Balance XRCT Shoes Black with Phantom',
                imageUrl: 'https://cdnc.lystit.com/photos/zappos/b00376e7/new-balance-Black-Mt481v3.jpeg',
                id: 3,
                color: 'BLACK',
                brands: 'NEW BALANCE',
                linkUrl: 'Mens-adidas-Essentials-Trefoil-Hoodie-Grey-Five',
                description: 'Some good gist about this brand is as follows..., I\'ll tell tou the entire story at a later date',
                price: 65
            },
            {
                title: 'Mens New Balance XRCT Shoes Aluminum with Team',
                imageUrl: 'https://chiappettashoes.com/wp-content/uploads/2019/12/MTHIERG5-Blue-Left-scaled.jpg',
                id: 4,
                color: 'MULTICOLOR',
                brands: 'NEW BALANCE',
                linkUrl: 'Mens-adidas-Essentials-Trefoil-Hoodie-White',
                description: 'Some good gist about this brand is as follows..., I\'ll tell tou the entire story at a later date',
                price: 55
            },
            {
                title: 'NEW BALANCE SHOES',
                imageUrl: 'https://cdn.shopify.com/s/files/1/0017/5007/3404/products/Men_s-New-Balance-XRCT-Shoes-Black-Meadow_MSXRCTCD_01_1024x1024.jpg?v=1602182442',
                id: 5,
                color: 'MULTICOLOR',
                brands: 'NEW BALANCE',
                description: 'Some good gist about this brand is as follows..., I\'ll tell tou the entire story at a later date',
                price: 130
            },
            {
                title: 'Mens New Balance 574 Shoes Team Forest Green',
                imageUrl: 'https://www.sportstylesau.com/media/catalog/product/cache/1/image/1800x/040ec09b1e35df139433887a97daa66f/N/e/NewBalance50-1.jpg',
                id: 6,
                color: 'GREEN',
                brands: 'NEW BALANCE',
                description: 'Some good gist about this brand is as follows..., I\'ll tell tou the entire story at a later date',
                price: 65
            }
        ],
         searchColor: '',
         searchBrand: ''
        }     
      
}


handleInput = (e) => {
    console.log(e.target.value);
    this.setState({searchColor: e.target.value})
}


  render() {
    const {sections} = this.state;

    let filteredSection = sections.filter((section) => {
        return section.color.includes(this.state.searchColor)
    })

      
      return (
          <NewBalanceCategoriesContainer>
              <div className='colors-items'>
                  <Refine />
                  <Color  handleInput = {this.handleInput} filteredSection={filteredSection}/>
                  <Brands  sections={sections}/>
              </div>
              
              <div className='categories-items'>
                  <div className='preview'>
                      {
                          filteredSection.map(({id, title, price, imageUrl, color}) =>  (
                              <MenuItems key={id} title={title} price={price} imageUrl={imageUrl} color={color}/>
                          ))
                      }
                  </div>
              </div>
          </NewBalanceCategoriesContainer>
      )
  }
    }
	
 


export default NewBalanceCategories;