const INITIAL_STATE = {
    sections: [{
                
        title: 'Womens New Balance 574 Shoes White',
        imageUrl: 'https://cdnb.lystit.com/photos/size/38c8aafe/new-balance-BeigeWhite-574-Womens.jpeg',
        id: 1,
        color: 'WHITE',
        brands: 'NEW BALANCE',
        linkUrl: '/womens-new-balance-574-shoes-white',
        description: 'The New Balance 997H draws inspiration from the classic and beloved of brand loyalists 997 that was first released back in 1991. The new 997H features GCEVA construction and a modernized rubber and gum outsole for the ultimate lightweight ride. The shoes are built with a combination of suede, mesh, synthetic and leather details. The New Balance shoes are presented in a Rose Water / Stellar Blue edition.',
        price: 75
    },
    {
        title: 'Womens Nike Sportswear Heritage Joggers',
        imageUrl: 'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/ce607086-0dcc-408b-a693-4839dc6e07a8/sportswear-heritage-fleece-joggers-bbF2RK.jpg',
        id: 2,
        color: 'BLACK',
        brands: 'NIKE',
        linkUrl: '/womens-nike-sportswear-heritage-joggers',
        description: 'Gotta have them in every color. Theres no such thing as too many leggings. These adidas Originals Fakten leggings are made of sustainable cotton that feels soft on the legs. d high waist makes your legs look like they go on and on. adidas 3-Stripes run from waist to the upper thigh with the adidas Trefoil that sits on the hip. Comes n Crew Navy and White.',
        price: 55
    },
    {
        title: 'Womens Nike Sportswear Heritage Crew',
        imageUrl: 'https://i.pinimg.com/originals/ad/3a/65/ad3a657f6b5a2eb8f273d20f070c7701.jpg',
        id: 3,
        color: 'MULTICOLOR',
        brands: 'NIKE',
        linkUrl: '/womens-nike-sportswear-heritage-crew',
        description: 'Keep the day sporty with a must-have in your closet. An essential piece to layer or wear on its own, the classic Nike tee is made of soft cotton jersey with the Nike Swoosh logo on front. Comes in black with a white logo.',
        price: 65
    },
    {
        title: 'Womens Nike Sportswear Essential Fleece Hoodie',
        imageUrl: 'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/fe1199b4-8385-4cf6-9d09-8b19ddce6fcb/sportswear-essential-womens-funnel-neck-fleece-pullover-hoodie-rclCxC.jpg',
        id: 4,
        color: 'GREEN',
        brands: 'NIKE',
        linkUrl: '/womens-nike-sportswear-essential-fleece-hoodie',
        description: 'Keep the day sporty with a must-have in your closet. An essential piece to layer or wear on its own, the classic Nike tee is made of soft cotton jersey with the Nike Swoosh logo on front. Comes in black with a white logo.',
        price: 55
    },
    {
        title: 'Womens adidas Essentials Loungewear 3-Stripes Leggings',
        imageUrl: 'https://assetmanagerpim-res.cloudinary.com/images/082f31a282c24f82b63cac3a00cc6141_9366/GL0723_42_detail.jpg',
        id: 5,
        color: 'GRAY',
        brands: 'ADIDAS',
        linkUrl: '/womens-adidas-essential-loungewear-3-stripes-leggings',
        description: 'Theres no such thing as too many leggings. These adidas Originals leggings are made of sustainable cotton that feels soft on the legs. adidas 3-Stripes layered with an abstract floral pattern run along the sides of the pants to elevate and elongate your look. The adidas Trefoil sits on the hip. Comes in black.',
        price: 130
    },
    {
        title: 'adidas Utility Backpack Black',
        imageUrl: 'https://cdna.lystit.com/photos/urbanoutfitters/42702951-Black-9f0ebe00-.jpeg',
        id: 6,
        color: 'BLACK',
        brands: 'ADIDAS',
        linkUrl: '/adidas-utility-backpack-black',
        description: 'A roomy, spacious adidas backpack is what you need to carry all your goods from morning to evening. The adidas Modular Backpack features multiple compartments and pockets with a laptop sleeve, comfortable straps and a carry handle. The backpack attaches with  other adidas Originals modular bags. The adidas Trefoil logo sits in lower front corner and on one of the backpack straps. Comes in black.',
        price: 65
    },
    {
        title: 'adidas Modular Backpack Black',
        imageUrl: 'https://scene7.zumiez.com/is/image/zumiez/pdp_hero/adidas-Originals-Urban-Utility-Black-Backpack-_307816-back-US.jpg',
        id: 7,
        color: 'BLACK',
        brands: 'ADIDAS',
        linkUrl: '/adidas-modular-backpack-black',
        description: 'Theres no such thing as too many leggings. These adidas Originals leggings are made of sustainable cotton that feels soft on the legs. adidas 3-Stripes layered with an abstract floral pattern run along the sides of the pants to elevate and elongate your look. The adidas Trefoil sits on the hip. Comes in black.',
        price: 80
    },
    {
        title: 'Womens Columbia Bugaboo 1986 Interchange Jacket Green',
        imageUrl: 'https://photos.queens.cz/original/2020-10/columbia-bugaboo-1986-interchange-jacket-105005_5.jpg',
        id: 8,
        color: 'GREEN',
        brands: 'BUGABOO',
        linkUrl: '/womens-columbia-bugaboo-1986-interchange-jacket-green',
        description: 'Theres no such thing as too many leggings. These adidas Originals leggings are made of sustainable cotton that feels soft on the legs. adidas 3-Stripes layered with an abstract floral pattern run along the sides of the pants to elevate and elongate your look. The adidas Trefoil sits on the hip. Comes in black.',
        price: 199
    },
    {
        title: 'Womens adidas Originals Superstar Shoes White Gold',
        imageUrl: 'https://www.alwayslongfor.com/media/catalog/product/cache/1/thumbnail/1000x1231/17f82f742ffe127f42dca9de82fb58b1/f/o/fouth416-1.jpg',
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