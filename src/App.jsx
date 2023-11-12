import { useState } from "react";

export default function App() {
    const images = [
        { src: "images/pic1.jpg", alt: "Closeup of a human eye" },
        { src: "images/pic2.jpg", alt: "Rock that looks like a wave" },
        { src: "images/pic3.jpg", alt: "Purple and white pansies" },
        { src: "images/pic4.jpg", alt: "Section of wall from a pharaoh's tomb" },
        { src: "images/pic5.jpg", alt: "Large moth on a leaf" }
    ];

    const [fullImage, setFullImage] = useState(images[0]);
    const [darken, setDarken] = useState(false);

    function displayImages(image) {
        return (
            <img
                key={image.src}
                src={image.src}
                alt={image.alt}
                onClick={() => setFullImage(image)}
            />
        );
    }

    function changeDarken() {
        setDarken(!darken)
    }

    return (
        <>
            <h1>Image gallery example</h1>
            <div className="full-img">
                <img
                    className="displayed-img"
                    src={fullImage.src}
                    alt={fullImage.alt}
                />
                <div
                    className="overlay"
                    style={darken ?
                        { backgroundColor: "rgba(0, 0, 0, 0.5)" } :
                        { backgroundColor: "rgba(0, 0, 0, 0)" }
                    }
                ></div>
                <button className="dark" onClick={changeDarken}>
                    {darken ? "Lighten" : "Darken"}
                </button>
            </div>
            <div className="thumb-bar">
                {images.map(displayImages)}
            </div>
        </>
    );
}