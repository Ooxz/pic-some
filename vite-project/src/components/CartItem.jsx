import React, {useContext, useState} from "react"
import {Context} from "../context/context"

function CartItem({item}) {
	const {removeFromCart} = useContext(Context)
	const [hover, setHover] = useState(false)
	const binIconClassName = hover ? "ri-delete-bin-fill" : "ri-delete-bin-line"

    return (
		<div className="cart-item">
		<i 
		onClick={() => removeFromCart(item.id)} 
		className={binIconClassName}
		onMouseEnter ={() => setHover(true)} 
        onMouseLeave ={() => setHover(false)}
		>
		</i>
		<img src={item.url} width="130px" />
		<p>$5.99</p>
	</div>
    )
}

// CartItem.propTypes = {
//     item: PropTypes.shape({
//         url: PropTypes.string.isRequired
//     })
// }

export default CartItem