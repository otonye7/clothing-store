import React from 'react';
import {  RomanticCrownCategoriesContainer } from './romantic-crown-categories.styles';
import MenuItems from '../menu-items/menu-items.component';
import Refine from '../../components/refine/refine.component';
import Color from '../../components/color/color.component';
import Brands from '../../components/brands-sidebar/brands-sidebar.component.jsx';




class RomanticCrownCategories extends React.Component  {
    constructor() {
        super();
        this.state = {
            sections: [{
                
                title: 'Unisex Romantic Crown RMTC Logo Pocket Sweatshirt Navy',
                imageUrl: 'http://romanticcrown.com/web/product/big/201910/11f576398d29ac6224044c3fe734d728.jpg',
                id: 1,
                color: 'NAVY',
                brands: 'ROMANTIC CROWN',
                linkUrl: 'Mens-adidas-Originals-Gazelle-Shoes-Burgundy',
                description: 'Some good gist about this brand is as follows..., I\'ll tell tou the entire story at a later date',
                price: 80
            },
            {
                title: 'Unisex Romantic Crown Logo Sweatshirt Cream',
                imageUrl: 'http://m.romanticcrown.com/web/product/medium/201902/ab552bd96975c57d5ddc94accd81643b.jpg',
                id: 2,
                color: 'CREAM',
                brands: 'ROMANTIC CROWN',
                linkUrl: 'Mens-adidas-Originals-Tri-Color-Strapback-Hat-Black',
                description: 'Some good gist about this brand is as follows..., I\'ll tell tou the entire story at a later date',
                price: 26
            },
            {
                title: 'Unisex Romantic Crown Logo Sweatshirt Cream',
                imageUrl: 'https://cdn.shopify.com/s/files/1/0017/5007/3404/products/Romantic-Crown_RC-VIDEO-SWEATSHIRT-OATMEAL_RCHO1803OAT_01.jpg?v=1554734836',
                id: 3,
                color: 'CREAM',
                brands: 'ROMANTIC CROWN',
                linkUrl: 'Mens-adidas-Essentials-Trefoil-Hoodie-Grey-Five',
                description: 'Some good gist about this brand is as follows..., I\'ll tell tou the entire story at a later date',
                price: 55
            },
            {
                title: 'Unisex Romantic Crown Logo Sweatshirt Grey',
                imageUrl: 'https://i.pinimg.com/originals/f6/78/9b/f6789b6c779097780a6f7827963d7ab7.jpg',
                id: 4,
                color: 'GREY',
                brands: 'ROMANTIC CROWN',
                linkUrl: 'Mens-adidas-Essentials-Trefoil-Hoodie-White',
                description: 'Some good gist about this brand is as follows..., I\'ll tell tou the entire story at a later date',
                price: 55
            },
            {
                title: 'Romantic Crown Blue',
                imageUrl: 'https://cdn.shopify.com/s/files/1/0017/5007/3404/products/Romantic-Crown_Cross-Line-Hoodie_Navy_3191KP400159_06_1024x1024.jpg?v=1554735278',
                id: 5,
                color: 'BLUE',
                brands: 'ROMANTIC CROWN',
                description: 'Some good gist about this brand is as follows..., I\'ll tell tou the entire story at a later date',
                price: 130
            },
            {
                title: 'Unisex Romantic Crown Corduroy Trooper Hat Yellow',
                imageUrl: 'https://image.msscdn.net/images/prd_img/20190911/1151942/detail_1151942_1_500.jpg',
                id: 6,
                color: 'GOLD',
                brands: 'ROMANTIC CROWN',
                description: 'Some good gist about this brand is as follows..., I\'ll tell tou the entire story at a later date',
                price: 279
            },
            {
                title: 'Mens Romantic Crown Milk',
                imageUrl: 'https://www.romanticcrown.com/web/product/medium/201909/ab63d8bd2bb4994fa3e219632240dc56.jpg',
                id: 7,
                color: 'MILK',
                brands: 'ROMANTIC CROWN',
                description: 'Some good gist about this brand is as follows..., I\'ll tell tou the entire story at a later date',
                price: 80
            },
            {
                title: 'Unisex Romantic Crown Color Logo Sweatshirt Purple',
                imageUrl: 'https://img06.shop-pro.jp/PA01135/036/product/148718899_o11.jpg?cmsp_timestamp=20200214190545',
                id: 8,
                color: 'PURPLE',
                brands: 'ROMANTIC CROWN',
                description: 'Some good gist about this brand is as follows..., I\'ll tell tou the entire story at a later date',
                price: 199
            },
            {
                title: 'Romantic Crown Black',
                imageUrl: 'https://cdn.shopify.com/s/files/1/0017/5007/3404/products/Romantic-Crown_Easy-Day-Vibe-Hoodie_Black_3191KP400219_01_1024x1024.jpg?v=1561080745',
                id: 9,
                color: 'BLACK',
                brands: 'ROMANTIC CROWN',
                description: 'Some good gist about this brand is as follows..., I\'ll tell tou the entire story at a later date',
                price: 60
            },
            {
                title: 'Unisex Romantic Crown All Fleece Pocket Crew Neck Oatmeal',
                imageUrl: 'https://i.pinimg.com/originals/4a/4f/71/4a4f71efe8ebf16e403111152c5cdd70.jpg',
                id: 10,
                color: 'GRAY',
                brands: 'TIMBERLAND',
                description: 'Some good gist about this brand is as follows..., I\'ll tell tou the entire story at a later date',
                price: 68
            },
            {
                title: 'Unisex Romantic Crown All Fleece Pocket Crew Neck Navy',
                imageUrl: 'https://image.msscdn.net/images/prd_img/20191007/1177902/detail_1177902_1_500.jpg',
                id: 11,
                color: 'NAVY',
                brands: 'ROMANTIC CROWN',
                description: 'Some good gist about this brand is as follows..., I\'ll tell tou the entire story at a later date',
                price: 279
            },
            {
                title: 'Mens Romantic Crown 21C Boys Color Socks',
                imageUrl: 'https://www.romanticcrown.com/web/product/big/201908/3f4e7f72954211e8ef92c62e6d6aaf7c.jpg',
                id: 12,
                color: 'MULTICOLOR',
                brands: 'ROMANTIC CROWN',
                description: 'Some good gist about this brand is as follows..., I\'ll tell tou the entire story at a later date',
                price: 68
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
          <RomanticCrownCategoriesContainer>
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
          </RomanticCrownCategoriesContainer>
      )
  }
    }
	
 


export default RomanticCrownCategories;