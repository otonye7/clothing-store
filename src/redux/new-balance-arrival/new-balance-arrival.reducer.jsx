const INITIAL_STATE = {
    sections: [{
                
        title: 'Mens New Balance Shando Shoes Black',
        imageUrl: 'https://5.kixify.com/sites/default/files/imagecache/product_full/product/2020/08/31/p_30948261_178352216_2661011.jpg',
        id: 1,
        color: 'WHITE',
        brands: 'NEW BALANCE',
        linkUrl: '/mens-new-balance-shando-shoes-black',
        description: 'Some good gist about this brand is as follows..., I\'ll tell tou the entire story at a later date',
        price: 75
    },
    {
        title: 'Mens New Balance All Coasts Sea Salt',
        imageUrl: 'https://www.tactics.com/a/a5ne/9/new-balance-288-skate-shoes-sea-salt-gum.jpg',
        id: 2,
        color: 'GRAY',
        brands: 'NEW BALANCE',
        linkUrl: '/mens-new-balance-all-coasts-sea-salt',
        description: 'Some good gist about this brand is as follows..., I\'ll tell tou the entire story at a later date',
        price: 55
    },
    {
        title: 'Mens New Balance XRCT Shoes Black with Phantom',
        imageUrl: 'https://cdnc.lystit.com/photos/zappos/b00376e7/new-balance-Black-Mt481v3.jpeg',
        id: 3,
        color: 'BLACK',
        brands: 'NEW BALANCE',
        linkUrl: '/men-new-balance-xrct-shoes-black-with-phantom',
        description: 'Some good gist about this brand is as follows..., I\'ll tell tou the entire story at a later date',
        price: 65
    },
    {
        title: 'Mens New Balance XRCT Shoes Aluminum with Team',
        imageUrl: 'https://chiappettashoes.com/wp-content/uploads/2019/12/MTHIERG5-Blue-Left-scaled.jpg',
        id: 4,
        color: 'MULTICOLOR',
        brands: 'NEW BALANCE',
        linkUrl: '/mens-new-balance-aluminum',
        description: 'Some good gist about this brand is as follows..., I\'ll tell tou the entire story at a later date',
        price: 55
    },
    {
        title: 'Mens New Balance 574 Shoes Team Forest Green',
        imageUrl: 'https://www.sportstylesau.com/media/catalog/product/cache/1/image/1800x/040ec09b1e35df139433887a97daa66f/N/e/NewBalance50-1.jpg',
        id: 5,
        color: 'GREEN',
        brands: 'NEW BALANCE',
        linkUrl: '/mens-new-balance-574-shoes-team-forest-green',
        description: 'Some good gist about this brand is as follows..., I\'ll tell tou the entire story at a later date',
        price: 65
    }
]
}

const newBalanceReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        default:
            return state;
    }
}
export default newBalanceReducer;