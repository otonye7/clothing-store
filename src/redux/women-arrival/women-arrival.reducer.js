const INITIAL_STATE = {
    sections: [{
                
        title: 'Womens New Balance 574 Shoes White',
        imageUrl: 'https://media.journeys.com/images/products/1_495414_ZM.JPG',
        id: 1,
        color: 'WHITE',
        brands: 'NEW BALANCE',
        linkUrl: '/womens-new-balance-574-shoes-white',
        description: 'Some good gist about this brand is as follows..., I\'ll tell tou the entire story at a later date',
        price: 75
    },
    {
        title: 'Womens Nike Sportswear Heritage Joggers',
        imageUrl: 'https://n.nordstrommedia.com/id/sr3/25bbb3bf-277a-427c-a35d-9efcc9017ad1.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196',
        id: 2,
        color: 'BLACK',
        brands: 'NIKE',
        linkUrl: '/womens-nike-sportswear-heritage-joggers',
        description: 'Some good gist about this brand is as follows..., I\'ll tell tou the entire story at a later date',
        price: 55
    },
    {
        title: 'Womens Nike Sportswear Heritage Crew',
        imageUrl: 'https://i.pinimg.com/originals/ad/3a/65/ad3a657f6b5a2eb8f273d20f070c7701.jpg',
        id: 3,
        color: 'MULTICOLOR',
        brands: 'NIKE',
        linkUrl: '/womens-nike-sportswear-heritage-crew',
        description: 'Some good gist about this brand is as follows..., I\'ll tell tou the entire story at a later date',
        price: 65
    },
    {
        title: 'Womens Nike Sportswear Essential Fleece Hoodie',
        imageUrl: 'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/fe1199b4-8385-4cf6-9d09-8b19ddce6fcb/sportswear-essential-womens-funnel-neck-fleece-pullover-hoodie-rclCxC.jpg',
        id: 4,
        color: 'GREEN',
        brands: 'NIKE',
        linkUrl: '/womens-nike-sportswear-essential-fleece-hoodie',
        description: 'Some good gist about this brand is as follows..., I\'ll tell tou the entire story at a later date',
        price: 55
    },
    {
        title: 'Womens adidas Essentials Loungewear 3-Stripes Leggings',
        imageUrl: 'https://www.hyperoutlet.cz/adidas-womens-essentials-3-stripes-leggings-med-grey-515551--460.jpg',
        id: 5,
        color: 'GRAY',
        brands: 'ADIDAS',
        linkUrl: '/womens-adidas-essential-loungewear-3-stripes-leggings',
        description: 'Some good gist about this brand is as follows..., I\'ll tell tou the entire story at a later date',
        price: 130
    },
    {
        title: 'adidas Utility Backpack Black',
        imageUrl: 'https://www.pacsun.com/dw/image/v2/AAJE_PRD/on/demandware.static/-/Sites-pacsun_storefront_catalog/default/dw9901663f/product_images/0644505030105NEW_00_001.jpg?sw=690&sh=1070&sm=fit',
        id: 6,
        color: 'BLACK',
        brands: 'ADIDAS',
        linkUrl: '/adidas-utility-backpack-black',
        description: 'Some good gist about this brand is as follows..., I\'ll tell tou the entire story at a later date',
        price: 65
    },
    {
        title: 'adidas Modular Backpack Black',
        imageUrl: 'https://scene7.zumiez.com/is/image/zumiez/pdp_hero/adidas-Originals-Urban-Utility-Black-Backpack-_307816-back-US.jpg',
        id: 7,
        color: 'BLACK',
        brands: 'ADIDAS',
        linkUrl: '/adidas-modular-backpack-black',
        description: 'Some good gist about this brand is as follows..., I\'ll tell tou the entire story at a later date',
        price: 80
    },
    {
        title: 'Womens Columbia Bugaboo 1986 Interchange Jacket Green',
        imageUrl: 'https://cdna.lystit.com/photos/moosejaw/4867d589/columbia-Peatmoss-Bugaboo-1986-Interchange-Jacket.jpeg',
        id: 8,
        color: 'GREEN',
        brands: 'BUGABOO',
        linkUrl: '/womens-columbia-bugaboo-1986-interchange-jacket-green',
        description: 'Some good gist about this brand is as follows..., I\'ll tell tou the entire story at a later date',
        price: 199
    },
    {
        title: 'Womens adidas Originals Superstar Shoes White Gold',
        imageUrl: 'https://www.bigsalemax.com/wp-content/uploads/2018/03/Adidas-Originals-Superstar-White-Gold-Mens-Womens-Casual-Sneakers-Shoes-1.jpg',
        id: 9,
        color: 'WHITE',
        brands: 'ADIDAS',
        linkUrl: '/womens-adidas-originals-superstar-shoes-white-gold',
        description: 'Some good gist about this brand is as follows..., I\'ll tell tou the entire story at a later date',
        price: 60
    }
]
};

const womenReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        default:
            return state;
    }
};

export default womenReducer;