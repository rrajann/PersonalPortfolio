import { useState , useEffect } from "react";
import "../css/ImageSlideshow.css";
import { BsArrowLeftCircleFill , BsArrowRightCircleFill } from "react-icons/bs";


export default function ImageSlideShow( {listOfImages} ) {
    const images = listOfImages;
    const [imageIndex, setImageIndex] = useState(0);
    const hideArrows = listOfImages.length === 1;

    function handleLeftClick() {
        console.log(listOfImages.length);
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
            {!hideArrows && <BsArrowLeftCircleFill onClick={handleLeftClick} className="next-image" size="32" id="first"/>}
            <img id="slideshow" src={images[imageIndex]}/>
            {!hideArrows && <BsArrowRightCircleFill onClick={handleRightClick} className="next-image" size="32" id="second"/>}
        </div>
    )
}