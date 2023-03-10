import React, {useState, useContext} from "react"
import {Context} from "../context/context"
import PropTypes from "prop-types"

function Images({className, img}) {
    const [hover, setHover] = useState(false)
    const {toggleFavorite} = useContext(Context)

    

    const heartIcon = 
    hover && 
    <i 
    onClick={() => toggleFavorite(img.id)} 
    className={img.isFavorite ? "ri-heart-fill favorite" : "ri-heart-line favorite"}>
    </i>
    const cartIcon = hover &&<i className="ri-add-circle-line cart"></i>

    return (
        <div 
        onMouseEnter ={() => setHover(true)} 
        onMouseLeave ={() => setHover(false)}
        className={`${className} image-container`
        }
        >
            <img src={img.url} className="image-grid"/>
            {heartIcon}
            {cartIcon}
        </div>
    )
}

Image.propTypes= {
    className: PropTypes.string,
    img: PropTypes.shape({
        id: PropTypes.string,
        url: PropTypes.string,
        isFavorite: PropTypes.bool,
    })
}

export default Images
