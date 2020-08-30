import React from "react";
import { connect } from 'react-redux';

class DisplayEvents extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const events = this.props.myevents;
    return (
      <div className="display-events">
        All Events:
        <ul>
          {events.map(event => (
            <li key={event.name}>
              Event Name: {event.name}<br />
              Event Description: {event.desc}<br />
              Venue: {event.venue}<br />
              Price: ${event.price}<br />
              Discount: -${event.discount}<br /><br />
            </li>
          ))}
        </ul>
      </div>
    );
  }
};

const mapStateToProps = (state) => {
  return {
    myevents: state.events
  }
}

export default connect(mapStateToProps)(DisplayEvents);
