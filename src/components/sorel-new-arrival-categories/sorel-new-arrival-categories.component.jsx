import React from 'react';
import {  SorelCategoriesContainer } from './sorel-new-arrival-categories.styles';
import MenuItems from '../menu-items/menu-items.component';
import Refine from '../../components/refine/refine.component';
import Color from '../../components/color/color.component';
import Brands from '../../components/brands-sidebar/brands-sidebar.component.jsx';




class SorelCategories extends React.Component  {
    constructor() {
        super();
        this.state = {
            sections: [{
                
                title: 'Womens Sorel Caribou Boots Buff',
                imageUrl: 'https://cdn.shopify.com/s/files/1/0230/0765/products/F14_NL1005_280_f_1024x1024.jpg?v=1571709644',
                id: 1,
                color: 'Brown',
                brands: 'Sorel',
                linkUrl: 'Mens-adidas-Originals-Gazelle-Shoes-Burgundy',
                description: 'Some good gist about this brand is as follows..., I\'ll tell tou the entire story at a later date',
                price: 160
            },
            {
                title: 'Mens Sorel Caribou Boots Buff',
                imageUrl: 'https://cdn.shopify.com/s/files/1/0230/0765/products/F14_NL1005_280_m_1024x1024.jpg?v=1571709644',
                id: 2,
                color: 'BROWN',
                brands: 'SOREL',
                linkUrl: 'Mens-adidas-Originals-Tri-Color-Strapback-Hat-Black',
                description: 'Some good gist about this brand is as follows..., I\'ll tell tou the entire story at a later date',
                price: 160
            },
            {
                title: 'Womens Sorel Out N About Plus Felt Boots Quarry',
                imageUrl: 'https://images.journeys.com/images/products/1_577433_ZM_ALT1.JPG',
                id: 3,
                color: 'BLUE',
                brands: 'SOREL',
                linkUrl: 'Mens-adidas-Essentials-Trefoil-Hoodie-Grey-Five',
                description: 'Some good gist about this brand is as follows..., I\'ll tell tou the entire story at a later date',
                price: 120
            },
            {
                title: 'Sorel Jackets',
                imageUrl: 'http://content.backcountry.com/images/items/900/SRL/SRL003H/BK.jpg',
                id: 4,
                color: 'BLACK',
                brands: 'SOREL',
                linkUrl: 'Mens-adidas-Essentials-Trefoil-Hoodie-White',
                description: 'Some good gist about this brand is as follows..., I\'ll tell tou the entire story at a later date',
                price: 100
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
          <SorelCategoriesContainer>
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
          </SorelCategoriesContainer>
      )
  }
    }
	
 


export default SorelCategories;