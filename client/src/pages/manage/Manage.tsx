import React from "react";
import "./Manage.css";

const Manage = () => {
    return (
        <div className="manageContent">
            <h1>Your Properties</h1>
            <div className="manageArray">
                <p className="manageHeader">Here is Your Properties:</p>
                <div className="manageBar">
                    <div className="propertyOne">
                        <p>1100 Lake Dr</p>
                        <p> Medford, New York</p>
                        <br></br>
                        <img src="/assets/propertyOne.png" alt="Property One" className="propertyOneImg"></img>
                        <div className="propertyInfo">
                            <p>Rent Price: $2,548</p>
                            <p>Current Tenant: N/A</p>
                            <p>Room Type: Single</p>
                        </div>
                    </div>
                    <div className="propertyTwo">
                        <p>77 Clinton St</p>
                        <p> New York Mills, New York</p>
                        <br></br>
                        <img src="/assets/propertyTwo.png" alt="Property Two" className="propertyTwoImg"></img>
                        <div className="propertyInfo">
                            <p>Rent Price: $1,200</p>
                            <p>Current Tenant: Harvey King</p>
                            <p>Room Type: Double</p>
                        </div>
                    </div>
                    <div className="propertyThree">
                        <p>1100 Avenue At Port</p>
                        <p> Weehawken, New Jersey</p>
                        <br></br>
                        <img src="/assets/propertyThree.png" alt="Property Three" className="propertyThreeImg"></img>
                        <div className="propertyInfo">
                            <p>Rent Price: $4,756</p>
                            <p>Current Tenant: Daisy Gamble</p>
                            <p>Room Type: Studio</p>
                        </div>
                    </div>
                    <div className="propertyAdd">
                        <h1>Add Property</h1>
                        <p className="plusSign">&#65291;</p>
                    </div>
                </div>
            </div>
        </div> 
    );
};

export default Manage;