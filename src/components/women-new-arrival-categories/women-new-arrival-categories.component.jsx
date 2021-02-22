import React from 'react';
import {  WomenCategoriesContainer } from './women-new-arrival-categories.styles';
import MenuItems from '../menu-items/menu-items.component';
import Refine from '../../components/refine/refine.component';
import Color from '../../components/color/color.component';
import Brands from '../../components/brands-sidebar/brands-sidebar.component.jsx';




class WomenCategories extends React.Component  {
    constructor() {
        super();
        this.state = {
            sections: [{
                
                title: 'Womens New Balance 574 Shoes White',
                imageUrl: 'https://media.journeys.com/images/products/1_495414_ZM.JPG',
                id: 1,
                color: 'WHITE',
                brands: 'NEW BALANCE',
                linkUrl: 'Mens-adidas-Originals-Gazelle-Shoes-Burgundy',
                description: 'Some good gist about this brand is as follows..., I\'ll tell tou the entire story at a later date',
                price: 75
            },
            {
                title: 'Womens Nike Sportswear Heritage Joggers',
                imageUrl: 'https://n.nordstrommedia.com/id/sr3/25bbb3bf-277a-427c-a35d-9efcc9017ad1.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196',
                id: 2,
                color: 'BLACK',
                brands: 'NIKE',
                linkUrl: 'Mens-adidas-Originals-Tri-Color-Strapback-Hat-Black',
                description: 'Some good gist about this brand is as follows..., I\'ll tell tou the entire story at a later date',
                price: 55
            },
            {
                title: 'Womens Nike Sportswear Heritage Crew',
                imageUrl: 'https://i.pinimg.com/originals/ad/3a/65/ad3a657f6b5a2eb8f273d20f070c7701.jpg',
                id: 3,
                color: 'MULTICOLOR',
                brands: 'NIKE',
                linkUrl: 'Mens-adidas-Essentials-Trefoil-Hoodie-Grey-Five',
                description: 'Some good gist about this brand is as follows..., I\'ll tell tou the entire story at a later date',
                price: 65
            },
            {
                title: 'Womens Nike Sportswear Essential Fleece Hoodie',
                imageUrl: 'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/fe1199b4-8385-4cf6-9d09-8b19ddce6fcb/sportswear-essential-womens-funnel-neck-fleece-pullover-hoodie-rclCxC.jpg',
                id: 4,
                color: 'GREEN',
                brands: 'NIKE',
                linkUrl: 'Mens-adidas-Essentials-Trefoil-Hoodie-White',
                description: 'Some good gist about this brand is as follows..., I\'ll tell tou the entire story at a later date',
                price: 55
            },
            {
                title: 'Womens adidas Essentials Loungewear 3-Stripes Leggings',
                imageUrl: 'https://www.hyperoutlet.cz/adidas-womens-essentials-3-stripes-leggings-med-grey-515551--460.jpg',
                id: 5,
                color: 'GRAY',
                brands: 'ADIDAS',
                description: 'Some good gist about this brand is as follows..., I\'ll tell tou the entire story at a later date',
                price: 130
            },
            {
                title: 'adidas Utility Backpack Black',
                imageUrl: 'https://www.pacsun.com/dw/image/v2/AAJE_PRD/on/demandware.static/-/Sites-pacsun_storefront_catalog/default/dw9901663f/product_images/0644505030105NEW_00_001.jpg?sw=690&sh=1070&sm=fit',
                id: 6,
                color: 'BLACK',
                brands: 'ADIDAS',
                description: 'Some good gist about this brand is as follows..., I\'ll tell tou the entire story at a later date',
                price: 65
            },
            {
                title: 'adidas Modular Backpack Black',
                imageUrl: 'https://scene7.zumiez.com/is/image/zumiez/pdp_hero/adidas-Originals-Urban-Utility-Black-Backpack-_307816-back-US.jpg',
                id: 7,
                color: 'BLACK',
                brands: 'ADIDAS',
                description: 'Some good gist about this brand is as follows..., I\'ll tell tou the entire story at a later date',
                price: 80
            },
            {
                title: 'Womens Columbia Bugaboo 1986 Interchange Jacket Green',
                imageUrl: 'https://cdna.lystit.com/photos/moosejaw/4867d589/columbia-Peatmoss-Bugaboo-1986-Interchange-Jacket.jpeg',
                id: 8,
                color: 'GREEN',
                brands: 'BUGABOO',
                description: 'Some good gist about this brand is as follows..., I\'ll tell tou the entire story at a later date',
                price: 199
            },
            {
                title: 'Womens adidas Originals Superstar Shoes White Gold',
                imageUrl: 'https://www.bigsalemax.com/wp-content/uploads/2018/03/Adidas-Originals-Superstar-White-Gold-Mens-Womens-Casual-Sneakers-Shoes-1.jpg',
                id: 9,
                color: 'WHITE',
                brands: 'ADIDAS',
                description: 'Some good gist about this brand is as follows..., I\'ll tell tou the entire story at a later date',
                price: 60
            },
            {
                title: 'Womens Timberland Tree Logo Hoodie Black',
                imageUrl: 'https://images.timberland.com/is/image/timberland/A1EUA001-HERO?wid=720&hei=720&fit=constrain,1&qlt=85,1&op_usm=1,1,6,0',
                id: 10,
                color: 'BLACK',
                brands: 'TIMBERLAND',
                description: 'Some good gist about this brand is as follows..., I\'ll tell tou the entire story at a later date',
                price: 68
            },
            {
                title: 'Womens adidas Waist Bag Hazy Rose',
                imageUrl: 'https://shopdealus.com/duo/wp-content/uploads/2020/12/duoshou-2020-12-15_14-31-46_327.jpg',
                id: 11,
                color: 'PURPLE',
                brands: 'ADIDAS',
                description: 'Some good gist about this brand is as follows..., I\'ll tell tou the entire story at a later date',
                price: 25
            },
            {
                title: 'Womens Timberland Boot Logo Hoodie Black',
                imageUrl: 'https://resources.mandmdirect.com/Images/_default/t/m/2/tm2647_1_cloudzoom.jpg',
                id: 12,
                color: 'BLACK',
                brands: 'TIMBERLAND',
                description: 'Some good gist about this brand is as follows..., I\'ll tell tou the entire story at a later date',
                price: 68
            },
            {
                title: 'Womens New Balance Shando Shoes Black',
                imageUrl: 'https://5.kixify.com/sites/default/files/imagecache/product_full/product/2020/08/31/p_30948261_178352216_2661011.jpg',
                id: 13,
                color: 'BLACK',
                brands: 'NEW BALANCE',
                description: 'Some good gist about this brand is as follows..., I\'ll tell tou the entire story at a later date',
                price: 89
            },
            {
                title: 'Womens Lacoste x National Geographic Organic Sweatshirt Grey',
                imageUrl: 'https://www.sportinglife.ca/dw/image/v2/BCLQ_PRD/on/demandware.static/-/Sites-spl-master/default/dw0f1a0545/images/default/25441379_NAVY_3.JPG?sw=700',
                id: 14,
                color: 'GREY',
                brands: 'LACOSTE',
                description: 'Some good gist about this brand is as follows..., I\'ll tell tou the entire story at a later date',
                price: 165
            },
            {
                title: 'Womens Lacoste x National Geographic Organic Sweatshirt Navy',
                imageUrl: 'https://imagena1.lacoste.com/dw/image/v2/AAUP_PRD/on/demandware.static/-/Sites-master/default/dw06520aaf/SJ6406_6U1_24.jpg?imwidth=840&impolicy=custom',
                id: 15,
                color: 'NAVY',
                brands: 'LACOSTE',
                description: 'Some good gist about this brand is as follows..., I\'ll tell tou the entire story at a later date',
                price: 165
            },
            {
                title: 'Womens Converse Pro Leather Sneakers "White Ice"',
                imageUrl: 'https://cdnb.lystit.com/photos/slamjamsocialism/SJGB33113-White-8362e604-.jpeg',
                id: 16,
                color: 'WHITE',
                brands: 'CONVERSE',
                description: 'Some good gist about this brand is as follows..., I\'ll tell tou the entire story at a later date',
                price: 75
            },
            {
                title: 'Womens Converse Chuck Taylor All Star CX Sneakers "White Ice"',
                imageUrl: 'https://static.footshop.com/289024/50156.jpg',
                id: 17,
                color: 'WHITE',
                brands: 'CONVERSE',
                description: 'Some good gist about this brand is as follows..., I\'ll tell tou the entire story at a later date',
                price: 70
            },
            {
                title: 'Womens Nike Air Max 270 React Shoes',
                imageUrl: 'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/i1-6304633f-a4bc-491e-b6f4-1f3d7bfc74d0/air-max-270-react-mens-shoe-zPRv3k.jpg',
                id: 18,
                color: 'BLACK',
                description: 'Some good gist about this brand is as follows..., I\'ll tell tou the entire story at a later date',
                price: 160
            },
            {
                title: 'Womens Columbia Benton Springs Half Snap Pullover Nova Pink',
                imageUrl: 'https://columbia.scene7.com/is/image/ColumbiaSportswear2/1860991_604_a2?wid=768&hei=806',
                id: 19,
                color: 'ORANGE',
                brands: 'COLUMBIA',
                description: 'Some good gist about this brand is as follows..., I\'ll tell tou the entire story at a later date',
                price: 70
            },
            {
                title: 'Womens Champion Life Reverse Weave Hoodie Caviar Brown',
                imageUrl: 'https://cdn.shopify.com/s/files/1/0017/5007/3404/products/Men_sadidasOriginalsAdicolorPolarFleeceHoodieBlackGE5212_10_1024x1024.jpg?v=1605023342',
                id: 20,
                color: 'BROWN',
                brands: 'CHAMPION',
                description: 'Some good gist about this brand is as follows..., I\'ll tell tou the entire story at a later date',
                price: 60
            },
            {
                title: 'Womens adidas Originals R.Y.V. Hoodie Legacy Red',
                imageUrl: 'https://cdna.lystit.com/photos/jdsports/6ecbc165/adidas-originals-Legacy-Red-Ryv-Hoodie.jpeg',
                id: 21,
                color: 'RED',
                brands: 'ADIDAS',
                description: 'Some good gist about this brand is as follows..., I\'ll tell tou the entire story at a later date',
                price: 70
            },
            {
                title: 'Womens adidas Originals Adicolor Polar Fleece Sweatshirt Purple',
                imageUrl: 'https://cdn.shopify.com/s/files/1/0017/5007/3404/products/Men_sadidasOriginalsAdicolorPolarFleeceSweatshirtPurpleGE0842_10_1024x1024.jpg?v=1604985220',
                id: 22,
                color: 'PURPLE',
                brands: 'ADIDAS',
                description: 'Some good gist about this brand is as follows..., I\'ll tell tou the entire story at a later date',
                price: 75
            },
            {
                title: 'Womens Columbia Benton Springs Half Snap Pullover Stone Green',
                imageUrl: 'https://columbia.scene7.com/is/image/ColumbiaSportswear2/1907091_319_a2?wid=768&hei=806',
                id: 23,
                color: 'GREEN',
                brands: 'COLUMBIA',
                description: 'Some good gist about this brand is as follows..., I\'ll tell tou the entire story at a later date',
                price: 65
            },
            {
                title: 'Womens adidas Originals Goofy Crew Sweatshirt Black',
                imageUrl: 'https://i.ebayimg.com/images/g/QzcAAOSwyN5fNOBL/s-l640.jpg',
                id: 24,
                color: 'BLUE',
                brands: 'ADIDAS',
                description: 'Some good gist about this brand is as follows..., I\'ll tell tou the entire story at a later date',
                price: 90
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
          <WomenCategoriesContainer>
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
          </WomenCategoriesContainer>
      )
  }
    }
	
 


export default WomenCategories;