const INITIAL_STATE = {
    sections: [{
                
        title: 'Womens Sorel Caribou Boots Buff',
        imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/81OMbiGRcQL._AC_UL1500_.jpg',
        id: 1,
        color: 'GREY',
        brands: 'Sorel',
        linkUrl: '/womens-sorel-caribou-boots-buff',
        description: 'Some good gist about this brand is as follows..., I\'ll tell tou the entire story at a later date',
        price: 160
    },
    {
        title: 'Mens Sorel Caribou Boots Buff',
        imageUrl: 'https://cdn.shopify.com/s/files/1/0017/5007/3404/products/Women_s_Sorel_Caribou_Boots_Buff_1003812280_6_1024x1024.jpg?v=1581093834',
        id: 2,
        color: 'BROWN',
        brands: 'SOREL',
        linkUrl: '/men-sorel',
        description: 'Some good gist about this brand is as follows..., I\'ll tell tou the entire story at a later date',
        price: 160
    },
    {
        title: 'Womens Sorel Out N About Plus Felt Boots Quarry',
        imageUrl: 'https://images.journeys.ca/images/products/1_614402_FS_ALT3.JPG',
        id: 3,
        color: 'BLUE',
        brands: 'SOREL',
        linkUrl: '/womens-sorel-out-n-about-plus-felt-boots-quarry',
        description: 'Some good gist about this brand is as follows..., I\'ll tell tou the entire story at a later date',
        price: 120
    },
    {
        title: 'Sorel Jackets',
        imageUrl: 'https://i.pinimg.com/736x/dc/ca/f5/dccaf5a1306c4b892b9aef67d6c0bcdf.jpg',
        id: 4,
        color: 'BLACK',
        brands: 'SOREL',
        linkUrl: '/sorel-jackets',
        description: 'Some good gist about this brand is as follows..., I\'ll tell tou the entire story at a later date',
        price: 100
    }
]
};

const sorelReducer =  (state = INITIAL_STATE, action) => {
    switch(action.type) {
        default:
            return state;
    }
};

export default sorelReducer;