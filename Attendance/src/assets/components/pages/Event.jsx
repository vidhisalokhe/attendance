// Event.jsx
import React from "react";
import "./Event.css";

const events = [
  { date: "10-08-2025", name: "Tech Fest 2025", type: "Cultural/Tech", description: "Annual technical & cultural festival", venue: "College Auditorium" },
  { date: "15-08-2025", name: "Independence Day Celebration", type: "Celebration", description: "Flag hoisting & cultural program", venue: "Main Ground" },
  { date: "20-08-2025", name: "Python Workshop", type: "Workshop", description: "Hands-on training on Python programming", venue: "Lab 302" },
  { date: "25-08-2025", name: "Guest Lecture on AI", type: "Seminar", description: "Session on AI and ML trends", venue: "Seminar Hall" },
  { date: "30-08-2025", name: "Sports Day", type: "Sports", description: "Inter‑department sports events", venue: "Sports Ground" },
];

const Event = () => {
  return (
    <div className="events-page">
      <h2>Upcoming College Events</h2>
      <div className="events-container">
        {events.map((event, index) => (
          <div className="event-card" key={index}>
            <div className="event-date">{event.date}</div>
            <h3>{event.name}</h3>
            <p><strong>Type:</strong> {event.type}</p>
            <p>{event.description}</p>
            <p><strong>Venue:</strong> {event.venue}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Event;
