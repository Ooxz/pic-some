import React, { useContext} from "react"
import {Context} from "../context/context"
import PropTypes from "prop-types"
import useHover from "../hooks/useHover"

function Images({className, img}) {
    const [hover, ref] = useHover()
    const {toggleFavorite, addToCart, cartItems, removeFromCart} = useContext(Context)

    function heartIcon() {
        if(img.isFavorite) {
            return <i className="ri-heart-fill favorite" onClick={() => toggleFavorite(img.id)}></i>
        } else if(hover) {
            return <i className="ri-heart-line favorite" onClick={() => toggleFavorite(img.id)}></i>
        }
    }

     function cartIcon() {
        const alreadyInCart = cartItems.some(item => item.id === img.id)
        if(alreadyInCart) {
            return <i onClick={() => removeFromCart(img.id)} className="ri-shopping-cart-fill cart"></i>
        } else if(hover) {
            return <i className="ri-add-circle-line cart" onClick={() => addToCart(img)}></i>
        }
    }

    return (
        <div 
        ref={ref}
        className={`${className} image-container`
        }
        >
            <img src={img.url} className="image-grid"/>
            {heartIcon()}
            {cartIcon()}
        </div>
    )
}

Image.propTypes= {
    className: PropTypes.string,
    img: PropTypes.shape({
        id: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired,
        isFavorite: PropTypes.bool,
    })
}

export default Images
