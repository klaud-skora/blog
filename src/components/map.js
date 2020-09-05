import React, { memo } from 'react';
import { Link } from 'gatsby';
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
  height: 100%;
  width: 1000px;
  overflow: hidden;
  z-index: 88;
`;

const Map = () => (
  <MapComponent>
    <ComposableMap 
      projection='geoAzimuthalEqualArea'
      projectionConfig={{
        rotate: [-16.0, -48.0, 8],
        scale: 750
      }}
    >
      <Geographies geography={geoUrl}>
      
        {({ geographies }) =>
          geographies
          .filter(c => c.properties.REGION_UN === 'Europe')
          .map(geo => (
            <Link key={geo.rsmKey} to={checkedCountries.includes(geo.properties.NAME) ? `/${geo.properties.NAME}/` : `#`}>
            <Geography
              key={geo.rsmKey}
              geography={geo}
              onMouseEnter={() => {
                const { NAME, POP_EST } = geo.properties;
                // setTooltipContent(`${NAME} — ${rounded(POP_EST)}`);
              }}
              onMouseLeave={() => {
                // setTooltipContent("");
              }}
              style={{
                default: {
                  fill: checkedCountries.includes(geo.properties.NAME) ? "#122916" : " #ffffff00",
                  outline: 'none',
                  stroke: '#122916',
                  strokeWidth: 1.25,
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
            </Link>
          ))
        }
      </Geographies>
    </ComposableMap>
  </MapComponent>
);

export default memo(Map);
