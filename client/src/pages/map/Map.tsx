import React, { useEffect } from "react";
import "./Map.css";

const GOOGLE_MAPS_API_KEY = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;

console.log(GOOGLE_MAPS_API_KEY);

const Map = () => {
    useEffect(() => {
        const script = document.createElement("script");
        script.src = `https://maps.googleapis.com/maps/api/js?key=${GOOGLE_MAPS_API_KEY}&libraries=maps&v=beta`;
        script.defer = true;
        script.onload = () => {
            const map = new google.maps.Map(document.getElementById('map') as HTMLElement, {
                center: { lat: 40.719876, lng: -73.600001 },
                zoom: 8,
            });
            const locations = [
                { key: '1100 Lake Dr', location: { lat: 40.835973, lng: -72.994283 } },
                { key: '77 Clinton St', location: { lat: 40.670357, lng: -73.683301 } },
                { key: '1100 Avenue At Port', location: { lat: 40.774037, lng: -74.011796 } },
            ];
            locations.forEach(location => {
                new google.maps.Marker({
                    position: location.location,
                    map,
                    title: location.key,
                });
            });
        };
        document.head.appendChild(script);
    }, []);

    return (
        <div className="mapContent">
            <div className="mapInteractive">
                <div id="map" style={{ height: "500px" }}></div>
            </div>
            <div className="mapCard">
                <div className="mapInstructions">
                    <p className="mapFooter">This Map Shows All Properties You Have Entered On The Interactive Map</p>
                </div>
            </div>
        </div>
    );
};

export default Map;