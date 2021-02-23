import React from 'react';
import {  ColumbiaCategoriesContainer } from './columbia-categories.styles';
import MenuItems from '../menu-items/menu-items.component';
import Refine from '../../components/refine/refine.component';
import Color from '../../components/color/color.component';
import Brands from '../../components/brands-sidebar/brands-sidebar.component.jsx';




class ColumbiaCategories extends React.Component  {
    constructor() {
        super();
        this.state = {
            sections: [{
                
                title: 'Mens Columbia Flash Forward Print Windbreaker Grey Tropical',
                imageUrl: 'https://cdn.shopify.com/s/files/1/0017/5007/3404/products/Men_s_Flash_Forward_Print_Grey_Tropical_1606801042_4.jpg?v=1602257011',
                id: 1,
                color: 'GREY',
                brands: 'COLUMBIA',
                linkUrl: 'Mens-adidas-Originals-Gazelle-Shoes-Burgundy',
                description: 'Some good gist about this brand is as follows..., I\'ll tell tou the entire story at a later date',
                price: 80
            },
            {
                title: 'Mens Columbia Flash Forward Print Windbreaker Black Tropical',
                imageUrl: 'https://cdn.shopify.com/s/files/1/0017/5007/3404/products/Men_s-Flash-Forward-Print-Black-Tropical-1606801008_01.jpg?v=1602256026',
                id: 2,
                color: 'MULTICOLOR',
                brands: 'COLUMBIA',
                linkUrl: 'Mens-adidas-Originals-Tri-Color-Strapback-Hat-Black',
                description: 'Some good gist about this brand is as follows..., I\'ll tell tou the entire story at a later date',
                price: 26
            },
            {
                title: 'Womens Columbia Poe Creek Jacket Navy',
                imageUrl: 'https://cdn.shopify.com/s/files/1/0017/5007/3404/products/Women_s_Poe_Creek_Jacket_Navy_1887292467_3_1024x1024.jpg?v=1602262336',
                id: 3,
                color: 'NAVY',
                brands: 'COLUMBIA',
                linkUrl: 'Mens-adidas-Essentials-Trefoil-Hoodie-Grey-Five',
                description: 'Some good gist about this brand is as follows..., I\'ll tell tou the entire story at a later date',
                price: 55
            },
            {
                title: 'Womens Columbia Side Hill Printed Windbreaker White',
                imageUrl: 'https://imagescdn.simons.ca/images/9385-20886863-19-A1_2/side-hill-print-windbreaker.jpg?__=8',
                id: 4,
                color: 'WHITE',
                brands: 'COLUMBIA',
                linkUrl: 'Mens-adidas-Essentials-Trefoil-Hoodie-White',
                description: 'Some good gist about this brand is as follows..., I\'ll tell tou the entire story at a later date',
                price: 55
            },
            {
                title: 'Columbia-Multicolor',
                imageUrl: 'https://belk.scene7.com/is/image/Belk?layer=0&src=1801546_1920742_A_466&$DWP_PRODUCT_PDP_LARGE$',
                id: 5,
                color: 'MULTICOLOR',
                brands: 'COLUMBIA',
                description: 'Some good gist about this brand is as follows..., I\'ll tell tou the entire story at a later date',
                price: 130
            },
            {
                title: 'Mens Columbia Watertight II Jacket Dark Purple',
                imageUrl: 'https://cdna.lystit.com/photos/columbia/ffaa091f/columbia-Black-Cherry-Watertight.jpeg',
                id: 6,
                color: 'PURPLE',
                brands: 'COLUMBIA',
                description: 'Some good gist about this brand is as follows..., I\'ll tell tou the entire story at a later date',
                price: 279
            },
            {
                title: 'Mens Columbia Watertight II Jacket Black',
                imageUrl: 'https://cdn.shopify.com/s/files/1/1128/5906/products/Columbia-jacket-rain-watertight-II-1533891-black_1024x1024.jpg?v=1599774713',
                id: 7,
                color: 'BLACK',
                brands: 'COLUMBIA',
                description: 'Some good gist about this brand is as follows..., I\'ll tell tou the entire story at a later date',
                price: 80
            },
            {
                title: 'Mens Columbia Bugaboo 1986 Interchange Jacket Green',
                imageUrl: 'https://cdn.shopify.com/s/files/1/0017/5007/3404/products/Men_sColumbiaGlennakerSherpaLinedJacketStoneGreenOliveGreen1820941397_6_02.jpg?v=1604334312',
                id: 8,
                color: 'GREEN',
                brands: 'BUGABOO',
                description: 'Some good gist about this brand is as follows..., I\'ll tell tou the entire story at a later date',
                price: 199
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
          <ColumbiaCategoriesContainer>
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
          </ColumbiaCategoriesContainer>
      )
  }
    }
	
 


export default ColumbiaCategories;