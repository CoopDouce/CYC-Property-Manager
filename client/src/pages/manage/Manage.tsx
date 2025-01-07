import React, { useState } from "react";
import "./Manage.css";

interface Property {
    address: string;
    city: string;
    state: string;
    photo?: string;
    rent: string;
    tenant: string;
    room: string;
}

const Manage = () => {
    const [properties, setProperties] = useState<Property[]>([
        {
            address: "1100 Lake Dr",
            city: "Medford",
            state: "New York",
            photo: "assets/propertyOne.png",
            rent: "$2,548",
            tenant: "N/A",
            room: "Single",
        },
        {
            address: "77 Clinton St",
            city: "New York Mills",
            state: "New York",
            photo: "assets/propertyTwo.png",
            rent: "$1,200",
            tenant: "Harvey King",
            room: "Double",
        },
        {
            address: "1100 Avenue At Port",
            city: "Weehawken",
            state: "New Jersey",
            photo: "assets/propertyThree.png",
            rent: "$4,756",
            tenant: "Daisy Gamble",
            room: "Studio",
        },
    ]);

    const newProperty = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const newProp: Property = {
            address: formData.get("address") as string,
            city: formData.get("city") as string,
            state: formData.get("state") as string,
            photo: formData.get("photo") as string,
            rent: formData.get("rent") as string,
            tenant: formData.get("tenant") as string,
            room: formData.get("room") as string,
        };
        setProperties([...properties, newProp]);
        document.getElementById('id02')!.style.display = 'none';
    };

    const deleteProperty = (index: number) => {
        const newProperties = properties.filter((_, i) => i !== index);
        setProperties(newProperties);
    };

    return (
        <div className="manageContent">
            <div className="propertyAdd">
                <div>
                    <button className="plusSign" onClick={() => { document.getElementById('id02')!.style.display = 'block'; }}>Add Property &#65291;</button>
                </div>
                    </div>
                    <div id="id02" className="modalManage">
                        <form className="modalManage-content animate" onSubmit={newProperty}>
                            <div className="modalImg">
                                <span onClick={() => { document.getElementById('id02')!.style.display = 'none'; }} className="closeManage" title="Close Modal">&times;</span>
                                <img src="assets/newPropertyImg.png" alt="New Property" className="newPropertyImg" />
                            </div>
                            <div className="modalManageInformation">
                                
                                <label htmlFor="address"><b>Address</b></label>
                                <input type="text" placeholder="Enter Address" name="address" required />
                                
                                <label htmlFor="city"><b>City</b></label>
                                <input type="text" placeholder="Enter City" name="city" required />
                                
                                <label htmlFor="photo"><b>Photo Link</b></label>
                                <input type="text" placeholder="Enter Photo Link" name="photo" />

                                <label htmlFor="state"><b>State</b></label>
                                <input type="text" placeholder="Enter State" name="state" required />
                                
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
            <div className="manageArray">
                <p className="manageHeader">Here is Your Properties:</p>
                <div className="manageBar">
                        {properties.map((property, index) => (
                            <div key={index} className="propertyCard">
                                <p>{property.address}</p>
                                <p>{property.city}, {property.state}</p>
                                <br />
                                <img src={property.photo} alt={property.photo} className="propertyImg" />
                                <div className="propertyInfo">
                                    <p>Rent Price: {property.rent}</p>
                                    <p>Current Tenant: {property.tenant}</p>
                                    <p>Room Type: {property.room}</p>
                                </div>
                                <button className="deleteButton" onClick={() => deleteProperty(index)}>Delete</button>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
         
    );
};

export default Manage;