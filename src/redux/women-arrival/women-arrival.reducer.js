const INITIAL_STATE = {
    sections: [{
                
        title: 'Womens New Balance 574 Shoes White',
        imageUrl: 'https://cdnc.lystit.com/photos/5660-2015/08/25/new-balance-white-574-leather-sneaker-product-0-345404013-normal.jpeg',
        id: 1,
        color: 'WHITE',
        brands: 'NEW BALANCE',
        linkUrl: '/womens-new-balance-574-shoes-white',
        description: 'Some good gist about this brand is as follows..., I\'ll tell tou the entire story at a later date',
        price: 75
    },
    {
        title: 'Womens Nike Sportswear Heritage Joggers',
        imageUrl: 'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/ce607086-0dcc-408b-a693-4839dc6e07a8/sportswear-heritage-fleece-joggers-bbF2RK.jpg',
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
        imageUrl: 'https://assetmanagerpim-res.cloudinary.com/images/082f31a282c24f82b63cac3a00cc6141_9366/GL0723_42_detail.jpg',
        id: 5,
        color: 'GRAY',
        brands: 'ADIDAS',
        linkUrl: '/womens-adidas-essential-loungewear-3-stripes-leggings',
        description: 'Some good gist about this brand is as follows..., I\'ll tell tou the entire story at a later date',
        price: 130
    },
    {
        title: 'adidas Utility Backpack Black',
        imageUrl: 'https://i.pinimg.com/originals/63/83/5a/63835aee14e5592e3077e81c8c902870.jpg',
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
        imageUrl: 'https://www.shinzo.paris/2971-thickbox_default/columbia-bugaboo-1986-interchange-jacket.jpg?__cf_chl_jschl_tk__=ec7b1ac04e2ac7c02d4aa4557562009c0788adf3-1616434350-0-AW5pZ16ktnaIbFfeiX0h4yFPiCWoLkXj228QWXpNG3f1jXzFXzFEpgakEnxGaGxrRkCs1aQAX0JsV7JANVWuv4mACDJ8oDX-26PvfVTHG-OBlHRoVzZw-8KmSit-S4fXf5fpN29-A9MFSKJcc57q5svolR8WDS6nNPDovoyOVGocvmA6F1Fb-jd2wBBr3Vm4xVS9Z60fLBYmwtmbjrs0qiIwveCNMLfRopIcRSbMa5URfg3cin4L13FE3rxJ-SUm-7eta9szyMI7w-Cp62wFDtk7YhPmtHkTj8wUGimdP87nUrinG-2J9K5rkfmTrY61fWAJU9rEAaR_5k24CvTTZhgbeYrtO6JT1UXj-l3FqQXQX8-veDFORlbsCoIgfKvlK0RYDkwfpdbFpbJIaiIhHf7mmVWmNvLW_Kx_EaqbDorv',
        id: 8,
        color: 'GREEN',
        brands: 'BUGABOO',
        linkUrl: '/womens-columbia-bugaboo-1986-interchange-jacket-green',
        description: 'Some good gist about this brand is as follows..., I\'ll tell tou the entire story at a later date',
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