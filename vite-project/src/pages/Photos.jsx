import Images from "../components/Images"
import React, {useContext} from "react"
import {Context} from "../context/context"
import {getClass} from "../utils/index"

function Photos() {
    const {allPhotos} = useContext(Context)
    
    const mapPhotos = allPhotos.map((photos, index) => (
        <Images key={photos.id} img={photos} className={getClass(index)}/>
    ))

    return (
        <main className="photos" >
            {mapPhotos}
        </main>
    )
}

export default Photos