import React, {useContext, useState} from "react"
import {Context} from "../context/context"
import CartItem from "../components/CartItem"

function Cart() {
    const {cartItems, emptyCart} = useContext(Context)
    const [order, setOrder] = useState(false)
    console.log(cartItems)
    const cartItemElements = cartItems.map(item => (
        <CartItem key={item.id} item={item} />
    ))

    let totalCost = cartItems.length * 5.99
    let totalDisplay = totalCost.toLocaleString("en-US", {style: "currency", currency: "USD"})

    function placeOrder(){
        setOrder(true)
        setTimeout(() => {
            console.log("Order Placed!")
            setOrder(false)
            emptyCart()
          }, "3000")
          
        
    }

console.log(order)
    return (
        <main className="cart-page">
        <h1>Check out</h1>
        {cartItemElements}
        <p className="total-cost">Total:{totalDisplay} </p>
        {
        cartItems.length === 0 &&
        <p className="no-items">You have no items in your cart</p>
        }
        <div className="order-button">
            <button 
            disabled={cartItems.length === 0 ? true : false} 
            onClick={placeOrder}>{order ? "Ordering..." : "Place Order"}
            </button>
        </div>
    </main>
    )
}

export default Cart