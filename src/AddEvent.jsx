import React, { useState } from "react";

class AddEvent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      events: []
    };
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
    let events = this.state.events;
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
      this.setState({ events: events });
    }
  }

  validateFields(event) {
    let isValidEvent = true;
    return isValidEvent;
  }

  render() {
    const { events } = this.state;
    return (
      <div className="serach-params">
        <form>
          <label htmlFor="name">Enter event name:</label>
          <input id="event-name" placeholder="Event Name" name="Name" type="text" required=""></input><br /><br />
          <label htmlFor="desc">Enter event description:</label>
          <textarea id="event-desc" placeholder="Event Description" name="Description" type="text" required=""></textarea><br /><br />
          <label htmlFor="venue">Enter venue:</label>
          <input id="event-venue" placeholder="Venue" name="Venue" type="text" required=""></input><br /><br />
          <label htmlFor="price">Enter price:</label>
          <input id="event-price" placeholder="Price in $" name="Price" type="text" required=""></input><br /><br />
          <label htmlFor="discount">Enter discount:</label>
          <input id="event-dis" placeholder="Discount in $" name="Discount" type="text" required=""></input><br /><br />
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

export default AddEvent;
