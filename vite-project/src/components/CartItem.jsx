import React, {useContext} from "react"
import {Context} from "../context/context"
import PropTypes from "prop-types"
import useHover from "../hooks/useHover"

function CartItem({item}) {
	const [hover, ref] = useHover()
	const {removeFromCart} = useContext(Context)
	
	const binIconClassName = hover ? "ri-delete-bin-fill" : "ri-delete-bin-line"

    return (
		<div className="cart-item">
		<i 
		onClick={() => removeFromCart(item.id)} 
		className={binIconClassName}
		ref={ref}
		>
		</i>
		<img src={item.url} width="130px" />
		<p>$5.99</p>
	</div>
    )
}

CartItem.propTypes = {
    item: PropTypes.shape({
        url: PropTypes.string.isRequired
    })
}

export default CartItem