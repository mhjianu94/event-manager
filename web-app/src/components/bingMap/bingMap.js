import React, { useEffect } from 'react';

const BingMaps = ({ bingMapsKey }) => {
    useEffect(() => {
        const script = document.createElement('script');
        script.type = 'text/javascript';
        script.async = true;
        script.defer = true;
        script.src = `https://www.bing.com/api/maps/mapcontrol?key=${bingMapsKey}`;
        document.head.appendChild(script);

        script.onload = () => {
            initMap();
        };

        return () => {
            document.head.removeChild(script);
        };
    }, [bingMapsKey]);

    const initMap = () => {
        new window.Microsoft.Maps.Map('#myMap', {
        });
    };

    return <div id="myMap" style={{ width: '100%', height: '400px' }}></div>;
};

export default BingMaps;