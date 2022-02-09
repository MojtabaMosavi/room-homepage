import React from "react";
import Slider from "./Slider";

import image1Desktop from "../../assets/images/desktop-image-hero-1.jpg";
import image1Mobile from "../../assets/images/mobile-image-hero-1.jpg";

import image2Desktop from "../../assets/images/desktop-image-hero-2.jpg";
import image2Mobile from "../../assets/images/mobile-image-hero-2.jpg";

import image3Desktop from "../../assets/images/desktop-image-hero-3.jpg";
import image3Mobile from "../../assets/images/mobile-image-hero-3.jpg";

const images = [
    {
        desktop:image1Desktop,
        mobile:image1Mobile
    },
    {
        desktop:image2Desktop,
        mobile:image2Mobile
    },
    {
        desktop:image3Desktop,
        mobile:image3Mobile
    },

]


const Hero = () => {
    return (  
        <section className="hero">
            <div className="hero__wrapper">
                <Slider images={images}/>
                <article className="hero__content">
                    <h1 className="hero__heading"></h1>
                    <p className="hero__text"></p>
                    <button className="hero__cta"></button>
                </article>
            </div>
        </section>
    );
}
 
export default Hero;