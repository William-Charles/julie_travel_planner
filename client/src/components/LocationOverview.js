import React from "react";
import PropTypes from "prop-types";
import LocationSegment from "./LocationSegment";
import TravelSegment from "./TravelSegment";
import GoogleMaps from "./GoogleMaps";
import { Link } from "react-router-dom";
import { Row, Col, Button } from "reactstrap";
import ShareTwitterButton from "./ShareTwitterButton";
import ShareFacebookButton from "./ShareFacebookButton";
import ShareEmailButton from "./ShareEmailButton";

function makeOverview(finalItinerary, transportation) {
  return finalItinerary.map((location, index) => {
    let nextLocation = finalItinerary[index + 1];
    if (index === finalItinerary.length - 1) {
      return (
        <div key={index}>
          <LocationSegment
            arrivalTime={location.arrivalTime}
            departureTime={location.departureTime}
            locationData={{
              name: "Ending Location",
              photo: "/map.png"
            }}
          />
        </div>
      );
    } else if (index === 0) {
      return (
        <div key={index}>
          <LocationSegment
            arrivalTime={location.arrivalTime}
            departureTime={location.departureTime}
            locationData={{
              name: "Starting Location",
              photo: "/map.png"
            }}
          />
          <TravelSegment
            duration={nextLocation.arrivalTime - location.departureTime}
            transportation={transportation}
            currentLocation={location}
            nextLocation={nextLocation}
          />
        </div>
      );
    } else {
      return (
        <div key={index}>
          <LocationSegment
            arrivalTime={location.arrivalTime}
            departureTime={location.departureTime}
            locationData={{
              link: location.link,
              name: location.name,
              photo: location.photo,
              category: location.category
            }}
          />
          <TravelSegment
            duration={nextLocation.arrivalTime - location.departureTime}
            transportation={transportation}
            currentLocation={location}
            nextLocation={nextLocation}
          />
        </div>
      );
    }
  });
}

const LocationOverview = ({ finalItinerary, transportation, shareByEmail }) => {
  return (
    <div
      className="LocationOverview"
      style={{
        marginBottom: 20 /*Should be equal to the height of the footer*/
      }}
    >
      <Row style={{ marginTop: "15px", marginBottom: "15px" }}>
        <Col className="text-center">
          <div>
            <span>
              Route by <h2
                style={{
                  width: "100%",
                  color: "#C17DBF",
                  marginBottom: "15px",
                  textShadow: "-1px 0 grey, 0 1px grey, 1px 0 grey, 0 -1px grey"
                }}
              >
                Julie
              </h2>
            </span>
          </div>
          <Link to="/">
            <Button outline color="info" size="sm">Plan New Route</Button>
          </Link>
          <div style={{ marginTop: "10px" }}>
            <ShareFacebookButton
              finalItinerary={finalItinerary}
              style={{ display: "inline" }}
            />
            <ShareTwitterButton finalItinerary={finalItinerary} />
            <ShareEmailButton
              itinerary={finalItinerary}
              shareByEmail={shareByEmail}
            />
          </div>
        </Col>
      </Row>

      {makeOverview(finalItinerary, transportation)}

      <Row style={{ marginTop: "15px" }}>
        <Col className="text-center">
          <Link to="/">
            <Button outline color="info" size="sm">Plan New Route</Button>
          </Link>
          <div style={{ marginTop: "10px" }}>
            <ShareFacebookButton
              finalItinerary={finalItinerary}
              style={{ display: "inline" }}
            />
            <ShareTwitterButton finalItinerary={finalItinerary} />
            <ShareEmailButton
              itinerary={finalItinerary}
              shareByEmail={shareByEmail}
            />
          </div>
        </Col>
      </Row>

      <Row>
        <Col xs="12">
          <GoogleMaps finalItinerary={finalItinerary} />
        </Col>
        <Col xs="1" style={{ paddingLeft: "0px" }} />
      </Row>
    </div>
  );
};

LocationOverview.propTypes = {
  finalItinerary: PropTypes.array
};

export default LocationOverview;
