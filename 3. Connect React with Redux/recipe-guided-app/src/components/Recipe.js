import React from "react";
import '../../src/index.css'

export default function Recipe({ recipe, children }) {
    return (
        <div key={recipe.id} className="recipe" tabIndex={0}>
            <span className="recipe-container">
                <h3 className="recipe-name">{recipe.name}</h3>
                <div className="image-container">
                    <img src={recipe.img} alt="" className="recipe-image" />
                </div>
            </span>
            {children}
        </div>
    );
}
