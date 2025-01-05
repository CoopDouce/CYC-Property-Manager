import React from "react";
import "./Map.css";

const Map = () => {
    return (
        <div className="mapContent">
            <div className="mapInteractive">

            </div>
            <div className="mapCard">
                <div className="mapInstructions">
                    <p>This Map Shows All Properties You Have Entered On The Interactive Map</p>
                    <p>Click on a Property to Show it's Details</p>
                </div>
            </div>
        </div> 
    );
};

export default Map;