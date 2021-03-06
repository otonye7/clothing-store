// import MenActionTypes from './men-arrival.types';

const INITIAL_STATE = {
    sections: [{
                
        title: 'Mens adidas Originals Gazelle Shoes Burgundy',
        imageUrl: 'https://i.pinimg.com/originals/4b/7e/a8/4b7ea8ccca224999202d98f0028e598b.png',
        id: 1,
        color: 'BIEGE',
        brands: 'ADIDAS',
        linkUrl: '/mens-adidas-Originals-Gazelle-Shoes-Burgundy',
        description: 'The new balance ZX 1K Boost shoes are ultra comfortable new balance kicks with eye-catching looks. The best of both worlds with Boost and EVA cushioning will keep you going all day long. Boost hits the heels and the EVA foam in the forefoot of the shoes. new balance 3-Stripes don the sides for a distinctive look. Comes in a combination of white, grey, black with pops of Solar Yellow.',
        price: 80
    },
    {
        title: 'Mens adidas Originals Tri-Color Strapback Hat Black',
        imageUrl: 'https://www.tillys.com/dw/image/v2/BBLQ_PRD/on/demandware.static/-/Sites-master-catalog/default/dw5f552475/tillys/images/catalog/1000x1000/380494100.jpg?sw=539&sh=693&sm=fit',
        id: 2,
        color: 'BLACK',
        brands: 'HATS',
        linkUrl: '/mens-adidas-Originals-Tri-Color-Strapback-Hat-Black',
        description: 'The new balance ZX 1K Boost shoes are ultra comfortable new balance kicks with eye-catching looks. The best of both worlds with Boost and EVA cushioning will keep you going all day long. Boost hits the heels and the EVA foam in the forefoot of the shoes. new balance 3-Stripes don the sides for a distinctive look. Comes in a combination of white, grey, black with pops of Solar Yellow.',
        price: 26
    },
    {
        title: 'Mens adidas Essentials Trefoil Hoodie Grey Five',
        imageUrl: 'https://assets.adidas.com/images/w_600,f_auto,q_auto/d5c9eb50068f4519a6e6aa7600f99ef3_9366/Team_Signature_Trefoil_Hoodie_Black_ED7173_21_model.jpg',
        id: 3,
        color: 'BLACK',
        brands: 'ADIDAS',
        linkUrl: '/mens-adidas-Essentials-Trefoil-Hoodie-Grey-Five',
        description: 'The new balance ZX 1K Boost shoes are ultra comfortable new balance kicks with eye-catching looks. The best of both worlds with Boost and EVA cushioning will keep you going all day long. Boost hits the heels and the EVA foam in the forefoot of the shoes. new balance 3-Stripes don the sides for a distinctive look. Comes in a combination of white, grey, black with pops of Solar Yellow.',
        price: 55
    },
    {
        title: 'Mens adidas Originals Adilette Slides Glow Blue',
        imageUrl: 'https://assets.adidas.com/images/h_600,f_auto,q_auto,fl_lossy/652b7d7552de4d158d62a91f00c0c16b_9366/Adilette_Slides_Blue_AQ1068_01_standard.jpg',
        id: 4,
        color: 'GLOW BLUE',
        brands: 'ADIDAS',
        linkUrl: '/mens-adidas-Essentials-Trefoil-Hoodie-White',
        description: 'The new balance ZX 1K Boost shoes are ultra comfortable new balance kicks with eye-catching looks. The best of both worlds with Boost and EVA cushioning will keep you going all day long. Boost hits the heels and the EVA foam in the forefoot of the shoes. new balance 3-Stripes don the sides for a distinctive look. Comes in a combination of white, grey, black with pops of Solar Yellow.',
        price: 55
    },
    {
        title: 'Mens Jordan Delta Breathe Multicolor',
        imageUrl: 'https://cdn.shopify.com/s/files/1/0219/2362/products/207d4a4fded34018a72535c76f2c8f07_800x.jpg?v=1608161895',
        id: 5,
        color: 'MULTICOLOR',
        brands: 'JORDAN',
        linkUrl: '/mens-jordan-delta-breathe-multicolor',
        description: 'The new balance ZX 1K Boost shoes are ultra comfortable new balance kicks with eye-catching looks. The best of both worlds with Boost and EVA cushioning will keep you going all day long. Boost hits the heels and the EVA foam in the forefoot of the shoes. new balance 3-Stripes don the sides for a distinctive look. Comes in a combination of white, grey, black with pops of Solar Yellow.',
        price: 130
    },
    {
        title: 'Mens The North Face 1996 Retro Nuptse Jacket Summit Gold',
        imageUrl: 'https://media2.fenom.com/62233/the-north-face-1996-retro-nuptse-jacket-summit-gold.jpg',
        id: 6,
        color: 'GOLD',
        brands: 'THE NORTH FACE',
        linkUrl: '/mens-the-north-face-1996-retro-nuptse-jacket-summit-gold',
        description: 'The new balance ZX 1K Boost shoes are ultra comfortable new balance kicks with eye-catching looks. The best of both worlds with Boost and EVA cushioning will keep you going all day long. Boost hits the heels and the EVA foam in the forefoot of the shoes. new balance 3-Stripes don the sides for a distinctive look. Comes in a combination of white, grey, black with pops of Solar Yellow.',
        price: 279
    },
    {
        title: 'Mens PUMA RS 2.0 Winterized Black',
        imageUrl: 'https://www.prodirectsoccer.com/productimages/V3_1_Gallery_4/192363_Gallery_4_0370985.jpg',
        id: 7,
        color: 'BLACK',
        brands: 'PUMA',
        linkUrl: '/mens-puma-rs-2.0-winterized-black',
        description: 'The new balance ZX 1K Boost shoes are ultra comfortable new balance kicks with eye-catching looks. The best of both worlds with Boost and EVA cushioning will keep you going all day long. Boost hits the heels and the EVA foam in the forefoot of the shoes. new balance 3-Stripes don the sides for a distinctive look. Comes in a combination of white, grey, black with pops of Solar Yellow.',
        price: 80
    },
    {
        title: 'Mens Columbia Bugaboo 1986 Interchange Jacket Green',
        imageUrl: 'https://cdn3.shinzo.paris/19567-thickbox_default/columbia-mens-bugaboo-80th-anniversary-interchange-jacket.jpg',
        id: 8,
        color: 'BLACK',
        brands: 'BUGABOO',
        linkUrl: '/mens-columbia-bugaboo-1986-interchange-jacket-green',
        description: 'The new balance ZX 1K Boost shoes are ultra comfortable new balance kicks with eye-catching looks. The best of both worlds with Boost and EVA cushioning will keep you going all day long. Boost hits the heels and the EVA foam in the forefoot of the shoes. new balance 3-Stripes don the sides for a distinctive look. Comes in a combination of white, grey, black with pops of Solar Yellow.',
        price: 199
    },
    {
        title: 'Mens adidas Originals Delpala Shoes White',
        imageUrl: 'https://www.sneaker10.gr/1941807-product_large/adidas-originals-delpala.jpg',
        id: 9,
        color: 'WHITE',
        brands: 'TIMBERLAND',
        linkUrl: '/mens-timberland-tree-logo-hoodie-wheat',
        description: 'The new balance ZX 1K Boost shoes are ultra comfortable new balance kicks with eye-catching looks. The best of both worlds with Boost and EVA cushioning will keep you going all day long. Boost hits the heels and the EVA foam in the forefoot of the shoes. new balance 3-Stripes don the sides for a distinctive look. Comes in a combination of white, grey, black with pops of Solar Yellow.',
        price: 60
    },
    {
        title: 'Mens PUMA RS 2.0 Winterized Black',
        imageUrl: 'https://photos.queens.cz/queens/2019-08/large/puma-rs-x-winterized-94741_1.jpg',
        id: 10,
        color: 'BLACK',
        brands: 'TIMBERLAND',
        linkUrl: '/mens-timberland-tree-logo-hoodie-black',
        description: 'The new balance ZX 1K Boost shoes are ultra comfortable new balance kicks with eye-catching looks. The best of both worlds with Boost and EVA cushioning will keep you going all day long. Boost hits the heels and the EVA foam in the forefoot of the shoes. new balance 3-Stripes don the sides for a distinctive look. Comes in a combination of white, grey, black with pops of Solar Yellow.',
        price: 68
    },
    {
        title: 'Mens The North Face 1996 Retro Nuptse Jacket Timber Tan',
        imageUrl: 'https://media2.fenom.com/62229/the-north-face-1996-retro-nuptse-jacket-timber-tan.jpg',
        id: 11,
        color: 'TIMBER',
        brands: 'THE NORTH FACE',
        linkUrl: '/mens-the-north-face-1996-retro-nuptse-jacket-timber-tan',
        description: 'Some good gist about this brand is as follows..., I\'ll tell tou the entire story at a later date',
        price: 279
    },
    {
        title: 'Mens Timberland Boot Logo Hoodie Black',
        imageUrl: 'https://images.timberland.com/is/image/TimberlandEU/A28TM001-hero?wid=720&hei=720&fit=constrain,1&qlt=85,1&op_usm=1,1,6,0',
        id: 12,
        color: 'BLACK',
        brands: 'TIMBERLAND',
        linkUrl: '/mens-timberland-boot-logo-hoodie-black',
        description: 'Some good gist about this brand is as follows..., I\'ll tell tou the entire story at a later date',
        price: 68
    },
    {
        title: 'Mens New Balance Shando Shoes Orange',
        imageUrl: 'https://www.lauriesshoes.com/wp-content/uploads/2020/10/mtshalr_nb_02_i.jpg',
        id: 13,
        color: 'ORANGE',
        brands: 'NEW BALANCE',
        linkUrl: '/mens-newbalance-shando-shoes-black',
        description: 'Some good gist about this brand is as follows..., I\'ll tell tou the entire story at a later date',
        price: 89
    },
    {
        title: 'Mens Lacoste x National Geographic Organic Sweatshirt Grey',
        imageUrl: 'https://image1.lacoste.com/dw/image/v2/AAQM_PRD/on/demandware.static/Sites-AEECOM-Site/Sites-master/en_AE/dw82330082/PH6286_6NW_32.jpg?imwidth=915&impolicy=product',
        id: 14,
        color: 'GREY',
        brands: 'LACOSTE',
        linkUrl: '/mens-lacoste-x-national-geographic-organic-sweatshirt-grey',
        description: 'Some good gist about this brand is as follows..., I\'ll tell tou the entire story at a later date',
        price: 165
    },
    {
        title: 'Mens Lacoste x National Geographic Organic Sweatshirt Navy',
        imageUrl: 'https://image1.lacoste.com/dw/image/v2/AAQM_PRD/on/demandware.static/Sites-SE-Site/Sites-master/en_SE/dw58491f67/SH1551_423_31.jpg?imwidth=915&impolicy=product',
        id: 15,
        color: 'NAVY',
        brands: 'LACOSTE',
        linkUrl: '/mens-lacoste-x-national-geographic-organic-sweatshirt-navy',
        description: 'Some good gist about this brand is as follows..., I\'ll tell tou the entire story at a later date',
        price: 165
    },
    {
        title: 'Mens Converse Pro Leather Sneakers "GREEN CAMO"',
        imageUrl: 'https://photos.queens.cz/queens/2019-08/large/puma-rs-x-winterized-94741_4.jpg',
        id: 16,
        color: 'GREEN',
        brands: 'CONVERSE',
        linkUrl: '/mens-converse-pro-leather-sneakers-white-ice',
        description: 'Some good gist about this brand is as follows..., I\'ll tell tou the entire story at a later date',
        price: 75
    },
    {
        title: 'Mens Converse Chuck Taylor All Star CX Sneakers "White Ice"',
        imageUrl: 'https://cdna.lystit.com/photos/jdsports/8d1a93ca/puma-Black-Rs-0-Toys.jpeg',
        id: 17,
        color: 'BLACK',
        brands: 'CONVERSE',
        linkUrl: '/mens-converse-chuck-taylor-all-star-cx-sneakers-white-ice',
        description: 'Some good gist about this brand is as follows..., I\'ll tell tou the entire story at a later date',
        price: 70
    },
    {
        title: 'Mens Nike Air Max 270 React Shoes',
        imageUrl: 'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/i1-6304633f-a4bc-491e-b6f4-1f3d7bfc74d0/air-max-270-react-mens-shoe-zPRv3k.jpg',
        id: 18,
        color: 'ORANGE',
        brands: 'NIKE',
        linkUrl: '/mens-nike-air-max-270-react-shoes',
        description: 'Some good gist about this brand is as follows..., I\'ll tell tou the entire story at a later date',
        price: 160
    }
]
};

const menReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        default:
            return state;
    }
};

export default menReducer;


