const INITIAL_STATE = {
    sections: [{
                
        title: 'Mens Columbia Flash Forward Print Windbreaker Grey Tropical',
        imageUrl: 'https://cdn.shopify.com/s/files/1/0017/5007/3404/products/Men_s_Columbia_Wheeler_Lodge_Casual_Jacket_City_Grey_1820901023_4_1024x1024.jpg?v=1604934260',
        id: 1,
        color: 'GREY',
        brands: 'COLUMBIA',
        linkUrl: '/mens-columbia-flash-forward-print-windbreaker-grey-tropical',
        description: 'Some good gist about this brand is as follows..., I\'ll tell tou the entire story at a later date',
        price: 80
    },
    {
        title: 'Mens Columbia Flash Forward Print Windbreaker Black Tropical',
        imageUrl: 'https://cdn.shopify.com/s/files/1/0017/5007/3404/products/Men_s-Flash-Forward-Print-Black-Tropical-1606801008_01.jpg?v=1602256026',
        id: 2,
        color: 'MULTICOLOR',
        brands: 'COLUMBIA',
        linkUrl: '/mens-columbia-flash-black-tropical',
        description: 'Some good gist about this brand is as follows..., I\'ll tell tou the entire story at a later date',
        price: 26
    },
    {
        title: 'Womens Columbia Poe Creek Jacket Navy',
        imageUrl: 'https://cdn.etrias.nl/media/catalog/product/cache/0/image/750x750/9df78eab33525d08d6e5fb8d27136e95/3/Y/3Y4B_H2G_alt15.jpg',
        id: 3,
        color: 'NAVY',
        brands: 'COLUMBIA',
        linkUrl: '/womens-columbia-poe-creek-jacket-navy',
        description: 'Some good gist about this brand is as follows..., I\'ll tell tou the entire story at a later date',
        price: 55
    },
    {
        title: 'Womens Columbia Side Hill Printed Windbreaker White',
        imageUrl: 'https://imagescdn.simons.ca/images/9385-20886863-19-A1_2/side-hill-print-windbreaker.jpg?__=8',
        id: 4,
        color: 'WHITE',
        brands: 'COLUMBIA',
        linkUrl: '/womens-columbia-side-hill-printed-windbreaker-white',
        description: 'Some good gist about this brand is as follows..., I\'ll tell tou the entire story at a later date',
        price: 55
    },
    {
        title: 'Columbia-Multicolor',
        imageUrl: 'https://belk.scene7.com/is/image/Belk?layer=0&src=1801546_1920742_A_466&$DWP_PRODUCT_PDP_LARGE$',
        id: 5,
        color: 'MULTICOLOR',
        brands: 'COLUMBIA',
        linkUrl: '/columbia-multicolor',
        description: 'Some good gist about this brand is as follows..., I\'ll tell tou the entire story at a later date',
        price: 130
    },
    {
        title: 'Mens Columbia Watertight II Jacket Dark Purple',
        imageUrl: 'https://cdna.lystit.com/photos/columbia/ffaa091f/columbia-Black-Cherry-Watertight.jpeg',
        id: 6,
        color: 'PURPLE',
        brands: 'COLUMBIA',
        linkUrl: '/mens-columbia-watertight-II-jacket-dark-purple',
        description: 'Some good gist about this brand is as follows..., I\'ll tell tou the entire story at a later date',
        price: 279
    },
    {
        title: 'Mens Columbia Watertight II Jacket Black',
        imageUrl: 'https://cdn.shopify.com/s/files/1/1128/5906/products/Columbia-jacket-rain-watertight-II-1533891-black_1024x1024.jpg?v=1599774713',
        id: 7,
        color: 'BLACK',
        brands: 'COLUMBIA',
        linkUrl: '/mens-columbia-watertight-II-jacket-black',
        description: 'Some good gist about this brand is as follows..., I\'ll tell tou the entire story at a later date',
        price: 80
    },
    {
        title: 'Mens Columbia Bugaboo 1986 Interchange Jacket Green',
        imageUrl: 'https://cdn.shopify.com/s/files/1/0017/5007/3404/products/Men_sColumbiaGlennakerSherpaLinedJacketStoneGreenOliveGreen1820941397_6_02.jpg?v=1604334312',
        id: 8,
        color: 'GREEN',
        brands: 'BUGABOO',
        linkUrl: '/mens-columbia-bugaboo-1986-interchange-jacket-green',
        description: 'Some good gist about this brand is as follows..., I\'ll tell tou the entire story at a later date',
        price: 199
    }

]
};

const columbiaReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        default:
            return state;
    }
}

export default columbiaReducer;