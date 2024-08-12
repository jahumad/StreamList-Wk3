import React, { useState } from 'react';

const Watch = () => {
  const [event, setEvent] = useState('');
  const [eventList, setEventList] = useState([]);
  const [eventEdit, seteventEdit] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (eventEdit) {
      setEventList(eventList.map((item) => (item.id === eventEdit.id ? { ...item, title: event } : item)));
      seteventEdit(null);
    } else {
      setEventList([...eventList, { id: Date.now(), title: event }]);
    }
    setEvent('');
  };

  const handleEdit = (event) => {
    setEvent(event.title);
    seteventEdit(event);
  };

  const handleDelete = (id) => {
    setEventList(eventList.filter((event) => event.id !== id));
  };

  const handleWatch = (id) => {
  
  };

  return (
    <div>
      <h1>My Watch List</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={event}
          onChange={(e) => setEvent(e.target.value)}
          placeholder="Enter a title"
        />
        <button type="submit">Submit</button>
      </form>
      <div className="event-list">
        {eventList.map((event) => (
          <div key={event.id} className="event-item">
            <span>{event.title}</span>
            <button onClick={() => handleEdit(event)}>Edit</button>
            <button onClick={() => handleDelete(event.id)}>Delete</button>
            <button onClick={() => handleWatch(event.id)}>Watch</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Watch;