import AddToCardIcon from "../assets/icons/add_cart.svg";

const ListItem = () => {
    return (
        <div className="item-card">
            <img className="img-fluid" src="assets/placeholder.png" alt="Placeholder" />
            <div className="item-card__information">
                <div className="pricing">
                    <span>Discounted Price</span>
                    <small>
                        <strike>Actual Price</strike>
                    </small>
                </div>
                <div className="title">
                    <h3>Item Name</h3>
                </div>
            </div>
            <button className="cart-add">
                <span>Add to cart</span>
                <img src={AddToCardIcon} alt="Cart Icon" />
            </button>
        </div>
    )
}

export default ListItem;