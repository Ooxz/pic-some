import React, {useState, useContext} from "react"
import {Context} from "../context/context"

function Images({className, img}) {
    const [hover, setHover] = useState(false)
    const {toggleFavorite} = useContext(Context)

    const heartIcon = hover && <i onClick={() => toggleFavorite(img.id)} className="ri-heart-line favorite"></i>
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

export default Images
