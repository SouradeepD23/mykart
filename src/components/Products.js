import ListItem from './ListItem.js';

const items = [
    {    
        id : 1,
        itemName : "Item 1",
        actualPrice : 789,
        discountedPrice : 599,
        thumbnailUrl : "assets/placeholder.jpg"
    },
    {    
        id : 2,
        itemName : "Item 2",
        actualPrice : 999,
        discountedPrice : 899,
        thumbnailUrl : "assets/placeholder.jpg"
    }
]
const Products = () => {
    return(
        <div className="product-list">
            <div className="product-list--wrapper">
                <ListItem data = {items[0]}></ListItem>
                <ListItem data = {items[1]}></ListItem>
            </div>
        </div>
    )
}

export default Products;