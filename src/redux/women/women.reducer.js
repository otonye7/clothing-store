const INITIAL_STATE = {
    sections: [{
                
        title: 'Womens adidas Originals Adicolor Classics Cropped Track Jacket Black',
        imageUrl: 'https://cdnb.lystit.com/photos/macys/430c2f06/adidas-Black-Originals-Knotted-Cropped-Track-Jacket.jpeg',
        id: 1,
        color: 'BLACK',
        brands: 'ADIDAS',
        linkUrl: '/womens-adidas-originals-adicolor-classics-cropped-track-jacket-black',
        description: 'Time to add a new one to your collection. The adidas Adicolor Classics Cropped Track Jacket is cropped to perfection. With all the iconic details you ve come to love, this version comes cropped with zippered pockets in front. adidas 3 Stripes run down the sleeves with the adidas Trefoil on the chest. Dress up the jacket with a bandeau underneath and high waisted pants for a sporty night out. Comes in black with white details.',
        price: 75
    },
    {
        title: 'Womens The North Face 95 Retro Denali Jacket Black',
        imageUrl: 'https://img.jimmyjazz.com/images/f_auto/q_auto/t_1000/product/NF0A3XCE-682-red-1/The-North-Face-95-Retro-Denali-Jacket',
        id: 2,
        color: 'RED',
        brands: 'THE NORTH FACE',
        linkUrl: '/womens-the-north-face-95-retro-denali-jacket-black',
        description: 'Some good gist about this brand is as follows..., I\'ll tell tou the entire story at a later date',
        price: 100
    },
    {
        title: 'Womens FILA Doro Puffer Jacket White',
        imageUrl: 'https://cdn.shopify.com/s/files/1/0017/5007/3404/products/Women_s_FILA_Doro_Puffer_Jacket_White_LW933295100_2_1_1024x1024.jpg?v=1573856466',
        id: 3,
        color: 'WHITE',
        brands: 'FILA',
        linkUrl: '/womens-fila-doro-puffer-jacket-white',
        description: 'Some good gist about this brand is as follows..., I\'ll tell tou the entire story at a later date',
        price: 120
    },
    {
        title: 'Womens adidas Originals Windbreaker Hemp',
        imageUrl: 'https://i.ebayimg.com/images/g/LpAAAOSwiJReSC5W/s-l640.jpg',
        id: 4,
        color: 'GREEN',
        brands: 'ADIDAS',
        linkUrl: '/womens-adidas-originals-windbreaker-hemp',
        description: 'Some good gist about this brand is as follows..., I\'ll tell tou the entire story at a later date',
        price: 100
    },
    {
        title: 'adidas Originals Shopper Bag Dust Pearl',
        imageUrl: 'https://cdn.shopify.com/s/files/1/0017/5007/3404/products/adidas_Originals_Shopper_Bag_Dust_Pearl_CE5647_6_1024x1024.jpg?v=1528477460',
        id: 5,
        color: 'WHITE',
        brands: 'ADIDAS',
        linkUrl: '/adidas-originals0shopper-bag-dust-pearl',
        description: 'Some good gist about this brand is as follows..., I\'ll tell tou the entire story at a later date',
        price: 100
    },
    {
        title: 'Womens adidas Originals HER Studio London Biker Shorts',
        imageUrl: 'https://st-adidas-egy.mncdn.com/content/images/thumbs/0100705_her-studio-london-tracksuit-bottoms_gc6844_walking-view.jpeg',
        id: 6,
        color: 'BROWN',
        brands: 'ADIDAS',
        linkUrl: '/womens-adidas-originals-her-studio-london-biker-pants',
        description: 'Some good gist about this brand is as follows..., I\'ll tell tou the entire story at a later date',
        price: 100
    }
]
};

const womenCollectionReducer =  (state = INITIAL_STATE, action) => {
    switch(action.type) {
        default:
            return state;
    }
};

export default womenCollectionReducer;