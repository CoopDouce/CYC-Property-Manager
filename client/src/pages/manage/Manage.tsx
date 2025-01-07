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
                        <button className="plusSign" onClick={() => { document.getElementById('id02')!.style.display = 'block'; }}>&#65291;</button>
                    </div>
                    <div id="id02" className="modal">
                        <form className="modal-content animate" action="/action_page.php" method="post">
                            <div className="modalContent">
                                <span onClick={() => { document.getElementById('id02')!.style.display = 'none'; }} className="close" title="Close Modal">&times;</span>
                                
                                <label htmlFor="address"><b>Address</b></label>
                                <input type="text" placeholder="Enter Address" name="address" required />
                                
                                <label htmlFor="city"><b>City</b></label>
                                <input type="text" placeholder="Enter City" name="city" required />
                                
                                <label htmlFor="state"><b>State</b></label>
                                <input type="text" placeholder="Enter State" name="state" required />
                                
                                <label htmlFor="zip"><b>Zip Code</b></label>
                                <input type="text" placeholder="Enter Zip Code" name="zip" required />
                                
                                <label htmlFor="rent"><b>Rent Price</b></label>
                                <input type="text" placeholder="Enter Rent Price" name="rent" required />
                                
                                <label htmlFor="tenant"><b>Current Tenant</b></label>
                                <input type="text" placeholder="Enter Current Tenant" name="tenant" required />
                                
                                <label htmlFor="room"><b>Room Type</b></label>
                                <input type="text" placeholder="Enter Room Type" name="room" required />
                                
                                <button type="submit">Add Property</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div> 
    );
};

export default Manage;