import ListItem from './ListItem.js';

const data = [
    {    
        id : 1,
        itemName : "Item 1",
        actualPrice : 789,
        discountedPrice : 599
    },
    {    
        id : 2,
        itemName : "Item 2",
        actualPrice : 999,
        discountedPrice : 899
    }
]
const Products = () => {
    return(
        <div>
            <ListItem>{data[0]}</ListItem>
            <ListItem>{data[1]}</ListItem>
        </div>
    )
}

export default Products;