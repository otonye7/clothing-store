const INITIAL_STATE = {
    sections: [{
                
        title: 'Womens Sorel Caribou Boots Buff',
        imageUrl: 'https://cdn.shopify.com/s/files/1/0230/0765/products/F14_NL1005_280_f_1024x1024.jpg?v=1571709644',
        id: 1,
        color: 'Brown',
        brands: 'Sorel',
        linkUrl: '/womens-sorel-caribou-boots-buff',
        description: 'Some good gist about this brand is as follows..., I\'ll tell tou the entire story at a later date',
        price: 160
    },
    {
        title: 'Mens Sorel Caribou Boots Buff',
        imageUrl: 'https://cdn.shopify.com/s/files/1/0230/0765/products/F14_NL1005_280_m_1024x1024.jpg?v=1571709644',
        id: 2,
        color: 'BROWN',
        brands: 'SOREL',
        linkUrl: '/men-sorel',
        description: 'Some good gist about this brand is as follows..., I\'ll tell tou the entire story at a later date',
        price: 160
    },
    {
        title: 'Womens Sorel Out N About Plus Felt Boots Quarry',
        imageUrl: 'https://images.journeys.com/images/products/1_577433_ZM_ALT1.JPG',
        id: 3,
        color: 'BLUE',
        brands: 'SOREL',
        linkUrl: '/womens-sorel-out-n-about-plus-felt-boots-quarry',
        description: 'Some good gist about this brand is as follows..., I\'ll tell tou the entire story at a later date',
        price: 120
    },
    {
        title: 'Sorel Jackets',
        imageUrl: 'http://content.backcountry.com/images/items/900/SRL/SRL003H/BK.jpg',
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