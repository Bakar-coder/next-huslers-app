import React from "react";
import { Link } from "../routes";
import EventsComponent from "../components/events";
import { connect } from "react-redux";

function Event(props) {
  const { events } = props;
  return (
    <div style={{ minHeight: "75vh", position: 'reletive' }}>
      <EventsComponent events={events} />
    </div>
  );
}

const mapState = ({ events }) => ({ events: events.events });

export default connect(mapState, null)(Event);
