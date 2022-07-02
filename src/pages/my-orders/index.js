import MyOrdersPage from '../../components/pages/MyOrders';

export async function getServerSideProps() {
    const ordersEndpointResponseNeeded = {
        data: [{
            id: 1,
            user_id: 'ahjsduhjsduahsduausdua',
            total: 13000.0,
            cep: 18060005,
            payment_method: 'pix',
            order_items: [{
                id: 1,
                product: {
                    id: 1,
                    sku: 'aaaa-aaa-aaa',
                    name: 'PC Gamer',
                    description: 'O Pc gamer mais irado que você vai conhecer',
                    price: 13000.0,
                    createdAt: new Date().toDateString(),
                    tags: [{
                        id: 1,
                        name: 'Computers',
                        slug: 'computers',
                    }, ],
                    gallery: [{
                        id: 1,
                        url: 'https://s2.glbimg.com/eQF6zOgS3xiHCEIVDQOGj9ldXSE=/0x0:6720x4480/924x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2021/a/H/yjEAjIRHukWhYgOVHAQg/nave11.jpg',
                        description: '',
                    }, ],
                },
                quantity: 1,
            }, ],
        }, ],
    };

    return {
        props: {
            orders: ordersEndpointResponseNeeded.data,
        },
    };
}

export default MyOrdersPage;