import { useState , useEffect } from "react";
import "../css/ImageSlideshow.css";


export default function ImageSlideShow( {listOfImages} ) {
    const images = listOfImages;
    const [imageIndex, setImageIndex] = useState(0);

    function handleLeftClick() {
        if (imageIndex == 0) setImageIndex(images.length - 1);
        else setImageIndex(prev => prev - 1);
        console.log("left");
    }

    function handleRightClick() {
        if (imageIndex == images.length - 1) setImageIndex(0);
        else setImageIndex(prev => prev + 1);
        console.log("right");
    }

    return (
        <div className="image-slideshow">
            <button onClick={handleLeftClick}>
                left
            </button>
            <img src={images[imageIndex]} alt="Image" id="slideshow"/>
            <button onClick={handleRightClick}>
                right
            </button>
        </div>
    )
}