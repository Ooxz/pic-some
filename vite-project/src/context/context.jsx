import React, {useState, useEffect} from "react";
const Context = React.createContext()


function ContextProvider(props){
	const [allPhotos, setAllPhotos] = useState([])

useEffect(() =>{
	fetch("https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json")
	.then((response) => response.json())
}, [])

return(
	<Context.Provider value={{allPhotos}}>
		{props.children}
	</Context.Provider>
)
}
export {ContextProvider, Context}