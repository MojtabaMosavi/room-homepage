import React from "react";
import PropType from "prop-types";
const Data = require("./ArticleData");
import Article from "./Article";

import productImageDark from "../../assets/images/image-about-dark.jpg"
import productImageLight from "../../assets/images/image-about-light.jpg"

const ProductSection = () => {
    return (
        <div className="product">
            <div className="product__wrapper">
                <div className="product__image--dark">
                    <img src={productImageDark} alt="furniture" className="product__image"></img>
                </div>
                <div className="product__image--light">
                    <img src={productImageLight} alt="furniture" className="product__image"></img>
                </div>            
                
                <div className="product__info container">
                    {
                        Data.map((data,i) => {
                        return (
                                <Article {...data} key={i}/>
                        ) 
                        })
                    }
                </div>
            </div>
            

        </div>
    );
}
 
export default ProductSection;