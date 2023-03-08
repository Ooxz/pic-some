import React, {useState, useEffect} from "react";
const Context = React.createContext()


function ContextProvider(props){
	const [allPhotos, setAllPhotos] = useState([])
	
	

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



return(
	<Context.Provider value={{allPhotos, toggleFavorite}}>
		{props.children}
	</Context.Provider>
)
}
export {ContextProvider, Context}