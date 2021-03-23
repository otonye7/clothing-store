const INITIAL_STATE = {
    sections: [{
                
        title: 'Unisex Romantic Crown RMTC Logo Pocket Sweatshirt Navy',
        imageUrl: 'https://www.thebounce.co.kr/web/product/medium/201910/142ec6096e963a83437b880d9e69fb72.jpg',
        id: 1,
        color: 'NAVY',
        brands: 'ROMANTIC CROWN',
        linkUrl: '/unisex-romantic-crown-rmtc-logo-pocket-sweatshirt-navy',
        description: 'A collaboration between Crown and National Geographic has come to fruition with a 100% organic cotton fleece sweatshirt. The Lacoste sweatshirt is designed with ribbed finishes on the crew neck, cuffs and hem. A unique Lacoste croc is embroidered with an animal print. Elevate your sweatshirt collection. Comes in a heathered Grey Chine hue.',
        price: 80
    },
    {
        title: 'Unisex Romantic Crown Logo Sweatshirt Cream',
        imageUrl: 'https://cdn.shopify.com/s/files/1/0017/5007/3404/products/Romantic-Crown_RC-VIDEO-SWEATSHIRT-OATMEAL_RCHO1803OAT_01_1024x1024.jpg?v=1554734836',
        id: 2,
        color: 'CREAM',
        brands: 'ROMANTIC CROWN',
        linkUrl: '/unisex-romantic-crown-logo-sweatshirt-cream',
        description: 'A collaboration between Crown and National Geographic has come to fruition with a 100% organic cotton fleece sweatshirt. The Lacoste sweatshirt is designed with ribbed finishes on the crew neck, cuffs and hem. A unique Lacoste croc is embroidered with an animal print. Elevate your sweatshirt collection. Comes in a heathered Grey Chine hue.',
        price: 26
    },
    {
        title: 'Men Romantic Crown Logo Sweatshirt Cream',
        imageUrl: 'https://cdn.shopify.com/s/files/1/0017/5007/3404/products/Romantic-Crown_RC-VIDEO-SWEATSHIRT-OATMEAL_RCHO1803OAT_01.jpg?v=1554734836',
        id: 3,
        color: 'CREAM',
        brands: 'ROMANTIC CROWN',
        linkUrl: '/mens-romantic-crown-cream',
        description: 'A collaboration between Crown and National Geographic has come to fruition with a 100% organic cotton fleece sweatshirt. The Lacoste sweatshirt is designed with ribbed finishes on the crew neck, cuffs and hem. A unique Lacoste croc is embroidered with an animal print. Elevate your sweatshirt collection. Comes in a heathered Grey Chine hue.',
        price: 55
    },
    {
        title: 'Unisex Romantic Crown Logo Sweatshirt Grey',
        imageUrl: 'https://cdn.shopify.com/s/files/1/0017/5007/3404/products/Romantic-Crown_Easy-Day-Vibe-Hoodie_Grey_3191KP400215_01.jpg?v=1554735350',
        id: 4,
        color: 'GREY',
        brands: 'ROMANTIC CROWN',
        linkUrl: '/unisex-romantic-crown-logo-sweatshirt-grey',
        description: 'A collaboration between Crown and National Geographic has come to fruition with a 100% organic cotton fleece sweatshirt. The Lacoste sweatshirt is designed with ribbed finishes on the crew neck, cuffs and hem. A unique Lacoste croc is embroidered with an animal print. Elevate your sweatshirt collection. Comes in a heathered Grey Chine hue.',
        price: 55
    },
    {
        title: 'Romantic Crown Blue',
        imageUrl: 'https://cdn.shopify.com/s/files/1/0017/5007/3404/products/Romantic-Crown_Cross-Line-Hoodie_Navy_3191KP400159_06_1024x1024.jpg?v=1554735278',
        id: 5,
        color: 'BLUE',
        brands: 'ROMANTIC CROWN',
        linkUrl: '/romantic-crown-blue',
        description: 'A collaboration between Crown and National Geographic has come to fruition with a 100% organic cotton fleece sweatshirt. The Lacoste sweatshirt is designed with ribbed finishes on the crew neck, cuffs and hem. A unique Lacoste croc is embroidered with an animal print. Elevate your sweatshirt collection. Comes in a heathered Grey Chine hue.',
        price: 130
    },
    {
        title: 'Unisex Romantic Crown Corduroy Trooper Hat Yellow',
        imageUrl: 'https://image.msscdn.net/images/goods_img/20190911/1151942/1151942_1_500.jpg',
        id: 6,
        color: 'GOLD',
        brands: 'ROMANTIC CROWN',
        linkUrl: '/unisex-romantic-crown-corduroy-trooper-hat-yellow',
        description: 'A collaboration between Crown and National Geographic has come to fruition with a 100% organic cotton fleece sweatshirt. The Lacoste sweatshirt is designed with ribbed finishes on the crew neck, cuffs and hem. A unique Lacoste croc is embroidered with an animal print. Elevate your sweatshirt collection. Comes in a heathered Grey Chine hue.',
        price: 279
    },
    {
        title: 'Mens Romantic Crown Milk',
        imageUrl: 'https://i.pinimg.com/originals/10/94/b1/1094b1c001cee4c8e8ad90501889a10b.jpg',
        id: 7,
        color: 'MILK',
        brands: 'ROMANTIC CROWN',
        linkUrl: '/mens-romantic-crown-milk',
        description: 'A collaboration between Crown and National Geographic has come to fruition with a 100% organic cotton fleece sweatshirt. The Lacoste sweatshirt is designed with ribbed finishes on the crew neck, cuffs and hem. A unique Lacoste croc is embroidered with an animal print. Elevate your sweatshirt collection. Comes in a heathered Grey Chine hue.',
        price: 80
    },
    {
        title: 'Unisex Romantic Crown Color Logo Sweatshirt Purple',
        imageUrl: 'https://img06.shop-pro.jp/PA01135/036/product/148718899_o9.jpg?cmsp_timestamp=20200214190545',
        id: 8,
        color: 'PURPLE',
        brands: 'ROMANTIC CROWN',
        linkUrl: '/unisex-romantic-crown-color-logo-sweatshirt-purple',
        description: 'A collaboration between Crown and National Geographic has come to fruition with a 100% organic cotton fleece sweatshirt. The Lacoste sweatshirt is designed with ribbed finishes on the crew neck, cuffs and hem. A unique Lacoste croc is embroidered with an animal print. Elevate your sweatshirt collection. Comes in a heathered Grey Chine hue.',
        price: 199
    },
    {
        title: 'Romantic Crown Black',
        imageUrl: 'https://cdn.shopify.com/s/files/1/0017/5007/3404/products/Romantic-Crown_Easy-Day-Vibe-Hoodie_Black_3191KP400219_01_1024x1024.jpg?v=1561080745',
        id: 9,
        color: 'BLACK',
        brands: 'ROMANTIC CROWN',
        linkUrl: '/romantic-crown-black',
        description: 'Some good gist about this brand is as follows..., I\'ll tell tou the entire story at a later date',
        price: 60
    }
]
};

const romanticCrownReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        default: 
            return state;
    }
};

export default romanticCrownReducer;