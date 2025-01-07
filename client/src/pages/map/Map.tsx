import React, { useEffect } from "react";
import { AdvancedMarker, Pin } from '@vis.gl/react-google-maps';
import "./Map.css";

function initMap() {
    const mapElement = document.getElementById("map");
    if (mapElement) {
        const map = new google.maps.Map(mapElement, {
            zoom: 9,
            center: { lat: 40.719876, lng: -73.600001 },
        });
        return map;
    } else {
        console.error("Map element not found");
        return null;
    }
}

type Poi = { key: string; location: google.maps.LatLngLiteral }
const locations: Poi[] = [
  { key: '1100 Lake Dr', location: { lat: 40.835973, lng: -72.994283 } },
  { key: '77 Clinton St', location: { lat: 40.670357, lng: -73.683301 } },
  { key: '1100 Avenue At Port', location: { lat: 40.774037, lng: -74.011796 } },
];

const PoiMarkers = (props: { pois: Poi[] }) => {
  return (
    <>
      {props.pois.map((poi: Poi) => (
        <AdvancedMarker
          key={poi.key}
          position={poi.location}>
          <Pin background={'#FBBC04'} glyphColor={'#000'} borderColor={'#000'} />
        </AdvancedMarker>
      ))}
    </>
  )
}

const Map = () => {
    useEffect(() => {
        const script = document.createElement("script");
        script.src = `https://maps.googleapis.com/maps/api/js?key=GOOGLE_MAPS_API_KEY&libraries=maps&v=beta`;
        script.defer = true;
        script.onload = () => {
            const map = initMap();
            if (map) {
                locations.forEach(location => {
                    new google.maps.Marker({
                        position: location.location,
                        map,
                        title: location.key,
                    });
                });
            }
        };
        document.head.appendChild(script);
    }, []);

    return (
        <div className="mapContent">
            <div className="mapInteractive">
                <div id="map" style={{ height: "500px" }}></div>
                <PoiMarkers pois={locations} />
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