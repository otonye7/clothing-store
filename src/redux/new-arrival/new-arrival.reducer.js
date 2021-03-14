const INITIAL_STATE = {
    sections: [{
                
        title: 'Mens Lacoste SPORT Hooded Fleece Sweatshirt Grey Chine',
        imageUrl: 'https://cdnb.lystit.com/photos/lacoste/9e66645f/lacoste-Navy-Blue-Grey-Chine-Sport-Hooded-Fleece-Tennis-Sweatshirt.jpeg',
        id: 1,
        color: 'BLUE',
        brands: 'LACOSTE',
        linkUrl: '/mens-lacoste-sport-hooded-fleece-sweatshirt-grey-chine',
        description: 'Some good gist about this brand is as follows..., I\'ll tell tou the entire story at a later date',
        price: 80
    },
    {
        title: 'Mens Air Jordan 1 Mid SE "Turf Orange"',
        imageUrl: 'https://i.ebayimg.com/images/g/nAkAAOSwR-JgATeG/s-l400.jpg',
        id: 2,
        color: 'ORANGE',
        brands: 'JORDAN',
        linkUrl: '/mens-air-jordan-1-mid-se-turf-orange',
        description: 'Some good gist about this brand is as follows..., I\'ll tell tou the entire story at a later date',
        price: 26
    },
    {
        title: 'Mens Timberland Boot Logo Hoodie Black',
        imageUrl: 'https://images.timberland.com/is/image/TimberlandEU/A28TM001-hero?wid=720&hei=720&fit=constrain,1&qlt=85,1&op_usm=1,1,6,0',
        id: 3,
        color: 'BLACK',
        brands: 'TIMBERLAND',
        linkUrl: '/mens-timberland-boot-logo-hoodie-black',
        description: 'Some good gist about this brand is as follows..., I\'ll tell tou the entire story at a later date',
        price: 55
    },
    {
        title: 'Mens adidas Essentials Trefoil Hoodie White',
        imageUrl: 'https://cdna.lystit.com/photos/ssense/ce5b5f75/adidas-originals-grey-Grey-Trefoil-Essentials-Hoodie.jpeg',
        id: 4,
        color: 'WHITE',
        brands: 'ADIDAS',
        linkUrl: '/mens-adidas-Essentials-Trefoil-Hoodie-White',
        description: 'Some good gist about this brand is as follows..., I\'ll tell tou the entire story at a later date',
        price: 55
    },
    {
        title: 'Mens Jordan Delta Breathe Multicolor',
        imageUrl: 'https://www.sepsale.com/uploads/Nike_Air_Jordan_Shoes/Other_Air_Jordan_Shoes/Air_Jordan_Delta_Breathe_Multi_Color_Mens_Shoes_CW0783-900_P1.jpg',
        id: 5,
        color: 'MULTICOLOR',
        brands: 'JORDAN',
        linkUrl: '/mens-jordan-delta-breathe-multicolor',
        description: 'Some good gist about this brand is as follows..., I\'ll tell tou the entire story at a later date',
        price: 130
    },
    {
        title: 'Mens The North Face 1996 Retro Nuptse Jacket Summit Gold',
        imageUrl: 'https://media2.fenom.com/62233/the-north-face-1996-retro-nuptse-jacket-summit-gold.jpg',
        id: 6,
        color: 'GOLD',
        brands: 'THE NORTH FACE',
        linkUrl: '/mens-the-north-face-1996-retro-nuptse-jacket-summit-gold',
        description: 'Some good gist about this brand is as follows..., I\'ll tell tou the entire story at a later date',
        price: 279
    }
]
}

const newReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        default:
            return state;
    }
};

export default newReducer;