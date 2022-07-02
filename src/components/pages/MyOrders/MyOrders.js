import {
    Accordion,
    AccordionButton,
    AccordionIcon,
    AccordionItem,
    AccordionPanel,
    Box,
    Container,
    Heading,
} from '@chakra-ui/react';
import SiteHeader from '../../shared/SiteHeader';

function Product(props) {
    const { orders } = props;
    const { product } = orders[0].order_items[0];
    const { name, description, gallery, price } = product;
    const [image] = gallery;

    return ( <
        >
        <
        SiteHeader / >

        <
        Container maxWidth = {
            {
                lg: 'container.xl',
            }
        }
        margin = "auto"
        marginTop = { 10 } >
        <
        Heading > Meus pedidos < /Heading>

        <
        Accordion allowToggle marginTop = { 10 } > {
            orders.map((order) => ( <
                AccordionItem >
                <
                h2 >
                <
                AccordionButton >
                <
                Box display = "flex"
                flex = "1"
                flexWrap = "nowrap" >
                <
                span > Pedido { '#'.concat(order.id) } < /span> <
                /Box> <
                AccordionIcon / >
                <
                /AccordionButton> <
                /h2> <
                AccordionPanel pb = { 4 } >
                name description price gallery quantity <
                /AccordionPanel> <
                /AccordionItem>
            ))
        } <
        /Accordion> <
        /Container> <
        />
    );
}

export default Product;