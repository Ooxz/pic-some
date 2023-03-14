import React, {useState} from "react"

function useHover() {
	const [hover, setHover] = useState(false)

	function mouseEnter() {
		setHover (true)   
	}

	function mouseLeave() {
		setHover(false)
	}

}

export default useHover