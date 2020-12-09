import React from 'react'


const ImagePreview=(props)=>{
    return(
        <div className="image-size" onClick={()=>props.deleteImage(props.id)}>
            <img src={props.path} alt=""/>
        </div>
    )
}

export default ImagePreview