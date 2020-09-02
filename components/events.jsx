import React from "react";
import PropTypes from "prop-types";

const EventsComponent = ({ events }) => {
  const date = new Date();
  return (
    events && (
     
      <section className="event-area pt-100 pb-100">
      <h2 className="heading">EVENT SCHEDULE</h2>
      <div className="container" style={{maxWidth: '80%'}}>
        {events.map((event) => (
          <div key={event._id} className="row mb-4">
            
              <div className=' col-lg-6'>
              <div class="row">
                <img
                  src={`${process.env.BASE_URL}/${event.file}`}
                  alt={event.title}
                />
                </div>
              </div>

              <div className='col-lg-6' style={{background: '#f8f8f8', paddingTop: '1.5rem'}}>
              <div class="event-title">
                <h2><span>{event.title}</span></h2>
                <h3>Venue: {event.venue}</h3>
                <h3>
                  Date:{" "}
                  {`${new Date(event.date).getDate()}/${new Date(
                    event.date
                  ).getMonth()}/${new Date(event.date).getFullYear()}`}
                </h3>
                <p>{event.description}</p>
                </div>
              </div>
              </div>
        ))}
        </div>
      </section>
      
      
    )
  );
};

EventsComponent.propTypes = {};

export default EventsComponent;
