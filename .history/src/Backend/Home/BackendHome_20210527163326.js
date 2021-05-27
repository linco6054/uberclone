import React from "react";
import LeftNav from "../LeftNav/LeftNav";

import GoogleMapReact from "google-map-react";

const AnyReactComponent = ({ text }) => <div>{text}</div>;
const { REACT_APP_GOOGLE_KEY } = process.env;
function BackendHome() {
  const defaultProps = {
    center: {
      lat: 1.2864,
      lng: 37.8172,
    },
    zoom: 10,
  };
  const googleApiKey = AIzaSyANYDPdUREb5mXsSd9wu51uiPwtV0b_FwM;

  return (
    // Important! Always set the container height explicitly
    <div
      className="position-relative"
      style={{ height: "110vh", width: "100%" }}
    >
      <GoogleMapReact
        bootstrapURLKeys={{ key: googleApiKey }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        <AnyReactComponent lat={59.955413} lng={30.337844} text="My Marker" />
      </GoogleMapReact>
      <LeftNav />
    </div>
  );

  // return (
  //   <div   ">
  //     <>
  //
  //     </>
  //   </div>
  // );
}

export default BackendHome;
