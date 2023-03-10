import React, {useContext} from "react"
import {Context} from "../context/context"

function Cart() {
    const {cartItems, allPhotos} = useContext(Context)
    // write the function to add items to the cart here I think

    function addItem() {

    }

    return (
        <main className="cart-page">
            <h1>Check out</h1>
        </main>
    )
}

export default Cart