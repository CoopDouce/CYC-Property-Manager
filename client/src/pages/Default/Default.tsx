import React from "react";
import "./default.css";

const Default = () => {
    return (
        <div className="defaultContent">
            <div className="defaultImage">
                <img src="/assets/defaultImage.jpg" alt="Associates Planning" className="defaultImg"></img>
            </div>
            <div className="imageTopper">
                <h2 className="defaultFree">We Are Completely Free!</h2>
            </div>
            <div className="defaultCard">
                <div className="defaultCardBar"></div>
                <div className="defaultCardText">
                    <h2>Welcome to CYC Property Manager</h2>
                    <p>
                        We are a property management company that specializes in managing properties for landlords. We provide a variety of services to help landlords manage their properties. We are dedicated to providing excellent service to our clients and helping them achieve their property management goals.
                    </p>
                </div>
            </div>
        </div> 
    );
};

export default Default;