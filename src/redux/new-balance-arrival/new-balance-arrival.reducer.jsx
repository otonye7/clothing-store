const INITIAL_STATE = {
    sections: [{
                
        title: 'Mens New Balance Shando Shoes Black',
        imageUrl: 'https://www.lauriesshoes.com/wp-content/uploads/2020/10/wtshalb_nb_02_i.jpg',
        id: 1,
        color: 'WHITE',
        brands: 'NEW BALANCE',
        linkUrl: '/mens-new-balance-shando-shoes-black',
        description: 'The New Balance 327 Sneakers in White and Black have a vintage modern silhouette and visually graphic "N" logo across the side. New Balance went back into their archives to pull out elements from their favorite styles to come up with the New Balance 327. The 327 NB sneakers feature a unique silhouette with its lightweight upper and an oversize N logo. The bold outsoles will turn heads with its trail-inspired design that extends up to the toe and heel with stand-out studs. Comes with white and black.',
        price: 75
    },
    {
        title: 'Mens New Balance All Coasts Sea Salt',
        imageUrl: 'https://i.ebayimg.com/images/g/AnsAAOSwLpda7hqh/s-l300.jpg',
        id: 2,
        color: 'GRAY',
        brands: 'NEW BALANCE',
        linkUrl: '/mens-new-balance-all-coasts-sea-salt',
        description: 'The New Balance 327 Sneakers in White and Black have a vintage modern silhouette and visually graphic "N" logo across the side. New Balance went back into their archives to pull out elements from their favorite styles to come up with the New Balance 327. The 327 NB sneakers feature a unique silhouette with its lightweight upper and an oversize N logo. The bold outsoles will turn heads with its trail-inspired design that extends up to the toe and heel with stand-out studs. Comes with white and black.',
        price: 55
    },
    {
        title: 'Mens New Balance XRCT Shoes Black with Phantom',
        imageUrl: 'https://images.zentail.com/242/1323951ea7efa729da546537c9489980c3590e9451b23246320369d30eb2306f.jpg',
        id: 3,
        color: 'BLACK',
        brands: 'NEW BALANCE',
        linkUrl: '/men-new-balance-xrct-shoes-black-with-phantom',
        description: 'The New Balance 327 Sneakers in White and Black have a vintage modern silhouette and visually graphic "N" logo across the side. New Balance went back into their archives to pull out elements from their favorite styles to come up with the New Balance 327. The 327 NB sneakers feature a unique silhouette with its lightweight upper and an oversize N logo. The bold outsoles will turn heads with its trail-inspired design that extends up to the toe and heel with stand-out studs. Comes with white and black.',
        price: 65
    },
    {
        title: 'Mens New Balance XRCT Shoes Aluminum with Team',
        imageUrl: 'https://i.ebayimg.com/images/g/SJ8AAOSwiQdfJ0rT/s-l640.jpg',
        id: 4,
        color: 'MULTICOLOR',
        brands: 'NEW BALANCE',
        linkUrl: '/mens-new-balance-aluminum',
        description: 'The New Balance 327 Sneakers in White and Black have a vintage modern silhouette and visually graphic "N" logo across the side. New Balance went back into their archives to pull out elements from their favorite styles to come up with the New Balance 327. The 327 NB sneakers feature a unique silhouette with its lightweight upper and an oversize N logo. The bold outsoles will turn heads with its trail-inspired design that extends up to the toe and heel with stand-out studs. Comes with white and black.',
        price: 55
    },
    {
        title: 'Mens New Balance 574 Shoes Team Forest Green',
        imageUrl: 'The New Balance 327 Sneakers in White and Black have a vintage modern silhouette and visually graphic "N" logo across the side. New Balance went back into their archives to pull out elements from their favorite styles to come up with the New Balance 327. The 327 NB sneakers feature a unique silhouette with its lightweight upper and an oversize N logo. The bold outsoles will turn heads with its trail-inspired design that extends up to the toe and heel with stand-out studs. Comes with white and black.',
        id: 5,
        color: 'PINK',
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