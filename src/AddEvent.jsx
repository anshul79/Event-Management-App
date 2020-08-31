import React from "react";
import { connect } from 'react-redux';

class AddEvent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      events: this.props.myevents
    }
    this.onSubmitClick = this.onSubmitClick.bind(this);
  }

  onClearClick(e) {
    e.preventDefault();
    // clear the form fields
    document.getElementById('event-name').value = '';
    document.getElementById('event-desc').value = '';
    document.getElementById('event-venue').value = '';
    document.getElementById('event-price').value = '';
    document.getElementById('event-dis').value = '';
  }

  onSubmitClick(e) {
    let events = this.props.myevents;
    let currentEvent = {};
    let isValidEvent = false;

    e.preventDefault();
    currentEvent.name = document.getElementById('event-name').value;
    currentEvent.desc = document.getElementById('event-desc').value;
    currentEvent.venue = document.getElementById('event-venue').value;
    currentEvent.price = document.getElementById('event-price').value;
    currentEvent.discount = document.getElementById('event-dis').value;
    isValidEvent = this.validateFields(currentEvent);
    if (isValidEvent) {
      events.push(currentEvent);
      this.props.changeEvents(events);
      this.setState({
        events: this.props.myevents
      })
    }
  }

  validateFields(event) {
    let isValidEvent = true;

    document.getElementById('name-error').style.display = 'none';
    document.getElementById('desc-error').style.display = 'none';
    document.getElementById('price-error').style.display = 'none';
    document.getElementById('dis-error').style.display = 'none';

    if (event.name.length < 5 || event.name.length > 20) {
      document.getElementById('name-error').style.display = 'block';
      isValidEvent = false;
    }
    if (event.desc.length > 100) {
      document.getElementById('desc-error').style.display = 'block';
      isValidEvent = false;
    }
    if (isNaN(event.price)) {
      document.getElementById('price-error').style.display = 'block';
      isValidEvent = false;
    }
    if (isNaN(event.discount) || parseFloat(event.discount) > parseFloat(event.price)) {
      document.getElementById('dis-error').style.display = 'block';
      isValidEvent = false;
    }
    return isValidEvent;
  }

  render() {
    const events = this.props.myevents;
    return (
      <div className="add-event">
        <form>
          <label htmlFor="name">Enter event name:</label>
          <input id="event-name" placeholder="Event Name" name="Name" type="text" required=""></input>
          <span id="name-error" className="error" style={{ display: "none" }}>Event name should be between 5 to 20 characters</span><br /><br />
          <label htmlFor="desc">Enter event description:</label>
          <textarea id="event-desc" placeholder="Event Description" name="Description" type="text" required=""></textarea>
          <span id="desc-error" className="error" style={{ display: "none" }}>Event desc should be less than 100 characters</span><br /><br />
          <label htmlFor="venue">Enter venue:</label>
          <input id="event-venue" placeholder="Venue" name="Venue" type="text" required=""></input><br /><br />
          <label htmlFor="price">Enter price:</label>
          <input id="event-price" placeholder="Price in $" name="Price" type="text" required=""></input>
          <span id="price-error" className="error" style={{ display: "none" }}>Event price should be valid</span><br /><br />
          <label htmlFor="discount">Enter discount:</label>
          <input id="event-dis" placeholder="Discount in $" name="Discount" type="text" required=""></input>
          <span id="dis-error" className="error" style={{ display: "none" }}>Event discount should be valid</span><br /><br />
          <button id="event-clear" onClick={this.onClearClick}>Clear</button>
          <button id="event-submit" onClick={this.onSubmitClick}>Submit</button>
        </form>
        <br />
        <br />
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

const mapDispatchToProps = (dispatch) => {
  return {
    changeEvents: (events) => {
      dispatch({ type: 'CHANGE_EVENTS', payload: events });
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddEvent);