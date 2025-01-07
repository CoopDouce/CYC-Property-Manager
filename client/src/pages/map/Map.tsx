import React, { useEffect } from "react";
import "./Map.css";

declare global {
    interface ImportMeta {
      readonly env: {
        GOOGLE_MAPS_API_KEY: string;
      }
    }
  }
  
  const GOOGLE_MAPS_API_KEY: string = import.meta.env.GOOGLE_MAPS_API_KEY;

function initMap() {
    const mapElement = document.getElementById("map");
    if (mapElement) {
        const map = new google.maps.Map(mapElement, {
            zoom: 6,
            center: { lat: 43.120407, lng: -76.397129 },
        });
    } else {
        console.error("Map element not found");
    }
}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'gmp-map': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
        center?: string;
        zoom?: string;
        'map-id'?: string;
      };
    }
  }
}

const Map = () => {
    useEffect(() => {
        const script = document.createElement("script");
        script.src = `https://maps.googleapis.com/maps/api/js?key=GOOGLE_MAPS_API_KEY&libraries=maps&v=beta`;
        script.defer = true;
        script.onload = () => initMap();
        document.head.appendChild(script);
    }, []);

    return (
        <div className="mapContent">
            <div className="mapInteractive">
                <div id="map" style={{ height: "500px",}}></div>
            </div>
            <div className="mapCard">
                <div className="mapInstructions">
                    <p>This Map Shows All Properties You Have Entered On The Interactive Map</p>
                </div>
            </div>
        </div> 
    );
};

export default Map;