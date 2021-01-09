import React from "react";
import RoomIcon from "@material-ui/icons/Room";

type Props = {
  lat: number;
  lng: number;
};

const LocationPin = ({ lat, lng }: Props) => (
  <RoomIcon fontSize="large" color="primary" className="location-icon" />
);

export default LocationPin;
