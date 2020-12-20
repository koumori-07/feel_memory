import React, { useState } from 'react'
import Swiper from "react-id-swiper";
import 'swiper/css/swiper.css'
import NoImage from '../../Noimage/NoImage.png'

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
        <>
            <div > 
                {images.length === 0 && (
                    <div className="text-center">
                        <img src={NoImage} alt="no images" />
                    </div>
                )}
            </div>
            <Swiper className="list-image-size height-image">
                {images.length <= 1 && (
                    images.map(image => (
                        <div key={image.id}  className="image-size">
                            <img src={image.path} alt="投稿画像"/>
                        </div>
                    ))
                )}
            </Swiper>
            <Swiper {...params} className="list-image-size height-image">
                {images.length > 1 && (
                    images.map(image => (
                        <div key={image.id} className="image-size">
                            <img src={image.path} alt="投稿画像" />
                        </div>
                    ))
                )}
            </Swiper>
        </>
    )
}
export default ImageSwiper