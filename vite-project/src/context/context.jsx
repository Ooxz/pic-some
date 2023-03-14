import React, {useState, useEffect} from "react";
const Context = React.createContext()


function ContextProvider(props){
	const [allPhotos, setAllPhotos] = useState([])
	const [cartItems, setCartItems] = useState([])
	
	

	
useEffect(() =>{
	fetch("https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json")
	.then(res => res.json())
	.then(data => setAllPhotos(data))
	.catch((err) => {
		console.log(err.message)
	})
}, [])

	
	function toggleFavorite(id) {
        const updatedArr = allPhotos.map(photo => {
            if(photo.id === id) {
                console.log(id)
                console.log(!photo.isFavorite)
                return {...photo, isFavorite: !photo.isFavorite}
            }
            else {
				return { ...photo}
			} 
        })
		setAllPhotos(updatedArr)
    }

	function addToCart(newItem) {
		setCartItems(prevCartItem => [...prevCartItem, newItem])
	}

	function removeFromCart(id) {
		setCartItems(prevCartItem => prevCartItem.filter(item => item.id !== id))
	}

	function emptyCart(){
		setCartItems([])
	}

	console.log(cartItems)


return(
	<Context.Provider value=
	{{
		allPhotos, 
		toggleFavorite, 
		addToCart, 
		cartItems, 
		removeFromCart, 
		emptyCart
		}}
		>
		{props.children}
	</Context.Provider>
)
}
export {ContextProvider, Context}