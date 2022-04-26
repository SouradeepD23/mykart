import AddToCardIcon from "../assets/icons/add_cart.svg";

const ListItem = (props) => {
    return (
        <div className="item-card">
            <img className="img-fluid" src={props.data.thumbnailUrl} alt="Placeholder" />
            <div className="item-card__information">
                <div className="pricing">
                    <span>{props.data.discountedPrice}</span>
                    <small>
                        <strike>{props.data.actualPrice}</strike>
                    </small>
                </div>
                <div className="title">
                    <h3>{props.data.itemName}</h3>
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