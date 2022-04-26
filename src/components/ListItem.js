import AddToCardIcon from "../assets/icons/add_cart.svg";

const ListItem = () => {
    return (
        <div className="list-item">
            <h1>List Item</h1>
            <img src="assets/placeholder.png" alt="Placeholder" />
            <div>
                <div>
                    <span>Discounted Price</span>
                    <small>
                        <strike>Actual Price</strike>
                    </small>
                </div>
                <div>
                    <h3>Item Name</h3>
                </div>
            </div>
            <button>
                <span>Add to cart</span>
                <img src={AddToCardIcon} alt="Cart Icon" />
            </button>
        </div>
    )
}

export default ListItem;