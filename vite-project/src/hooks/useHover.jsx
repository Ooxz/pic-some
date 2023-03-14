import {useState, useEffect, useRef} from "react"


function useHover() {
	
	const [hover, setHover] = useState(false)
	const ref = useRef(null)

	function enter() {
        setHover(true)
    }
    
    function leave() {
    setHover(false)
    }
    
    useEffect(() => {
		if(ref.current) {
			ref.current.addEventListener("mouseenter", enter)
        	ref.current.addEventListener("mouseleave", leave)
		}
        
        
        return () => {    
			if(ref.current) {
				ref.current.removeEventListener("mouseenter", enter)
				ref.current.removeEventListener("mouseleave", leave)
			}
           
        }
    }, [])

	return [hover, ref]

}

export default useHover