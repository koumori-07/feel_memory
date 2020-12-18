import React, { useState } from 'react'
import Swiper from "react-id-swiper";
import 'swiper/css/swiper.css'

const ImageSwiper = (props) => {
    const [params] = useState({
        pagination: {
          el: ".swiper-pagination",
          type: "bullets",
          clickable: true,
          dynamicBullets: true
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        },
        loop: true
    })
    
    const images = props.images

    return (
        
            <Swiper {...params} className="list-image-size height-image">
                {images.length === 0 ? (
                    <div >
                    {/* <img src={NoImage} alt="no images" /> */}
                    画像がありません
                    </div>
                ) : (
                        images.map(image => (
                            <div  key={image.id} className="image-size">
                                <img src={image.path} alt="商品情報" />
                            </div>
                        ))
                    )}
            </Swiper>
        
    )
}
export default ImageSwiper