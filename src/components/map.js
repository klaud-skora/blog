import React, { memo } from 'react';
import {
  ComposableMap,
  Geographies,
  Geography
} from 'react-simple-maps';
import styled from 'styled-components';

const geoUrl =
  "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json";

const checkedCountries = ["Italy"];
  

const rounded = num => {
  if (num > 1000000000) {
    return Math.round(num / 100000000) / 10 + "Bn";
  } else if (num > 1000000) {
    return Math.round(num / 100000) / 10 + "M";
  } else {
    return Math.round(num / 100) / 10 + "K";
  }
};

const MapComponent = styled.div`
  position: relative;
  height: calc(100vh - 160px);
  width: 1000px;
  overflow: hidden;
  z-index: 88;
`;

const Map = ({ setTooltipContent }) => (
  <MapComponent>
    <ComposableMap 
      projection='geoAzimuthalEqualArea'
      projectionConfig={{
        rotate: [-16.0, -48.0, 8],
        scale: 700
      }}
    >
      <Geographies geography={geoUrl}>
      
        {({ geographies }) =>
          geographies
          .filter(c => c.properties.REGION_UN === 'Europe')
          .map(geo => (
            <Geography
              key={geo.rsmKey}
              geography={geo}
              onMouseEnter={() => {
                const { NAME, POP_EST } = geo.properties;
                setTooltipContent(`${NAME} — ${rounded(POP_EST)}`);
              }}
              onMouseLeave={() => {
                setTooltipContent("");
              }}
              style={{
                default: {
                  fill: checkedCountries.includes(geo.properties.NAME) ? "#122916" : " #ffffff00",
                  outline: 'none',
                  stroke: '#122916'
                },
                hover: {
                  fill: "#122916",
                  outline: "none",
                  stroke: "#122916"
                },
                pressed: {
                  fill: '#000000',
                  outline: 'none',
                  stroke: '#122916'
                }
              }}
            />
          ))
        }
      </Geographies>
    </ComposableMap>
  </MapComponent>
);

export default memo(Map);
