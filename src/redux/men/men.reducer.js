const INITIAL_STATE = {
    sections: [{
                
        title: 'G-Shock Analog Digital Watch GA700SK-1A',
        imageUrl: 'https://s.yimg.com/aah/4-watches/casio-g-shock-green-digital-analog-watch-ga110lp-3a-26.gif',
        id: 1,
        color: 'GREEN',
        brands: 'G-SHOCK',
        linkUrl: '/men-G-shock-analog-digital-watch-ga700sk-1a',
        description: 'Ever rugged, ever sporty. The G-Shock Digital Watch will fit your every adventure both in and out of the water. Built to withstand the toughest conditions, the G-Shock watch will be with you from start to finish providing superb tech specs. The G-Shock watch comes in sleek black.',
        price: 123
    },
    {
        title: 'Mens adidas Originals Camo Tongue Label Tee Wild Pine',
        imageUrl: 'https://cdn.shopify.com/s/files/1/0017/5007/3404/products/Men_sadidasOriginalsCamoTongueLabelTeeWildPineGN1863_7_1024x1024.jpg?v=1610510764',
        id: 2,
        color: 'CAMO',
        brands: 'SHIRTS',
        linkUrl: '/mens-adidas-originals-camo-tongue-label-tee-wild-pine',
        description: 'Combine street style and sport in your look of the day. The adidas Camo Tongue Label Tee is made of soft 100% cotton single jersey in camo with a large tongue in front. To help end plastic waste, adidas supports sustainable cotton farming for all their cotton products.',
        price: 26
    },
    {
        title: 'Mens adidas Originals Sportive Track Pants Collegiate Navy',
        imageUrl: 'https://www.prodirectselect.com/productimages/V3_1_Gallery_3/V3_1_Gallery_3_0335259.jpg',
        id: 3,
        color: 'NAVY',
        brands: 'ADIDAS',
        linkUrl: '/mens-adidas-originals-sportive-track-pants-collegiate-navy',
        description: 'adidas has brought the Sportive Track Pants out from the 90s archive. The adidas pants are constructed of woven nylon with looks straight from 1995. The elastic waistband and zippered ankle cuffs will make them a breeze to get in and out of. Pockets will keep essentials secure. adidas Trefoil sits on the hip with adidas 3-Stripes down the legs. The adidas track pants are presented in Collegiate Navy, Red, and White.',
        price: 59
    },
    {
        title: 'Mens adidas navy',
        imageUrl: 'https://www.prodirectsoccer.com/ProductImages/Gallery_3/234263_Gallery_3_0829023.jpg',
        id: 4,
        color: 'NAVY',
        brands: 'ADIDAS',
        linkUrl: '/mens-adidas-navy',
        description: 'The adidas ZX 1K Boost shoes are ultra comfortable new balance kicks with eye-catching looks. The best of both worlds with Boost and EVA cushioning will keep you going all day long. Boost hits the heels and the EVA foam in the forefoot of the shoes. new balance 3-Stripes don the sides for a distinctive look. Comes in a combination of white, grey, black with pops of Solar Yellow.',
        price: 55
    },
    {
        title: 'Mens adidas Originals Superstar Shoes White Splatter',
        imageUrl: 'https://i.ebayimg.com/images/g/hE0AAOSwwz9enjeG/s-l300.jpg',
        id: 5,
        color: 'WHITE',
        brands: 'ADIDAS',
        linkUrl: '/mens-adidas-originals-superstar-shoes-white-splatter',
        description: 'A classic through and through. Update your Superstar collection with a fresh pair. The adidas Superstars have a longstanding history and faithful followers that have grown up wearing the iconic kicks. Todays iteration features a heritage style look in a white and artistic splatter colorway. adidas shell-toe sneakers like you ve always loved come with the herringbone outsoles to keep you grounded. Comes in Cloud White with adidas serrated 3-Stripes. The Superstar logo is hit with Gold Metallic. ',
        price: 130
    },
    {
        title: 'Mens New Balance 997H Shoes Team Away Grey',
        imageUrl: 'https://i.pinimg.com/originals/c0/4b/d9/c04bd94681d68fa72599f2fb016950fa.jpg',
        id: 6,
        color: 'GREY',
        brands: 'NEW BALANCE',
        linkUrl: '/mens-new-balance-997h-shoes-team-away-grey',
        description: 'The New Balance 997H draws inspiration from the classic and beloved of brand loyalists 997 that was first released back in 1991. The 997H features GCEVA construction and a modernized outsole for the ultimate lightweight ride. The shoes are built with a combination of suede, mesh, synthetic and leather details. The New Balance shoes are presented in Team Away Grey and Pigment.',
        price: 279
    }
]
};

const menCollectionReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        default:
            return state;
    }
};

export default menCollectionReducer;